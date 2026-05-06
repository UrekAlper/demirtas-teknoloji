'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import SectionTag from '@/components/ui/SectionTag'

export default function MachineHighlight() {
  const t = useTranslations('MachineHighlight')

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: t('stat4Value'), label: t('stat4Label') },
  ]

  return (
    <section className="bg-[#1A1A1A] py-24 relative overflow-hidden">
      {/* mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <SectionTag label={t('sectionTag')} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-2 border-amber/30 pl-6"
            >
              <p className="font-display font-extrabold text-5xl lg:text-6xl text-amber leading-none mb-2">
                {value}
              </p>
              <p className="font-body text-sm text-white/50 uppercase tracking-wider">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
