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
    description:
      'ימי הולדת, Sweet 16, בר/בת מצווה, גילוי מין העובר, ברית ובריתה, לידה, חתונה ואירוסין, הצעת נישואין, יום נישואין, גיוס ועוד..',
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
      'כי לכל חג מגיע מארז מיוחד. מתוקים מעוצבים לחגים ולאירועים לאורך כל השנה',
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
    description: 'מארזים מעוצבים בהתאמה אישית לעובדים, לקוחות ושותפים, עם אפשרות למיתוג והתאמה אישית – הדרך המתוקה להוקיר, להפתיע ולהשאיר רושם',
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
    description: 'בחרו את הקינוחים, הצבעים והכיתוב – ואנחנו ניצור עבורכם מארז ייחודי בדיוק כמו שדמיינתם.',
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
    heroImage: '/images/hero.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגה בעיצוב אישי!',
    images: [
      { src: '/images/hero.png', alt: 'עוגות בעיצוב אישי' },
      { src: '/images/cake-vintage.png', alt: 'עוגה אישית' },
      { src: '/images/gallery/vintage-1.png', alt: 'עיצוב מיוחד' },
      { src: '/images/gallery/bento-3.png', alt: 'עוגה ��ם הקדשה' },
      { src: '/images/category-cakes.png', alt: 'מגוון עוגות' },
    ],
  },

  {
    slug: 'vintage-cakes',
    title: 'עוגות וינטאג\'',
    subtitle: 'רומנטיקה, עדינות ואווירה של פעם',
    description: " עיצוב רומנטי ועדין עם זילופי וינטאג’, פפיונים, פרחים וגימורים אלגנטיים. מושלם לכל אירוע .",
    heroImage: '/images/gallery/vintage-1.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת וינטאג\'!',
    images: [
      { src: '/images/gallery/vintage-1.png', alt: 'עוגת וינטאג\' עם פרחים' },
      { src: '/images/gallery/vintage-2.png', alt: 'עוגת חתונה וינטאג\'' },
      { src: '/images/gallery/vintage-3.png', alt: 'פרוסת עוגת וינטאג\'' },
      { src: '/images/cake-vintage.png', alt: 'עוגת וינטאג\' קלאסית' },
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
    heroImage: '/images/gallery/bento-1.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת בנטו!',
    images: [
      { src: '/images/gallery/bento-1.png', alt: 'עוגת בנטו ורוד' },
      { src: '/images/gallery/bento-2.png', alt: 'קולקציית בנטו' },
      { src: '/images/gallery/bento-3.png', alt: 'בנ��ו אישי עם הקדשה' },
      { src: '/images/cake-bento.png', alt: 'עוגת בנטו קלאסית' },
    ],
  },
  {
    slug: 'rectangular-cakes',
    title: 'עוגה מלבנית מעוצבת',
    subtitle: 'עיצוב מודרני ונקי – אלגנטי לכל שולחן',
    description:
      'מושלמת לאירועים גדולים ולחגיגות משפחתיות – בעיצוב מוקפד ובהתאמה אישית לכל סגנון.',
    heroImage: '/images/category-cakes.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגה מלבנית!',
    images: [
      { src: '/images/category-cakes.png', alt: 'עוגה מלבנית' },
      { src: '/images/hero.png', alt: 'עוגות מעוצבות' },
      { src: '/images/cake-vintage.png', alt: 'עוגה מעוצבת' },
      { src: '/images/gallery/vintage-1.png', alt: 'עיצוב עוגה' },
    ],
  },
  {
    slug: 'bow-tie-cakes',
    title: 'עוגת פפיון',
    subtitle: "",
    description:
      'עוגות בעיצוב אלגנטי עם פפיונים מרשימים  מבצק סוכר – שילוב מושלם של יוקרה, עדינות וסטייל.',
    heroImage: '/images/cake-bow-tie.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת פפיון!',
    images: [
      { src: '/images/cake-bow-tie.png', alt: 'עוגת פפיון' },
      { src: '/images/cake-vintage.png', alt: 'עוגה שוקולדית' },
      { src: '/images/gallery/vintage-1.png', alt: 'קרם חמאה שוויצרי' },
      { src: '/images/gallery/vintage-2.png', alt: 'עוגה מעוצבת' },
    ],
  },
  
  {
    slug: 'number-cakes',
    title: 'עוגות מספרים',
    subtitle: 'לכל יום הולדת מיוחד – במספר שלו',
    description:
      'עוגות מספר או אות מבצק שקדים או עוגת שוקולד אפויה, המעוטרות בקרם מסקרפונה עשיר, שוקולדים ואלמנטים מעוצבים בהתאמה אישית.',
    heroImage: '/images/cake-numbers.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת מספרים!',
    images: [
      { src: '/images/cake-numbers.png', alt: 'עוגת מספרים' },
      { src: '/images/category-cakes.png', alt: 'עוגת מספרים עם קישוטים' },
      { src: '/images/hero.png', alt: 'עוגות לאירועים' },
      { src: '/images/gallery/vintage-1.png', alt: 'עיצוב עדין' },
    ],
  },
  {
    slug: 'crown-cakes',
    title: 'עוגות כתר',
    subtitle: 'עיצוב מלכותי שכולם ידברו עליו',
    description:
      'עוגה בעיצוב מלכותי עם כתר נוצץ, פפיונים ונצנצים שמתפזרים באפקט מרהיב – לחגיגה שכולה זוהר.',
    heroImage: '/images/gallery/vintage-1.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת כתר!',
    images: [
      { src: '/images/gallery/vintage-1.png', alt: 'עוגת כתר מלכותית' },
      { src: '/images/gallery/vintage-2.png', alt: 'עוגת כתר עם נצנצים' },
      { src: '/images/cake-bow-tie.png', alt: 'עוגת כתר עם פפיונים' },
      { src: '/images/cake-vintage.png', alt: 'עוגת כתר אלגנטית' },
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
      { src: '/images/gallery/cups-3.png', alt: 'קרמבל בכוס' },
      { src: '/images/category-desserts.png', alt: 'קינוחים' },
    ],
  },
  {
    slug: 'crumble-desserts',
    title: 'מארזי קרמבל',
    subtitle: 'פריכות, קרמי, ממכר',
    description:
      'מארזי עוגיות קראמבל רכים מבפנים ופציחים מבחוץ, במגוון טעמים מטורף שיגרום לכם להתמכר מהביס הראשון . קינדר, לוטוס, ריבת חלב, פיסטוק, בייגלה, נוטלה, סוכריות צבעוניות, מרשמלו ועוד.',
    heroImage: '/images/gallery/cups-3.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין מארזי קרמבל!',
    images: [
      { src: '/images/gallery/cups-3.png', alt: 'קרמבל בכוס' },
      { src: '/images/gallery/cups-2.png', alt: 'קינוח קרמבל' },
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

  // ── עיצובים מיוחדים ──────────────────────────────────────
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
      'עוגות קומות מרשימות לחתונות, אירועים גדולים וכל מי שמחפש את ה-WOW האמיתי.',
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
