import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { hasSizeGuide, getSizeGuideUrl } from '@/lib/gallery-data'
import Breadcrumb from '@/components/breadcrumb'
import FramedHero from '@/components/framed-hero'
import { getDominantRatio, shouldSkipImageOptimization } from '@/lib/image-ratios'

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
  description: ReactNode
  products: Product[]
  whatsappMessage: string
  categoryLabel?: string
}

export default function CategoryPage({
  title,
  subtitle,
  heroImage,
  heroAlt,
  description,
  products,
  categoryLabel,
}: CategoryPageProps) {
  // מסגרת אחידה לכל כרטיסי העמוד (לפי הפורמט הנפוץ בתמונות העמוד)
  const frame = getDominantRatio(products.map((p) => p.image))

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: categoryLabel ?? title }]} />

        {/* Hero – full photo in a frame, soft-blurred copy behind it */}
        <FramedHero src={heroImage} alt={heroAlt} variant="landscape" />

        {/* Bottom-sheet card */}
        <div className="relative -mt-8 rounded-t-[2rem] bg-card shadow-[0_-6px_20px_rgba(107,58,52,0.12)]">
          <div className="max-w-6xl mx-auto px-5 md:px-6 pt-6 pb-16">
            <div className="mx-auto mb-4 h-1.5 w-11 rounded-full bg-border" aria-hidden="true" />

            <div className="flex items-center justify-between gap-3">
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
                {title}
              </h1>
              <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-xs md:text-sm font-bold text-muted-foreground">
                {products.length} פריטים
              </span>
            </div>
            <p className="mt-1 text-foreground/70 font-medium">{subtitle}</p>
            <p className="mt-3 text-foreground/70 leading-relaxed whitespace-pre-line max-w-3xl">{description}</p>

            {/* Quick jump chips */}
            <nav aria-label="דלגו לפריט" className="mt-5 -mx-5 px-5 md:mx-0 md:px-0 flex gap-2 overflow-x-auto pb-1">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/gallery/${product.slug}`}
                  className="shrink-0 rounded-full bg-muted px-4 py-2 text-sm font-semibold text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
                >
                  {product.title}
                </Link>
              ))}
            </nav>

            {/* Products list */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {products.map((product) => (
                <article
                  key={product.slug}
                  id={product.slug}
                  className="scroll-mt-24 flex gap-3 rounded-[22px] bg-background/60 p-2 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* All cards share one frame ratio (the most common photo format on the page) */}
                  <Link
                    href={`/gallery/${product.slug}`}
                    style={{ aspectRatio: frame }}
                    className="relative block w-24 sm:w-28 shrink-0 self-start overflow-hidden rounded-2xl bg-muted"
                    aria-label={`צפו בגלריה: ${product.title}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="112px"
                      quality={85}
                      unoptimized={shouldSkipImageOptimization(product.image)}
                      className="object-cover object-center"
                    />
                    {product.note && (
                      <span className="absolute top-1.5 right-1.5 bg-primary text-primary-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full z-10">
                        {product.note}
                      </span>
                    )}
                  </Link>

                  <div className="flex flex-1 min-w-0 flex-col justify-center gap-1 py-1 pl-1">
                    <Link href={`/gallery/${product.slug}`} className="group/title">
                      <h2 className="font-serif text-lg sm:text-xl font-bold leading-tight text-foreground group-hover/title:text-primary transition-colors">
                        {product.title}
                      </h2>
                    </Link>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-snug line-clamp-3">
                      {product.description}
                    </p>
                    {hasSizeGuide(product.slug) && (
                      <Link
                        href={getSizeGuideUrl(product.slug)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                      </svg>
                        טבלת גדלים מומלצת
                      </Link>
                    )}
                    <div className="mt-1 flex items-center gap-4">
                      <Link
                        href={`/gallery/${product.slug}`}
                        className="text-sm font-bold text-primary hover:text-foreground transition-colors"
                      >
                        לגלריה &larr;
                      </Link>
                      <a
                        href={`https://wa.me/972545629058?text=${encodeURIComponent(`שלום סלעית, אשמח לשמוע עוד על ${product.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                        להזמנה
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
