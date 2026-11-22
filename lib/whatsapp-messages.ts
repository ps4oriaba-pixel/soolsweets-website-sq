// הודעות וואטסאפ מוכנות. הודעת "פרטים נוספים" משלימה אוטומטית את שם הפריט/הקטגוריה/המדריך שבהם נמצא המבקר.
// הודעות שנשלחות מהכפתור הצף, מכפתורי הוואטסאפ בעמודים ומכרטיסי המוצר – כולן מכאן.

export const WHATSAPP_NUMBER = '972545629058'

// הודעה כללית (דף הבית, המספר בתחתית האתר ועמודים ללא פריט מסוים)
export const GENERAL_MESSAGE = 'שלום סלעית, אשמח לשמוע עוד על העוגות והמארזים שלך 💗'

// "פנייה ישירה" – הלקוח משלים בעצמו על מה הוא מתעניין
export const DIRECT_MESSAGE = 'היי סלעית, אשמח לשמוע פרטים על '

const ITEM_PREFIX = 'היי, ראיתי את האתר בגוגל אשמח לפרטים נוספים בנוגע ל'

// "בנוגע ל" + שם הפריט (השם בלי תוספת אחרי המקף)
export function itemMessage(name: string): string {
  return ITEM_PREFIX + name.split(' - ')[0] + ' 💗'
}

const categoryNames: Record<string, string> = {
  cakes: 'עוגות מעוצבות',
  boxes: 'מארזים מעוצבים',
  desserts: 'קינוחים אישיים',
  special: 'קולקציית ה-WOW',
}

// שמות הפריטים (לפי כתובת הפריט)
const galleryNames: Record<string, string> = {
  'boxes-events': 'רגעים ששווה לחגוג - מארזים בהתאמה אישית',
  'branded-boxes': 'מארזים ממותגים לחברות',
  'holiday-boxes': 'מארזי חג',
  'custom-cakes': 'עוגות בעיצוב אישי',
  'vintage-cakes': "עוגות וינטאג'",
  'mousse-cakes': 'עוגות מוס',
  'bento-cakes': 'עוגות בנטו',
  'rectangular-cakes': 'עוגה מלבנית מעוצבת',
  'bow-tie-cakes': 'עוגת פפיון',
  'number-cakes': 'עוגות מספרים',
  'crown-cakes': 'עוגות כתר',
  'mug-cakes': 'ספל שכולו אושר',
  'burnt-paper-cakes': 'עוגות דף נשרף',
  'cup-desserts': 'מארזי כוסות',
  'crumble-desserts': 'מארזי קראמבל',
  'dedicated-dessert-boxes': 'קינוחים מסוג אחד',
  'chocolate-ball': 'כדורגל שוקולד',
  'exploding-candy': 'סוכריה גדולה ומתוקה',
  'exploding-egg': 'ביצת שוקולד ענקית',
  'tiered-cakes': 'עוגת קומות',
}

// מדריכי הגדלים – אותה הודעה של הפריט שאליו המדריך שייך
const sizeGuideGalleries: Record<string, string> = {
  'bento-size-guide': 'bento-cakes',
  'bow-tie-size-guide': 'bow-tie-cakes',
  'crown-cakes-size-guide': 'crown-cakes',
  'mug-cakes-size-guide': 'mug-cakes',
  'number-size-guide': 'number-cakes',
  'rectangular-size-guide': 'rectangular-cakes',
}

export function getItemMessage(slug: string): string {
  const name = galleryNames[slug]
  return name ? itemMessage(name) : GENERAL_MESSAGE
}

export function getWhatsAppMessage(pathname: string | null): string {
  if (!pathname) return GENERAL_MESSAGE
  const parts = pathname.split('/').filter(Boolean)
  if (parts[0] === 'gallery' && parts[1]) {
    return getItemMessage(decodeURIComponent(parts[1]))
  }
  if (parts[0] === 'category' && parts[1]) {
    const name = categoryNames[parts[1]]
    return name ? itemMessage(name) : GENERAL_MESSAGE
  }
  if (parts[0] === 'size-guide') {
    return itemMessage('בחירת גודל עוגה מתאים')
  }
  if (parts[0] && sizeGuideGalleries[parts[0]]) {
    return getItemMessage(sizeGuideGalleries[parts[0]])
  }
  return GENERAL_MESSAGE
}

export function getWhatsAppUrl(pathname: string | null): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getWhatsAppMessage(pathname))}`
}
