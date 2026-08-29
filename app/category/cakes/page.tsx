import CategoryPage from '@/components/category-page'

export const metadata = {
  title: 'עוגות מעוצבות | SoolSweets',
  description: 'עוגות וינטאג׳, מוס, בנטו, מספרים, ספל ועיצוב אישי לכל אירוע.',
}

const products = [
  {
    title: 'עוגות בעיצוב אישי',
    description: 'העלו כל רעיון – ואני אגשים אותו. עוגה שמספרת את הסיפור שלכם.',
    image: '/images/gallery/custom-design/IMG_0136.webp',
    slug: 'custom-cakes',
  },
  {
    title: "עוגות וינטאג'",
    description: "עיצוב רומנטי ועדין עם זילופי וינטאג', פפיונים, פרחים וגימורים אלגנטיים. מושלם לכל אירוע.",
    image: '/images/gallery/vintage-cakes/20231226_113642.webp',
    slug: 'vintage-cakes',
  },
  {
    title: 'עוגות בנטו',
    description: 'קטנות בגודל, גדולות ברושם. עוגות אישיות בעיצוב מוקפד – מושלמות למתנה, הפתעה או חגיגה קטנה.',
    image: '/images/gallery/bento-cakes/20231222_102551.webp',
    slug: 'bento-cakes',
  },
  {
    title: 'עוגה מלבנית מעוצבת',
    description: 'מושלמת לאירועים גדולים ולחגיגות משפחתיות – בעיצוב מוקפד ובהתאמה אישית לכל סגנון.',
    image: '/images/gallery/rectangular-cakes/20240119_085307.webp',
    slug: 'rectangular-cakes',
  },
  {
    title: 'עוגות מספרים',
    description: 'עוגות מספר או אות מבצק שקדים או עוגת שוקולד אפויה, המעוטרות בקרם מסקרפונה עשיר, שוקולדים ואלמנטים מעוצבים בהתאמה אישית.',
    image: '/images/gallery/number-cakes/20230420_153709.webp',
    slug: 'number-cakes',
  },
  {
    title: 'עוגת פפיון',
    description: 'עוגות בעיצוב אלגנטי עם פפיונים מרשימים  מבצק סוכר – שילוב מושלם של יוקרה, עדינות וסטייל.',
    image: '/images/cake-bow-tie.png',
    slug: 'bow-tie-cakes',
  },
  {
    title: 'עוגות כתר',
    description: 'עוגה בעיצוב מלכותי עם כתר נוצץ, פפיונים ונצנצים שמתפזרים באפקט מרהיב – לחגיגה שכולה זוהר.',
    image: '/images/gallery/vintage-1.png',
    slug: 'crown-cakes',
  },
  {
    title: 'עוגות מוס',
    description: 'שכבות מוס עשירות במגוון טעמים, במרקם קטיפתי ובמראה אלגנטי – חוויה מושלמת בכל ביס',
    image: '/images/category-cakes.png',
    slug: 'mousse-cakes',
  },
  {
    title: 'עוגות דף נשרף',
    description: 'הטרנד שכולם מדברים עליו – שורפים את הדף וחושפים הקדשה, תמונה או הפתעה מרגשת',
    image: '/images/category-special.png',
    note: 'וואו-אפקט',
    slug: 'burnt-paper-cakes',
  },
  {
    title: 'ספל שכולו אושר',
    description: 'עוגת שוקולד/וניל בכוס אישית, עם קצפת, תוספות מתוקות וקישוט לבחירה – הפתעה מושלמת לרגעים ספונטניים.',
    image: '/images/gallery/bento-2.png',
    note: 'בהתראה קצרה',
    slug: 'mug-cakes',
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
עוגה שתהיה מרכז החגיגה מעיצוב וינטאג’ קלאסי ועד עוגות מוס, בנטו, מספרים ועיצובים בהתאמה אישית – יפות לעין, טעימות בכל ביס, ומדויקות עד הפרט האחרון."
      products={products}
      whatsappMessage="שלום סלעית, אשמח להזמין עוגה מעוצבת!"
    />
  )
}
