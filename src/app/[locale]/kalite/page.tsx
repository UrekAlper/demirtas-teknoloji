'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ShieldCheck, FileCheck, Award, CheckCircle2, ChevronDown } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import AmberLine from '@/components/ui/AmberLine'
import CTASection from '@/components/home/CTASection'

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

export default function KalitePage() {
  const t = useTranslations('Quality')

  const steps = [t('step1'), t('step2'), t('step3'), t('step4'), t('step5')]

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

      <section className="bg-amber py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTag label={t('philosophyTag')} className="mb-4" />
          <p className="font-display font-bold text-2xl lg:text-3xl text-[#1A1A1A] max-w-3xl mt-3 leading-snug">
            {t('philosophyText')}
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <SectionTag label={t('certificatesTag')} className="mb-4" />
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-charcoal mt-3">
              {t('certificatesTitle')}
            </h2>
            <AmberLine className="mt-5" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="border-2 border-amber p-8 relative"
            >
              <div className="absolute -top-4 left-6 bg-amber px-3 py-1">
                <span className="font-display font-bold text-xs text-[#1A1A1A] uppercase tracking-wider">
                  Aktif / Active
                </span>
              </div>
              <ShieldCheck size={32} className="text-amber mb-6" />
              <h3 className="font-display font-bold text-xl text-charcoal mb-3">
                {t('afgmTitle')}
              </h3>
              <AmberLine className="mb-5 w-10" />
              <p className="font-body text-sm text-gray-mid mb-2">{t('afgmBody')}</p>
              <p className="font-mono text-xs text-charcoal font-semibold mt-4">{t('afgmDocNo')}</p>
              <p className="font-mono text-xs text-gray-mid">{t('afgmScope')}</p>
              <p className="font-mono text-xs text-gray-mid">{t('afgmValidity')}</p>
              <button className="mt-6 inline-flex items-center gap-2 text-amber font-display font-semibold text-sm hover:underline">
                {t('afgmViewDoc')}
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-border p-8"
            >
              <Award size={32} className="text-amber mb-6" />
              <h3 className="font-display font-bold text-xl text-charcoal mb-3">
                {t('mkeTitle')}
              </h3>
              <AmberLine className="mb-5 w-10" />
              <p className="font-body text-sm text-gray-mid mb-4">{t('mkeBody')}</p>
              <p className="font-mono text-xs text-gray-mid italic">{t('mkePlaceholder')}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border border-border p-8"
            >
              <FileCheck size={32} className="text-amber mb-6" />
              <h3 className="font-display font-bold text-xl text-charcoal mb-3">
                {t('isoTitle')}
              </h3>
              <AmberLine className="mb-5 w-10" />
              <p className="font-mono text-xs text-gray-mid italic">{t('isoPlaceholder')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 text-center">
            <SectionTag label={t('processTag')} className="justify-center mb-4" />
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-charcoal mt-3">
              {t('processTitle')}
            </h2>
          </div>

          <div className="max-w-md mx-auto flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center gap-4 w-full bg-white border border-border px-6 py-5">
                  <div className="w-8 h-8 bg-amber flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-sm text-[#1A1A1A]">{i + 1}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-amber shrink-0" />
                    <p className="font-body text-sm text-charcoal font-medium">{step}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex flex-col items-center py-1">
                    <div className="w-[2px] h-4 bg-amber/40" />
                    <ChevronDown size={16} className="text-amber/60" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}