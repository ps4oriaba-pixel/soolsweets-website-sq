import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export const metadata = {
  title: 'קצת עליי | SoolSweets',
  description:
    'סלעית – בעלת עסק בוטיק להכנת עוגות, מארזים וקינוחים מיוחדים ומעוצבים בהתאמה אישית לכל אירוע.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Page Header */}
        <section className="relative h-72 md:h-96 overflow-hidden">
          <Image
            src="/images/about-hero.png"
            alt="סלעית בסטודיו האפייה"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-foreground/45" />
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 px-4">
            <p className="text-secondary text-sm font-medium tracking-widest uppercase">
              SoolSweets
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-background text-center text-balance">
              קצת עליי
            </h1>
          </div>
        </section>

        {/* About Content */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-14 items-start">
            {/* Photo placeholder */}
            <div className="md:w-2/5 flex-shrink-0">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-muted relative shadow-md">
                <Image
                  src="/images/about-hero.png"
                  alt="סלעית – בעלת SoolSweets"
                  fill
                  className="object-cover"
                />
                {/* Placeholder text for when the owner uploads her photo */}
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="bg-background/80 text-foreground text-xs px-3 py-1 rounded-full font-medium">
                    תמונת תדמית תועלה בקרוב
                  </span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="md:w-3/5 flex flex-col gap-6">
              <div>
                <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
                  הכירו אותי
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
                  אני סלעית
                </h2>
                <div className="w-12 h-1 bg-primary mt-4 rounded-full" />
              </div>

              <div className="flex flex-col gap-4 text-foreground/80 leading-relaxed text-base">
                <p>
                  בעלת עסק בוטיק להכנת עוגות, מארזים וקינוחים מיוחדים ומעוצבים בשלל סגנונות
                  וצבעים, ובהתאמה אישית לכל אירוע.
                </p>
                <p>
                  כל יצירה שלי נעשית באפייה ביתית מתוך אהבה גדולה למקצוע, בדגש על שימוש
                  בחומרי גלם איכותיים, וזאת כדי להבטיח לא רק יופי, אלא גם טעם בלתי נשכח.
                </p>
                <p>
                  אני אוהבת לקחת על עצמי אתגרים עיצוביים, כך שתוכלו להעלות כל רעיון – ואני
                  אגשים אותו בצורה הכי מרהיבה שיש!
                </p>
                <p>
                  בנוסף, אני מציעה סדנאות אפייה לקבוצות קטנות – חוויה מעשירה ומהנה שמתאימה
                  לחגיגות פרטיות ואישיות.
                </p>
                <p className="font-semibold text-foreground">
                  מוזמנים להצטרף לעולם שלי – SoolSweets – שבו טעם ואסתטיקה נפגשים, ליצירת
                  רגעים בלתי נשכחים!
                </p>
              </div>

              <WhatsAppButton message="שלום סלעית, אשמח לשמוע עוד ולהזמין!" />
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  )
}
