import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { getWhatsAppMessage } from '@/lib/whatsapp-messages'
import HeartSizeModal from '@/components/heart-size-modal'
import Breadcrumb from '@/components/breadcrumb'

interface SizeRow {
  servings: string
  dimensions: string
  size: string
}

const rows: SizeRow[] = [
  {
    servings: 'כ- 15 אנשים',
    dimensions: 'אורך 35 / רוחב 25 ',
    size: 'עוגה ספרה אחת',
  },
  {
    servings: 'כ-25 אנשים',
    dimensions: 'רוחב 35 / אורך 25 ',
    size: 'עוגת שתי ספרות',
  },
]

export default function NumberSizeGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'עוגות מעוצבות', href: '/category/cakes' }, { label: 'עוגות מספרים', href: '/gallery/number-cakes' }, { label: 'מדריך גדלים' }]} />

        {/* Header */}
        <section className="bg-secondary py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">
              מדריך לבחירת גודל העוגה
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              עוגות מספרים מרשימות לימי הולדת מיוחדים. בחרו את הגודל המתאים למספר אורחיכם.
            </p>
          </div>
        </section>

        <section className="max-w-xl mx-auto px-6 py-14">
          <div className="w-full rounded-2xl border border-border shadow-sm overflow-hidden">
            <table className="w-full table-fixed text-right border-collapse bg-card text-[11px] sm:text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-3 py-3 font-semibold text-sm whitespace-normal break-words">
                    כמות אנשים
                  </th>
                  <th className="px-3 py-3 font-semibold text-sm whitespace-normal break-words">
                    מידות  ס״מ
                  </th>
                  <th className="px-3 py-3 font-semibold text-sm whitespace-normal break-words">
                    גודל עוגה
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.servings}
                    className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}
                  >
                    <td className="px-3 py-3 font-bold text-foreground whitespace-normal break-words align-top border-t border-border">
                      {row.servings}
                    </td>
                    <td className="px-3 py-3 font-semibold text-foreground whitespace-normal break-words align-top border-t border-border">
                      {row.dimensions}
                    </td>
                    <td className="px-3 py-3 font-semibold text-primary whitespace-normal break-words align-top border-t border-border">
                      {row.size}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-base text-muted-foreground mt-6 leading-relaxed">
            הגדלים הם המלצה כללית. לא מצאתם בדיוק את מה שחיפשתם? כתבו לי ונתאים יחד את הגודל המושלם.
          </p>

          <p className="text-center text-sm text-muted-foreground mt-4 leading-relaxed">
            <span className="text-primary font-semibold">*</span> כל הגדלים המוצעים מתאימים לעוגה עגולה. עבור עוגת לב&nbsp;
            <HeartSizeModal />
            &nbsp;
                      </p>
        </section>

        {/* CTA */}
        <section className="bg-accent py-14 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-5">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-background text-balance">
              יודעים איזה גודל אתם רוצים?
            </h2>
            <p className="text-background/75 leading-relaxed text-sm md:text-base">
              בחרו את הגודל ותעדכנו אותי בוואטסאפ עם מספר הספרה וצבעי ההעדפה.
            </p>
            <WhatsAppButton message={getWhatsAppMessage('/number-size-guide')} />
            <Link
              href="/gallery/number-cakes"
              className="text-sm font-semibold text-background/80 hover:text-background transition-colors underline underline-offset-4"
            >
              חזרה לעוגות מספרים
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
