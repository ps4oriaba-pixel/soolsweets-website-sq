export interface GalleryImage {
  src: string
  alt: string
}

export interface GalleryData {
  slug: string
  title: string
  subtitle: string
  description: string
  heroImage: string
  whatsappMessage: string
  images: GalleryImage[]
}

const galleries: GalleryData[] = [
  // ── מארזים ──────────────────────────────────────────────
  {
    slug: 'boxes-events',
    title: 'רגעים ששווה לחגוג',
    subtitle: '',
    description: "",
    heroImage: '/images/gallery/boxes-events-1.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין מארז לאירוע מיוחד שיש לי בקרוב',
    images: [
      { src: '/images/gallery/boxes-events-1.png', alt: 'מארז יום הולדת עם מקרון' },
      { src: '/images/gallery/boxes-events-2.png', alt: 'מארז תודה עם קשת' },
      { src: '/images/gallery/boxes-events-3.png', alt: 'קולקציית מארזים לאירועים' },
      { src: '/images/box-birthday.png', alt: 'מארז מיוחד פתוח' },
      { src: '/images/category-boxes.png', alt: 'מגוון מארזים' },
    ],
  },
  {
    slug: 'gender-reveal',
    title: 'חגים',
    subtitle: '',
    description:
      'כי לכל חג מגיע מארז מיוחד. ',
    heroImage: '/images/gallery/gender-reveal-1.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין מארז לחג  ',
    images: [
      { src: '/images/gallery/gender-reveal-1.png', alt: 'מארז גילוי מין ורוד' },
      { src: '/images/gallery/gender-reveal-2.png', alt: 'שולחן ממתקים לבת' },
      { src: '/images/gallery/gender-reveal-3.png', alt: 'מארז גילוי מין כחול' },
      { src: '/images/category-boxes.png', alt: 'מארזים בעיצוב מיוחד' },
    ],
  },
  {
    slug: 'sweet-sixteen',
    title: 'עסקים',
    subtitle: '',
    description: ' הדרך המתוקה להוקיר, להפתיע ולהשאיר רושם',
    heroImage: '/images/box-birthday.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין מארז עסקי ',
    images: [
      { src: '/images/box-birthday.png', alt: 'מארז Sweet 16' },
      { src: '/images/gallery/boxes-events-1.png', alt: 'מארז חגיגי' },
      { src: '/images/gallery/boxes-events-2.png', alt: 'מארז מתנה' },
      { src: '/images/gallery/boxes-events-3.png', alt: 'קולקציית מארזים' },
    ],
  },
  {
    slug: 'bar-bat-mitzvah',
    title: 'מארז בהתאמה אישית',
    subtitle: '',
    description: "",
    heroImage: '/images/category-boxes.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין מארז בהתאמה אישית!',
    images: [
      { src: '/images/category-boxes.png', alt: 'מארז בר מצווה' },
      { src: '/images/box-birthday.png', alt: 'מארז בת מצווה' },
      { src: '/images/gallery/boxes-events-1.png', alt: 'מארז חגיגי' },
      { src: '/images/gallery/boxes-events-3.png', alt: 'קולקציית מארזים' },
    ],
  },
  {
    slug: 'branded-boxes',
    title: 'מארזים ממותגים לחברות',
    subtitle: 'המותג שלכם – במתיקות מושלמת',
    description: 'מיתוג ייחודי לעסק שלכם. מארז שמייצג את הערכים והסגנון של החברה שלכם.',
    heroImage: '/images/box-birthday.png',
    whatsappMessage: 'שלום סלעית, אשמח לשמוע על מארזים ממותגים לחברה!',
    images: [
      { src: '/images/box-birthday.png', alt: 'מארז ממותג' },
      { src: '/images/gallery/boxes-events-2.png', alt: 'מארז עסקי' },
      { src: '/images/gallery/boxes-events-3.png', alt: 'קולקציית מארזים עסקיים' },
      { src: '/images/category-boxes.png', alt: 'מארזים לחברות' },
    ],
  },
  {
    slug: 'holiday-boxes',
    title: 'מארזי חג',
    subtitle: 'פורים, ראש השנה, פסח ועוד – ממותקים לחג',
    description:
      'מארזים בעיצוב מסורתי ומודרני לכל חגי השנה. שלחו מתנה שתזכרו בה כל השנה.',
    heroImage: '/images/category-boxes.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין מארז חג!',
    images: [
      { src: '/images/category-boxes.png', alt: 'מארז חג' },
      { src: '/images/box-birthday.png', alt: 'מארז מיוחד לחג' },
      { src: '/images/gallery/boxes-events-1.png', alt: 'מארז עם קשת' },
      { src: '/images/gallery/boxes-events-2.png', alt: 'מארז חגיגי' },
    ],
  },

  // ── עוגות ────────────────────────────────────────────────
  {
    slug: 'custom-cakes',
    title: 'עוגות בעיצוב אישי',
    subtitle: 'העלו כל רעיון – ואני אגשים אותו',
    description:
      'עוגה שמספרת את הסיפור שלכם. העלו רעיון או תמונה וביחד ניצור משהו שלא קיים עדיין.',
    heroImage: '/images/gallery/custom-design/IMG_0136.webp',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגה בעיצוב אישי!',
    images: [
      { src: '/images/gallery/custom-design/20230123_160939.webp', alt: 'עוגה בעיצוב אישי - תמונה 1' },
      { src: '/images/gallery/custom-design/20230310_151956.webp', alt: 'עוגה בעיצוב אישי - תמונה 2' },
      { src: '/images/gallery/custom-design/20230505_094623.webp', alt: 'עוגה בעיצוב אישי - תמונה 3' },
      { src: '/images/gallery/custom-design/20230806_172936.webp', alt: 'עוגה בעיצוב אישי - תמונה 4' },
      { src: '/images/gallery/custom-design/20230817_155651.webp', alt: 'עוגה בעיצוב אישי - תמונה 5' },
      { src: '/images/gallery/custom-design/20231011_091708.webp', alt: 'עוגה בעיצוב אישי - תמונה 6' },
      { src: '/images/gallery/custom-design/20231027_101131.webp', alt: 'עוגה בעיצוב אישי - תמונה 7' },
      { src: '/images/gallery/custom-design/20231220_163805.webp', alt: 'עוגה בעיצוב אישי - תמונה 8' },
      { src: '/images/gallery/custom-design/20231226_153314.webp', alt: 'עוגה בעיצוב אישי - תמונה 9' },
      { src: '/images/gallery/custom-design/20240125_154351.webp', alt: 'עוגה בעיצוב אישי - תמונה 10' },
      { src: '/images/gallery/custom-design/20240416_110819.webp', alt: 'עוגה בעיצוב אישי - תמונה 11' },
      { src: '/images/gallery/custom-design/20240416_165937.webp', alt: 'עוגה בעיצוב אישי - תמונה 12' },
      { src: '/images/gallery/custom-design/IMG_0029.webp', alt: 'עוגה בעיצוב אישי - תמונה 13' },
      { src: '/images/gallery/custom-design/IMG_0136.webp', alt: 'עוגת יום הולדת בעיצוב אישי בשחור וזהב' },
      { src: '/images/gallery/custom-design/IMG_0178.webp', alt: 'עוגה בעיצוב אישי - תמונה 15' },
      { src: '/images/gallery/custom-design/IMG_0269.webp', alt: 'עוגה בעיצוב אישי - תמונה 16' },
      { src: '/images/gallery/custom-design/IMG_0319.webp', alt: 'עוגה בעיצוב אישי - תמונה 17' },
      { src: '/images/gallery/custom-design/IMG_0434.webp', alt: 'עוגה בעיצוב אישי - תמונה 18' },
      { src: '/images/gallery/custom-design/IMG_0450.webp', alt: 'עוגה בעיצוב אישי בנושא טריאתלון' },
      { src: '/images/gallery/custom-design/IMG_0613.webp', alt: 'עוגה בעיצוב אישי - תמונה 20' },
      { src: '/images/gallery/custom-design/IMG_0621.webp', alt: 'עוגה בעיצוב אישי - תמונה 21' },
      { src: '/images/gallery/custom-design/IMG_0707.webp', alt: 'עוגה בעיצוב אישי - תמונה 22' },
      { src: '/images/gallery/custom-design/IMG_0710.webp', alt: 'עוגה בעיצוב אישי - תמונה 23' },
      { src: '/images/gallery/custom-design/IMG_0724.webp', alt: 'עוגה בעיצוב אישי - תמונה 24' },
      { src: '/images/gallery/custom-design/IMG_0734.webp', alt: 'עוגה בעיצוב אישי - תמונה 25' },
      { src: '/images/gallery/custom-design/IMG_0807.webp', alt: 'עוגה בעיצוב אישי - תמונה 26' },
      { src: '/images/gallery/custom-design/IMG_0838.webp', alt: 'עוגה בעיצוב אישי - תמונה 27' },
      { src: '/images/gallery/custom-design/IMG_0916.webp', alt: 'עוגה בעיצוב אישי עם כתר וברווז' },
      { src: '/images/gallery/custom-design/IMG_0922.webp', alt: 'עוגה בעיצוב אישי - תמונה 29' },
      { src: '/images/gallery/custom-design/IMG_0950.webp', alt: 'עוגה בעיצוב אישי - תמונה 30' },
      { src: '/images/gallery/custom-design/IMG_0954.webp', alt: 'עוגה בעיצוב אישי - תמונה 31' },
      { src: '/images/gallery/custom-design/IMG_1296.webp', alt: 'עוגה בעיצוב אישי - תמונה 32' },
      { src: '/images/gallery/custom-design/IMG_1433.webp', alt: 'עוגת דובי בעיצוב אישי' },
      { src: '/images/gallery/custom-design/IMG_1586.webp', alt: 'עוגה בעיצוב אישי - תמונה 34' },
      { src: '/images/gallery/custom-design/IMG_1618.webp', alt: 'עוגה בעיצוב אישי - תמונה 35' },
      { src: '/images/gallery/custom-design/IMG_1679.webp', alt: 'עוגה בעיצוב אישי - תמונה 36' },
      { src: '/images/gallery/custom-design/IMG_1985.webp', alt: 'עוגה בעיצוב אישי - תמונה 37' },
      { src: '/images/gallery/custom-design/IMG_2070.webp', alt: 'עוגה בעיצוב אישי - תמונה 38' },
      { src: '/images/gallery/custom-design/IMG_2306.webp', alt: 'עוגה בעיצוב אישי בנושא נסיעות וחוף' },
      { src: '/images/gallery/custom-design/IMG_2351.webp', alt: 'עוגה בעיצוב אישי - תמונה 40' },
      { src: '/images/gallery/custom-design/IMG_2393.webp', alt: 'עוגה בעיצוב אישי - תמונה 41' },
      { src: '/images/gallery/custom-design/IMG_2445.webp', alt: 'עוגה בעיצוב אישי - תמונה 42' },
      { src: '/images/gallery/custom-design/IMG_2465.webp', alt: 'עוגה בעיצוב אישי - תמונה 43' },
      { src: '/images/gallery/custom-design/IMG_2483.webp', alt: 'עוגה בעיצוב אישי - תמונה 44' },
      { src: '/images/gallery/custom-design/IMG_2921.webp', alt: 'עוגה בעיצוב אישי - תמונה 45' },
      { src: '/images/gallery/custom-design/IMG_3004.webp', alt: 'עוגה בעיצוב אישי - תמונה 46' },
      { src: '/images/gallery/custom-design/IMG_3415.webp', alt: 'עוגת רובלוקס בעיצוב אישי' },
      { src: '/images/gallery/custom-design/IMG_3615.webp', alt: 'עוגה בעיצוב אישי - תמונה 48' },
      { src: '/images/gallery/custom-design/IMG_3633.webp', alt: 'עוגה בעיצוב אישי - תמונה 49' },
      { src: '/images/gallery/custom-design/IMG_3653.webp', alt: 'עוגה בעיצוב אישי - תמונה 50' },
      { src: '/images/gallery/custom-design/IMG_3759.webp', alt: 'עוגה בעיצוב אישי - תמונה 51' },
      { src: '/images/gallery/custom-design/IMG_4345.webp', alt: 'עוגה בעיצוב אישי - תמונה 52' },
      { src: '/images/gallery/custom-design/IMG_4542.webp', alt: 'עוגה בעיצוב אישי - תמונה 53' },
      { src: '/images/gallery/custom-design/IMG_4644.webp', alt: 'עוגה בעיצוב אישי - תמונה 54' },
      { src: '/images/gallery/custom-design/IMG_4841.webp', alt: 'עוגת פרחים בעיצוב אישי' },
      { src: '/images/gallery/custom-design/IMG_5148.webp', alt: 'עוגה בעיצוב אישי - תמונה 56' },
      { src: '/images/gallery/custom-design/IMG_5257.webp', alt: 'עוגה בעיצוב אישי - תמונה 57' },
      { src: '/images/gallery/custom-design/IMG_5277.webp', alt: 'עוגה בעיצוב אישי - תמונה 58' },
      { src: '/images/gallery/custom-design/IMG_5367.webp', alt: 'עוגה בעיצוב אישי - תמונה 59' },
      { src: '/images/gallery/custom-design/IMG_5396.webp', alt: 'עוגה בעיצוב אישי - תמונה 60' },
      { src: '/images/gallery/custom-design/IMG_5436.webp', alt: 'עוגה בעיצוב אישי - תמונה 61' },
      { src: '/images/gallery/custom-design/IMG_5481.webp', alt: 'עוגה בעיצוב אישי - תמונה 62' },
      { src: '/images/gallery/custom-design/IMG_5798.webp', alt: 'עוגה בעיצוב אישי - תמונה 63' },
      { src: '/images/gallery/custom-design/IMG_5925.webp', alt: 'עוגה בעיצוב אישי - תמונה 64' },
      { src: '/images/gallery/custom-design/IMG_5927.webp', alt: 'עוגה בעיצוב אישי - תמונה 65' },
      { src: '/images/gallery/custom-design/IMG_5953.webp', alt: 'עוגה בעיצוב אישי - תמונה 66' },
      { src: '/images/gallery/custom-design/IMG_5980.webp', alt: 'עוגה בעיצוב אישי - תמונה 67' },
      { src: '/images/gallery/custom-design/IMG_5994.webp', alt: 'עוגה בעיצוב אישי - תמונה 68' },
      { src: '/images/gallery/custom-design/IMG_6105.webp', alt: 'עוגה בעיצוב אישי בנושא ים' },
      { src: '/images/gallery/custom-design/IMG_6106.webp', alt: 'עוגה בעיצוב אישי - תמונה 70' },
      { src: '/images/gallery/custom-design/IMG_6234.webp', alt: 'עוגה בעיצוב אישי - תמונה 71' },
      { src: '/images/gallery/custom-design/IMG_6352.webp', alt: 'עוגה בעיצוב אישי - תמונה 72' },
      { src: '/images/gallery/custom-design/IMG_6392.webp', alt: 'עוגה בעיצוב אישי - תמונה 73' },
      { src: '/images/gallery/custom-design/IMG_6396.webp', alt: 'עוגה בעיצוב אישי - תמונה 74' },
      { src: '/images/gallery/custom-design/IMG_6498.webp', alt: 'עוגה בעיצוב אישי - תמונה 75' },
      { src: '/images/gallery/custom-design/IMG_6523.webp', alt: 'עוגה בעיצוב אישי - תמונה 76' },
      { src: '/images/gallery/custom-design/IMG_6572.webp', alt: 'עוגה בעיצוב אישי - תמונה 77' },
      { src: '/images/gallery/custom-design/IMG_6765.webp', alt: 'עוגה בעיצוב אישי - תמונה 78' },
      { src: '/images/gallery/custom-design/IMG_6868.webp', alt: 'עוגה בעיצוב אישי - תמונה 79' },
      { src: '/images/gallery/custom-design/IMG_6979.webp', alt: 'עוגה בעיצוב אישי - תמונה 80' },
      { src: '/images/gallery/custom-design/IMG_7033.webp', alt: 'עוגה בעיצוב אישי - תמונה 81' },
      { src: '/images/gallery/custom-design/IMG_7122.webp', alt: 'עוגה בעיצוב אישי - תמונה 82' },
      { src: '/images/gallery/custom-design/IMG_7389.webp', alt: 'עוגה בעיצוב אישי - תמונה 83' },
      { src: '/images/gallery/custom-design/IMG_7728.webp', alt: 'עוגה בעיצוב אישי - תמונה 84' },
      { src: '/images/gallery/custom-design/IMG_7820.webp', alt: 'עוגה בעיצוב אישי - תמונה 85' },
      { src: '/images/gallery/custom-design/IMG_7856.webp', alt: 'עוגה בעיצוב אישי - תמונה 86' },
      { src: '/images/gallery/custom-design/IMG_7890.webp', alt: 'עוגה בעיצוב אישי - תמונה 87' },
      { src: '/images/gallery/custom-design/IMG_7998.webp', alt: 'עוגה בעיצוב אישי - ת������������ונה 88' },
      { src: '/images/gallery/custom-design/IMG_8103.webp', alt: 'עוגה בעיצוב אישי - תמונה 89' },
      { src: '/images/gallery/custom-design/IMG_8343.webp', alt: 'עוגה בעיצוב אישי - תמונה 90' },
      { src: '/images/gallery/custom-design/IMG_8393.webp', alt: 'עוגה בעיצו�� אישי - תמונה 91' },
      { src: '/images/gallery/custom-design/IMG_8478.webp', alt: 'עוגה בעיצוב אישי - תמונה 92' },
      { src: '/images/gallery/custom-design/IMG_8560.webp', alt: 'עוגה בעיצוב אישי - תמונה 93' },
      { src: '/images/gallery/custom-design/IMG_8702.webp', alt: 'עוגה בעיצוב אישי - תמונה 94' },
      { src: '/images/gallery/custom-design/IMG_8758.webp', alt: 'עוגה בעיצוב אישי - תמונה 95' },
      { src: '/images/gallery/custom-design/IMG_9110.webp', alt: 'עוגה בעיצוב אישי - תמונה 96' },
      { src: '/images/gallery/custom-design/IMG_9126.webp', alt: 'עוגה בעיצוב אישי - תמונה 97' },
      { src: '/images/gallery/custom-design/IMG_9348.webp', alt: 'עוגה בעיצוב אישי - תמונה 98' },
      { src: '/images/gallery/custom-design/IMG_9370.webp', alt: 'עוגה בעיצוב אישי - תמונה 99' },
      { src: '/images/gallery/custom-design/IMG_9518.webp', alt: 'עוגה בעיצוב אישי - תמונה 100' },
      { src: '/images/gallery/custom-design/IMG_9565.webp', alt: 'עוגה בעיצוב אישי - תמונה 101' },
      { src: '/images/gallery/custom-design/IMG_9644.webp', alt: 'עוגה בעיצוב אישי - תמונה 102' },
      { src: '/images/gallery/custom-design/IMG_9653.webp', alt: 'עוגה בעיצוב אישי - תמונה 103' },
      { src: '/images/gallery/custom-design/IMG_9666.webp', alt: 'עוגה בעיצוב אישי - תמונה 104' },
      { src: '/images/gallery/custom-design/IMG_9829.webp', alt: 'עוגה בעיצוב אישי - תמונה 105' },
      { src: '/images/gallery/custom-design/Screenshot_20230714_112916_Photos.webp', alt: 'עוגה בעיצוב אישי - תמונה 106' },
      { src: '/images/gallery/custom-design/ab136d40-7a29-43b2-801b-6f316ab464ed.webp', alt: 'עוגה בעיצוב אישי - תמונה 107' },
    ],
  },

  {
    slug: 'vintage-cakes',
    title: 'עוגות וינטאג\'',
    subtitle: 'רומנטיקה, עדינות ואווירה של פעם',
    description: " עיצוב רומנטי ועדין עם זילופי וינטאג’, פפיונים, פרחים וגימורים אלגנטיים. מושלם לכל אירוע .",
    heroImage: '/images/gallery/vintage-cakes/20231226_113642.webp',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת וינטאג\'!',
    images: [
      { src: '/images/gallery/vintage-cakes/20231226_113642.webp', alt: "עוגת וינטאג' - תמונה 1" },
      { src: '/images/gallery/vintage-cakes/IMG_0160.webp', alt: "עוגת וינטאג' - תמונה 2" },
      { src: '/images/gallery/vintage-cakes/IMG_0534.webp', alt: "עוגת וינטאג' - תמונה 3" },
      { src: '/images/gallery/vintage-cakes/IMG_0537.webp', alt: "עוגת וינטאג' - תמונה 4" },
      { src: '/images/gallery/vintage-cakes/IMG_0545.webp', alt: "עוגת וינטאג' - תמונה 5" },
      { src: '/images/gallery/vintage-cakes/IMG_0579.webp', alt: "עוגת וינטאג' - תמונה 6" },
      { src: '/images/gallery/vintage-cakes/IMG_0585.webp', alt: "עוגת וינטאג' - תמונה 7" },
      { src: '/images/gallery/vintage-cakes/IMG_0697.webp', alt: "עוגת וינטאג' - תמונה 8" },
      { src: '/images/gallery/vintage-cakes/IMG_0740.webp', alt: "עוגת וינטאג' - תמונה 9" },
      { src: '/images/gallery/vintage-cakes/IMG_0833.webp', alt: "עוגת וינטאג' - תמונה 10" },
      { src: '/images/gallery/vintage-cakes/IMG_0859.webp', alt: "עוגת וינטאג' - תמונה 11" },
      { src: '/images/gallery/vintage-cakes/IMG_1064.webp', alt: "עוגת וינטאג' - תמונה 12" },
      { src: '/images/gallery/vintage-cakes/IMG_1075.webp', alt: "עוגת וינטאג' - תמונה 13" },
      { src: '/images/gallery/vintage-cakes/IMG_1088.webp', alt: "עוגת וינטאג' - תמונה 14" },
      { src: '/images/gallery/vintage-cakes/IMG_1183.webp', alt: "עוגת וינטאג' - תמונה 15" },
      { src: '/images/gallery/vintage-cakes/IMG_1553.webp', alt: "עוגת וינטאג' - תמונה 16" },
      { src: '/images/gallery/vintage-cakes/IMG_1617.webp', alt: "עוגת וינטאג' - תמונה 17" },
      { src: '/images/gallery/vintage-cakes/IMG_1847.webp', alt: "עוגת וינטאג' - תמונה 18" },
      { src: '/images/gallery/vintage-cakes/IMG_1919.webp', alt: "עוגת וינטאג' - תמונה 19" },
      { src: '/images/gallery/vintage-cakes/IMG_2145.webp', alt: "עוגת וינטאג' - תמונה 20" },
      { src: '/images/gallery/vintage-cakes/IMG_2284.webp', alt: "עוגת וינטאג' - תמונה 21" },
      { src: '/images/gallery/vintage-cakes/IMG_2359.webp', alt: "עוגת וינטאג' - תמונה 22" },
      { src: '/images/gallery/vintage-cakes/IMG_2498.webp', alt: "עוגת וינטאג' - תמונה 23" },
      { src: '/images/gallery/vintage-cakes/IMG_2759.webp', alt: "עוגת וינטאג' - תמונה 24" },
      { src: '/images/gallery/vintage-cakes/IMG_3094.webp', alt: "עוגת וינטאג' - תמונה 25" },
      { src: '/images/gallery/vintage-cakes/IMG_3131.webp', alt: "עוגת וינטאג' - תמונה 26" },
      { src: '/images/gallery/vintage-cakes/IMG_3153.webp', alt: "עוגת וינטאג' - תמונה 27" },
      { src: '/images/gallery/vintage-cakes/IMG_3177.webp', alt: "עוגת וינטאג' - תמונה 28" },
      { src: '/images/gallery/vintage-cakes/IMG_3502.webp', alt: "עוגת וינטאג' - תמונה 29" },
      { src: '/images/gallery/vintage-cakes/IMG_3725.webp', alt: "עוגת וינטאג' - תמונה 30" },
      { src: '/images/gallery/vintage-cakes/IMG_3738.webp', alt: "עוגת וינטאג' - תמונה 31" },
      { src: '/images/gallery/vintage-cakes/IMG_3992.webp', alt: "עוגת וינטאג' - תמונה 32" },
      { src: '/images/gallery/vintage-cakes/IMG_4007.webp', alt: "עוגת וינטאג' - תמונה 33" },
      { src: '/images/gallery/vintage-cakes/IMG_4174.webp', alt: "עוגת וינטאג' - תמונה 34" },
      { src: '/images/gallery/vintage-cakes/IMG_4187.webp', alt: "עוגת וינטאג' - תמונה 35" },
      { src: '/images/gallery/vintage-cakes/IMG_4248.webp', alt: "עוגת וינטאג' - תמונה 36" },
      { src: '/images/gallery/vintage-cakes/IMG_4396.webp', alt: "עוגת וינטאג' - תמונה 37" },
      { src: '/images/gallery/vintage-cakes/IMG_4484.webp', alt: "עוגת וינטאג' - תמונה 38" },
      { src: '/images/gallery/vintage-cakes/IMG_4620.webp', alt: "עוגת וינטאג' - תמונה 39" },
      { src: '/images/gallery/vintage-cakes/IMG_4866.webp', alt: "עוגת וינטאג' - תמונה 40" },
      { src: '/images/gallery/vintage-cakes/IMG_5047.webp', alt: "עוגת וינטאג' - תמונה 41" },
      { src: '/images/gallery/vintage-cakes/IMG_5224.webp', alt: "עוגת וינטאג' - תמונה 42" },
      { src: '/images/gallery/vintage-cakes/IMG_5225.webp', alt: "עוגת וינטאג' - תמונה 43" },
      { src: '/images/gallery/vintage-cakes/IMG_5242.webp', alt: "עוגת וינטאג' - תמונה 44" },
      { src: '/images/gallery/vintage-cakes/IMG_5255.webp', alt: "עוגת וינטאג' - תמונה 45" },
      { src: '/images/gallery/vintage-cakes/IMG_5379.webp', alt: "עוגת וינטאג' - תמונה 46" },
      { src: '/images/gallery/vintage-cakes/IMG_6128.webp', alt: "עוגת וינטאג' - תמונה 47" },
      { src: '/images/gallery/vintage-cakes/IMG_6161.webp', alt: "עוגת וינטאג' - תמונה 48" },
      { src: '/images/gallery/vintage-cakes/IMG_6166.webp', alt: "עוגת וינטאג' - תמונה 49" },
      { src: '/images/gallery/vintage-cakes/IMG_6172.webp', alt: "עוגת וינטאג' - תמונה 50" },
      { src: '/images/gallery/vintage-cakes/IMG_6187.webp', alt: "עו��ת וינטאג' - תמונה 51" },
      { src: '/images/gallery/vintage-cakes/IMG_6280.webp', alt: "עוגת וינטאג' - תמונה 52" },
      { src: '/images/gallery/vintage-cakes/IMG_6353.webp', alt: "עוגת וינטאג' - תמונה 53" },
      { src: '/images/gallery/vintage-cakes/IMG_6523.webp', alt: "עוגת וינטאג' - תמונה 54" },
      { src: '/images/gallery/vintage-cakes/IMG_6545.webp', alt: "עוגת וינטאג' - תמונה 55" },
      { src: '/images/gallery/vintage-cakes/IMG_6729.webp', alt: "עוגת וינטאג' - תמונה 56" },
      { src: '/images/gallery/vintage-cakes/IMG_6932.webp', alt: "עוגת וינטאג' - תמונה 57" },
      { src: '/images/gallery/vintage-cakes/IMG_7267.webp', alt: "עוגת וינטאג' - תמונה 58" },
      { src: '/images/gallery/vintage-cakes/IMG_7302.webp', alt: "עוגת וינטאג' - תמונה 59" },
      { src: '/images/gallery/vintage-cakes/IMG_7337.webp', alt: "עוגת וינטאג' - תמונה 60" },
      { src: '/images/gallery/vintage-cakes/IMG_7786.webp', alt: "עוגת וינטאג' - תמונה 61" },
      { src: '/images/gallery/vintage-cakes/IMG_7856.webp', alt: "עוגת וינטאג' - תמונה 62" },
      { src: '/images/gallery/vintage-cakes/IMG_8025.webp', alt: "עוגת וינטאג' - תמונה 63" },
      { src: '/images/gallery/vintage-cakes/IMG_8438.webp', alt: "עוגת וינטאג' - תמונה 64" },
      { src: '/images/gallery/vintage-cakes/IMG_8802.webp', alt: "עוגת וינטאג' - תמונה 65" },
      { src: '/images/gallery/vintage-cakes/IMG_8971.webp', alt: "עוגת וינטאג' - תמונה 66" },
      { src: '/images/gallery/vintage-cakes/IMG_9003.webp', alt: "עוגת וינטאג' - תמונה 67" },
      { src: '/images/gallery/vintage-cakes/IMG_9427.webp', alt: "עוגת וינטאג' - תמונה 68" },
      { src: '/images/gallery/vintage-cakes/IMG_9757.webp', alt: "עוגת וינטאג' - תמונה 69" },
      { src: '/images/gallery/vintage-cakes/IMG_9806.webp', alt: "עוגת וינטאג' - תמונה 70" },
      { src: '/images/gallery/vintage-cakes/IMG_9973.webp', alt: "עוגת וי��טאג' - תמונה 71" },
    ],
  },
  {
    slug: 'mousse-cakes',
    title: 'עוגות מוס',
    subtitle: 'שכבות קרמי ועדין בציפוי מושלם',
    description: " שכבות מוס עשירות במגוון טעמים, במרקם קטיפתי ובמראה אלגנטי – חוויה מושלמת בכל ביס",
    heroImage: '/images/category-cakes.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת מוס!',
    images: [
      { src: '/images/category-cakes.png', alt: 'עוגת מוס' },
      { src: '/images/gallery/vintage-3.png', alt: 'שכבות מוס' },
      { src: '/images/hero.png', alt: 'עוגות קינוחים' },
      { src: '/images/cake-vintage.png', alt: 'עוגה מעוצבת' },
    ],
  },
  {
    slug: 'bento-cakes',
    title: 'עוגות בנטו',
    subtitle: 'עוגה אישית קטנה וחמודה',
    description:
      'קטנות בגודל, גדולות ברושם. עוגות אישיות בעיצוב מוקפד – מושלמות למתנה, הפתעה או חגיגה קטנה.',
    heroImage: '/images/gallery/bento-cakes/20231222_102551.webp',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת בנטו!',
    images: [
      { src: '/images/gallery/bento-cakes/20231222_102551.webp', alt: 'עוגת בנטו - תמונה 1' },
      { src: '/images/gallery/bento-cakes/IMG_0029.webp', alt: 'עוגת בנטו - תמונה 2' },
      { src: '/images/gallery/bento-cakes/IMG_0374.webp', alt: 'עוגת בנטו - תמונה 3' },
      { src: '/images/gallery/bento-cakes/IMG_0507.webp', alt: 'עוגת בנטו - תמונה 4' },
      { src: '/images/gallery/bento-cakes/IMG_0809.webp', alt: 'עוגת בנטו - תמונה 5' },
      { src: '/images/gallery/bento-cakes/IMG_0838.webp', alt: 'עוגת בנטו - תמונה 6' },
      { src: '/images/gallery/bento-cakes/IMG_0980.webp', alt: 'עוגת בנטו - תמונה 7' },
      { src: '/images/gallery/bento-cakes/IMG_2057.webp', alt: 'עוגת בנטו - תמונה 8' },
      { src: '/images/gallery/bento-cakes/IMG_2058.webp', alt: 'עוגת בנטו - תמונה 9' },
      { src: '/images/gallery/bento-cakes/IMG_2061.webp', alt: 'עוגת בנטו - תמונה 10' },
      { src: '/images/gallery/bento-cakes/IMG_2157.webp', alt: 'עוגת בנטו - תמונה 11' },
      { src: '/images/gallery/bento-cakes/IMG_2371.webp', alt: 'עוגת בנטו - תמונה 12' },
      { src: '/images/gallery/bento-cakes/IMG_2439.webp', alt: 'עוגת בנטו - תמונה 13' },
      { src: '/images/gallery/bento-cakes/IMG_2554.webp', alt: 'עוגת בנטו - תמונה 14' },
      { src: '/images/gallery/bento-cakes/IMG_2572.webp', alt: 'עוגת בנטו - תמונה 15' },
      { src: '/images/gallery/bento-cakes/IMG_2701.webp', alt: 'עוגת בנטו - תמונה 16' },
      { src: '/images/gallery/bento-cakes/IMG_2984.webp', alt: 'עוגת בנטו - תמונה 17' },
      { src: '/images/gallery/bento-cakes/IMG_2989.webp', alt: 'עוגת בנטו - תמונה 18' },
      { src: '/images/gallery/bento-cakes/IMG_3141.webp', alt: 'עוגת בנטו - תמונה 19' },
      { src: '/images/gallery/bento-cakes/IMG_3253.webp', alt: 'עוגת בנטו - תמונה 20' },
      { src: '/images/gallery/bento-cakes/IMG_3276.webp', alt: 'עוגת בנטו - תמונה 21' },
      { src: '/images/gallery/bento-cakes/IMG_3300.webp', alt: 'עוגת בנטו - תמונה 22' },
      { src: '/images/gallery/bento-cakes/IMG_3404.webp', alt: 'עוגת בנטו - תמונה 23' },
      { src: '/images/gallery/bento-cakes/IMG_3497.webp', alt: 'עוגת בנטו - תמונה 24' },
      { src: '/images/gallery/bento-cakes/IMG_3502.webp', alt: 'עוגת בנטו - תמונה 25' },
      { src: '/images/gallery/bento-cakes/IMG_3611.webp', alt: 'עוגת בנטו - תמונה 26' },
      { src: '/images/gallery/bento-cakes/IMG_3672.webp', alt: 'עוגת בנטו - תמונה 27' },
      { src: '/images/gallery/bento-cakes/IMG_3686.webp', alt: 'עוגת בנטו - תמונה 28' },
      { src: '/images/gallery/bento-cakes/IMG_3741.webp', alt: 'עוגת בנטו - תמונה 29' },
      { src: '/images/gallery/bento-cakes/IMG_4247.webp', alt: 'עוגת בנטו - תמונה 30' },
      { src: '/images/gallery/bento-cakes/IMG_4282.webp', alt: 'עוגת בנטו - תמונה 31' },
      { src: '/images/gallery/bento-cakes/IMG_4617.webp', alt: 'עוגת בנטו - תמונה 32' },
      { src: '/images/gallery/bento-cakes/IMG_4624.webp', alt: 'עוגת בנטו - תמונה 33' },
      { src: '/images/gallery/bento-cakes/IMG_4636.webp', alt: 'עוגת בנטו - תמונה 34' },
      { src: '/images/gallery/bento-cakes/IMG_5385.webp', alt: 'עוגת בנטו - תמונה 35' },
      { src: '/images/gallery/bento-cakes/IMG_5605.webp', alt: 'עוגת בנטו - תמונה 36' },
      { src: '/images/gallery/bento-cakes/IMG_5626.webp', alt: 'עוגת בנטו - תמונה 37' },
      { src: '/images/gallery/bento-cakes/IMG_6330.webp', alt: 'עוגת בנטו - תמונה 38' },
      { src: '/images/gallery/bento-cakes/IMG_6776.webp', alt: 'עוגת בנטו - תמונה 39' },
      { src: '/images/gallery/bento-cakes/IMG_6981.webp', alt: 'עוגת בנטו - תמונה 40' },
      { src: '/images/gallery/bento-cakes/IMG_7019.webp', alt: 'עוגת בנטו - תמונה 41' },
      { src: '/images/gallery/bento-cakes/IMG_8147.webp', alt: 'עוגת ב��טו - תמונה 42' },
      { src: '/images/gallery/bento-cakes/IMG_8241.webp', alt: 'עוגת בנטו - תמונה 43' },
      { src: '/images/gallery/bento-cakes/IMG_8943.webp', alt: 'עוגת בנטו - תמונה 44' },
      { src: '/images/gallery/bento-cakes/IMG_9677.webp', alt: 'עוגת בנטו - ����ונה 45' },
      { src: '/images/gallery/bento-cakes/IMG_9829.webp', alt: 'עוגת בנטו - תמונה 46' },
      { src: '/images/gallery/bento-cakes/Screenshot_20230710_215424_Photos.webp', alt: 'עוגת בנטו - תמונה 47' },
    ],
  },
  {
    slug: 'rectangular-cakes',
    title: 'עוגה מלבנית מעוצבת',
    subtitle: 'עיצוב מודרני ונקי – אלגנטי לכל שולחן',
    description:
      'מושלמת לאירועים גדולים ולחגיגות משפחתיות – בעיצוב מוקפד ובהתאמה אישית לכל סגנון.',
    heroImage: '/images/gallery/rectangular-cakes/20240119_085307.webp',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגה מלבנית!',
    images: [
      { src: '/images/gallery/rectangular-cakes/20240119_085307.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 1' },
      { src: '/images/gallery/rectangular-cakes/20240119_093902.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 2' },
      { src: '/images/gallery/rectangular-cakes/20240404_103440.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 3' },
      { src: '/images/gallery/rectangular-cakes/562A1FBC-58BE-414F-AAA9-06445B5231F0.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 4' },
      { src: '/images/gallery/rectangular-cakes/IMG_0242.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 5' },
      { src: '/images/gallery/rectangular-cakes/IMG_0249.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 6' },
      { src: '/images/gallery/rectangular-cakes/IMG_0267.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 7' },
      { src: '/images/gallery/rectangular-cakes/IMG_0625.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 8' },
      { src: '/images/gallery/rectangular-cakes/IMG_0821.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 9' },
      { src: '/images/gallery/rectangular-cakes/IMG_1116.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 10' },
      { src: '/images/gallery/rectangular-cakes/IMG_1334.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 11' },
      { src: '/images/gallery/rectangular-cakes/IMG_2190.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 12' },
      { src: '/images/gallery/rectangular-cakes/IMG_2211.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 13' },
      { src: '/images/gallery/rectangular-cakes/IMG_2295.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 14' },
      { src: '/images/gallery/rectangular-cakes/IMG_2504.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 15' },
      { src: '/images/gallery/rectangular-cakes/IMG_2520.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 16' },
      { src: '/images/gallery/rectangular-cakes/IMG_2628.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 17' },
      { src: '/images/gallery/rectangular-cakes/IMG_2663.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 18' },
      { src: '/images/gallery/rectangular-cakes/IMG_2814.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 19' },
      { src: '/images/gallery/rectangular-cakes/IMG_2926.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 20' },
      { src: '/images/gallery/rectangular-cakes/IMG_2953.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 21' },
      { src: '/images/gallery/rectangular-cakes/IMG_2957.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 22' },
      { src: '/images/gallery/rectangular-cakes/IMG_2972.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 23' },
      { src: '/images/gallery/rectangular-cakes/IMG_3552.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 24' },
      { src: '/images/gallery/rectangular-cakes/IMG_3558.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 25' },
      { src: '/images/gallery/rectangular-cakes/IMG_4114.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 26' },
      { src: '/images/gallery/rectangular-cakes/IMG_4299.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 27' },
      { src: '/images/gallery/rectangular-cakes/IMG_4302.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 28' },
      { src: '/images/gallery/rectangular-cakes/IMG_4584.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 29' },
      { src: '/images/gallery/rectangular-cakes/IMG_5435.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 30' },
      { src: '/images/gallery/rectangular-cakes/IMG_6151.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 31' },
      { src: '/images/gallery/rectangular-cakes/IMG_6467.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 32' },
      { src: '/images/gallery/rectangular-cakes/IMG_6586.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 33' },
      { src: '/images/gallery/rectangular-cakes/IMG_6601.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 34' },
      { src: '/images/gallery/rectangular-cakes/IMG_7093.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 35' },
      { src: '/images/gallery/rectangular-cakes/IMG_7127.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 36' },
      { src: '/images/gallery/rectangular-cakes/IMG_7241.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 37' },
      { src: '/images/gallery/rectangular-cakes/IMG_7420.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 38' },
      { src: '/images/gallery/rectangular-cakes/IMG_9098.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 39' },
      { src: '/images/gallery/rectangular-cakes/IMG_9703.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 40' },
      { src: '/images/gallery/rectangular-cakes/IMG_9757.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 41' },
      { src: '/images/gallery/rectangular-cakes/IMG_9792.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 42' },
      { src: '/images/gallery/rectangular-cakes/IMG_9818.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 43' },
      { src: '/images/gallery/rectangular-cakes/IMG_9954.webp', alt: 'עוגה מלבנית מעוצבת - תמונה 44' },
    ],
  },
  {
    slug: 'bow-tie-cakes',
    title: 'עוגת פפיון',
    subtitle: "",
    description:
      'עוגות בעיצוב אלגנטי עם פפיונים מרשימים  מבצק סוכר – שילוב מושלם של יוקרה, עדינות וסטייל.',
    heroImage: '/images/gallery/bow-cakes/IMG_4151.webp',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת פפיון!',
    images: [
      { src: '/images/gallery/bow-cakes/IMG_4151.webp', alt: 'עוגת פפיון - תמונה 1' },
      { src: '/images/gallery/bow-cakes/IMG_6029.webp', alt: 'עוגת פפיון - תמונה 2' },
      { src: '/images/gallery/bow-cakes/IMG_6037.webp', alt: 'עוגת פפיון - תמונה 3' },
      { src: '/images/gallery/bow-cakes/IMG_6137.webp', alt: 'עוגת פפיון - תמונה 4' },
      { src: '/images/gallery/bow-cakes/IMG_6620.webp', alt: 'עוגת פפיון - תמונה 5' },
      { src: '/images/gallery/bow-cakes/IMG_6983.webp', alt: 'עוגת פפיון - תמונה 6' },
      { src: '/images/gallery/bow-cakes/IMG_9680.webp', alt: 'עוגת פפיון - תמונה 7' },
    ],
  },

  {
    slug: 'number-cakes',
    title: 'עוגות מספרים',
    subtitle: 'לכל יום הולדת מיוחד – במספר שלו',
    description:
      'עוגות מספר או אות מבצק שקדים או עוגת שוקולד אפויה, המעוטרות בקרם מסקרפונה עשיר, שוקולדים ואלמנטים מעוצבים בהתאמה אישית.',
    heroImage: '/images/gallery/number-cakes/20230420_153709.webp',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת מספרים!',
    images: [
      { src: '/images/gallery/number-cakes/20230420_153709.webp', alt: 'עוגת מספרים - תמונה 1' },
      { src: '/images/gallery/number-cakes/20230727_115756.webp', alt: 'עוגת מספרים - תמונה 2' },
      { src: '/images/gallery/number-cakes/20240418_165922.webp', alt: 'עוגת מספרים - תמונה 3' },
      { src: '/images/gallery/number-cakes/IMG_2169.webp', alt: 'עוגת מספרים - תמונה 4' },
      { src: '/images/gallery/number-cakes/IMG_2341.webp', alt: 'עוגת מספרים - תמונה 5' },
      { src: '/images/gallery/number-cakes/IMG_4725.webp', alt: 'עוגת מספרים - תמונה 6' },
      { src: '/images/gallery/number-cakes/IMG_6917.webp', alt: 'עוגת מספרים - תמונה 7' },
    ],
  },
  {
    slug: 'crown-cakes',
    title: 'עוגות כתר',
    subtitle: 'עיצוב מלכותי שכולם ידברו עליו',
    description:
      'עוגה בעיצוב מלכותי עם כתר נוצץ, פפיונים ונצנצים שמתפזרים באפקט מרהיב – לחגיגה שכולה זוהר.',
    heroImage: '/images/gallery/crown-cakes/IMG_1199.webp',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת כתר!',
    images: [
      { src: '/images/gallery/crown-cakes/IMG_1199.webp', alt: 'עוגת כתר - תמונה 1' },
      { src: '/images/gallery/crown-cakes/IMG_5483.webp', alt: 'עוגת כתר - תמונה 2' },
      { src: '/images/gallery/crown-cakes/IMG_7958.webp', alt: 'עוגת כתר - תמונה 3' },
      { src: '/images/gallery/crown-cakes/IMG_8002.webp', alt: 'עוגת כתר - תמונה 4' },
    ],
  },
  {
    slug: 'mug-cakes',
    title: 'ספל שכולו אושר',
    subtitle: "",
    description:
      'עוגת שוקולד/וניל בכוס אישית, עם קצפת, תוספות מתוקות וקישוט לבחירה – הפתעה מושלמת לרגעים ספונטניים.',
    heroImage: '/images/cake-bento.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין ספל שכולו אושר!',
    images: [
      { src: '/images/cake-bento.png', alt: 'ספל שכולו אושר' },
      { src: '/images/gallery/bento-1.png', alt: 'עוגה אישית' },
      { src: '/images/gallery/bento-2.png', alt: 'קולקציית עוגות' },
      { src: '/images/category-cakes.png', alt: 'עוגות מגוונות' },
    ],
  },
  {
    slug: 'burnt-paper-cakes',
    title: 'עוגות דף נשרף',
    subtitle: 'אפקט שישאיר את כולם פעורי פה',
    description:
      'הטרנד שכולם מדברים עליו – שורפים את הדף וחושפים הקדשה, תמונה או הפתעה מרגשת',
    heroImage: '/images/category-special.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת דף נשרף!',
    images: [
      { src: '/images/category-special.png', alt: 'עוגת דף נשרף' },
      { src: '/images/cake-tiered.png', alt: 'עוגה מיוחדת' },
      { src: '/images/gallery/choc-ball-2.png', alt: 'דרמה וטעם' },
      { src: '/images/chocolate-ball.png', alt: 'עיצוב מיוחד' },
    ],
  },

  // ── קינוחים ──────────────────────────────────────────────
  {
    slug: 'cup-desserts',
    title: 'מארזי כוסות',
    subtitle: 'קינוח אישי מרשים לכל שולחן',
    description:
      'מבחר קינוחי כוסות אישיים במגוון טעמים לבחירה, עם שילובים עשירים ונראות מרשימה לכל אירוע, במגוון טעמים אהובים מלוטוס ואוראו ועד פיסטוק, קינדר, גבינה פירורים, ריבת חלב ועוד',
    heroImage: '/images/gallery/cups-1.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין מארזי כוסות!',
    images: [
      { src: '/images/gallery/cups-1.png', alt: 'מארז כוסות קינוח' },
      { src: '/images/gallery/cups-2.png', alt: 'כוס קינוח אישית' },
      { src: '/images/gallery/cups-3.png', alt: 'קראמבל בכוס' },
      { src: '/images/category-desserts.png', alt: 'קינוחים' },
    ],
  },
  {
    slug: 'crumble-desserts',
    title: 'מארזי קראמבל',
    subtitle: "",
    description: "מארזי עוגיות קראמבל, במגוון טעמים מטורף שיגרום לכם להתמכר מהביס הראשון . קינדר, לוטוס, ריבת חלב, פיסטוק, בייגלה, נוטלה, סוכריות צבעוניות, מרשמלו ועוד.",
    heroImage: '/images/gallery/cups-3.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין מארזי קראמבל!',
    images: [
      { src: '/images/gallery/cups-3.png', alt: 'קראמבל בכוס' },
      { src: '/images/gallery/cups-2.png', alt: 'קינוח קראמבל' },
      { src: '/images/gallery/cups-1.png', alt: 'מארז קינוחים' },
      { src: '/images/category-desserts.png', alt: 'קינוחים מעוצבים' },
    ],
  },

  {
    slug: 'dedicated-dessert-boxes',
    title: 'מארזי קינוח ייעודיים',
    subtitle: 'כשאוהבים קינוח אחד, מזמינים מארז שלם ממנו',
    description:
      'אוהבים קינוח מסוים? לפעמים אין צורך בשילוב. תוכלו להזמין מארז שלם של קרם ברולה, דונאטס, קאפקייקס, קייק פופ, מגנומים ועוד.',
    heroImage: '/images/category-desserts.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין מארז קינוח ייעודי!',
    images: [
      { src: '/images/category-desserts.png', alt: 'מארז קינוח ייעודי' },
      { src: '/images/gallery/cups-1.png', alt: 'קינוחים אישיים' },
      { src: '/images/gallery/cups-2.png', alt: 'מארז קינוחים' },
      { src: '/images/gallery/cups-3.png', alt: 'קינוחי כוסות' },
    ],
  },

  // ── עיצובים מיוחדים ────────────────────────────────���─────
  {
    slug: 'chocolate-ball',
    title: 'כדורגל שוקולד',
    subtitle: '',
    description:
      'קינוח מושלם לחובבי הכדורגל, שבפנים מסתתר אוצר של ממתקים.',
    heroImage: '/images/gallery/choc-ball-1.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין כדורי שוקולד מתנפצים!',
    images: [
      { src: '/images/gallery/choc-ball-1.png', alt: 'כדור שוקולד לפני פיצוץ' },
      { src: '/images/gallery/choc-ball-2.png', alt: 'כדור שוקולד מתפצח' },
      { src: '/images/gallery/choc-ball-3.png', alt: 'קולקציית כדורי שוקולד' },
      { src: '/images/chocolate-ball.png', alt: 'כדור שוקולד דרמטי' },
    ],
  },
  {
    slug: 'exploding-candy',
    title: 'סוכריה גדולה ומתוקה',
    subtitle: '',
    description:
      'תבנית שוקולד במראה של סוכריה ענקית שמסתירה בתוכה מגוון הפתעות וממתקים.',
    heroImage: '/images/category-special.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין סוכריות מתנפצות!',
    images: [
      { src: '/images/category-special.png', alt: 'סוכריה מתנפצת' },
      { src: '/images/gallery/choc-ball-2.png', alt: 'שוקולד מתפצח' },
      { src: '/images/gallery/choc-ball-3.png', alt: 'מגוון פיצוצים' },
      { src: '/images/chocolate-ball.png', alt: 'עיצוב מיוחד' },
    ],
  },
  {
    slug: 'exploding-egg',
    title: 'ביצת שוקולד ענקית',
    subtitle: '',
    description:
      'חוויה מתוקה וייחודית - שוברים את ביצת השוקולד וחושפים שלל ממתקים ושוקולדים.',
    heroImage: '/images/category-special.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין ביצים מתנפצות!',
    images: [
      { src: '/images/category-special.png', alt: 'ביצה מתנפצת' },
      { src: '/images/chocolate-ball.png', alt: 'שוקולד מפתיע' },
      { src: '/images/gallery/choc-ball-1.png', alt: 'כדור שוקולד' },
      { src: '/images/gallery/choc-ball-3.png', alt: 'עיצובי שוקולד' },
    ],
  },
  {
    slug: 'tiered-cakes',
    title: 'עוגת קומות',
    subtitle: '',
    description:
      'עוגות קומות מרשימות לחתונות, אירועים גדולים וכ�� מי שמחפש את ה-WOW האמיתי.',
    heroImage: '/images/cake-tiered.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת קומות!',
    images: [
      { src: '/images/cake-tiered.png', alt: 'עוגת קומות' },
      { src: '/images/gallery/vintage-1.png', alt: 'עוגת חתונה' },
      { src: '/images/gallery/vintage-2.png', alt: 'עוגת קומות וינטאג\'' },
      { src: '/images/category-cakes.png', alt: 'עוגות חגיגיות' },
    ],
  },
]

