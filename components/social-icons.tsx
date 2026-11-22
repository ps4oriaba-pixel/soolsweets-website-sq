import { socialLinks } from '@/lib/social-links'

type Props = { size?: number; className?: string }

const common = 'inline-flex shrink-0 transition-transform duration-200 hover:scale-110 focus-visible:scale-110'

function Wrap({ href, label, size, children }: { href: string; label: string; size: number; children: React.ReactNode }) {
  const external = href.length > 0
  return (
    <a
      href={external ? href : '#'}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label={label}
      className={common}
      style={{ width: size, height: size }}
    >
      {children}
    </a>
  )
}

// אייקוני אינסטגרם, טיקטוק ופייסבוק – ריבועים מעוגלים בצבעי המותגים.
export default function SocialIcons({ size = 28, className = '' }: Props) {
  return (
    <div className={`flex items-center ${className}`} dir="ltr">
      <Wrap href={socialLinks.facebook} label="פייסבוק" size={size}>
        <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
          <rect width="32" height="32" rx="8" fill="#1877F2" />
          <path
            d="M17.9 27v-9.2h3.1l.5-3.6h-3.6V12c0-1 .3-1.8 1.8-1.8h1.9V7c-.3 0-1.5-.1-2.8-.1-2.8 0-4.6 1.7-4.6 4.7v2.6h-3.1v3.6h3.1V27h3.7z"
            fill="#fff"
          />
        </svg>
      </Wrap>
      <Wrap href={socialLinks.instagram} label="אינסטגרם" size={size}>
        <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
          <defs>
            <radialGradient id="igGrad" cx="30%" cy="107%" r="140%">
              <stop offset="0" stopColor="#FED576" />
              <stop offset=".26" stopColor="#F47133" />
              <stop offset=".61" stopColor="#BC3081" />
              <stop offset="1" stopColor="#4C63D2" />
            </radialGradient>
          </defs>
          <rect width="32" height="32" rx="8" fill="url(#igGrad)" />
          <rect x="7.5" y="7.5" width="17" height="17" rx="5" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="16" cy="16" r="4.1" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="21.3" cy="10.7" r="1.2" fill="#fff" />
        </svg>
      </Wrap>
      <Wrap href={socialLinks.tiktok} label="טיקטוק" size={size}>
        <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
          <rect width="32" height="32" rx="8" fill="#000" />
          <path
            d="M21.4 8.9c-.9-.6-1.5-1.5-1.7-2.6h-3v12.6c0 1.5-1.2 2.6-2.7 2.5-1.3-.1-2.3-1.2-2.3-2.5 0-1.6 1.4-2.7 2.9-2.5v-3.1c-3.3-.3-6 2.2-5.9 5.5.1 2.9 2.4 5.1 5.3 5.1 3 0 5.4-2.4 5.4-5.4v-5.5c1.1.8 2.4 1.2 3.7 1.2V9.1c-1.4 0-2.6-.5-3.7-1.2z"
            fill="#fff"
            transform="translate(-0.3 0.6)"
          />
        </svg>
      </Wrap>
    </div>
  )
}
