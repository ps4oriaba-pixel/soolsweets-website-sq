import CategoryPage from '@/components/category-page'

export const metadata = {
  title: 'קולקציית ה-WOW | SoolSweets',
  description: 'כדור מתנפץ, סוכריה מתנפצת, ביצה מתנפצת, עוגות קומות ועוגות דף נשרף.',
}

const products = [
  {
    title: 'כדורגל שוקולד',
    description:
      'קינוח מושלם לחובבי הכדורגל, שבפנים מסתתר אוצר של ממתקים.',
    image: '/images/gallery/exploding-football/IMG_3463.webp',
    note: 'הכי מבוקש!',
    slug: 'chocolate-ball',
  },
  {
    title: 'סוכריה גדולה ומתוקה',
    description: 'תבנית שוקולד במראה של סוכריה ענקית שמסתירה בתוכה מגוון הפתעות וממתקים.',
    image: '/images/gallery/exploding-candy/20240303_001606.webp',
    slug: 'exploding-candy',
  },
  {
    title: 'ביצת שוקולד ענקית',
    description: 'חוויה מתוקה וייחודית - שוברים את ביצת השוקולד וחושפים שלל ממתקים ושוקולדים.',
    image: '/images/category-special.png',
    slug: 'exploding-egg',
  },
  {
    title: 'עוגות קומות',
    description:
      'עוגות קומות מרשימות לחתונות, אירועים גדולים וכל מי שמחפש את ה-WOW האמיתי.',
    image: '/images/cake-tiered.png',
    slug: 'tiered-cakes',
  },
  {
    title: 'עוגות דף נשרף',
    description: 'הטרנד שכולם מדברים עליו – שורפים את הדף וחושפים הקדשה, תמונה או הפתעה מרגשת.',
    image: '/images/gallery/burn-away-cakes/IMG_0455.webp',
    note: 'וואו-אפקט',
    slug: 'burnt-paper-cakes',
  },
]

export default function SpecialPage() {
  return (
    <CategoryPage
      title="קולקציית ה-WOW"
      subtitle="חוויות שוקולד שלא תשכחו לעולם"
      heroImage="/images/category-special.png"
      heroAlt="קולקציית ה-WOW של SoolSweets"
      description=" מחפשים את אפקט ה”וואו”? כאן תמצאו את היצירות הייחודיות של Soolsweets – כאלה שכולם ידברו עליהן גם אחרי שהאירוע יסתיים. מכדורגל שוקולד, סוכריה מתנפצת, ביצת שוקולד ענקית ועד עוגות קומות ויצירות מתוקות בהתאמה אישית – לחגיגות שרוצות להרשים."
      products={products}
      whatsappMessage="שלום סלעית, אשמח לשמוע על קולקציית ה-WOW שלך!"
    />
  )
}
