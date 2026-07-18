import { getAllGalleries } from '@/lib/gallery-data'

export interface SearchResult {
  slug: string
  title: string
  description: string
  category: string
  image: string
}

// Per-item category + Hebrew keyword synonyms used for matching.
// This lets the keyword search understand natural phrasing even without AI.
interface SearchMeta {
  category: string
  keywords: string[]
}

const SEARCH_META: Record<string, SearchMeta> = {
  // ── מארזים ──
  'boxes-events': {
    category: 'מארזים מעוצבים',
    keywords: ['מארז', 'מארזים', 'אירוע', 'אירועים', 'יום הולדת', 'הולדת', 'חתונה', 'אירוסין', 'הצעת נישואין', 'ברית', 'בריתה', 'לידה', 'גיוס', 'בר מצווה', 'בת מצווה', 'מתנה', 'חגיגה'],
  },
  'gender-reveal': {
    category: 'מארזים מעוצבים',
    keywords: ['מארז', 'מארזים', 'חג', 'חגים', 'ראש השנה', 'פורים', 'פסח', 'חנוכה', 'שבועות', 'ולנטיין', 'יום המשפחה', 'גילוי מין', 'מתנה'],
  },
  'sweet-sixteen': {
    category: 'מארזים מעוצבים',
    keywords: ['מארז', 'מארזים', 'עסק', 'עסקים', 'חברה', 'לקוחות', 'עובדים', 'השקה', 'כנס', 'מיתוג', 'מתנה עסקית', 'מתנה', 'sweet 16'],
  },
  'bar-bat-mitzvah': {
    category: 'מארזים מעוצבים',
    keywords: ['מארז בהתאמה אישית', 'מארז', 'מארזים', 'התאמה אישית', 'אישי', 'מותאם', 'בחירה', 'צבעים', 'כיתוב', 'מתנה'],
  },
  // ── עוגות ──
  'crown-cakes': {
    category: 'עוגות',
    keywords: ['עוגות כתר', 'כתר', 'מלכותי', 'נוצץ', 'נצנצים', 'זוהר', 'פפיונים', 'חגיגי', 'עוגה', 'עוגות', 'מיוחד'],
  },
  'vintage-cakes': {
    category: 'עוגות',
    keywords: ['עוגה', 'עוגות', 'וינטאג', 'וינטג', 'פרחים', 'רומנטי', 'עדין', 'נשי', 'חתונה', 'יום הולדת', 'אירוע', 'אינטימי', 'ריפלס'],
  },
  'mousse-cakes': {
    category: 'עוגות',
    keywords: ['עוגה', 'עוגות', 'מוס', 'קרמי', 'שכבות', 'מינימליסטי', 'ציפוי', 'אלגנטי'],
  },
  'bento-cakes': {
    category: 'עוגות',
    keywords: ['עוגה', 'עוגות', 'בנטו', 'אישית', 'קטנה', 'חמודה', 'מתנה', 'חגיגה אישית'],
  },
  'rectangular-cakes': {
    category: 'עוגות',
    keywords: ['עוגה', 'עוגות', 'מלבנית', 'מלבן', 'מודרני', 'שוקולד', 'וניל', 'גנאש', 'דף סוכר', 'קצפת', 'אלגנטי'],
  },
  'bow-tie-cakes': {
    category: 'עוגות',
    keywords: ['עוגה', 'עוגות', 'פפיון', 'שוקולד', 'וניל', 'גנאש', 'קינדר', 'קרם חמאה', 'שוויצרי'],
  },
  'custom-cakes': {
    category: 'עוגות',
    keywords: ['עוגה', 'עוגות', 'עיצוב אישי', 'אישי', 'מותאם', 'רעיון', 'תמונה', 'מיוחד', 'התאמה אישית'],
  },
  'number-cakes': {
    category: 'עוגות',
    keywords: ['עוגה', 'עוגות', 'מספר', 'מספרים', 'יום הולדת', 'הולדת', 'שוקולד', 'מסקרפונה', 'דף סוכר'],
  },
  'mug-cakes': {
    category: 'עוגות',
    keywords: ['ספל שכולו אושר', 'ספל', 'אושר', 'עוגה', 'עוגות', 'מהיר', 'קטנה', 'מתנה', 'מהירה', 'עוגת ספל'],
  },
  'burnt-paper-cakes': {
    category: 'עוגות',
    keywords: ['עוגה', 'עוגות', 'דף נשרף', 'נשרף', 'אפקט', 'הפתעה', 'וואו', 'wow', 'דרמטי', 'תמונה'],
  },
  // ── קינוחים אישיים ──
  'cup-desserts': {
    category: 'קינוחים אישיים',
    keywords: ['קינוח אישי', 'קינוחים אישיים', 'קינוח', 'קינוחים', 'כוסות', 'כוס', 'שכבות', 'קרם', 'ביסקוויט', 'אירוע', 'מתנה', 'אישי', 'פינוק', 'פינוקים'],
  },
  'crumble-desserts': {
    category: 'קינוחים אישיים',
    keywords: ['קינוח אישי', 'קינוחים אישיים', 'קינוח', 'קינוחים', 'קרמבל', 'קוקיז', 'קאפקייק', 'דונאטס', 'קרם ברולה', 'מגנום', 'קייקפופ', 'פריך', 'פריכות', 'קרם', 'ממרח', 'מרקם', 'פינוק', 'פינוקים'],
  },
  'dedicated-dessert-boxes': {
    category: 'קינוחים אישיים',
    keywords: ['מארז קינוח ייעודי', 'מארזי קינוח', 'קרם ברולה', 'דונאטס', 'קאפקייקס', 'קייק פופ', 'מגנומים', 'קינוח', 'קינוחים', 'מארז', 'ייעודי', 'פינוק', 'פינוקים'],
  },
  // ── קולקציית ה-WOW ──
  'chocolate-ball': {
    category: 'קולקציית ה-WOW',
    keywords: ['קולקציית ה-WOW', 'WOW', 'שוקולד', 'כדורגל', 'כדור', 'הפתעה', 'ממתקים', 'מתנפץ', 'מתפוצץ', 'מיוחד'],
  },
  'exploding-candy': {
    category: 'קולקציית ה-WOW',
    keywords: ['קולקציית ה-WOW', 'WOW', 'שוקולד', 'סוכריה', 'ענקית', 'הפתעה', 'מתנפצת', 'ממתקים', 'מיוחד'],
  },
  'exploding-egg': {
    category: 'קולקציית ה-WOW',
    keywords: ['קולקציית ה-WOW', 'WOW', 'שוקולד', 'ביצה', 'ביצת שוקולד', 'הפתעה', 'מתנפצת', 'מיוחד'],
  },
  'tiered-cakes': {
    category: 'עיצובים מיוחדים',
    keywords: ['עוגה', 'עוגות', 'קומות', 'עוגת קומות', 'חתונה', 'אירוע גדול', 'וואו', 'wow', 'מרשים'],
  },
}

