import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { enquiries } from "@/db/schema";
import { sendEmail, enquiryEmailHtml } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    await db.insert(enquiries).values({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      course: data.course || null,
      message: data.message || null,
    });

    const emailHtml = enquiryEmailHtml({
      Name: data.name,
      Phone: data.phone,
      Email: data.email,
      Course: data.course,
      Message: data.message,
    });

    sendEmail({
      to: process.env.ADMIN_EMAIL || "admissions@inspireacademy.edu",
      subject: `New Enquiry from ${data.name}`,
      html: emailHtml,
    }).catch(console.error);

    return NextResponse.json({ success: true, message: "Enquiry submitted successfully" });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json({ success: false, message: "Failed to submit enquiry" }, { status: 500 });
  }
}
