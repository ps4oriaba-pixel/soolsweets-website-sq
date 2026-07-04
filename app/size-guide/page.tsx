import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { SIZE_GUIDES, type SizeGuideType } from '@/lib/gallery-data'

export const metadata = {
  title: 'טבלת גדלי עוגות | SoolSweets',
  description:
    'טבלת גדלי עוגות מומלצת לפי כמות אורחים – בחרו את הגודל המושלם לאירוע שלכם.',
}

export default async function SizeGuidePage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const { type } = await searchParams
  const guideType: SizeGuideType =
    type === 'flat' || type === 'bento' ? type : 'standard'
  const guide = SIZE_GUIDES[guideType]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28">
        {/* Header */}
        <section className="bg-secondary py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              {guide.eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">
              {guide.title}
            </h1>
            <p className="text-foreground/70 leading-relaxed">{guide.intro}</p>
          </div>
        </section>

        {/* Table */}
        <section className="max-w-4xl mx-auto px-6 py-14">
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-right border-collapse bg-card">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  {guide.headers.map((header) => (
                    <th
                      key={header}
                      className="px-5 py-4 font-semibold text-sm whitespace-nowrap"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {guide.rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}>
                    {row.map((cell, col) => (
                      <td
                        key={col}
                        className={`px-5 py-4 align-top border-t border-border ${
                          col === guide.highlightCol
                            ? 'font-semibold text-primary whitespace-nowrap'
                            : col === 0
                              ? 'font-bold text-foreground whitespace-nowrap'
                              : 'text-sm text-muted-foreground leading-relaxed'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6 leading-relaxed">
            הגדלים הם המלצה כללית. לא מצאתם בדיוק את מה שחיפשתם? כתבו לי ונתאים יחד את
            הגודל המושלם עבורכם.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-accent py-14 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-5">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-background text-balance">
              יודעים איזה גודל אתם רוצים?
            </h2>
            <p className="text-background/75 leading-relaxed text-sm md:text-base">
              שלחו לי הודעה בוואטסאפ עם מספר האורחים וסוג האירוע, ונתחיל לתכנן.
            </p>
            <WhatsAppButton message="שלום סלעית, אשמח לעזרה בבחירת גודל עוגה מתאים לאירוע שלי" />
            <Link
              href="/category/cakes"
              className="text-sm font-semibold text-background/80 hover:text-background transition-colors underline underline-offset-4"
            >
              חזרה לעוגות המעוצבות
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
