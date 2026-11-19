import { keywordSearchWithRelated } from '@/lib/search'

export const maxDuration = 10

// חיפוש מקומי בלבד – אין כאן קריאה למודל AI או לשירות בתשלום,
// ולכן אי אפשר לגרום לחיוב דרך הנתיב הזה.
const MAX_QUERY_LENGTH = 100
const MAX_BODY_BYTES = 2_000

export async function POST(req: Request) {
  try {
    const text = await req.text()
    if (text.length > MAX_BODY_BYTES) {
      return Response.json({ error: 'Invalid query' }, { status: 413 })
    }

    let body: unknown
    try {
      body = JSON.parse(text)
    } catch {
      return Response.json({ error: 'Invalid query' }, { status: 400 })
    }

    const raw = (body as { query?: unknown } | null)?.query
    if (typeof raw !== 'string' || raw.trim().length === 0) {
      return Response.json({ error: 'Invalid query' }, { status: 400 })
    }

    const query = raw.trim().slice(0, MAX_QUERY_LENGTH)
    const search = keywordSearchWithRelated(query)

    return Response.json({
      results: search.results,
      relatedResults: search.relatedResults,
      total: search.results.length,
      mode: 'local',
    })
  } catch {
    return Response.json({ error: 'Search failed' }, { status: 500 })
  }
}
