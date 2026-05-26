import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const {
      yourName,
      yourEmail,
      businessName,
      website,
      contactName,
      contactEmail,
      additionalInfo,
    } = await req.json()

    if (!yourName || !yourEmail || !businessName || !contactName || !contactEmail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await resend.emails.send({
      from: "Novio Technologies <hello@noviotechnologies.com>",
      to: process.env.CONTACT_TO_EMAIL || "contact@noviotechnologies.com",
      subject: `New referral from ${yourName}`,
      replyTo: yourEmail,
      html: `
        <h2>New Referral</h2>

        <h3>Referrer Information</h3>
        <p><strong>Name:</strong> ${yourName}</p>
        <p><strong>Email:</strong> ${yourEmail}</p>

        <h3>Referral Information</h3>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Website:</strong> ${website || "Not provided"}</p>
        <p><strong>Contact Name:</strong> ${contactName}</p>
        <p><strong>Contact Email:</strong> ${contactEmail}</p>

        <h3>Additional Information</h3>
        <p>${additionalInfo || "Not provided"}</p>
      `,
    })

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error("REFERRAL API ERROR:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}