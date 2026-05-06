'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { Mail, Phone, MapPin } from 'lucide-react'
import AmberLine from '@/components/ui/AmberLine'

export default function Footer() {
  const t = useTranslations('Footer')
  const nav = useTranslations('Nav')

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="DE|TECH"
                className="h-10 w-auto"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
              <span className="sr-only">DE|TECH — Demirtaş Teknoloji</span>
            </div>
            <AmberLine className="mb-4" />
            <p className="text-white/60 text-sm font-body leading-relaxed max-w-xs">
              {t('tagline')}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-display font-semibold text-xs tracking-[0.15em] uppercase text-amber mb-5">
              {t('quickLinks')}
            </p>
            <nav className="flex flex-col gap-3">
              {(['home', 'about', 'capabilities', 'quality', 'partners', 'contact'] as const).map((key) => {
                const hrefs: Record<string, string> = {
                  home: '/', about: '/hakkimizda', capabilities: '/kabiliyetler',
                  quality: '/kalite', partners: '/ortaklar', contact: '/iletisim',
                }
                return (
                  <Link
                    key={key}
                    href={hrefs[key] as any}
                    className="text-white/60 text-sm font-body hover:text-amber transition-colors"
                  >
                    {nav(key as any)}
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-semibold text-xs tracking-[0.15em] uppercase text-amber mb-5">
              {t('contact')}
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-white/60 text-sm font-body">
                <Mail size={16} className="text-amber shrink-0 mt-0.5" />
                <a href="mailto:info@demirtasteknoloji.com" className="hover:text-amber transition-colors">
                  info@demirtasteknoloji.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm font-body">
                <Phone size={16} className="text-amber shrink-0 mt-0.5" />
                <a href="tel:+905068913713" className="hover:text-amber transition-colors">
                  +90 506 891 37 13
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm font-body">
                <MapPin size={16} className="text-amber shrink-0 mt-0.5" />
                <span>{t('address')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-white/40 text-xs font-body">
            © {new Date().getFullYear()} Demirtaş Teknoloji Ltd. Şti. — {t('rights')}
          </p>
          <p className="text-white/40 text-xs font-body">
            demirtasteknoloji.com
          </p>
        </div>
      </div>
    </footer>
  )
}
