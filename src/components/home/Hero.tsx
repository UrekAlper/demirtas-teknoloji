'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  const t = useTranslations('Hero')

  return (
    <section className="relative min-h-screen flex items-center bg-[#1A1A1A] overflow-hidden">
      {/* Metal mesh overlay */}
      <div
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Amber left bar */}
      <div className="absolute left-0 top-0 w-[4px] h-full bg-amber" />

      {/* Gradient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 font-display text-xs font-semibold tracking-[0.2em] uppercase text-amber mb-6">
              <span className="w-8 h-[2px] bg-amber" />
              DE|TECH — Demirtaş Teknoloji
            </span>

            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              {t('title')}
              <br />
              <span className="text-amber">{t('titleLine2')}</span>
            </h1>

            <p className="font-body text-lg text-white/60 max-w-xl mb-10 leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-amber text-[#1A1A1A] px-8 py-4 font-display font-bold text-sm tracking-wide hover:bg-amber-dark transition-colors"
              >
                {t('cta1')}
                <ArrowRight size={16} />
              </Link>
              <a
                href="/catalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 font-display font-semibold text-sm tracking-wide hover:border-amber hover:text-amber transition-colors"
              >
                {t('cta2')}
                <Download size={16} />
              </a>
            </div>
          </motion.div>

          {/* Decorative bottom bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
            className="mt-16 h-[2px] w-48 bg-amber/40"
          />
        </div>
      </div>
    </section>
  )
}
