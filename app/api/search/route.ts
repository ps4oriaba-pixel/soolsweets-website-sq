import { generateText, Output } from 'ai'
import { z } from 'zod'
import { getAllGalleries } from '@/lib/gallery-data'

export const runtime = 'edge'

// Simple keyword-based fallback for when AI Gateway is unavailable
function localSearch(query: string, galleries: ReturnType<typeof getAllGalleries>) {
  const queryLower = query.toLowerCase()

  // Simple scoring: count keyword matches
  const scored = galleries.map((g) => {
    let score = 0

    // Check title
    if (g.title.toLowerCase().includes(queryLower)) score += 40
    // Check description
    if (g.description.toLowerCase().includes(queryLower)) score += 20

    // Keyword matching for common patterns
    if (queryLower.includes('בנטו')) {
      if (g.slug.includes('bento')) score += 30
    }
    if (queryLower.includes('מספר') || queryLower.includes('מסגרות')) {
      if (g.slug.includes('number')) score += 30
    }
    if (queryLower.includes('וינטאג')) {
      if (g.slug.includes('vintage')) score += 30
    }
    if (queryLower.includes('שוקולד') || queryLower.includes('מוס')) {
      if (g.slug.includes('mousse') || g.slug.includes('chocolate')) score += 25
    }
    if (queryLower.includes('קומות')) {
      if (g.slug.includes('tiered')) score += 30
    }
    if (queryLower.includes('מלבן') || queryLower.includes('ריבוע')) {
      if (g.slug.includes('rectangular')) score += 30
    }
    if (queryLower.includes('נשרף') || queryLower.includes('חום')) {
      if (g.slug.includes('burnt')) score += 25
    }
    if (queryLower.includes('קינוח') || queryLower.includes('עוגיות')) {
      if (g.category === 'desserts') score += 20
    }
    if (queryLower.includes('מארז') || queryLower.includes('קופסה')) {
      if (g.category === 'boxes') score += 25
    }
    if (queryLower.includes('יום הולדת')) score += 15
    if (queryLower.includes('חתונה')) score += 15
    if (queryLower.includes('ספל')) {
      if (g.slug.includes('mug')) score += 30
    }

    return { ...g, score }
  })

  return scored
    .filter((g) => g.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((g) => ({
      slug: g.slug,
      score: g.score,
      reason: `תאימה לבקשה: "${g.title}"`,
    }))
}

export async function POST(req: Request) {
  const { query } = await req.json()

  if (!query || typeof query !== 'string' || query.trim().length < 2) {
    return Response.json({ error: 'שאלה קצרה מדי' }, { status: 400 })
  }

  const allGalleries = getAllGalleries()

  // Build a compact catalog for the AI prompt
  const catalog = allGalleries
    .map(
      (g) =>
        `slug: "${g.slug}" | כותרת: "${g.title}" | תיאור: "${g.description}"`
    )
    .join('\n')

  try {
    // Try AI-powered search first
    const { output } = await generateText({
      model: 'anthropic/claude-3.5-haiku',
      output: Output.object({
        schema: z.object({
          results: z
            .array(
              z.object({
                slug: z.string().describe('slug of the matching product'),
                reason: z.string().describe('very short explanation in Hebrew why it matches'),
                score: z.number().min(0).max(100).describe('match score 0-100'),
              })
            )
            .max(6)
            .describe('best matching products, sorted by relevance descending'),
          tip: z
            .string()
            .optional()
            .describe(
              'optional short tip in Hebrew suggesting to contact Slalit for custom requests'
            ),
        }),
      }),
      system: `אתה עוזר מקצועי לאתר קונדיטוריה ביתית בוטיק בשם SoolSweets של סלעית.
המוצרים שיש באתר:
${catalog}

תפקידך: לקבל בקשה מלקוח ולהחזיר את המוצרים הכי מתאימים מתוך הרשימה הזו בלבד.
כללים:
- החזר לכל היותר 6 תוצאות
- מיין מהכי מתאים לפחות מתאים
- אם הבקשה כוללת מספר אנשים – התאם בהתאם: בנטו/ספל לאירוע קטן (1-4), עוגה רגילה לבינוני (5-20), קומות/מארז גדול לגדול (20+)
- אם הבקשה כוללת סגנון (וינטאג', שוקולד, פשוט, מפתיע) – התאם
- אם הבקשה כוללת אירוע (חתונה, יום הולדת, גילוי מין, חג) – התאם
- החזר רק slugs מהרשימה הנתונה, בדיוק כפי שהם
- ה-reason צריך להיות קצר (1-2 משפטים בעברית)`,
      prompt: `בקשת הלקוח: "${query.trim()}"`,
    })

    return Response.json(output)
  } catch (error: any) {
    // Fallback: use simple keyword-based local search
    console.log('[v0] AI search failed, using local fallback:', error?.message)
    const localResults = localSearch(query.trim(), allGalleries)

    return Response.json({
      results: localResults,
      tip: localResults.length === 0 ? 'לא מצאנו תוצאות מדויקות. אנא צרו קשר ישירות בוואטסאפ לבקשה ייחודית.' : undefined,
    })
  }
}
