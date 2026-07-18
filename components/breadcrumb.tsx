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
    <>
    {/* Spacer to push content below the fixed breadcrumb bar */}
    <div className="h-8" aria-hidden="true" />
    <nav
      aria-label="breadcrumb"
      className="fixed z-40 top-[68px] right-0 left-0 bg-secondary/70 backdrop-blur-sm border-b border-border/30"
    >
      <div className="max-w-6xl mx-auto px-6 py-1.5 flex justify-end" dir="rtl">
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
    </>
  )
}
