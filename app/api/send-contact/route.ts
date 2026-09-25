// app/api/send-contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_EMAIL = 'enockdev01@gmail.com'

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
    const { name, email, subject, message } = body || {}

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const resend = new Resend(apiKey)

    const textBody = [
      'New Contact Form Message - BRG Website',
      '',
      `Name: ${name || '-'}`,
      `Email: ${email || '-'}`,
      `Subject: ${subject || '-'}`,
      '',
      'Message:',
      message || '-',
    ].join('\n')

    const htmlBody = `
      <h2>New Contact Form Message - BRG Website</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject || '-')}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `

    const { data, error } = await resend.emails.send({
      from: 'BRG Website <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject || 'New Message'} - from ${name}`,
      text: textBody,
      html: htmlBody,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 502 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Contact email error:', err)
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
