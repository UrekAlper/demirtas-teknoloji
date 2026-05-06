'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { Mail, Phone, MapPin, CheckCircle2, Send } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import AmberLine from '@/components/ui/AmberLine'
import { cn } from '@/lib/utils'

const schema = z.object({
  fullName: z.string().min(1),
  company: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.enum(['quote', 'technical', 'partnership', 'other']),
  quantity: z.string().optional(),
  material: z.enum(['aluminum', 'steel', 'titanium', 'inconel', 'other']),
  message: z.string().min(20),
})

type FormData = z.infer<typeof schema>

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-body text-sm font-medium text-charcoal">
        {label}
        {required && <span className="text-amber ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs font-body">{error}</p>}
    </div>
  )
}

const inputClass =
  'w-full border border-border px-4 py-3 font-body text-sm text-charcoal bg-white focus:outline-none focus:border-amber transition-colors'

export default function IletisimPage() {
  const t = useTranslations('Contact')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { subject: 'quote', material: 'other' },
  })

  async function onSubmit(data: FormData) {
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Contact form request failed')
      }

      setStatus('success')
      reset()
    } catch (error) {
      console.error('[contact-form]', error)
      setStatus('error')
    }
  }

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
          <p className="font-body text-white/60 mt-5 max-w-xl leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-2xl text-charcoal mb-8">
                {t('formTitle')}
              </h2>

              {status === 'success' ? (
                <div className="border-2 border-amber p-10 text-center">
                  <CheckCircle2 size={40} className="text-amber mx-auto mb-4" />
                  <h3 className="font-display font-bold text-xl text-charcoal mb-2">
                    {t('successTitle')}
                  </h3>
                  <p className="font-body text-gray-mid">{t('successText')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label={t('fullName')} error={errors.fullName?.message} required>
                      <input
                        {...register('fullName')}
                        className={cn(inputClass, errors.fullName && 'border-red-400')}
                        placeholder="Adnan Demirtaş"
                      />
                    </Field>

                    <Field label={t('company')} error={errors.company?.message} required>
                      <input
                        {...register('company')}
                        className={cn(inputClass, errors.company && 'border-red-400')}
                        placeholder="Şirket A.Ş."
                      />
                    </Field>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label={t('email')} error={errors.email?.message} required>
                      <input
                        {...register('email')}
                        type="email"
                        className={cn(inputClass, errors.email && 'border-red-400')}
                        placeholder="ornek@sirket.com"
                      />
                    </Field>

                    <Field label={t('phone')}>
                      <input
                        {...register('phone')}
                        type="tel"
                        className={inputClass}
                        placeholder="+90 5XX XXX XX XX"
                      />
                    </Field>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label={t('subject')} error={errors.subject?.message} required>
                      <select {...register('subject')} className={inputClass}>
                        <option value="quote">{t('subject_quote')}</option>
                        <option value="technical">{t('subject_technical')}</option>
                        <option value="partnership">{t('subject_partnership')}</option>
                        <option value="other">{t('subject_other')}</option>
                      </select>
                    </Field>

                    <Field label={t('material')} error={errors.material?.message} required>
                      <select {...register('material')} className={inputClass}>
                        <option value="aluminum">{t('material_aluminum')}</option>
                        <option value="steel">{t('material_steel')}</option>
                        <option value="titanium">{t('material_titanium')}</option>
                        <option value="inconel">{t('material_inconel')}</option>
                        <option value="other">{t('material_other')}</option>
                      </select>
                    </Field>
                  </div>

                  <Field label={t('quantity')}>
                    <input {...register('quantity')} className={inputClass} placeholder="1000" />
                  </Field>

                  <Field label={t('message')} error={errors.message?.message} required>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className={cn(inputClass, 'resize-y', errors.message && 'border-red-400')}
                      placeholder={t('messagePlaceholder')}
                    />
                  </Field>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm font-body">{t('errorText')}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 bg-amber text-[#1A1A1A] px-8 py-4 font-display font-bold text-sm hover:bg-amber-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed self-start"
                  >
                    <Send size={16} />
                    {status === 'loading' ? t('sending') : t('submit')}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-1">
              <h2 className="font-display font-bold text-2xl text-charcoal mb-8">
                {t('infoTitle')}
              </h2>

              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-amber flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#1A1A1A]" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-xs tracking-widest uppercase text-gray-mid mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@demirtasteknoloji.com"
                      className="font-body text-sm text-charcoal hover:text-amber transition-colors"
                    >
                      info@demirtasteknoloji.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-amber flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#1A1A1A]" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-xs tracking-widest uppercase text-gray-mid mb-1">
                      Telefon
                    </p>
                    <a
                      href="tel:+905068913713"
                      className="font-body text-sm text-charcoal hover:text-amber transition-colors"
                    >
                      +90 506 891 37 13
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-amber flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#1A1A1A]" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-xs tracking-widest uppercase text-gray-mid mb-1">
                      Adres
                    </p>
                    <p className="font-body text-sm text-charcoal leading-relaxed">
                      {t('address')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.8!2d32.6!3d39.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f3e59f9a9a9%3A0x0!2zQmHFn2tlbnQgT1NCLCBTaW5jYW4vQW5rYXJh!5e0!3m2!1str!2str!4v1620000000000"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Demirtaş Teknoloji Harita"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}