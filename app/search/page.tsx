'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { shouldSkipImageOptimization } from '@/lib/image-ratios'


interface SearchResult {
  slug: string
  title: string
  description: string
  category: string
  image: string
  matchedImages: { src: string; alt: string }[]
}

interface ApiResponse {
  results: SearchResult[]
  relatedResults?: SearchResult[]
  total: number
}

function SearchResults() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams.get('q') ?? ''

  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [results, setResults] = useState<SearchResult[]>([])
  const [relatedResults, setRelatedResults] = useState<SearchResult[]>([])
  const [inputValue, setInputValue] = useState(query)

  useEffect(() => {
    if (!query.trim()) return
    setStatus('loading')
    setResults([])
    setRelatedResults([])

    fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })
      .then((r) => r.json())
      .then((data: ApiResponse) => {
        setResults(data.results ?? [])
        setRelatedResults(data.relatedResults ?? [])
        setStatus('done')
      })
      .catch(() => setStatus('error'))
  }, [query])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!inputValue.trim()) return
    router.push(`/search?q=${encodeURIComponent(inputValue.trim())}`)
  }

  function renderCards(items: SearchResult[], related = false) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((result, index) => (
          <article key={result.slug} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <Link href={`/gallery/${result.slug}`} className="group flex flex-1 flex-col">
              <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden bg-muted">
                <Image
                  src={result.matchedImages?.[0]?.src ?? result.image}
                  alt={result.matchedImages?.[0]?.alt ?? result.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                  unoptimized={shouldSkipImageOptimization(result.matchedImages?.[0]?.src ?? result.image)}
                  loading={index === 0 && !related ? 'eager' : 'lazy'}
                  className={shouldSkipImageOptimization(result.matchedImages?.[0]?.src ?? result.image) ? 'object-contain' : 'object-cover'}
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/25 transition-colors duration-300" />
                {related && (
                  <span className="absolute right-3 top-3 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
                    תוצאה קרובה
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {result.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{result.description}</p>
                {result.matchedImages?.length > 0 && (
                  <div className="mt-3 flex gap-2" aria-hidden="true">
                    {result.matchedImages.slice(0, 3).map((image) => (
                      <div key={image.src} className="relative size-12 overflow-hidden rounded-md border border-border">
                        <Image src={image.src} alt="" fill sizes="48px" quality={90} unoptimized={shouldSkipImageOptimization(image.src)} className="object-cover" />
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">לגלריה &larr;</span>
                </div>
              </div>
            </Link>
            <div className="px-6 pb-6 flex justify-end">
              <a
                href={`https://wa.me/972545629058?text=${encodeURIComponent('שלום סלעית, מעוניין ב: ' + result.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-foreground/60 hover:text-primary transition-colors flex items-center gap-1"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                להזמנה
              </a>
            </div>
          </article>
        ))}
      </div>
    )
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

          {status === 'done' && results.length === 0 && relatedResults.length === 0 && (
            <div className="text-center py-20">
              <p className="text-foreground font-semibold text-lg mb-2">לא מצאנו התאמה מדויקת</p>
              <p className="text-muted-foreground text-sm mb-6">
                נסו לנסח אחרת, או פנו לסלעית ישירות — היא תשמח לעזור!
              </p>
              <a
                href="https://wa.me/972545629058"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                לפנייה ישירה לסלעית
              </a>
            </div>
          )}

          {status === 'done' && results.length > 0 && (
            <>
              <div className="text-center mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  נמצאו {results.length} המלצות עבורכם
                </h2>
                {query && (
                  <p className="text-sm text-muted-foreground">
                    עבור: <span className="text-foreground font-medium">&quot;{query}&quot;</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {results.map((result, index) => (
                  <article
                    key={result.slug}
                    className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
                  >
                    <Link href={`/gallery/${result.slug}`} className="group flex flex-1 flex-col">
                    <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden bg-muted">
                      <Image
                        src={result.matchedImages?.[0]?.src ?? result.image}
                        alt={result.matchedImages?.[0]?.alt ?? result.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={90}
                        unoptimized={shouldSkipImageOptimization(result.matchedImages?.[0]?.src ?? result.image)}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        className={shouldSkipImageOptimization(result.matchedImages?.[0]?.src ?? result.image) ? 'object-contain' : 'object-cover'}
                      />
                      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/25 transition-colors duration-300" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-serif text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                        {result.description}
                      </p>
                      {result.matchedImages?.length > 0 && (
                        <div className="mt-3 flex gap-2" aria-hidden="true">
                          {result.matchedImages.slice(0, 3).map((image) => (
                            <div key={image.src} className="relative size-12 overflow-hidden rounded-md border border-border">
                              <Image src={image.src} alt="" fill sizes="48px" quality={90} unoptimized={shouldSkipImageOptimization(image.src)} className="object-cover" />
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          לגלריה &larr;
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="px-6 pb-6 flex justify-end">
                    <a
                      href={`https://wa.me/972545629058?text=${encodeURIComponent('שלום סלעית, מעוניין ב: ' + result.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-foreground/60 hover:text-primary transition-colors flex items-center gap-1"
                    >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          להזמנה
                    </a>
                  </div>
                  </article>
                ))}
              </div>

              <p className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto leading-relaxed">
                לא מצאתם בדיוק את מה שחיפשתם? כתבו לסלעית בוואטסאפ ונתאים יחד את ההזמנה המושלמת עבורכם.
              </p>
            </>
          )}

          {status === 'done' && relatedResults.length > 0 && (
            <section aria-labelledby="related-results-title" className={results.length > 0 ? 'mt-16 border-t border-border pt-10' : ''}>
              <div className="text-center mb-8">
                <h2 id="related-results-title" className="font-serif text-2xl font-bold text-foreground mb-2">
                  {results.length > 0 ? 'תוצאות קרובות' : 'לא מצאנו התאמה מדויקת — אולי אלה יעזרו'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  ההצעות הבאות קשורות חלקית לבקשה ומוצגות בנפרד מההתאמות הטובות.
                </p>
              </div>
              {renderCards(relatedResults, true)}
            </section>
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
