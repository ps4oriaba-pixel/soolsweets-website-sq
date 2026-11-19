import CategoryPage from '@/components/category-page'
import { getProductDescription } from '@/lib/product-descriptions'

export const metadata = {
  title: 'קולקציית ה-WOW | SoolSweets',
  description: 'כדור מתנפץ, סוכריה מתנפצת, ביצה מתנפצת, עוגות קומות ועוגות דף נשרף.',
}

const products = [
  {
    title: 'כדורגל שוקולד',
    description: getProductDescription('chocolate-ball'),
    image: '/images/gallery/exploding-football/IMG_3471.webp',
    note: 'הכי מבוקש!',
    slug: 'chocolate-ball',
  },
  {
    title: 'סוכריה גדולה ומתוקה',
    description: getProductDescription('exploding-candy'),
    image: '/images/gallery/exploding-candy/candy-lollipop.webp',
    slug: 'exploding-candy',
  },
  {
    title: 'ביצת שוקולד ענקית',
    description: getProductDescription('exploding-egg'),
    image: '/images/gallery/chocolate-egg/20240304_194842.webp',
    slug: 'exploding-egg',
  },
  {
    title: 'עוגות קומות',
    description: getProductDescription('tiered-cakes'),
    image: '/images/gallery/levels-cakes/tiered-cake-blue.webp',
    slug: 'tiered-cakes',
  },
  {
    title: 'עוגות דף נשרף',
    description: getProductDescription('burnt-paper-cakes'),
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
      heroImage="/images/category-wow-new.png"
      heroAlt="קולקציית ה-WOW של SoolSweets"
      description={<>מחפשים את אפקט ה”וואו”? כאן תמצאו את היצירות הייחודיות של <span dir="ltr" className="font-serif italic font-bold">SoolSweets</span> – כאלה שכולם ידברו עליהן גם אחרי שהאירוע יסתיים. מכדורגל שוקולד, סוכריה מתנפצת, ביצת שוקולד ענקית ועד עוגות קומות ויצירות מתוקות בהתאמה אישית – לחגיגות שרוצות להרשים.</>}
      products={products}
      whatsappMessage="שלום סלעית, אשמח לשמוע על קולקציית ה-WOW שלך!"
    />
  )
}
