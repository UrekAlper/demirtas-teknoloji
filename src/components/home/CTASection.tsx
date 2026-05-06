import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { ArrowRight, Download } from 'lucide-react'

export default function CTASection() {
  const t = useTranslations('CTA')

  return (
    <section className="bg-amber py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-[#1A1A1A] max-w-2xl mx-auto leading-tight mb-4">
          {t('title')}
        </h2>
        <p className="font-body text-[#1A1A1A]/70 mb-10 max-w-md mx-auto">
          {t('subtitle')}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 font-display font-bold text-sm hover:bg-charcoal transition-colors"
          >
            {t('cta')}
            <ArrowRight size={16} />
          </Link>
          <a
            href="/catalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 font-display font-semibold text-sm hover:bg-[#1A1A1A] hover:text-amber transition-colors"
          >
            {t('catalogCta')}
            <Download size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
