import CategoryPage from '@/components/category-page'
import { itemMessage } from '@/lib/whatsapp-messages'
import { getProductDescription } from '@/lib/product-descriptions'

export const metadata = {
  title: 'מארזים מעוצבים | SoolSweets',
  description: 'מארזים לאירועים, ימי הולדת, גילוי מין ובר ובת מצווה.',
}

const products = [
  {
    title: 'רגעים ששווה לחגוג - מארזים בהתאמה אישית',
    description: getProductDescription('boxes-events'),
    image: '/images/gallery/boxes-events/IMG_9596.webp',
    slug: 'boxes-events',
  },
  {
    title: 'חגים',
    description: getProductDescription('holiday-boxes'),
    image: '/images/gallery/holiday-boxes/IMG_7157.webp',
    slug: 'holiday-boxes',
  },
  {
    title: 'עסקים',
    description: getProductDescription('branded-boxes'),
    image: '/images/gallery/branded-boxes/20240302_145422.webp',
    slug: 'branded-boxes',
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
      whatsappMessage={itemMessage('מארזים מעוצבים')}
    />
  )
}
