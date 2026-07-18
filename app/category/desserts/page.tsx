import CategoryPage from '@/components/category-page'

export const metadata = {
  title: 'קינוחים אישיים | SoolSweets',
  description: 'קינוחים אישיים – פינוקים קטנים עם נוכחות גדולה, מעוצבים בקפידה.',
}

const products = [
  {
    title: 'מארזי כוסות',
    description: "מבחר קינוחי כוסות אישיים במגוון טעמים לבחירה, עם שילובים עשירים ונראות מרשימה לכל אירוע, במגוון טעמים אהובים מלוטוס ואוראו ועד פיסטוק, קינדר, גבינה פירורים, ריבת חלב ועוד",
    image: '/images/gallery/cups-1.png',
    slug: 'cup-desserts',
  },
  {
    title: 'מארזי קרמבל',
    description: "מארזי עוגיות קראמבל, במגוון טעמים מטורף שיגרום לכם להתמכר מהביס הראשון . קינדר, לוטוס, ריבת חלב, פיסטוק, בייגלה, נוטלה, סוכריות צבעוניות, מרשמלו ועוד.",
    image: '/images/gallery/cups-3.png',
    slug: 'crumble-desserts',
  },
  {
    title: 'מארזי קינוח ייעודיים',
    description: 'אוהבים קינוח מסוים? לפעמים אין צורך בשילוב. תוכלו להזמין מארז שלם של קרם ברולה, דונאטס, קאפקייקס, קייק פופ, מגנומים ועוד.',
    image: '/images/category-desserts.png',
    slug: 'dedicated-dessert-boxes',
  },
]

export default function DessertsPage() {
  return (
    <CategoryPage
      title="קינוחים אישיים"
      subtitle="פינוקים קטנים עם נוכחות גדולה"
      heroImage="/images/category-desserts.png"
      heroAlt="קינוחים אישיים של SoolSweets"
      description="פינוקים אישיים במגוון טעמים ועיצובים – מושלמים לאירוח, לחגיגות ולכל רגע מתוק."
      products={products}
      whatsappMessage="שלום סלעית, אשמח להזמין קינוחים אישיים!"
    />
  )
}
