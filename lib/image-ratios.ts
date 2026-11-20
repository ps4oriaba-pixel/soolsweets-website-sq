// יחסי תמונה (רוחב/גובה) לתמונות שאינן בפורמט 9:16.
// כל תמונה שלא מופיעה כאן נחשבת 9:16 (צילום לאורך מהטלפון).
// כשמוסיפים תמונה חדשה בפורמט אחר, מוסיפים לכאן שורה: '/images/...': 'רוחב/גובה'

export const DEFAULT_RATIO = '9/16'

const EXCEPTIONS: Record<string, string> = {
  '/images/about-hero.png': '1024/1024',
  '/images/about-owner.png': '1086/1448',
  '/images/cake-bento.png': '1024/1024',
  '/images/cake-bow-tie.png': '1024/1024',
  '/images/cake-numbers.png': '1024/1024',
  '/images/cake-tiered.png': '1024/1024',
  '/images/cake-vintage.png': '1024/1024',
  '/images/category-boxes.png': '1254/1254',
  '/images/category-cakes-cover.png': '1254/1254',
  '/images/category-cakes.png': '1024/1024',
  '/images/category-designed-cakes-new.png': '1635/962',
  '/images/category-desserts.png': '1024/1024',
  '/images/category-holiday-boxes.png': '1254/1254',
  '/images/category-personal-desserts-new.png': '1633/963',
  '/images/category-special-cover.png': '1254/1254',
  '/images/category-special.png': '1024/1024',
  '/images/category-wow-new.png': '1616/973',
  '/images/chocolate-ball.png': '1024/1024',
  '/images/gallery/bento-1.png': '1024/1024',
  '/images/gallery/bento-2.png': '1024/1024',
  '/images/gallery/bento-3.png': '1024/1024',
  '/images/gallery/bento-cakes/Screenshot_20230710_215424_Photos.webp': '1057/1610',
  '/images/gallery/boxes-events-2.png': '1024/1024',
  '/images/gallery/choc-ball-1.png': '1024/1024',
  '/images/gallery/choc-ball-2.png': '1024/1024',
  '/images/gallery/choc-ball-3.png': '1024/1024',
  '/images/gallery/cup-cakes/F7580070-3AA8-4BD3-8C5B-8FFE6627552B.webp': '1086/1448',
  '/images/gallery/cup-cakes/IMG_3847.webp': '1920/1080',
  '/images/gallery/cups-1.png': '1024/1024',
  '/images/gallery/cups-2.png': '1024/1024',
  '/images/gallery/cups-3.png': '1024/1024',
  '/images/gallery/custom-design/20230123_160939.webp': '1663/3116',
  '/images/gallery/custom-design/20230310_151956.webp': '1848/3651',
  '/images/gallery/custom-design/20230505_094623.webp': '1848/4000',
  '/images/gallery/custom-design/20230806_172936.webp': '1848/4000',
  '/images/gallery/custom-design/20230817_155651.webp': '1848/4000',
  '/images/gallery/custom-design/20231027_101131.webp': '1848/4000',
  '/images/gallery/custom-design/Screenshot_20230714_112916_Photos.webp': '1080/1659',
  '/images/gallery/custom-design/ab136d40-7a29-43b2-801b-6f316ab464ed.webp': '1920/1920',
  '/images/gallery/exploding-candy/20240303_002414.webp': '1920/1270',
  '/images/gallery/levels-cakes/20230917_191150.webp': '1635/3137',
  '/images/gallery/levels-cakes/20230918_200516.webp': '1496/3238',
  '/images/gallery/mousse-cakes/20230128_104117.webp': '1663/3600',
  '/images/gallery/mousse-cakes/20230602_093435.webp': '1848/4000',
  '/images/gallery/mousse-cakes/20231028_165036.webp': '1089/2357',
  '/images/gallery/mousse-cakes/IMG_0170.webp': '1920/2560',
  '/images/gallery/mousse-cakes/IMG_0182.webp': '1920/2560',
  '/images/gallery/number-cakes/20230420_153709.webp': '1496/3238',
  '/images/gallery/number-cakes/20230727_115756.webp': '1496/3238',
  '/images/gallery/vintage-1.png': '1024/1024',
  '/images/gallery/vintage-2.png': '1024/1024',
  '/images/gallery/vintage-3.png': '1024/1024',
  '/images/hero.png': '1920/1280',
  '/images/home-hero-new.png': '1254/1254',
  '/images/gallery/exploding-candy/candy-lollipop.webp': '708/944',
  '/images/gallery/exploding-football/soccer-ball-candies.webp': '531/944',
  '/images/gallery/levels-cakes/tiered-cake-blue.webp': '531/944',
  '/images/gallery/vintage-cakes/cake-22.webp': '531/944',
  '/images/gallery/bento-cakes/bento-cake-white.webp': '531/944',
  '/images/gallery/custom-design/custom-cake-35.webp': '531/944',
}

const ORIGINAL_UPLOADS = new Set([
  '/images/gallery/exploding-candy/candy-lollipop.webp',
  '/images/gallery/exploding-football/soccer-ball-candies.webp',
  '/images/gallery/levels-cakes/tiered-cake-blue.webp',
  '/images/gallery/vintage-cakes/cake-22.webp',
  '/images/gallery/bento-cakes/bento-cake-white.webp',
  '/images/gallery/custom-design/custom-cake-35.webp',
])

export function shouldSkipImageOptimization(src: string): boolean {
  return ORIGINAL_UPLOADS.has(src)
}

export function getImageRatio(src: string): string {
  return EXCEPTIONS[src] ?? DEFAULT_RATIO
}

function ratioToNumber(ratio: string): number {
  const [w, h] = ratio.split('/').map(Number)
  return w / h
}

// המסגרת הנפוצה ביותר בקבוצת תמונות – כל התמונות בגלריה/בעמוד יוצגו באותו גודל מסגרת
export function getDominantRatio(srcs: string[]): string {
  const counts = new Map<string, { ratio: string; count: number }>()
  for (const src of srcs) {
    const ratio = getImageRatio(src)
    const key = ratioToNumber(ratio).toFixed(2)
    const entry = counts.get(key)
    if (entry) entry.count += 1
    else counts.set(key, { ratio, count: 1 })
  }
  let best = DEFAULT_RATIO
  let max = 0
  counts.forEach(({ ratio, count }) => {
    if (count > max) {
      max = count
      best = ratio
    }
  })
  return best
}
