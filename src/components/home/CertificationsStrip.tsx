'use client'

import { useTranslations } from 'next-intl'
import SectionTag from '@/components/ui/SectionTag'

const PARTNERS = [
  { name: 'MKE', subtitle: 'A Sınıf Onaylı Tedarikçi', logo: '/partners/mke.png' },
  { name: 'SAHA İSTANBUL', subtitle: 'Kümeleme Üyesi', logo: '/partners/saha-istanbul.png' },
  { name: 'Teknokent', subtitle: 'Ar-Ge Ortağı', logo: '/partners/teknokent.png' },
  { name: 'AFGM', subtitle: 'Onaylı Tedarikçi', logo: null },
]

export default function CertificationsStrip() {
  const t = useTranslations('CertificationsStrip')

  return (
    <section className="bg-gray-light py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionTag label={t('sectionTag')} className="justify-center" />
          <h2 className="font-display font-bold text-2xl text-charcoal mt-3">
            {t('title')}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          {PARTNERS.map(({ name, subtitle, logo }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center bg-white border border-border px-8 py-6 w-44 hover:border-amber transition-colors"
            >
              {logo ? (
                <img
                  src={logo}
                  alt={name}
                  className="h-12 w-auto object-contain mb-3"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement
                    img.style.display = 'none'
                    const fallback = img.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
              ) : null}
              <span
                className="items-center justify-center font-display font-bold text-lg text-charcoal mb-3"
                style={{ display: logo ? 'none' : 'flex' }}
              >
                {name.includes('|')
                  ? name.split('|').map((part, i) => (
                      <span key={i}>
                        {i > 0 && <span className="text-amber">|</span>}
                        {part}
                      </span>
                    ))
                  : name}
              </span>
              <p className="font-body text-xs text-gray-mid text-center">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
