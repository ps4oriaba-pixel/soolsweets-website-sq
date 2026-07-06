import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export const metadata = {
  title: 'טבלת גדלי עוגות | SoolSweets',
  description:
    'טבלת גדלי עוגות מומלצת לפי כמות אורחים – בחרו את הגודל המושלם לאירוע שלכם.',
}

interface SizeRow {
  guests: string
  size: string
  note: string
}

const rows: SizeRow[] = [
  {
    guests: '5-8 אנשים',
    size: 'קוטר 12 / 2 שכבות  או  קוטר 12 / 3 שכבות',
    note: 'אירוע אינטימי, זוג פלוס ילדים, פינוק למשרד או יום הולדת משפחתי מצומצם',
  },
  {
    guests: '10-14 אנשים',
    size: 'קוטר 14 / 2 שכבות  או  קוטר 14 / 3 שכבות',
    note: 'מפגש חברים קטן או ארוחת שישי משפחתית',
  },
  {
    guests: '16-20 אנשים',
    size: 'קוטר 14 / 4 שכבות  או  קוטר 16 / 3 שכבות',
    note: 'יום הולדת שמח עם המשפחה המורחבת, מסיבה קטנה או הרמת כוסית',
  },
  {
    guests: '20-25 אנשים',
    size: 'קוטר 18 / 2 שכבות  או  קוטר 16 / 4 שכבות  או  קוטר 18 / 3 שכבות',
    note: 'עוגה רחבה ונמוכה לפרוסות קלאסיות, עוגה גבוהה ומרשימה או אירוע בינוני',
  },
  {
    guests: '26-28 אנשים',
    size: 'קוטר 18 / 4 שכבות',
    note: 'חגיגה גדולה',
  },
  {
    guests: 'כ-35 אנשים',
    size: 'קוטר 18 / 5 שכבות  או  קוטר 20 / 4 שכבות',
    note: 'אירוע רב משתתפים, עוגה בעלת נוכחות מטורפת',
  },
  {
    guests: '45-50 אנשים',
    size: 'קוטר 20 / 5 שכבות  או  קוטר 20 / 6 שכבות',
    note: 'אירועים גדולים, מסיבות חברה או חגיגה ענקית שגונבת את ההצגה',
  },
]

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="bg-secondary py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              מדריך גדלים
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">
              טבלת גדלי עוגות לפי כמות אורחים
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              לא בטוחים איזה גודל להזמין? הטבלה הבאה תעזור לכם לבחור את העוגה המושלמת
              בהתאם למספר האורחים ולסוג האירוע.
            </p>
          </div>
        </section>

        {/* Table */}
        <section className="max-w-4xl mx-auto px-6 py-14">
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-right border-collapse bg-card">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap">
                    כמות אנשים
                  </th>
                  <th className="px-5 py-4 font-semibold text-sm whitespace-nowrap">
                    גודל עוגה מומלץ (שכבות / קוטר)
                  </th>
                  <th className="px-5 py-4 font-semibold text-sm">
                    סוג האירוע / הערות
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.guests}
                    className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}
                  >
                    <td className="px-5 py-4 font-bold text-foreground whitespace-nowrap align-top border-t border-border">
                      {row.guests}
                    </td>
                    <td className="px-5 py-4 font-semibold text-primary whitespace-nowrap align-top border-t border-border">
                      {row.size}
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground leading-relaxed align-top border-t border-border">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-base text-muted-foreground mt-6 leading-relaxed">
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
