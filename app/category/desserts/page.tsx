import CategoryPage from '@/components/category-page'
import { itemMessage } from '@/lib/whatsapp-messages'
import { getProductDescription } from '@/lib/product-descriptions'

export const metadata = {
  title: 'קינוחים אישיים | SoolSweets',
  description: 'קינוחים אישיים – פינוקים קטנים עם נוכחות גדולה, מעוצבים בקפידה.',
}

const products = [
  {
    title: 'מארזי כוסות',
    description: getProductDescription('cup-desserts'),
    image: '/images/gallery/dessert-cups/IMG_6804.webp',
    slug: 'cup-desserts',
  },
  {
    title: 'מארזי קראמבל',
    description: getProductDescription('crumble-desserts'),
    image: '/images/gallery/crumble-cookies/user-crumble-2.png',
    slug: 'crumble-desserts',
  },
  {
    title: 'קינוחים מסוג אחד',
    description: getProductDescription('dedicated-dessert-boxes'),
    image: '/images/gallery/custom-boxes/IMG_8701.webp',
    slug: 'dedicated-dessert-boxes',
  },
]

export default function DessertsPage() {
  return (
    <CategoryPage
      title="קינוחים אישיים"
      subtitle="פינוקים קטנים עם נוכחות גדולה"
      heroImage="/images/category-personal-desserts-new.png"
      heroAlt="קינוחים אישיים של SoolSweets"
      description="פינוקים אישיים במגוון טעמים ועיצובים – מושלמים לאירוח, לחגיגות ולכל רגע מתוק."
      products={products}
      whatsappMessage={itemMessage('קינוחים אישיים')}
    />
  )
}
