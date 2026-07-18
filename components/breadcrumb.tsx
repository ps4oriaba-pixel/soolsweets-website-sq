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
      className="w-full bg-secondary/50 border-b border-border/20"
    >
      <div className="max-w-6xl mx-auto px-6 py-2 flex justify-end" dir="rtl">
        <ol className="flex items-center gap-1.5 text-xs flex-wrap">
          <li>
            <Link href="/" className="text-foreground/60 hover:text-foreground transition-colors">
              בית
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              <span className="text-foreground/30">/</span>
              {item.href ? (
                <Link href={item.href} className="text-foreground/60 hover:text-foreground transition-colors">
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
