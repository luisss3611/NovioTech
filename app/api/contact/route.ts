import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, website, company, message } = await req.json()
 
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await resend.emails.send({
      from: "Novio Technologies <hello@noviotechnologies.com>",
      to: process.env.CONTACT_TO_EMAIL || "contact@noviotechnologies.com",
      subject: `New project request from ${name}`,
      replyTo: email,
      html: `
        <h2>New Project Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    console.log("RESEND RESULT:", result)

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error("CONTACT API ERROR:", error)

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}