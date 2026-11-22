'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { WHATSAPP_NUMBER, DIRECT_MESSAGE } from '@/lib/whatsapp-messages'
import { useEffect, useState, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { getImageRatio, shouldSkipImageOptimization } from '@/lib/image-ratios'


interface ImageHit {
  src: string
  alt: string
  slug: string
  title: string
}

interface ApiResponse {
  images: ImageHit[]
  total: number
}

function SearchResults() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams.get('q') ?? ''

  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [images, setImages] = useState<ImageHit[]>([])
  const [inputValue, setInputValue] = useState(query)

  useEffect(() => {
    if (!query.trim()) return
    setStatus('loading')
    setImages([])

    fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })
      .then((r) => r.json())
      .then((data: ApiResponse) => {
        setImages(data.images ?? [])
        setStatus('done')
      })
      .catch(() => setStatus('error'))
  }, [query])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!inputValue.trim()) return
    router.push(`/search?q=${encodeURIComponent(inputValue.trim())}`)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Search header */}
        <section className="bg-secondary py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              חיפוש חכם
            </p>
            <h1 className="font-serif text-4xl font-bold text-foreground mb-8 text-balance">
              מה אתם מחפשים?
            </h1>
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto w-full" dir="rtl">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="למשל: עוגה לחתונה אינטימית של 15 איש בסגנון וינטאג׳..."
                className="min-w-0 w-full flex-1 rounded-full border border-border bg-background px-4 sm:px-6 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              />
              <button
                type="submit"
                disabled={status === 'loading' || !inputValue.trim()}
                className="w-full sm:w-auto shrink-0 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === 'loading' ? 'מחפש...' : 'חיפוש'}
              </button>
            </form>
          </div>
        </section>

        {/* Results */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          {status === 'idle' && !query && (
            <p className="text-center text-muted-foreground">הזינו בקשה כדי לקבל המלצות</p>
          )}

          {status === 'loading' && (
            <div className="flex flex-col items-center gap-4 py-20 text-muted-foreground">
              {/* Spinner */}
              <div className="w-10 h-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
              <p className="text-sm">מחפשים בתמונות ובגלריות...</p>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center py-20">
              <p className="text-foreground font-medium mb-2">אירעה שגיאה בחיפוש</p>
              <p className="text-sm text-muted-foreground">אנא נסו שוב או פנו לסלעית ישירות בוואטסאפ</p>
            </div>
          )}

          {status === 'done' && images.length === 0 && (
            <div className="text-center py-20">
              <p className="text-foreground font-semibold text-lg mb-2">לא מצאנו התאמה מדויקת</p>
              <p className="text-muted-foreground text-sm mb-6">
                נסו לנסח אחרת, או פנו לסלעית ישירות — היא תשמח לעזור!
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DIRECT_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                לפנייה ישירה לסלעית
              </a>
            </div>
          )}

          {status === 'done' && images.length > 0 && (
            <>
              <div className="text-center mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  נמצאו {images.length} תמונות
                </h2>
                {query && (
                  <p className="text-sm text-muted-foreground">
                    עבור: <span className="text-foreground font-medium">&quot;{query}&quot;</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
                {images.map((image, index) => {
                  const skip = shouldSkipImageOptimization(image.src)
                  return (
                    <figure
                      key={`${image.slug}:${image.src}`}
                      className="relative overflow-hidden rounded-xl bg-muted shadow-sm"
                      style={{ aspectRatio: getImageRatio(image.src) }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        quality={90}
                        unoptimized={skip}
                        loading={index < 4 ? 'eager' : 'lazy'}
                        className={skip ? 'object-contain' : 'object-cover'}
                      />
                      <Link
                        href={`/gallery/${image.slug}`}
                        className="absolute bottom-2 left-2 max-w-[90%] truncate rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-sm backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {image.title}
                      </Link>
                    </figure>
                  )
                })}
              </div>

              <p className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto leading-relaxed">
                לא מצאתם בדיוק את מה שחיפשתם? כתבו לסלעית בוואטסאפ ונתאים יחד את ההזמנה המושלמת עבורכם.
              </p>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchResults />
    </Suspense>
  )
}
