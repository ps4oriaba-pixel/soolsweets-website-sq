import { generateText, Output } from 'ai'
import { z } from 'zod'
import { getAllGalleries } from '@/lib/gallery-data'

export const runtime = 'edge'

export async function POST(req: Request) {
  const { query } = await req.json()

  if (!query || typeof query !== 'string' || query.trim().length < 2) {
    return Response.json({ error: 'שאלה קצרה מדי' }, { status: 400 })
  }

  const allGalleries = getAllGalleries()

  // Build a compact catalog for the prompt
  const catalog = allGalleries
    .map(
      (g) =>
        `slug: "${g.slug}" | כותרת: "${g.title}" | תיאור: "${g.description}"`
    )
    .join('\n')

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
}
