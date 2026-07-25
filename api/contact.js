const RESEND_ENDPOINT = 'https://api.resend.com/emails'

function clean(value, maxLength = 5000) {
  return String(value || '').trim().slice(0, maxLength)
}

function escapeHtml(value) {
  return clean(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed.' })
  }

  const body =
    typeof request.body === 'string'
      ? JSON.parse(request.body || '{}')
      : request.body || {}

  // Honeypot: bots commonly fill hidden fields.
  if (clean(body.website, 200)) {
    return response.status(200).json({ ok: true })
  }

  const firstName = clean(body.firstName, 100)
  const lastName = clean(body.lastName, 100)
  const email = clean(body.email, 254)
  const company = clean(body.company, 200)
  const inquiryType = clean(body.type, 100)
  const message = clean(body.message, 5000)

  if (!firstName || !lastName || !isValidEmail(email) || !inquiryType || !message) {
    return response.status(400).json({
      error: 'Please complete all required fields with a valid email address.',
    })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || 'emily@emilywelsch.co'
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    'Emily Welsch Website <onboarding@resend.dev>'

  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured.')
    return response.status(503).json({
      error: 'The contact form is not configured yet. Please email emily@emilywelsch.co.',
    })
  }

  const fullName = `${firstName} ${lastName}`
  const subject = `Website inquiry: ${inquiryType} from ${fullName}`
  const text = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Company: ${company || 'Not provided'}`,
    `Inquiry type: ${inquiryType}`,
    '',
    message,
  ].join('\n')

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#32312D">
      <h2 style="margin:0 0 20px">New website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
      <p><strong>Inquiry type:</strong> ${escapeHtml(inquiryType)}</p>
      <hr style="border:0;border-top:1px solid #d5d0c7;margin:24px 0">
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  `

  try {
    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text,
        html,
      }),
    })

    const result = await resendResponse.json().catch(() => ({}))

    if (!resendResponse.ok) {
      console.error('Resend error:', result)
      return response.status(502).json({
        error: 'Your message could not be delivered. Please email emily@emilywelsch.co.',
      })
    }

    return response.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return response.status(500).json({
      error: 'Your message could not be delivered. Please email emily@emilywelsch.co.',
    })
  }
}
