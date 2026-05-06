'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import SectionTag from '@/components/ui/SectionTag'
import AmberLine from '@/components/ui/AmberLine'
import { ShieldCheck } from 'lucide-react'

export default function PartnersGrid({ showHeader = true }: { showHeader?: boolean }) {
  const t = useTranslations('Partners')

  const partners = [
    { key: 'mke',       abbr: 'MKE',   bg: '#1A1A1A', text: '#F5A800', hasLogo: true  },
    { key: 'afgm',      abbr: 'AFGM',  bg: '#2D2D2D', text: '#F5A800', hasLogo: false },
    { key: 'saha',      abbr: 'SAHA',  bg: '#1A1A1A', text: '#F5A800', hasLogo: true  },
    { key: 'teknokent', abbr: 'TEKNO', bg: '#2D2D2D', text: '#F5A800', hasLogo: true  },
  ] as const

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {showHeader && (
          <div className="mb-14">
            <SectionTag label={t('sectionTag')} className="mb-4" />
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-charcoal mt-3">
              {t('title')}
            </h2>
            <AmberLine className="mt-5" />
            <p className="font-body text-gray-mid mt-5 max-w-xl leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map(({ key, abbr, bg, text, hasLogo }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-border hover:border-amber transition-colors group"
            >
              {/* Card header */}
              <div
                className="h-32 flex items-center justify-center"
                style={{ backgroundColor: bg }}
              >
                {hasLogo ? (
                  <img
                    src={`/partners/${key === 'saha' ? 'saha-istanbul' : key}.png`}
                    alt={abbr}
                    className="max-h-16 max-w-[80%] object-contain"
                  />
                ) : (
                  <span
                    className="font-display font-extrabold text-3xl tracking-widest"
                    style={{ color: text }}
                  >
                    {abbr}
                  </span>
                )}
              </div>
              {/* Card body */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck size={14} className="text-amber shrink-0" />
                  <h3 className="font-display font-bold text-sm text-charcoal uppercase tracking-wide">
                    {t(`${key}Title` as any)}
                  </h3>
                </div>
                <p className="font-body text-xs text-gray-mid leading-relaxed">
                  {t(`${key}Desc` as any)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center font-body text-xs text-gray-mid italic max-w-lg mx-auto">
          {t('confidentialityNote')}
        </p>
      </div>
    </section>
  )
}
