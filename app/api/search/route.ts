import { generateObject } from 'ai'
import { z } from 'zod'
import { buildCatalog, resultsForSlugs, keywordSearch } from '@/lib/search'

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

    // 1) Try smart AI ranking over the catalog.
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
      const results = resultsForSlugs(slugs)

      if (results.length > 0) {
        return Response.json({ results, total: results.length, mode: 'ai' })
      }
      // AI returned nothing useful — fall through to keyword search.
    } catch (aiError) {
      console.log('[v0] AI search unavailable, falling back to keyword search:', aiError)
    }

    // 2) Deterministic keyword fallback.
    const results = keywordSearch(query)
    return Response.json({ results, total: results.length, mode: 'keyword' })
  } catch (error) {
    console.log('[v0] Search error:', error)
    return Response.json({ error: 'Search failed' }, { status: 500 })
  }
}