// Items that link to their own specific size guides
export const SIZE_GUIDE_SLUGS = [
  'vintage-cakes',
  'mousse-cakes',
  'custom-cakes',
  'burnt-paper-cakes',
  'bento-cakes',       // has its own dedicated size guide
  'number-cakes',      // has its own dedicated size guide
  'rectangular-cakes', // has its own dedicated size guide
  'bow-tie-cakes',     // has its own dedicated size guide
  'mug-cakes',         // has its own dedicated size guide
  'crown-cakes',       // has its own dedicated size guide
]

export function hasSizeGuide(slug: string): boolean {
  return SIZE_GUIDE_SLUGS.includes(slug)
}

// Map each item to its specific size guide page
export function getSizeGuideUrl(slug: string): string {
  switch (slug) {
    case 'bento-cakes':
      return '/bento-size-guide'
    case 'number-cakes':
      return '/number-size-guide'
    case 'rectangular-cakes':
      return '/rectangular-size-guide'
    case 'bow-tie-cakes':
      return '/bow-tie-size-guide'
    case 'mug-cakes':
      return '/mug-cakes-size-guide'
    case 'crown-cakes':
      return '/crown-cakes-size-guide'
    default:
      return '/size-guide' // Falls back to the main size guide for other items
  }
}

export function getGallery(slug: string): GalleryData | undefined {
  return galleries.find((g) => g.slug === slug)
}

