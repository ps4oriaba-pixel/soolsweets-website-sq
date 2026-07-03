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
    description: 'וינטאג׳, מוס, בנטו, מספרים ועיצוב אישי לכל אירוע',
    image: '/images/category-cakes.png',
  },
  {
    href: '/category/boxes',
    title: 'מארזים מעוצבים',
    description: 'מארזים לאירועים, ימי הולדת, חגים ומיתוג עסקי',
    image: '/images/category-boxes.png',
  },
  {
    href: '/category/desserts',
    title: 'קינוחים',
    description: 'מארזי כוסות וקרמבל – קינוחים עדינים ומרהיבים',
    image: '/images/category-desserts.png',
  },
  {
    href: '/category/special',
    title: 'עיצובים מיוחדים',
    description: 'כדורים מתנפצים, עוגות קומות ועוגות דף נשרף',
    image: '/images/category-special.png',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.png"
              alt="עוגות ומארזים מעוצבים של SoolSweets"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-accent/55" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
              קונדיטוריה ביתית בוטיק
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-background leading-tight text-balance mb-6">
              טעם ואסתטיקה
              <br />
              נפגשים
            </h1>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
              יצירות אפייה ביתיות מרהיבות – בהתאמה אישית לכל אירוע ורגע מיוחד.
            </p>
            {/* AI Search bar */}
            <div className="mb-8 w-full">
              <HeroSearch />
            </div>

            <div className="flex flex-wrap gap-4">
              <WhatsAppButton message="שלום סלעית, אשמח לשמוע עוד על העוגות והמארזים שלך" />
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-background text-background px-8 py-3 rounded-full text-base font-semibold hover:bg-background hover:text-foreground transition-colors duration-200"
              >
                קצת עליי
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-6xl mx-auto px-6 py-20" aria-labelledby="categories-heading">
          <div className="text-center mb-14">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
              המוצרים שלנו
            </p>
            <h2
              id="categories-heading"
              className="font-serif text-4xl font-bold text-foreground text-balance"
            >
              מה אנחנו מציעים
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
                    לפרטים נוספים &larr;
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
              &ldquo;כל יצירה נעשית מתוך אהבה גדולה למקצוע, בדגש על חומרי גלם איכותיים –
              לא רק יופי, אלא גם טעם בלתי נשכח.&rdquo;
            </p>
            <p className="text-foreground/60 font-medium mb-8">— סלעית, SoolSweets</p>
            <WhatsAppButton message="היי סלעית, אשמח לשמוע עוד!" />
          </div>
        </section>

        {/* Workshop Promo */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="bg-card rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch shadow-md">
            <div className="relative h-72 md:h-auto md:w-1/2">
              <Image
                src="/images/about-hero.png"
                alt="סדנאות אפייה של SoolSweets"
                fill
                className="object-cover"
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
