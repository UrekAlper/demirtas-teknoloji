import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

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

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 })
    return true
  }

  if (entry.count >= 5) {
    return false
  }

  entry.count += 1
  return true
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function POST(req: NextRequest) {
  try {
    const forwardedFor = req.headers.get('x-forwarded-for')
    const ip = forwardedFor?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      )
    }

    const body = await req.json().catch(() => null)
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid data' },
        { status: 400 }
      )
    }

    const {
      fullName,
      company,
      email,
      phone,
      subject,
      quantity,
      material,
      message,
    } = parsed.data

    const subjectLabels: Record<FormSubject, string> = {
      quote: 'Teklif Talebi',
      technical: 'Teknik Görüşme',
      partnership: 'İş Ortaklığı',
      other: 'Diğer',
    }

    const materialLabels: Record<FormMaterial, string> = {
      aluminum: 'Alüminyum',
      steel: 'Çelik',
      titanium: 'Titanyum',
      inconel: 'Inconel',
      other: 'Diğer',
    }

    const safeFullName = escapeHtml(fullName)
    const safeCompany = escapeHtml(company)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone || '—')
    const safeQuantity = escapeHtml(quantity || '—')
    const safeMessage = escapeHtml(message)

    const htmlBody = `
      <h2 style="color:#F5A800;font-family:Arial,sans-serif">DE|TECH — Yeni İletişim Formu</h2>
      <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse" cellpadding="8">
        <tr><td><strong>Ad Soyad:</strong></td><td>${safeFullName}</td></tr>
        <tr><td><strong>Şirket:</strong></td><td>${safeCompany}</td></tr>
        <tr><td><strong>E-posta:</strong></td><td>${safeEmail}</td></tr>
        <tr><td><strong>Telefon:</strong></td><td>${safePhone}</td></tr>
        <tr><td><strong>Konu:</strong></td><td>${subjectLabels[subject]}</td></tr>
        <tr><td><strong>Malzeme:</strong></td><td>${materialLabels[material]}</td></tr>
        <tr><td><strong>Adet:</strong></td><td>${safeQuantity}</td></tr>
      </table>
      <h3 style="font-family:Arial,sans-serif">Mesaj:</h3>
      <p style="font-family:Arial,sans-serif;white-space:pre-wrap">${safeMessage}</p>
    `

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_EMAIL || 'info@demirtasteknoloji.com'

    if (!apiKey) {
      console.log('[contact] RESEND_API_KEY yok. Mail gönderilmedi, test başarılı sayıldı.', {
        toEmail,
        fullName,
        company,
        email,
        phone,
        subject,
        quantity,
        material,
        message,
      })

      return NextResponse.json({ ok: true, dev: true })
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'DE|TECH Website <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: email,
        subject: `[DE|TECH] ${subjectLabels[subject]} — ${company}`,
        html: htmlBody,
      }),
    })

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text()
      console.error('[contact] Resend error:', errorText)

      return NextResponse.json(
        { error: 'Send failed' },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[contact] Unexpected error:', error)

    return NextResponse.json(
      { error: 'Unexpected server error' },
      { status: 500 }
    )
  }
}

type FormSubject = 'quote' | 'technical' | 'partnership' | 'other'
type FormMaterial = 'aluminum' | 'steel' | 'titanium' | 'inconel' | 'other'