export function getAllSlugs(): string[] {
  return galleries.map((g) => g.slug)
}

export function getAllGalleries(): GalleryData[] {
  return galleries
}

// Returns the parent category label + href for breadcrumb navigation
export function getCategoryForSlug(slug: string): { label: string; href: string } {
  const boxesSlugs = ['boxes-events', 'gender-reveal', 'sweet-sixteen', 'bar-bat-mitzvah', 'branded-boxes', 'holiday-boxes']
  const cakesSlugs = ['custom-cakes', 'vintage-cakes', 'mousse-cakes', 'bento-cakes', 'rectangular-cakes', 'bow-tie-cakes', 'number-cakes', 'crown-cakes', 'mug-cakes', 'burnt-paper-cakes']
  const dessertsSlugs = ['cup-desserts', 'crumble-desserts', 'dedicated-dessert-boxes']
  const specialSlugs = ['choc-ball', 'candy-pop', 'broken-egg', 'tiered-cakes', 'burnt-paper-cakes']

  if (boxesSlugs.includes(slug)) return { label: 'מארזים מעוצבים', href: '/category/boxes' }
  if (cakesSlugs.includes(slug)) return { label: 'עוגות מעוצבות', href: '/category/cakes' }
  if (dessertsSlugs.includes(slug)) return { label: 'קינוחים אישיים', href: '/category/desserts' }
  if (specialSlugs.includes(slug)) return { label: 'קולקציית ה-WOW', href: '/category/special' }
  return { label: 'קטגוריות', href: '/#categories' }
}
