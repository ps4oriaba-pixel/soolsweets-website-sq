import { getAllGalleries, type GalleryImage } from '@/lib/gallery-data'
import { IMAGE_TAGS } from '@/lib/image-tags'

export interface SearchResult {
  slug: string
  title: string
  description: string
  category: string
  image: string
  matchedImages: GalleryImage[]
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
  'holiday-boxes': {
    category: 'מארזים מעוצבים',
    keywords: ['מארז', 'מארזים', 'חג', 'חגים', 'ראש השנה', 'פורים', 'פסח', 'חנוכה', 'שבועות', 'מתנה'],
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
    keywords: ['עוגה', 'עוגות', 'וינטאג', 'וינטאג', 'פרחים', 'רומנטי', 'עדין', 'נשי', 'חתונה', 'יום הולדת', 'אירוע', 'אינטימי', 'ריפלס'],
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
    keywords: ['קינוח אישי', 'קינוחים אישיים', 'קינוח', 'קינוחים', 'קראמבל', 'קוקיז', 'קאפקייק', 'דונאטס', 'קרם ברולה', 'מגנום', 'קייקפופ', 'פריך', 'פריכות', 'קרם', 'ממרח', 'מרקם', 'פינוק', 'פינוקים'],
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

const STOP_WORDS = new Set(['ל', 'עם', 'של', 'בשביל', 'אני', 'רוצה'])
const HEBREW_PREFIXES = ['ה', 'ל', 'ב', 'ו', 'מ', 'כ', 'ש']

function tokenize(text: string): string[] {
  return normalize(text)
    .split(' ')
    .filter((word) => word.length > 0 && !STOP_WORDS.has(word))
}

function queryForms(word: string): string[] {
  const forms = new Set([word])
  if (word.endsWith('ת') && word.length > 2) forms.add(`${word.slice(0, -1)}ה`)
  const pending = [...forms]

  while (pending.length > 0) {
    const current = pending.pop()!
    for (const prefix of HEBREW_PREFIXES) {
      if (current.startsWith(prefix) && current.length > prefix.length + 1) {
        const withoutPrefix = current.slice(prefix.length)
        if (!forms.has(withoutPrefix)) {
          forms.add(withoutPrefix)
          pending.push(withoutPrefix)
        }
      }
    }
  }

  return [...forms]
}

function scoreWords(queryWords: string[], text: string, exactScore: number, partialScore: number): number {
  const textWords = tokenize(text)
  return queryWords.reduce((total, queryWord) => {
    const forms = queryForms(queryWord)
    let bestMatch = 0

    for (const form of forms) {
      for (const textWord of textWords) {
        if (form === textWord) {
          bestMatch = Math.max(bestMatch, exactScore)
        } else if (
          !/^\d+$/.test(form) &&
          !/^\d+$/.test(textWord) &&
          Math.min(form.length, textWord.length) >= 3 &&
          (form.startsWith(textWord) || textWord.startsWith(form))
        ) {
          bestMatch = Math.max(bestMatch, partialScore)
        }
      }
    }

    return total + bestMatch
  }, 0)
}

function rankImages(images: GalleryImage[], queryWords: string[]): { image: GalleryImage; score: number }[] {
  return images
    .map((image, index) => {
      const tags = IMAGE_TAGS[image.src]
      const tagScore = tags ? scoreWords(queryWords, tags.join(' '), 8, 3) : 0
      const altScore = scoreWords(queryWords, image.alt, 4, 1.5)
      return { image, score: tagScore + altScore, index }
    })
    .sort((a, b) => b.score - a.score || a.index - b.index)
}

// Deterministic image-aware search — always works without an external dependency.
export function keywordSearch(query: string, limit = 6): SearchResult[] {
  const galleries = getAllGalleries()
  const normalizedQuery = normalize(query)
  const queryWords = tokenize(query)

  const scored = galleries.map((gallery) => {
    const meta = SEARCH_META[gallery.slug]
    const category = meta?.category ?? ''
    const keywords = meta?.keywords ?? []
    const rankedImages = rankImages(gallery.images, queryWords)

    let score = 0

    if (normalizedQuery && normalize(gallery.title).includes(normalizedQuery)) score += 12
    if (normalizedQuery && keywords.some((keyword) => normalize(keyword).includes(normalizedQuery))) score += 8

    score += scoreWords(queryWords, gallery.title, 5, 2.5)
    score += scoreWords(queryWords, category, 4, 2)
    score += scoreWords(queryWords, keywords.join(' '), 6, 2.5)
    score += scoreWords(queryWords, gallery.subtitle, 2, 1)
    score += scoreWords(queryWords, gallery.description, 1, 0.5)

    const bestImageScores = rankedImages.slice(0, 3).map(({ score: imageScore }) => imageScore)
    score += (bestImageScores[0] ?? 0) + (bestImageScores[1] ?? 0) * 0.4 + (bestImageScores[2] ?? 0) * 0.2

    return {
      slug: gallery.slug,
      title: gallery.title,
      description: gallery.description,
      category,
      image: gallery.heroImage,
      matchedImages: rankedImages.slice(0, 3).map(({ image }) => image),
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

export function resultsForSlugs(slugs: string[], limit = 6, query = ''): SearchResult[] {
  const galleries = getAllGalleries()
  const queryWords = tokenize(query)
  const results: SearchResult[] = []

  for (const slug of slugs) {
    const gallery = galleries.find((item) => item.slug === slug)
    if (gallery) {
      const matchedImages = rankImages(gallery.images, queryWords)
        .slice(0, 3)
        .map(({ image }) => image)
      results.push({
        slug: gallery.slug,
        title: gallery.title,
        description: gallery.description,
        category: getCategory(gallery.slug),
        image: gallery.heroImage,
        matchedImages,
      })
    }
    if (results.length >= limit) break
  }
  return results
}
