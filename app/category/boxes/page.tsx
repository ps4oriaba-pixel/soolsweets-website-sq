import CategoryPage from '@/components/category-page'
import { getProductDescription } from '@/lib/product-descriptions'

export const metadata = {
  title: 'מארזים מעוצבים | SoolSweets',
  description: 'מארזים לאירועים, ימי הולדת, גילוי מין ובר ובת מצווה.',
}

const products = [
  {
    title: 'רגעים ששווה לחגוג',
    description: getProductDescription('boxes-events'),
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/box-new-04-8bMbHS0J4c9V0o8XJIUeFySPWyYnNl.webp',
    slug: 'boxes-events',
  },
  {
    title: 'חגים',
    description: getProductDescription('holiday-boxes'),
    image: '/images/category-holiday-boxes.png',
    slug: 'holiday-boxes',
  },
  {
    title: 'עסקים',
    description: getProductDescription('branded-boxes'),
    image: '/images/category-business-boxes.png',
    slug: 'branded-boxes',
  },
  {
    title: 'מארז בהתאמה אישית',
    description: getProductDescription('bar-bat-mitzvah'),
    image: '/images/category-boxes.png',
    slug: 'bar-bat-mitzvah',
  },
]

export default function BoxesPage() {
  return (
    <CategoryPage
      title="מארזים מעוצבים"
      subtitle="מארזים בהתאמה אישית לכל אירוע"
      heroImage="/images/category-boxes.png"
      heroAlt="מארזים מעוצבים של SoolSweets"
      description=" הרגעים הכי מרגשים מתחילים במארז מוקפד שנוצר בהתאמה אישית בשילוב של עיצוב אלגנטי, חומרי גלם איכותיים ופרטים קטנים שעושים את כל ההבדל, כי יש רגעים שמגיע להם הרבה יותר מ”סתם מתנה”."
      products={products}
      whatsappMessage="שלום סלעית, אשמח להזמין מארז מעוצב!"
    />
  )
}
