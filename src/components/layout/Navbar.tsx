'use client'

import { useState, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname, useRouter, pathnames } from '@/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

type PathKey = keyof typeof pathnames

const NAV_LINKS: { href: PathKey; label: string }[] = [
  { href: '/', label: 'home' },
  { href: '/hakkimizda', label: 'about' },
  { href: '/kabiliyetler', label: 'capabilities' },
  { href: '/kalite', label: 'quality' },
  { href: '/ortaklar', label: 'partners' },
  { href: '/iletisim', label: 'contact' },
]

export default function Navbar() {
  const t = useTranslations('Nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  function switchLocale(next: string) {
    router.replace(pathname as PathKey, { locale: next })
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-200',
        scrolled ? 'bg-charcoal/95 backdrop-blur-sm shadow-lg' : 'bg-charcoal'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/logo-white.png"
            alt="DE|TECH — Demirtaş Teknoloji"
            className="h-9 w-auto"
            onError={(e) => {
              const el = e.currentTarget
              el.style.display = 'none'
              const fallback = el.nextElementSibling as HTMLElement
              if (fallback) fallback.style.display = 'flex'
            }}
          />
          <span
            className="hidden items-center font-display font-bold text-xl text-white"
            aria-hidden="true"
          >
            DE<span className="text-amber">|</span>TECH
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'px-4 py-2 font-body text-sm font-medium transition-colors',
                pathname === href
                  ? 'text-amber border-b-2 border-amber'
                  : 'text-white/80 hover:text-amber'
              )}
            >
              {t(label as any)}
            </Link>
          ))}
        </nav>

        {/* Right side: locale + CTA */}
        <div className="flex items-center gap-4">
          {/* Locale switcher */}
          <div className="flex items-center gap-1 text-xs font-display font-semibold">
            <button
              onClick={() => switchLocale('tr')}
              className={cn(
                'px-2 py-1 transition-colors',
                locale === 'tr'
                  ? 'text-amber underline underline-offset-2'
                  : 'text-white/60 hover:text-white'
              )}
            >
              TR
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => switchLocale('en')}
              className={cn(
                'px-2 py-1 transition-colors',
                locale === 'en'
                  ? 'text-amber underline underline-offset-2'
                  : 'text-white/60 hover:text-white'
              )}
            >
              EN
            </button>
          </div>

          <Link
            href="/iletisim"
            className="hidden md:inline-flex items-center gap-2 bg-amber text-[#1A1A1A] px-5 py-2 text-sm font-display font-semibold hover:bg-amber-dark transition-colors"
          >
            {t('requestQuote')}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-charcoal border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  'py-3 font-body text-sm font-medium border-b border-white/10',
                  pathname === href ? 'text-amber' : 'text-white/80'
                )}
              >
                {t(label as any)}
              </Link>
            ))}
            <Link
              href="/iletisim"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center bg-amber text-[#1A1A1A] px-5 py-3 text-sm font-display font-semibold hover:bg-amber-dark transition-colors"
            >
              {t('requestQuote')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
