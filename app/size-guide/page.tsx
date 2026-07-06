import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { BackButton } from '@/components/back-button'

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

        {/* Back Button */}
        <section className="max-w-2xl mx-auto px-6 pt-14 pb-4">
          <BackButton />
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
