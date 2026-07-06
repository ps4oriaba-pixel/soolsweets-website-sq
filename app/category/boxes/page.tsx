import CategoryPage from '@/components/category-page'

export const metadata = {
  title: 'מארזים מעוצבים | SoolSweets',
  description: 'מארזים לאירועים, ימי הולדת, גילוי מין ובר ובת מצווה.',
}

const products = [
  {
    title: 'רגעים ששווה לחגוג',
    description: 'ימי הולדת, Sweet 16, בר/בת מצווה, גילוי מין העובר, ברית ובריתה, לידה, חתונה ואירוסין, הצעת נישואין, יום נישואין.',
    image: '/images/gallery/boxes-events-1.png',
    slug: 'boxes-events',
  },
  {
    title: 'חגים',
    description: 'רגע מיוחד ובלתי נשכח – מארז מפתיע בצבעי ורוד או כחול.',
    image: '/images/gallery/gender-reveal-1.png',
    slug: 'holidays',
  },
  {
    title: 'עסקים',
    description: 'מארז מיוחד לחגיגת שש-עשרה – מתוק, צבעוני ומושלם לגיל המיוחד.',
    image: '/images/box-birthday.png',
    note: 'Sweet 16',
    slug: 'business',
  },
  {
    title: 'בהתאמה אישית',
    description: 'מארז מפואר ומרהיב לאחד האירועים החשובים בחיים.',
    image: '/images/category-boxes.png',
    slug: 'Custom made',
  },
]

export default function BoxesPage() {
  return (
    <CategoryPage
      title="מארזים מעוצבים"
      subtitle="מתנה שנזכרים בה – מארזים בהתאמה אישית לכל אירוע"
      heroImage="/images/category-boxes.png"
      heroAlt="מארזים מעוצבים של SoolSweets"
      description="מארז מעוצב הוא הרבה יותר ממתנה – הוא חוויה שלמה. כל מארז מעוצב בהתאמה אישית לאירוע, לצבעים ולסגנון שלכם, עם מוצרי קינוחים ואפייה מהמשובחים ביותר."
      products={products}
      whatsappMessage="שלום סלעית, אשמח להזמין מארז מעוצב!"
    />
  )
}
