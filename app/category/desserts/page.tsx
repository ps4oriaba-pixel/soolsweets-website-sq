import CategoryPage from '@/components/category-page'

export const metadata = {
  title: 'קינוחים | SoolSweets',
  description: 'מארזי כוסות וקרמבל – קינוחים עדינים, טעימים ומרהיבים להגשה.',
}

const products = [
  {
    title: 'מארזי כוסות',
    description:
      'קינוחים בכוסות זכוכית עם שכבות קרם, ביסקוויט ותוספות – קינוח אישי מרשים לכל שולחן.',
    image: '/images/category-desserts.png',
  },
  {
    title: 'מארזי קרמבל',
    description:
      'שכבות פריכות של קרמבל, קרם וממרח – שילוב מושלם של מרקמים וטעמים שמתמוגג בפה.',
    image: '/images/category-desserts.png',
  },
]

export default function DessertsPage() {
  return (
    <CategoryPage
      title="קינוחים"
      subtitle="קינוחים עדינים ומרהיבים – להגשה בכל אירוע"
      heroImage="/images/category-desserts.png"
      heroAlt="קינוחים של SoolSweets"
      description="מארזי כוסות וקרמבל – קינוחים אישיים שמרשימים הן בעיניים והן בחיך. מושלמים לאירועים, שולחנות ממתקים, או סתם כי מגיע לכם משהו מתוק ומיוחד."
      products={products}
      whatsappMessage="שלום סלעית, אשמח להזמין קינוחים!"
    />
  )
}
