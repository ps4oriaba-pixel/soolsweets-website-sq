import CategoryPage from '@/components/category-page'

export const metadata = {
  title: 'עיצובים מיוחדים | SoolSweets',
  description: 'כדור מתנפץ, סוכריה מתנפצת, ביצה מתנפצת, עוגות קומות ועוגות דף נשרף.',
}

const products = [
  {
    title: 'כדור שוקולד מתנפץ',
    description:
      'כדור שוקולד דרמטי שנשפך עליו רוטב חם וחושף הפתעה בפנים – מופע קסמים על הצלחת.',
    image: '/images/chocolate-ball.png',
    note: 'הכי מבוקש!',
  },
  {
    title: 'סוכריה מתנפצת',
    description: 'סוכריית שוקולד ענקית שמתפצחת לחשוף ממתקים וקינוחים – הפתעה אמיתית!',
    image: '/images/category-special.png',
  },
  {
    title: 'ביצה מתנפצת',
    description: 'ביצת שוקולד מפתיעה שמסתירה בפנים מתנה מתוקה – מושלמת לפסחא ולהפתעות.',
    image: '/images/category-special.png',
  },
  {
    title: 'עוגות קומות',
    description:
      'עוגות מרשימות בשתיים, שלוש קומות ומעלה – נוכחות מלכותית בכל שולחן אירועים.',
    image: '/images/cake-tiered.png',
  },
  {
    title: 'עוגות דף נשרף',
    description:
      'עוגה עם דף אכיל שנשרף בלהבה לחשוף תמונה מתחתיו – חוויה שתשאיר את כולם פעורי פה.',
    image: '/images/category-special.png',
    note: 'וואו-אפקט',
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
