import CategoryPage from '@/components/category-page'

export const metadata = {
  title: 'עוגות מעוצבות | SoolSweets',
  description: 'עוגות וינטאג׳, מוס, בנטו, מספרים, ספל ועיצוב אישי לכל אירוע.',
}

const products = [
  {
    title: 'עוגות וינטאג׳',
    description: 'עיצוב רומנטי ועדין עם פרחים, ריפלס ואווירה של פעם. מושלם לכל אירוע מיוחד.',
    image: '/images/cake-vintage.png',
  },
  {
    title: 'עוגות מוס',
    description: 'שכבות מוס קרמי ועדין בציפוי מושלם – שילוב של טעם ועיצוב.',
    image: '/images/category-cakes.png',
  },
  {
    title: 'עוגות בנטו',
    description: 'עוגה אישית קטנה וחמודה – מושלמת כמתנה או כחגיגה אישית.',
    image: '/images/cake-bento.png',
  },
  {
    title: 'עוגה מלבנית מעוצבת',
    description: 'עיצוב מודרני ונקי בפורמט מלבני – אלגנטי ומרשים לכל שולחן.',
    image: '/images/category-cakes.png',
  },
  {
    title: 'עוגות בעיצוב אישי',
    description: 'העלו כל רעיון – ואני אגשים אותו. עוגה שמספרת את הסיפור שלכם.',
    image: '/images/hero.png',
  },
  {
    title: 'עוגות מספרים',
    description: 'עוגה בצורת מספר מעוטרת במקרון, פרחים ופירות – לכל יום הולדת מיוחד.',
    image: '/images/cake-numbers.png',
  },
  {
    title: 'עוגות ספל',
    description: 'עוגה בהתראה קצרה – טעימה, מרשימה ומוכנה מהר יותר ממה שחשבתם.',
    image: '/images/cake-bento.png',
    note: 'בהתראה קצרה',
  },
]

export default function CakesPage() {
  return (
    <CategoryPage
      title="עוגות מעוצבות"
      subtitle="כל עוגה היא יצירת אמנות – מעוצבת במיוחד עבורכם"
      heroImage="/images/category-cakes.png"
      heroAlt="עוגות מעוצבות של SoolSweets"
      description="מוינטאג׳ רומנטי ועד עיצוב מודרני ואישי – כל עוגה נעשית באהבה ובדיוק, עם חומרי גלם מהמשובחים ביותר. הביאו לי רעיון ואני אגשים אותו בצורה הכי יפה שיש."
      products={products}
      whatsappMessage="שלום סלעית, אשמח להזמין עוגה מעוצבת!"
    />
  )
}
