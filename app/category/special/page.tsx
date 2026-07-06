import CategoryPage from '@/components/category-page'

export const metadata = {
  title: 'עיצובים מיוחדים | SoolSweets',
  description: 'כדור מתנפץ, סוכריה מתנפצת, ביצה מתנפצת, עוגות קומות ועוגות דף נשרף.',
}

const products = [
  {
    title: 'כדורגל שוקולד',
    description:
      'קינוח מושלם לחובבי הכדורגל, שבפנים מסתתר אוצר של ממתקים.',
    image: '/images/gallery/choc-ball-1.png',
    note: 'הכי מבוקש!',
    slug: 'chocolate-ball',
  },
  {
    title: 'סוכריה גדולה ומתוקה',
    description: 'תבנית שוקולד במראה של סוכריה ענקית שמסתירה בתוכה מגוון הפתעות וממתקים.',
    image: '/images/category-special.png',
    slug: 'exploding-candy',
  },
  {
    title: 'ביצת שוקולד ענקית',
    description: 'תבנית שוקולד בצורת ביצה מגניבה.',
    image: '/images/category-special.png',
    slug: 'exploding-egg',
  },
  {
    title: 'עוגות קומות',
    description:
      'עוגות מרשימות בשתיים, שלוש קומות ומעלה – נוכחות מלכותית בכל שולחן אירועים.',
    image: '/images/cake-tiered.png',
    slug: 'tiered-cakes',
  },
]

export default function SpecialPage() {
  return (
    <CategoryPage
      title="עיצובים מיוחדים"
      subtitle="חוויות שוקולד דרמטיות שלא תשכחו לעולם"
      heroImage="/images/category-special.png"
      heroAlt="עיצובים מיוחדים של SoolSweets"
      description="כשרוצים להשאיר רושם – עיצובים מיוחדים הם הבחירה הנכונה. כדורים מתנפצים, ביצים מפתיעות ועוגות דף נשרף שיהפכו כל אירוע לבלתי נשכח."
      products={products}
      whatsappMessage="שלום סלעית, אשמח לשמוע על העיצובים המיוחדים שלך!"
    />
  )
}
