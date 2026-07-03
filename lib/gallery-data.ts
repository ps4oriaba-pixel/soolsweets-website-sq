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
    title: 'מארזים לאירועים',
    subtitle: 'מארזים מעוצבים שמרגישים כמו מתנה אמיתית',
    description:
      'כל מארז מעוצב ביד, עם חומרי גלם מהמשובחים ביותר. מושלם לימי הולדת, תודה, חגיגות ומתנות אישיות.',
    heroImage: '/images/gallery/boxes-events-1.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין מארז לאירוע!',
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
    title: 'מארזי גילוי מין העובר',
    subtitle: 'הרגע המיוחד שלכם – בצבעי ורוד או כחול',
    description:
      'מארז מפתיע ובלתי נשכח שיגרום לכולם לגעות. עיצוב אישי לפי המין, עם ממתקים וקינוחים שמסגירים את הסוד.',
    heroImage: '/images/gallery/gender-reveal-1.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין מארז גילוי מין!',
    images: [
      { src: '/images/gallery/gender-reveal-1.png', alt: 'מארז גילוי מין ורוד' },
      { src: '/images/gallery/gender-reveal-2.png', alt: 'שולחן ממתקים לבת' },
      { src: '/images/gallery/gender-reveal-3.png', alt: 'מארז גילוי מין כחול' },
      { src: '/images/category-boxes.png', alt: 'מארזים בעיצוב מיוחד' },
    ],
  },
  {
    slug: 'sweet-sixteen',
    title: 'Sweet 16',
    subtitle: 'חגיגת שש-עשרה – מתוקה, צבעונית ובלתי נשכחת',
    description: 'מארז מיוחד שמציין את הגיל הנפלא הזה בסגנון אישי ומרהיב.',
    heroImage: '/images/box-birthday.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין מארז Sweet 16!',
    images: [
      { src: '/images/box-birthday.png', alt: 'מארז Sweet 16' },
      { src: '/images/gallery/boxes-events-1.png', alt: 'מארז חגיגי' },
      { src: '/images/gallery/boxes-events-2.png', alt: 'מארז מתנה' },
      { src: '/images/gallery/boxes-events-3.png', alt: 'קולקציית מארזים' },
    ],
  },
  {
    slug: 'bar-bat-mitzvah',
    title: 'בר ובת מצווה',
    subtitle: 'אירוע חיים – מארז שראוי לו',
    description: 'מארז מפואר ומרהיב לאחד האירועים החשובים בחיים, עם עיצוב אישי ומלכותי.',
    heroImage: '/images/category-boxes.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין מארז לבר/בת מצווה!',
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
    slug: 'vintage-cakes',
    title: 'עוגות וינטאג\'',
    subtitle: 'רומנטיקה, עדינות ואווירה של פעם',
    description:
      'עוגות בעיצוב וינטאג\' עם פרחים, ריפלס ואווירה נשית ועדינה. מושלם לחתונות, ימי הולדת ואירועים אינטימיים.',
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
    description:
      'עוגות מוס בעיצוב מינימליסטי ומרשים. כל שכבה מדוקדקת, כל ציפוי מושלם.',
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
      'עוגות בנטו אישיות – מושלמות כמתנה, לחגיגה אישית, או סתם כי מגיע לכם.',
    heroImage: '/images/gallery/bento-1.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת בנטו!',
    images: [
      { src: '/images/gallery/bento-1.png', alt: 'עוגת בנטו ורוד' },
      { src: '/images/gallery/bento-2.png', alt: 'קולקציית בנטו' },
      { src: '/images/gallery/bento-3.png', alt: 'בנטו אישי עם הקדשה' },
      { src: '/images/cake-bento.png', alt: 'עוגת בנטו קלאסית' },
    ],
  },
  {
    slug: 'rectangular-cakes',
    title: 'עוגה מלבנית מעוצבת',
    subtitle: 'עיצוב מודרני ונקי – אלגנטי לכל שולחן',
    description:
      'עוגות מלבניות בפורמט מודרני ונקי. מרשים, שונה ומושלם לכל אירוע.',
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
    slug: 'custom-cakes',
    title: 'עוגות בעיצוב אישי',
    subtitle: 'העלו כל רעיון – ואני אגשים אותו',
    description:
      'עוגה שמספרת את הסיפור שלכם. הביאו רעיון, תמונה, צבע, וביחד ניצור משהו שלא קיים עדיין.',
    heroImage: '/images/hero.png',
    whatsappMessage: 'שלום סלעית, אשמח לשמוע על עוגה בעיצוב אישי!',
    images: [
      { src: '/images/hero.png', alt: 'עוגות בעיצוב אישי' },
      { src: '/images/cake-vintage.png', alt: 'עוגה אישית' },
      { src: '/images/gallery/vintage-1.png', alt: 'עיצוב מיוחד' },
      { src: '/images/gallery/bento-3.png', alt: 'עוגה עם הקדשה' },
      { src: '/images/category-cakes.png', alt: 'מגוון עוגות' },
    ],
  },
  {
    slug: 'number-cakes',
    title: 'עוגות מספרים',
    subtitle: 'לכל יום הולדת מיוחד – במספר שלו',
    description:
      'עוגה בצורת המספר שלכם, מעוטרת במקרון, פרחים ופירות. חד-פעמית, מרהיבה ובלתי נשכחת.',
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
    slug: 'mug-cakes',
    title: 'עוגות ספל',
    subtitle: 'טעימה, מרשימה – ומוכנה מהר',
    description:
      'עוגות ספל להתראה קצרה – כי לפעמים ההזדמנות לא מחכה. טעימות כמו תמיד, מהירות להפתיע.',
    heroImage: '/images/cake-bento.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת ספל!',
    images: [
      { src: '/images/cake-bento.png', alt: 'עוגת ספל' },
      { src: '/images/gallery/bento-1.png', alt: 'עוגה אישית' },
      { src: '/images/gallery/bento-2.png', alt: 'קולקציית עוגות' },
      { src: '/images/category-cakes.png', alt: 'עוגות מגוונות' },
    ],
  },

  // ── קינוחים ──────────────────────────────────────────────
  {
    slug: 'cup-desserts',
    title: 'מארזי כוסות',
    subtitle: 'קינוח אישי מרשים לכל שולחן',
    description:
      'קינוחים בכוסות זכוכית עם שכבות קרם, ביסקוויט ותוספות. מושלמים להגשה באירועים ולמתנות.',
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
      'שכבות פריכות של קרמבל, קרם וממרח. שילוב מושלם של מרקמים וטעמים שמתמוגג בפה.',
    heroImage: '/images/gallery/cups-3.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין מארזי קרמבל!',
    images: [
      { src: '/images/gallery/cups-3.png', alt: 'קרמבל בכוס' },
      { src: '/images/gallery/cups-2.png', alt: 'קינוח קרמבל' },
      { src: '/images/gallery/cups-1.png', alt: 'מארז קינוחים' },
      { src: '/images/category-desserts.png', alt: 'קינוחים מעוצבים' },
    ],
  },

  // ── עיצובים מיוחדים ──────────────────────────────────────
  {
    slug: 'chocolate-ball',
    title: 'כדור שוקולד מתנפץ',
    subtitle: 'מופע קסמים על הצלחת',
    description:
      'כדור שוקולד דרמטי שנשפך עליו רוטב חם וחושף הפתעה בפנים. חוויה שכולם ידברו עליה.',
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
    title: 'סוכריה מתנפצת',
    subtitle: 'הפתעה אמיתית בכל נגיסה',
    description:
      'סוכריית שוקולד ענקית שמתפצחת לחשוף ממתקים וקינוחים – הפתעה שתגרום לכולם לצחוק ולחייך.',
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
    title: 'ביצה מתנפצת',
    subtitle: 'הסוד הכי מתוק – נחשף!',
    description:
      'ביצת שוקולד מפתיעה שמסתירה בפנים מתנה מתוקה. מושלמת לפסחא, הפתעות וימי הולדת.',
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
    title: 'עוגות קומות',
    subtitle: 'נוכחות מלכותית בכל שולחן',
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
  {
    slug: 'burnt-paper-cakes',
    title: 'עוגות דף נשרף',
    subtitle: 'אפקט שישאיר את כולם פעורי פה',
    description:
      'עוגה עם דף אכיל שנשרף בלהבה כדי לחשוף תמונה או הפתעה מתחתיו. הוואו-אפקט שחיפשתם.',
    heroImage: '/images/category-special.png',
    whatsappMessage: 'שלום סלעית, אשמח להזמין עוגת דף נשרף!',
    images: [
      { src: '/images/category-special.png', alt: 'עוגת דף נשרף' },
      { src: '/images/cake-tiered.png', alt: 'עוגה מיוחדת' },
      { src: '/images/gallery/choc-ball-2.png', alt: 'דרמה וטעם' },
      { src: '/images/chocolate-ball.png', alt: 'עיצוב מיוחד' },
    ],
  },
]

export function getGallery(slug: string): GalleryData | undefined {
  return galleries.find((g) => g.slug === slug)
}

export function getAllSlugs(): string[] {
  return galleries.map((g) => g.slug)
}
