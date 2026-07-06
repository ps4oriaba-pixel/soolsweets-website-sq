import CategoryPage from '@/components/category-page'

export const metadata = {
  title: 'מארזים מעוצבים | SoolSweets',
  description: 'מארזים לאירועים, ימי הולדת, גילוי מין ובר ובת מצווה.',
}

const products = [
  {
    title: 'רגעים ששווה לחגוג',
    description: 'ימי הולדת, Sweet 16, בר/בת מצווה, גילוי מין העובר, ברית ובריתה, לידה, חתונה ואירוסין, הצעת נישואין, יום נישואין, גיוס ועוד..',
    image: '/images/gallery/boxes-events-1.png',
    slug: 'boxes-events',
  },
  {
    title: 'חגים',
    description: 'ראש השנה, פורים, פסח, חנוכה, שבועות, ולנטיין, יום המשפחה',
    image: '/images/gallery/gender-reveal-1.png',
    slug: 'gender-reveal',
  },
  {
    title: 'עסקים',
    description: 'מתנות לעובדים, מתנות ללקוחות, השקות, כנסים, מיתוג עסקים',
    image: '/images/box-birthday.png',
    note: 'Sweet 16',
    slug: 'sweet-sixteen',
  },
  {
    title: 'בהתאמה אישית',
    description: 'בחרו את הקינוחים, בחרו את הצבעים, בחרו את הכיתוב, בחרו את האריזה',
    image: '/images/category-boxes.png',
    slug: 'bar-bat-mitzvah',
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
