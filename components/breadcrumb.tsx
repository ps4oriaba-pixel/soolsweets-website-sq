import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className="sticky top-20 z-40 w-full bg-secondary border-b border-border/20"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-start" dir="rtl">
        <ol className="flex flex-nowrap items-center gap-2 whitespace-nowrap text-sm sm:gap-3 sm:text-base">
          <li>
            <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
              בית
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-foreground/30">/</span>
              {item.href ? (
                <Link href={item.href} className="text-foreground/70 hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground/90 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
