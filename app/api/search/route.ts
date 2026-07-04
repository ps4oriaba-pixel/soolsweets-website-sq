import { getAllGalleries } from '@/lib/gallery-data'

export async function POST(req: Request) {
  try {
    const { query } = await req.json()

    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return Response.json({ error: 'Invalid query' }, { status: 400 })
    }

    const allGalleries = getAllGalleries()

    // Simple keyword-based search: find products that match the query
    const queryWords = query.toLowerCase().split(/\s+/).filter(Boolean)

    const results = allGalleries
      .map((gallery) => {
        const titleLower = gallery.title.toLowerCase()
        const descLower = gallery.description.toLowerCase()
        const categoryLower = gallery.category.toLowerCase()

        // Count keyword matches - title matches score higher
        let score = 0
        queryWords.forEach((word) => {
          if (titleLower.includes(word)) score += 3
          if (descLower.includes(word)) score += 1
          if (categoryLower.includes(word)) score += 2
        })

        return {
          slug: gallery.slug,
          title: gallery.title,
          description: gallery.description,
          category: gallery.category,
          image: gallery.heroImage,
          score,
        }
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6) // Return top 6 results

    if (results.length === 0) {
      return Response.json(
        { error: 'No products found matching your search' },
        { status: 404 }
      )
    }

    return Response.json({
      results: results.map(({ score, ...rest }) => rest),
      total: results.length,
    })
  } catch (error) {
    console.error('[v0] Search error:', error)
    return Response.json(
      { error: 'Search failed' },
      { status: 500 }
    )
  }
}
