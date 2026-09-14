// app/api/send-quote/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const QUOTE_EMAIL = 'enockdev01@gmail.com'

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service is not configured yet.' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const {
      name,
      email,
      phone,
      productName,
      packaging,
      quantity,
      message,
    } = body || {}

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      )
    }

    const resend = new Resend(apiKey)

    const textBody = [
      'New Quote Request - Nzuri Foods',
      '',
      `Name: ${name || '-'}`,
      `Email: ${email || '-'}`,
      `Phone: ${phone || '-'}`,
      `Product: ${productName || '-'}`,
      `Packaging: ${packaging || '-'}`,
      `Estimated Quantity: ${quantity || '-'}`,
      `Additional Details: ${message || '-'}`,
    ].join('\n')

    const htmlBody = `
      <h2>New Quote Request - Nzuri Foods</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || '-')}</p>
      <p><strong>Product:</strong> ${escapeHtml(productName || '-')}</p>
      <p><strong>Packaging:</strong> ${escapeHtml(packaging || '-')}</p>
      <p><strong>Estimated Quantity:</strong> ${escapeHtml(quantity || '-')}</p>
      <p><strong>Additional Details:</strong><br/>${escapeHtml(message || '-')}</p>
    `

    const { data, error } = await resend.emails.send({
      from: 'Nzuri Foods Website <onboarding@resend.dev>',
      to: QUOTE_EMAIL,
      replyTo: email,
      subject: `Quote Request - ${productName || 'Product'}`,
      text: textBody,
      html: htmlBody,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 502 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Quote email error:', err)
    return NextResponse.json({ error: 'Unexpected server error.' }, { status: 500 })
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
