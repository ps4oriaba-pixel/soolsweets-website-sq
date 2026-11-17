import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import HeroSearch from '@/components/hero-search'

const categories = [
  {
    href: '/category/cakes',
    title: 'עוגות מעוצבות',
    description: `העוגה שתהפוך את החגיגה לבלתי נשכחת.
עוגות וינטאג׳, מוס, בנטו, מספרים ועיצוב אישי לכל אירוע`,
    image: '/images/category-designed-cakes-new.png',
  },
  {
    href: '/category/boxes',
    title: 'מארזים מעוצבים',
    description: " המתנה שתגרום למי שמקבל אותה להתרגש כבר מהרגע הראשון",
    image: '/images/category-boxes.png',
  },
  {
    href: '/category/desserts',
    title: 'קינוחים אישיים',
    description: "פינוקים אישיים במגוון טעמים ועיצובים – מושלמים לאירוח, לחגיגות ולכל רגע מתוק.",
    image: '/images/category-personal-desserts-new.png',
  },
  {
    href: '/category/special',
    title: 'קולקציית ה-WOW',
    description: "לחוויה מתוקה ובלתי נשכחת: כדורי שוקולד מתנפצים, סוכריות ענק מתנפצות, עוגות קומות מרשימות וקינוחים ייחודיים.",
    image: '/images/category-wow-new.png',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#ead8c8]">
          <div className="relative z-0 aspect-square min-h-0 md:aspect-auto md:h-[72vh] md:min-h-[360px]">
            <Image
              src="/images/home-hero-new.png"
              alt="עוגות ומארזים מעוצבים של SoolSweets"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Soft overlay keeps the copy readable while preserving the photo. */}
            <div className="absolute inset-0 hidden bg-gradient-to-b from-foreground/45 via-foreground/20 to-foreground/55 md:block" />

            <div className="absolute inset-x-0 top-0 z-10 mx-auto hidden w-full max-w-6xl px-6 pt-8 text-background md:block md:pt-16">
              <p className="text-secondary font-medium tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">
                קונדיטורית בוטיק ביתית
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl font-bold leading-tight text-balance">
                כשטעם ואסתטיקה
                <br />
                נפגשים
              </h1>
              <p className="mt-3 md:mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-background/85 md:text-xl">
                יצירות אפייה ביתיות מרהיבות – בהתאמה אישית לכל אירוע
              </p>
            </div>
          </div>

          <div className="bg-background px-5 py-7 text-center text-foreground md:hidden">
            <p className="mb-2 text-sm font-medium tracking-widest text-primary">
              קונדיטורית בוטיק ביתית
            </p>
            <h1 className="font-serif text-3xl font-bold leading-tight text-balance">
              כשטעם ואסתטיקה נפגשים
            </h1>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-foreground/75">
              יצירות אפייה ביתיות מרהיבות – בהתאמה אישית לכל אירוע
            </p>
          </div>

          <div className="relative z-10 bg-background px-5 py-6 md:px-6 md:py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4">
              <div className="w-full max-w-md md:mb-0">
                <HeroSearch variant="light" />
              </div>
              <div className="flex flex-wrap gap-4">
                <WhatsAppButton compact message="שלום סלעית, אשמח לשמוע עוד על העוגות והמארזים שלך" />
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-foreground/40 text-foreground px-5 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-foreground hover:text-background transition-colors duration-200"
                >
                  קצת עליי
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="scroll-mt-24 max-w-6xl mx-auto px-6 py-20" aria-labelledby="categories-heading">
          <div className="text-center mb-14">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
              הקולקציות שלנו
            </p>
            <h2
              id="categories-heading"
              className="font-serif text-4xl font-bold text-foreground text-balance"
            >
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                  <span className="inline-block mt-3 text-xs font-semibold text-primary uppercase tracking-wider">
                    לקולקציה
                    &larr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quote Strip */}
        <section className="bg-secondary py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-relaxed text-balance mb-6">
              ״כל יצירה נעשית מתוך אהבה גדולה למקצוע, בדגש על חומרי גלם איכותיים. לא רק יופי, אלא גם טעם בלתי נשכח - הטעמים שעושים את ההבדל, עם העיצובים שכולם ידברו עליהם״.
            </p>
            <p className="text-foreground/60 font-medium mb-8">— סלעית, SoolSweets</p>
            <WhatsAppButton message="היי סלעית, אשמח לשמוע עוד!" />
          </div>
        </section>

        {/* Workshop Promo */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="bg-card rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch shadow-md relative">
            <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
              בקרוב
            </div>
            <div className="relative h-72 md:h-auto md:w-1/2">
              <Image
                src="/images/about-owner.png"
                alt="סדנאות אפייה של SoolSweets"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center gap-5">
              <p className="text-primary font-medium tracking-widest uppercase text-sm">
                חוויה מיוחדת
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground leading-tight text-balance">
                סדנאות אפייה לקבוצות קטנות
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                חוויה מעשירה ומהנה שמתאימה לחגיגות פרטיות ואישיות. ביחד נלמד, נצור ונהנה מרגע שלא תשכחו.
              </p>
              <div>
                <WhatsAppButton message="שלום סלעית, מעוניינת לשמוע על סדנאות האפייה" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
