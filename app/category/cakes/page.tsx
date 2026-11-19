import CategoryPage from '@/components/category-page'
import { getProductDescription } from '@/lib/product-descriptions'

export const metadata = {
  title: 'עוגות מעוצבות | SoolSweets',
  description: 'עוגות וינטאג׳, מוס, בנטו, מספרים, ספל ועיצוב אישי לכל אירוע.',
}

const products = [
  {
    title: 'עוגות בעיצוב אישי',
    description: getProductDescription('custom-cakes'),
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/custom-cake-35-7x6cgchNodn2SXTG7bSyID8bbFW037.webp',
    slug: 'custom-cakes',
  },
  {
    title: "עוגות וינטאג'",
    description: getProductDescription('vintage-cakes'),
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cake-22-zFJiEZRIDRDfIYUNFfh8LB5LvqIJOb.webp',
    slug: 'vintage-cakes',
  },
  {
    title: 'עוגות בנטו',
    description: getProductDescription('bento-cakes'),
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bento-cake-white-scw0h9L47UwlRNU79YGH5OsY39Wdmm.webp',
    slug: 'bento-cakes',
  },
  {
    title: 'עוגה מלבנית מעוצבת',
    description: getProductDescription('rectangular-cakes'),
    image: '/images/gallery/rectangular-cakes/IMG_9818.webp',
    slug: 'rectangular-cakes',
  },
  {
    title: 'עוגות מספרים',
    description: getProductDescription('number-cakes'),
    image: '/images/gallery/number-cakes/20230420_153709.webp',
    slug: 'number-cakes',
  },
  {
    title: 'עוגת פפיון',
    description: getProductDescription('bow-tie-cakes'),
    image: '/images/gallery/bow-cakes/IMG_4151.webp',
    slug: 'bow-tie-cakes',
  },
  {
    title: 'עוגות כתר',
    description: getProductDescription('crown-cakes'),
    image: '/images/gallery/crown-cakes/IMG_1199.webp',
    slug: 'crown-cakes',
  },
  {
    title: 'עוגות מוס',
    description: getProductDescription('mousse-cakes'),
    image: '/images/gallery/mousse-cakes/20221028_144630.webp',
    slug: 'mousse-cakes',
  },
  {
    title: 'עוגות דף נשרף',
    description: getProductDescription('burnt-paper-cakes'),
    image: '/images/gallery/burn-away-cakes/IMG_0455.webp',
    note: 'וואו-אפקט',
    slug: 'burnt-paper-cakes',
  },
  {
    title: 'ספל שכולו אושר',
    description: getProductDescription('mug-cakes'),
    image: '/images/gallery/cup-cakes/F7580070-3AA8-4BD3-8C5B-8FFE6627552B.webp',
    note: 'בהתראה קצרה',
    slug: 'mug-cakes',
  },
]

export default function CakesPage() {
  return (
    <CategoryPage
      title="עוגות מעוצבות"
      subtitle="כל עוגה היא יצירת אומנות שמעוצבת במיוחד עבורכם"
      heroImage="/images/category-designed-cakes-new.png"
      heroAlt="עוגות מעוצבות של SoolSweets"
      description=" העוגה שתהפוך את החגיגה לבלתי נשכחת.
עוגה שתהיה מרכז החגיגה מעיצוב וינטאג’ קלאסי ועד עוגות מוס, בנטו, מספרים ועיצובים בהתאמה אישית – יפות לעין, טעימות בכל ביס, ומדויקות עד הפרט האחרון."
      products={products}
      whatsappMessage="שלום סלעית, אשמח להזמין עוגה מעוצבת!"
    />
  )
}