export function getCategory(slug: string): string {
  return SEARCH_META[slug]?.category ?? ''
}

// Normalize Hebrew/text for looser matching (strip punctuation & final-letter variants).
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/["'`׳״.,!?()\-]/g, ' ')
    .replace(/ך/g, 'כ')
    .replace(/ם/g, 'מ')
    .replace(/ן/g, 'נ')
    .replace(/ף/g, 'פ')
    .replace(/ץ/g, 'צ')
    .replace(/\s+/g, ' ')
    .trim()
}

// Deterministic keyword search — always works, no external dependency.
export function keywordSearch(query: string, limit = 6): SearchResult[] {
  const galleries = getAllGalleries()
  const nQuery = normalize(query)
  const queryWords = nQuery.split(' ').filter((w) => w.length >= 2)

  const scored = galleries.map((gallery) => {
    const meta = SEARCH_META[gallery.slug]
    const category = meta?.category ?? ''
    const keywords = meta?.keywords ?? []

    const nTitle = normalize(gallery.title)
    const nSubtitle = normalize(gallery.subtitle)
    const nDesc = normalize(gallery.description)
    const nCategory = normalize(category)
    const nKeywords = keywords.map(normalize)

    let score = 0

    // Whole-phrase hits weigh the most.
    if (nQuery && nTitle.includes(nQuery)) score += 12
    if (nQuery && nKeywords.some((k) => k.includes(nQuery) || nQuery.includes(k))) score += 8

    queryWords.forEach((word) => {
      if (nTitle.includes(word)) score += 5
      if (nCategory.includes(word)) score += 4
      if (nKeywords.some((k) => k.includes(word) || word.includes(k))) score += 4
      if (nSubtitle.includes(word)) score += 2
      if (nDesc.includes(word)) score += 1
    })

    return {
      slug: gallery.slug,
      title: gallery.title,
      description: gallery.description,
      category,
      image: gallery.heroImage,
      score,
    }
  })

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ score, ...rest }) => rest)
}

// Build a compact catalog string for the AI model to reason over.
export function buildCatalog(): { slug: string; title: string; category: string; description: string }[] {
  return getAllGalleries().map((g) => ({
    slug: g.slug,
    title: g.title,
    category: getCategory(g.slug),
    description: g.description,
  }))
}

export function resultsForSlugs(slugs: string[], limit = 6): SearchResult[] {
  const galleries = getAllGalleries()
  const results: SearchResult[] = []
  for (const slug of slugs) {
    const g = galleries.find((x) => x.slug === slug)
    if (g) {
      results.push({
        slug: g.slug,
        title: g.title,
        description: g.description,
        category: getCategory(g.slug),
        image: g.heroImage,
      })
    }
    if (results.length >= limit) break
  }
  return results
}
