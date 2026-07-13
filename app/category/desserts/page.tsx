import CategoryPage from '@/components/category-page'

export const metadata = {
  title: 'קינוחים אישיים | SoolSweets',
  description: 'קינוחים אישיים – פינוקים קטנים עם נוכחות גדולה, מעוצבים בקפידה.',
}

const products = [
  {
    title: 'מארזי כוסות',
    description:
      'קינוחים בכוסות זכוכית עם שכבות קרם, ביסקוויט ותוספות – קינוח אישי מרשים לכל שולחן.',
    image: '/images/gallery/cups-1.png',
    slug: 'cup-desserts',
  },
  {
    title: 'מארזי קרמבל',
    description:
      'שכבות פריכות של קרמבל, קרם וממרח – שילוב מושלם של מרקמים וטעמים שמתמוגג בפה.',
    image: '/images/gallery/cups-3.png',
    slug: 'crumble-desserts',
  },
]

export default function DessertsPage() {
  return (
    <CategoryPage
      title="קינוחים אישיים"
      subtitle="פינוקים קטנים עם נוכחות גדולה"
      heroImage="/images/category-desserts.png"
      heroAlt="קינוחים אישיים של SoolSweets"
      description="פינוקים אישיים במגוון טעמים ועיצובים – מושלמים לאירוח, לחגיגות או סתם לרגע מתוק."
      products={products}
      whatsappMessage="שלום סלעית, אשמח להזמין קינוחים אישיים!"
    />
  )
}
