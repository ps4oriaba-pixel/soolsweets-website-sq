import { generateObject } from 'ai'
import { z } from 'zod'
import { buildCatalog, resultsForSlugs, keywordSearchWithRelated } from '@/lib/search'

export const maxDuration = 20

const schema = z.object({
  slugs: z
    .array(z.string())
    .describe('Slugs of the most relevant products, ordered from most to least relevant.'),
})

export async function POST(req: Request) {
  try {
    const { query } = await req.json()

    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return Response.json({ error: 'Invalid query' }, { status: 400 })
    }

    const localSearch = keywordSearchWithRelated(query)
    if (localSearch.results.length > 0 || localSearch.relatedResults.length > 0) {
      return Response.json({
        results: localSearch.results,
        relatedResults: localSearch.relatedResults,
        total: localSearch.results.length,
        mode: 'local',
      })
    }

    // Use AI only when the local image-aware search has no matches.
    try {
      const catalog = buildCatalog()

      const { object } = await generateObject({
        model: 'openai/gpt-4o-mini',
        schema,
        system:
          'את/ה עוזר/ת חיפוש חכם/ה לאתר קונדיטוריה ביתית בעברית. ' +
          'בהינתן בקשה חופשית של לקוח (לדוגמה סוג אירוע, כמות אנשים, סגנון, טעם), ' +
          'החזר/י את ה-slugs של המוצרים הרלוונטיים ביותר מתוך הקטלוג בלבד, ' +
          'מסודרים מהרלוונטי ביותר לפחות. החזר/י בין 1 ל-6 תוצאות. ' +
          'אל תמציא/י slugs שלא קיימים בקטלוג. אם אין התאמה טובה, החזר/י מערך ריק.',
        prompt:
          `בקשת הלקוח: "${query}"\n\n` +
          `קטלוג המוצרים (JSON):\n${JSON.stringify(catalog)}`,
      })

      const validSlugs = new Set(catalog.map((c) => c.slug))
      const slugs = (object.slugs ?? []).filter((s) => validSlugs.has(s))
      const results = resultsForSlugs(slugs, 6, query)

      if (results.length > 0) {
        return Response.json({ results: [], relatedResults: results, total: 0, mode: 'ai' })
      }
    } catch {
      return Response.json({ results: [], relatedResults: [], total: 0, mode: 'local' })
    }

    return Response.json({ results: [], relatedResults: [], total: 0, mode: 'local' })
  } catch (error) {
    console.log('[v0] Search error:', error)
    return Response.json({ error: 'Search failed' }, { status: 500 })
  }
}
