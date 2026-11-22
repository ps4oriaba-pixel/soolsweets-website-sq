import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { getWhatsAppMessage } from '@/lib/whatsapp-messages'
import Breadcrumb from '@/components/breadcrumb'

export const metadata = {
  title: 'טבלת גדלי ספל שכולו אושר | SoolSweets',
  description:
    'ספל שכולו אושר מעוצב - עוגת שוקולד/וניל בכוס אישית, עם קצפת, תוספות מתוקות וקישוט לבחירה – הפתעה מושלמת לרגעים ספונטניים.',
}

interface SizeRow {
  dimensions: string
  size: string
}

const rows: SizeRow[] = [
  {
    dimensions: 'קוטר 8 ס״מ, תכולה 340 מ״ל',
    size: 'ספל יחיד',
  },
  {
    dimensions: 'קוטר 10 ס״מ, תכולה 500 מ״ל',
    size: 'ספל זוגי',
  },
  {
    dimensions: 'קוטר 16 ס״מ, 3 שכבות',
    size: 'עוגת כפיות',
  },
]

export default function MugCakesSizeGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'עוגות מעוצבות', href: '/category/cakes' }, { label: 'ספל שכולו אושר', href: '/gallery/mug-cakes' }, { label: 'מדריך גדלים' }]} />

        {/* Header */}
        <section className="bg-secondary py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">
              מדריך לבחירת גודל העוגה
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              עוגת שוקולד/וניל בכוס אישית, עם קצפת, תוספות מתוקות וקישוט לבחירה – הפתעה מושלמת לרגעים ספונטניים.
            </p>
          </div>
        </section>

        {/* Table */}
        <section className="max-w-xl mx-auto px-6 py-14">
          <div className="w-full rounded-2xl border border-border shadow-sm overflow-hidden">
            <table className="w-full table-fixed text-right border-collapse bg-card text-xs sm:text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-3 py-3 font-semibold text-sm whitespace-normal break-words">
                    מידות
                  </th>
                  <th className="px-3 py-3 font-semibold text-sm whitespace-normal break-words">
                    גודל עוגה
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.size}
                    className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}
                  >
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

          <div className="flex justify-center mt-10">
            <WhatsAppButton message={getWhatsAppMessage('/mug-cakes-size-guide')} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
