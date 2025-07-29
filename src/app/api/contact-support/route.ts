import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendSupportEmail"; // You'll need a basic email sender here

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await sendEmail({
      to: "newsumanm@gmail.com", // replace with your org's email
      subject: `Support Message from ${name || "Anonymous"}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
