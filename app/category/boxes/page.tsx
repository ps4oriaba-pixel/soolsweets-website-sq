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
    description: 'כי לכל חג מגיע מארז מיוחד. מתוקים מעוצבים לחגים ולאירועים לאורך כל השנה',
    image: '/images/gallery/gender-reveal-1.png',
    slug: 'gender-reveal',
  },
  {
    title: 'עסקים',
    description: 'מארזים מעוצבים בהתאמה אישית לעובדים, לקוחות ושותפים, עם אפשרות למיתוג והתאמה אישית – הדרך המתוקה להוקיר, להפתיע ולהשאיר רושם',
    image: '/images/box-birthday.png',
    slug: 'sweet-sixteen',
  },
  {
    title: 'מארז בהתאמה אישית',
    description: 'בחרו את הקינוחים, הצבעים והכיתוב – ואנחנו ניצור עבורכם מארז ייחודי בדיוק כמו שדמיינתם.',
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
      description=" מארזים מעוצבים - המתנה שתגרום למי שמקבל אותה להתרגש כבר מהרגע הראשון.
הרגעים הכי מרגשים מתחילים במארז מוקפד שנוצר בהתאמה אישית . 
כל מארז מורכב בקפידה, עם שילוב של עיצוב אלגנטי, חומרי גלם איכותיים ופרטים קטנים שעושים את כל ההבדל,
כי יש רגעים שמגיע להם הרבה יותר מ”סתם מתנה”.
לכל אירוע: בר/בת מצווה, ימי הולדת,  גיוס/שחרור, החלמה מהירה, קידום בעבודה, סתם לומר תודה ובכלל."
      products={products}
      whatsappMessage="שלום סלעית, אשמח להזמין מארז מעוצב!"
    />
  )
}
