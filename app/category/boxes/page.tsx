import CategoryPage from '@/components/category-page'

export const metadata = {
  title: 'מארזים מעוצבים | SoolSweets',
  description: 'מארזים לאירועים, ימי הולדת, גילוי מין, בר ובת מצווה, חגים ומיתוג עסקי.',
}

const products = [
  {
    title: 'מארזים לאירועים',
    description: 'ימי הולדת, תודה למישהו שאוהבים – מארז מעוצב שמרגיש יוקרתי ואישי.',
    image: '/images/box-birthday.png',
  },
  {
    title: 'מארזי גילוי מין העובר',
    description: 'רגע מיוחד ובלתי נשכח – מארז מפתיע בצבעי ורוד או כחול.',
    image: '/images/category-boxes.png',
  },
  {
    title: 'Sweet 16',
    description: 'מארז מיוחד לחגיגת שש-עשרה – מתוק, צבעוני ומושלם לגיל המיוחד.',
    image: '/images/box-birthday.png',
    note: 'Sweet 16',
  },
  {
    title: 'בר ובת מצווה',
    description: 'מארז מפואר ומרהיב לאחד האירועים החשובים בחיים.',
    image: '/images/category-boxes.png',
  },
  {
    title: 'מארזים ממותגים לחברות',
    description: 'מיתוג ייחודי לעסק שלכם – מארז שמייצג את המותג בצורה הטובה ביותר.',
    image: '/images/box-birthday.png',
  },
  {
    title: 'מארזי חג',
    description: 'פורים, ראש השנה, פסח, שבועות – ממותקים לחג בעיצוב מסורתי ומודרני.',
    image: '/images/category-boxes.png',
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
