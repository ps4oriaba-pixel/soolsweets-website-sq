import CategoryPage from '@/components/category-page'

export const metadata = {
  title: 'עוגות מעוצבות | SoolSweets',
  description: 'עוגות וינטאג׳, מוס, בנטו, מספרים, ספל ועיצוב אישי לכל אירוע.',
}

const products = [
  {
    title: 'עוגות וינטאג\'',
    description: 'עיצוב רומנטי ועדין עם פרחים, ריפלס ואווירה של פעם. מושלם לכל אירוע מיוחד.',
    image: '/images/gallery/vintage-1.png',
    slug: 'vintage-cakes',
  },
  {
    title: 'עוגות מוס',
    description: 'שכבות מוס קרמי ועדין בציפוי מושלם – שילוב של טעם ועיצוב.',
    image: '/images/category-cakes.png',
    slug: 'mousse-cakes',
  },
  {
    title: 'עוגות בנטו',
    description: 'עוגה אישית קטנה וחמודה – מושלמת כמתנה או כחגיגה אישית.',
    image: '/images/gallery/bento-1.png',
    slug: 'bento-cakes',
  },
  {
    title: 'עוגה מלבנית מעוצבת',
    description: 'עיצוב מודרני ונקי בפורמט מלבני – אלגנטי ומרשים לכל שולחן.',
    image: '/images/category-cakes.png',
    slug: 'rectangular-cakes',
  },
  {
    title: 'עוגת פפיון',
    description: 'עוגת שוקולד/וניל עם גנאש שוקולד חלב ומטבעות שוקולד בעיטוף קרם חמאה שוויצרי משגע.',
    image: '/images/cake-bow-tie.png',
    slug: 'bow-tie-cakes',
  },
  {
    title: 'עוגות בעיצוב אישי',
    description: 'העלו כל רעיון – ואני אגשים אותו. עוגה שמספרת את הסיפור שלכם.',
    image: '/images/hero.png',
    slug: 'custom-cakes',
  },
  {
    title: 'עוגות מספרים',
    description: 'עוגה בצורת מספר מעוטרת במקרון, פרחים ופירות – לכל יום הולדת מיוחד.',
    image: '/images/cake-numbers.png',
    slug: 'number-cakes',
  },
  {
    title: 'עוגות ספל',
    description: 'כל ספל מגיע מוכן להפתעה עם כפית משוקולד, נר צבעוני וארוז בקופסה שקופה ומרשימה.',
    image: '/images/gallery/bento-2.png',
    note: 'בהתראה קצרה',
    slug: 'mug-cakes',
  },
  {
    title: 'עוגות דף נשרף',
    description: 'עוגה עם דף אכיל שנשרף בלהבה לחשוף תמונה מתחתיו – חוויה שתשאיר את כולם פעורי פה.',
    image: '/images/category-special.png',
    note: 'וואו-אפקט',
    slug: 'burnt-paper-cakes',
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
