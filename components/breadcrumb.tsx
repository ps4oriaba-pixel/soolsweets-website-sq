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
    <nav aria-label="breadcrumb" className="w-full bg-secondary">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <ol className="flex items-center gap-2 text-sm flex-wrap justify-end" dir="rtl">
          <li>
            <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
              בית
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-foreground/40">/</span>
              {item.href ? (
                <Link href={item.href} className="text-foreground/70 hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
