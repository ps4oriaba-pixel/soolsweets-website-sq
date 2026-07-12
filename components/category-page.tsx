import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { hasSizeGuide, getSizeGuideUrl } from '@/lib/gallery-data'
import { BackButton } from '@/components/back-button'

export interface Product {
  title: string
  description: string
  image: string
  note?: string
  slug: string
}

interface CategoryPageProps {
  title: string
  subtitle: string
  heroImage: string
  heroAlt: string
  description: string
  products: Product[]
  whatsappMessage: string
}

export default function CategoryPage({
  title,
  subtitle,
  heroImage,
  heroAlt,
  description,
  products,
  whatsappMessage,
}: CategoryPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="relative h-72 md:h-96 overflow-hidden">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            priority
            className="object-cover object-center"
          />
          {/* Neutral dark scrim so the photo keeps its own colors and stands out
              from the pink page background (matches the home hero) */}
          <div className="absolute inset-0 bg-foreground/45" />
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 px-4">
            <p className="text-secondary text-sm font-medium tracking-widest uppercase">
              SoolSweets
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-background text-center text-balance">
              {title}
            </h1>
            <p className="text-background/80 text-base md:text-lg text-center max-w-lg">
              {subtitle}
            </p>
          </div>
        </section>

        {/* Back Button */}
        <section className="max-w-6xl mx-auto px-6 pt-8">
          <BackButton />
        </section>

        {/* Intro */}
        <section className="max-w-3xl mx-auto px-6 py-8 text-center">
          <p className="text-foreground/70 leading-relaxed text-lg">{description}</p>
          <div className="w-12 h-1 bg-primary mx-auto mt-8 rounded-full" />
        </section>

        {/* Products Grid */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.title}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Clickable image → gallery page */}
                <Link
                  href={`/gallery/${product.slug}`}
                  className="relative h-60 overflow-hidden block group"
                  aria-label={`צפו בגלריה: ${product.title}`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.note && (
                    <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full z-10">
                      {product.note}
                    </span>
                  )}
                  {/* Gallery overlay hint */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 text-foreground text-xs font-semibold px-4 py-2 rounded-full shadow">
                      לגלריה המלאה
                    </span>
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <Link href={`/gallery/${product.slug}`} className="group/title">
                    <h2 className="font-serif text-xl font-bold text-foreground mb-2 group-hover/title:text-primary transition-colors">
                      {product.title}
                    </h2>
                  </Link>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>
                  {hasSizeGuide(product.slug) && (
                    <Link
                      href={getSizeGuideUrl(product.slug)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors mb-4"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                      </svg>
                      טבלת גדלים מומלצת
                    </Link>
                  )}
                  <div className="flex items-center gap-4">
                    <Link
                      href={`/gallery/${product.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4" strokeWidth={1.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 12h.008v.008H13.5V12zm0 0h.008v.008H13.5V12zm-3 0h.008v.008H12V12z" />
                      </svg>
                      גלריה
                    </Link>
                    <a
                      href={`https://wa.me/972545629058?text=${encodeURIComponent(`שלום סלעית, אשמח לשמוע עוד על ${product.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      להזמנה
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Strip */}
        <section className="bg-accent py-16 px-6">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="font-serif text-3xl font-bold text-background text-balance">
              מוכנים להזמין?
            </h2>
            <p className="text-background/75 leading-relaxed">
              צרו קשר בוואטסאפ ואני אגשים לכם את הרעיון הכי מרהיב שיש!
            </p>
            <WhatsAppButton message={whatsappMessage} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
