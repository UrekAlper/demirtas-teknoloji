'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { Settings2, Printer, Layers } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import AmberLine from '@/components/ui/AmberLine'

const ICONS = [Settings2, Printer, Layers]

export default function CapabilitiesPreview() {
  const t = useTranslations('CapabilitiesPreview')

  const cards = [
    { key: 'machining', icon: ICONS[0] },
    { key: 'additive',  icon: ICONS[1] },
    { key: 'postProcess', icon: ICONS[2] },
  ] as const

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(({ key, icon: Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-border p-8 hover:border-amber hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 bg-amber/10 flex items-center justify-center mb-6 group-hover:bg-amber/20 transition-colors">
                <Icon size={24} className="text-amber" />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal mb-3">
                {t(`${key}.title` as any)}
              </h3>
              <p className="font-body text-sm text-gray-mid leading-relaxed">
                {t(`${key}.description` as any)}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/kabiliyetler"
            className="inline-flex items-center gap-2 border-2 border-charcoal text-charcoal px-8 py-3 font-display font-semibold text-sm hover:border-amber hover:text-amber transition-colors"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
