'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Target, Eye, Zap, RefreshCw, Layers, ShieldCheck } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import AmberLine from '@/components/ui/AmberLine'
import CTASection from '@/components/home/CTASection'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function HakkimizdaPage() {
  const t = useTranslations('About')

  const strengths = [
    { key: 'strength1', icon: Zap },
    { key: 'strength2', icon: RefreshCw },
    { key: 'strength3', icon: Layers },
    { key: 'strength4', icon: ShieldCheck },
  ] as const

  return (
    <>
      <section className="bg-[#1A1A1A] py-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-[4px] h-full bg-amber" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionTag label={t('sectionTag')} className="mb-4" />
          <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white mt-3">
            {t('title')}
          </h1>
          <AmberLine className="mt-6" />
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTag label={t('historyTag')} className="mb-4" />
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-charcoal mt-3 mb-10">
                {t('historyTitle')}
              </h2>

              <div className="relative pl-8 flex flex-col gap-0">
                <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-amber/20" />

                {([
                  { year: '2002', text: t('history2002') },
                  { year: '2016', text: t('history2016') },
                  { year: '2024', text: t('historyNow') },
                ] as const).map(({ year, text }, i) => (
                  <motion.div
                    key={year}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pb-10 last:pb-0"
                  >
                    <div className="absolute -left-[29px] top-1 w-4 h-4 bg-amber" />
                    <p className="font-display font-bold text-amber text-sm tracking-widest mb-2">
                      {year}
                    </p>
                    <p className="font-body text-gray-mid leading-relaxed text-sm">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className={`bg-gray-light border border-border flex items-center justify-center aspect-video ${n === 1 ? 'col-span-2' : ''}`}
                >
                  <img
                    src={`/factory/factory-${n}.jpg`}
                    alt={`Fabrika ${n}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement
                      img.style.display = 'none'
                      const fb = img.nextElementSibling as HTMLElement
                      if (fb) fb.style.removeProperty('display')
                    }}
                  />
                  <img
                    src="https://placehold.co/800x500/1A1A1A/F5A800?text=DE|TECH"
                    alt={`Fabrika ${n}`}
                    className="w-full h-full object-cover hidden"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white border border-border p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Eye size={20} className="text-amber" />
              <SectionTag label={t('visionTag')} />
            </div>
            <AmberLine className="mb-6" />
            <p className="font-body text-charcoal leading-relaxed">{t('visionText')}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target size={20} className="text-amber" />
              <SectionTag label={t('missionTag')} />
            </div>
            <AmberLine className="mb-6" />
            <p className="font-body text-charcoal leading-relaxed">{t('missionText')}</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <SectionTag label={t('whyTag')} />
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mt-3">
              {t('whyTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map(({ key, icon: Icon }, i) => (
              <motion.div
                key={key}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-amber/20 p-8 hover:border-amber transition-colors"
              >
                <div className="w-10 h-10 bg-amber/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-amber" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  {t(`${key}Title` as any)}
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  {t(`${key}Desc` as any)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}