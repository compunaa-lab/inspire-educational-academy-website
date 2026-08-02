import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { contactMessages } from "@/db/schema";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    await db.insert(contactMessages).values({
      name: data.name,
      email: data.email || "",
      phone: data.phone || null,
      subject: data.subject || null,
      message: data.message,
    });

    sendEmail({
      to: process.env.ADMIN_EMAIL || "admissions@inspireacademy.edu",
      subject: `Contact Message from ${data.name}: ${data.subject || "No Subject"}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px"><h2 style="color:#0F8A5F">New Contact Message</h2><p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Phone:</strong> ${data.phone || "N/A"}</p><p><strong>Subject:</strong> ${data.subject || "N/A"}</p><p><strong>Message:</strong></p><p>${data.message}</p></div>`,
    }).catch(console.error);

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 });
  }
}
