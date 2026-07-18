import CategoryPage from '@/components/category-page'

export const metadata = {
  title: 'עוגות מעוצבות | SoolSweets',
  description: 'עוגות וינטאג׳, מוס, בנטו, מספרים, ספל ועיצוב אישי לכל אירוע.',
}

const products = [
  {
    title: 'עוגות כתר',
    description: 'עוגה בעיצוב מלכותי עם כתר נוצץ, פפיונים ונצנצים שמתפזרים באפקט מרהיב – לחגיגה שכולה זוהר.',
    image: '/images/gallery/vintage-1.png',
    slug: 'crown-cakes',
  },
  {
    title: 'עוגות וינטאג\'',
    description: 'עיצוב רומנטי ועדין עם זילופי וינטאג’, פפיונים, פרחים וגימורים אלגנטיים. מושלם לכל אירוע .',
    image: '/images/gallery/vintage-1.png',
    slug: 'vintage-cakes',
  },
  {
    title: 'עוגות מוס',
    description: 'שכבות מוס עשירות במגוון טעמים, במרקם קטיפתי ובמראה אלגנטי – חוויה מושלמת בכל ביס',
    image: '/images/category-cakes.png',
    slug: 'mousse-cakes',
  },
  {
    title: 'עוגות בנטו',
    description: 'קטנות בגודל, גדולות ברושם. עוגות אישיות בעיצוב מוקפד – מושלמות למתנה, הפתעה או חגיגה קטנה.',
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
    title: 'ספל שכולו אושר',
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
      subtitle="כל עוגה היא יצירת אומנות שמעוצבת במיוחד עבורכם"
      heroImage="/images/category-cakes.png"
      heroAlt="עוגות מעוצבות של SoolSweets"
      description=" העוגה שתהפוך את החגיגה לבלתי נשכחת.
עוגה שתהיה מרכז החגיגה מעיצוב וינטג’ קלאסי ועד עוגות מוס, בנטו, מספרים ועיצובים בהתאמה אישית – יפות לעין, טעימות בכל ביס, ומדויקות עד הפרט האחרון."
      products={products}
      whatsappMessage="שלום סלעית, אשמח להזמין עוגה מעוצבת!"
    />
  )
}
