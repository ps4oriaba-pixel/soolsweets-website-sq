import { getAllGalleries, type GalleryImage } from '@/lib/gallery-data'
import { IMAGE_TAGS } from '@/lib/image-tags'
import { ITEM_SIZES } from '@/lib/item-sizes'

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
    keywords: ['מארז בהתאמה אישית', 'מארז', 'מארזים', 'התאמה אישית', 'אישי', 'מותאם', 'אירוע', 'אירועים', 'יום הולדת', 'הולדת', 'חתונה', 'אירוסין', 'הצעת נישואין', 'ברית', 'בריתה', 'לידה', 'גיוס', 'בר מצווה', 'בת מצווה', 'מתנה', 'חגיגה'],
  },
  'holiday-boxes': {
    category: 'מארזים מעוצבים',
    keywords: ['מארז', 'מארזים', 'חג', 'חגים', 'ראש השנה', 'פורים', 'פסח', 'חנוכה', 'שבועות', 'מתנה'],
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

interface ServingRequest {
  min: number
  max: number
}

const SERVING_UNITS = new Set(['איש', 'אנשים', 'אורחים', 'מוזמנים', 'סועדים'].map(normalize))

function extractServingRequest(query: string): ServingRequest | null {
  const numberRanges = [...query.matchAll(/\d{1,3}(?:\s*[-–—]\s*\d{1,3})?/g)]

  for (const match of numberRanges) {
    const index = match.index ?? 0
    const before = query.slice(0, index)
    const after = query.slice(index + match[0].length)
    const hasForPrefix = /ל\s*[-–—]?\s*$/.test(before)
    const hasServingUnit = /^\s*(?:איש|אנשים|אורחים|מוזמנים|סועדים)/.test(after)
    const isOnlyNumber = query.trim() === match[0]

    if (!hasForPrefix && !hasServingUnit && !isOnlyNumber) continue

    const [first, second] = match[0].match(/\d+/g)?.map(Number) ?? []
    if (!Number.isFinite(first)) continue

    return {
      min: Math.min(first, second ?? first),
      max: Math.max(first, second ?? first),
    }
  }

  return null
}

function getQueryWords(query: string): string[] {
  const words = tokenize(query)
  if (!extractServingRequest(query)) return words

  return words.filter((word) => !/^\d+$/.test(word) && !SERVING_UNITS.has(word))
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

type WordWeights = Map<string, number>

function scoreWords(
  queryWords: string[],
  text: string,
  exactScore: number,
  partialScore: number,
  weights?: WordWeights,
): number {
  const textWords = tokenize(text)
  return queryWords.reduce((total, queryWord) => {
    const forms = queryForms(queryWord)
    let bestMatch = 0

    for (const form of forms) {
      for (const textWord of textWords) {
        if (form === textWord) {
          const numericExactScore = /^\d+$/.test(form) ? exactScore * 20 : exactScore
          bestMatch = Math.max(bestMatch, numericExactScore)
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

    return total + bestMatch * (weights?.get(queryWord) ?? 1)
  }, 0)
}

function rankImages(
  images: GalleryImage[],
  queryWords: string[],
  weights?: WordWeights,
): { image: GalleryImage; score: number }[] {
  return images
    .map((image, index) => {
      const tags = IMAGE_TAGS[image.src]
      const tagScore = tags ? scoreWords(queryWords, tags.join(' '), 8, 3, weights) : 0
      const altScore = scoreWords(queryWords, image.alt, 4, 1.5, weights)
      return { image, score: tagScore + altScore, index }
    })
    .sort((a, b) => b.score - a.score || a.index - b.index)
}

export interface KeywordSearchResults {
  results: SearchResult[]
  relatedResults: SearchResult[]
}

const MIN_RELEVANCE_RATIO = 0.65
const MAX_RELATED_RESULTS = 2

// Deterministic image-aware search — always works without an external dependency.
export function keywordSearchWithRelated(query: string, limit = 6): KeywordSearchResults {
  const galleries = getAllGalleries()
  const servingRequest = extractServingRequest(query)
  const normalizedQuery = servingRequest
    ? normalize(query)
        .split(' ')
        .filter((word) => !/^\d+$/.test(word) && !SERVING_UNITS.has(word) && !STOP_WORDS.has(word))
        .join(' ')
    : normalize(query)
  const queryWords = getQueryWords(query)
  const isHeartQuery = normalizedQuery.includes(normalize('לב'))
  const sizeOptionsBySlug = new Map(
    galleries.map((gallery) => [
      gallery.slug,
      (ITEM_SIZES[gallery.slug] ?? []).filter((option) => option.variant !== 'heart' || isHeartQuery),
    ]),
  )
  const servingDistance = (slug: string) => {
    if (!servingRequest) return Number.POSITIVE_INFINITY
    const options = sizeOptionsBySlug.get(slug) ?? []
    return options.reduce((closest, option) => {
      const distance = servingRequest.max < option.minGuests
        ? option.minGuests - servingRequest.max
        : servingRequest.min > option.maxGuests
          ? servingRequest.min - option.maxGuests
          : 0
      return Math.min(closest, distance)
    }, Number.POSITIVE_INFINITY)
  }
  const sizeDistances = galleries.map(({ slug }) => servingDistance(slug))
  const closestServingDistance = Math.min(...sizeDistances)
  const hasExactServingMatch = servingRequest !== null && closestServingDistance === 0

  // Words that appear in many items (e.g. "עוגה", "מארז") say little about what the person
  // wants, so when the query also contains a specific word they count for much less.
  const itemTexts = galleries.map((gallery) => {
    const meta = SEARCH_META[gallery.slug]
    return [gallery.title, meta?.category ?? '', (meta?.keywords ?? []).join(' '), gallery.subtitle].join(' ')
  })
  const wordHits = new Map(
    queryWords.map((word) => [word, itemTexts.filter((text) => scoreWords([word], text, 1, 1) > 0).length]),
  )
  const isGeneric = (word: string) => (wordHits.get(word) ?? 0) >= galleries.length * 0.4
  const hasSpecificWord = queryWords.some((word) => !isGeneric(word))
  const weights: WordWeights = new Map(
    hasSpecificWord ? queryWords.filter(isGeneric).map((word) => [word, 0.4] as [string, number]) : [],
  )

  const scored = galleries.map((gallery) => {
    const meta = SEARCH_META[gallery.slug]
    const category = meta?.category ?? ''
    const keywords = meta?.keywords ?? []
    const rankedImages = rankImages(gallery.images, queryWords, weights)
    const imageBacked = (rankedImages[0]?.score ?? 0) > 0

    let textScore = 0

    if (normalizedQuery && normalize(gallery.title).includes(normalizedQuery)) textScore += 12
    if (normalizedQuery && keywords.some((keyword) => normalize(keyword).includes(normalizedQuery))) textScore += 8

    textScore += scoreWords(queryWords, gallery.title, 5, 2.5, weights)
    textScore += scoreWords(queryWords, category, 4, 2, weights)
    textScore += scoreWords(queryWords, keywords.join(' '), 6, 2.5, weights)
    textScore += scoreWords(queryWords, gallery.subtitle, 2, 1, weights)
    textScore += scoreWords(queryWords, gallery.description, 1, 0.5, weights)

    const bestImageScores = rankedImages.slice(0, 3).map(({ score: imageScore }) => imageScore)
    textScore += (bestImageScores[0] ?? 0) + (bestImageScores[1] ?? 0) * 0.4 + (bestImageScores[2] ?? 0) * 0.2

    const options = sizeOptionsBySlug.get(gallery.slug) ?? []
    const servingMatch = servingRequest !== null && options.some(
      (option) => servingRequest.min <= option.maxGuests && servingRequest.max >= option.minGuests,
    )
    const nearestServingMatch =
      !hasExactServingMatch &&
      Number.isFinite(closestServingDistance) &&
      servingDistance(gallery.slug) === closestServingDistance
    const quantityScore = servingMatch ? 100 : nearestServingMatch ? 0.5 : 0

    return {
      slug: gallery.slug,
      title: gallery.title,
      description: gallery.description,
      category,
      image: gallery.heroImage,
      matchedImages: rankedImages.slice(0, 3).map(({ image }) => image),
      score: textScore + quantityScore,
      textScore,
      imageBacked,
      servingMatch,
      nearestServingMatch,
      hasSizeData: options.length > 0,
    }
  })

  // A photo that actually matches beats an item that only matches through its keyword list:
  // the card for the latter would show a cover photo unrelated to the search.
  if (!servingRequest && scored.some((item) => item.imageBacked)) {
    for (const item of scored) {
      if (!item.imageBacked) {
        item.textScore *= 0.4
        item.score *= 0.4
      }
    }
  }

  const ranked = scored
    .filter((item) => item.score > 0)
    .filter((item) => !servingRequest || queryWords.length === 0 || item.textScore > 0)
    .sort((a, b) => b.score - a.score)
  const highestScore = ranked[0]?.score ?? 0
  const highestTextScore = Math.max(0, ...ranked.map((item) => item.textScore))
  const relevanceThreshold = (servingRequest ? highestTextScore : highestScore) * MIN_RELEVANCE_RATIO
  const relevant = ranked.filter((item) => {
    if (!servingRequest) return item.score >= relevanceThreshold
    if (item.hasSizeData && !item.servingMatch) return false
    const strongTextMatch = item.textScore > 0 && item.textScore >= relevanceThreshold
    const strongServingMatch = item.servingMatch && (queryWords.length === 0 || item.textScore > 0)
    return strongTextMatch || strongServingMatch
  })
  const toSearchResult = (item: typeof ranked[number]): SearchResult => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    category: item.category,
    image: item.image,
    matchedImages: item.matchedImages,
  })
  const results = relevant.slice(0, limit).map(toSearchResult)
  const nearestResults = servingRequest && !hasExactServingMatch
    ? ranked.filter((item) => item.nearestServingMatch).slice(0, MAX_RELATED_RESULTS)
    : []
  const otherRelatedResults = !servingRequest && relevant.length < 2
    ? ranked.filter((item) => !relevant.includes(item))
    : []
  const relatedResults = [...nearestResults, ...otherRelatedResults]
    .slice(0, MAX_RELATED_RESULTS)
    .map(toSearchResult)

  return { results, relatedResults }
}

export interface ImageSearchHit {
  src: string
  alt: string
  slug: string
  title: string
}

const MAX_IMAGE_HITS = 60
const IMAGE_RELEVANCE_RATIO = 0.55

// Image-level search: every photo whose tags / alt text match the query, across all items.
// Serving-size requests ("עוגה ל-15 איש") still pick items first, then show their photos.
export function searchImages(query: string): ImageSearchHit[] {
  const galleries = getAllGalleries()
  const shortTitle = (title: string) => title.split(' - ')[0]
  const servingRequest = extractServingRequest(query)
  if (servingRequest) {
    return keywordSearchWithRelated(query).results.flatMap((result) =>
      result.matchedImages.map((image) => ({
        src: image.src,
        alt: image.alt,
        slug: result.slug,
        title: shortTitle(result.title),
      })),
    )
  }

  const queryWords = getQueryWords(query)
  if (queryWords.length === 0) return []
  const itemTexts = galleries.map((gallery) => {
    const meta = SEARCH_META[gallery.slug]
    return [gallery.title, meta?.category ?? '', (meta?.keywords ?? []).join(' '), gallery.subtitle].join(' ')
  })
  const wordHits = new Map(
    queryWords.map((word) => [word, itemTexts.filter((text) => scoreWords([word], text, 1, 1) > 0).length]),
  )
  const allImages = galleries.flatMap((gallery) => gallery.images)
  const imageText = (image: GalleryImage) => (IMAGE_TAGS[image.src] ?? []).join(' ') + ' ' + image.alt
  const imageWordHits = new Map(
    queryWords.map((word) => [word, allImages.filter((image) => scoreWords([word], imageText(image), 1, 1) > 0).length]),
  )
  const isGeneric = (word: string) =>
    (wordHits.get(word) ?? 0) >= galleries.length * 0.4 || (imageWordHits.get(word) ?? 0) >= allImages.length * 0.1
  const hasSpecificWord = queryWords.some((word) => !isGeneric(word))
  const weights: WordWeights = new Map(
    hasSpecificWord ? queryWords.filter(isGeneric).map((word) => [word, 0.4] as [string, number]) : [],
  )

  const hits: { hit: ImageSearchHit; score: number; order: number }[] = []
  galleries.forEach((gallery, galleryIndex) => {
    const itemBonus = scoreWords(queryWords, itemTexts[galleryIndex], 1, 0.5, weights) * 0.1
    gallery.images.forEach((image, index) => {
      const tags = IMAGE_TAGS[image.src]
      const tagScore = tags ? scoreWords(queryWords, tags.join(' '), 8, 3, weights) : 0
      const altScore = scoreWords(queryWords, image.alt, 4, 1.5, weights)
      const imageScore = tagScore + altScore
      if (imageScore <= 0) return
      hits.push({
        hit: { src: image.src, alt: image.alt, slug: gallery.slug, title: shortTitle(gallery.title) },
        score: imageScore + itemBonus,
        order: index * 100 + galleryIndex,
      })
    })
  })
  const top = Math.max(0, ...hits.map((h) => h.score))
  return hits
    .filter((h) => h.score >= top * IMAGE_RELEVANCE_RATIO)
    .sort((a, b) => b.score - a.score || a.order - b.order)
    .slice(0, MAX_IMAGE_HITS)
    .map((h) => h.hit)
}

export function keywordSearch(query: string, limit = 6): SearchResult[] {
  return keywordSearchWithRelated(query, limit).results
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
  const queryWords = getQueryWords(query)
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
