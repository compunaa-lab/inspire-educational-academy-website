import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { admissions } from "@/db/schema";
import { sendEmail, admissionEmailHtml } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Save to database
    const result = await db.insert(admissions).values({
      studentName: data.studentName,
      fatherName: data.fatherName,
      motherName: data.motherName,
      gender: data.gender,
      dob: data.dob,
      aadhaar: data.aadhaar,
      mobile: data.mobile,
      whatsapp: data.whatsapp || null,
      email: data.email || null,
      sscHallTicket: data.sscHallTicket || null,
      qualification: data.qualification,
      board: data.board || null,
      course: data.course,
      address: data.address,
      district: data.district,
      state: data.state,
      pincode: data.pincode,
      photoUrl: data.photoUrl || null,
      signatureUrl: data.signatureUrl || null,
      documentsUrl: data.documentsUrl || null,
      declaration: data.declaration || false,
    });

    // Send email notification (non-blocking)
    const emailHtml = admissionEmailHtml({
      "Student Name": data.studentName,
      "Father Name": data.fatherName,
      "Mother Name": data.motherName,
      Gender: data.gender,
      DOB: data.dob,
      Aadhaar: data.aadhaar,
      Mobile: data.mobile,
      WhatsApp: data.whatsapp,
      Email: data.email,
      Qualification: data.qualification,
      Board: data.board,
      Course: data.course,
      Address: `${data.address}, ${data.district}, ${data.state} - ${data.pincode}`,
    });

    // Fire and forget email
    sendEmail({
      to: process.env.ADMIN_EMAIL || "admissions@inspireacademy.edu",
      subject: `New Admission: ${data.studentName} - ${data.course}`,
      html: emailHtml,
    }).catch(console.error);

    if (data.email) {
      sendEmail({
        to: data.email,
        subject: "Application Received - Inspire Educational Academy",
        html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px"><h2 style="color:#0F8A5F">Thank You for Applying!</h2><p>Dear ${data.studentName},</p><p>We have received your application for <strong>${data.course}</strong>. We will review it and contact you within 24-48 hours.</p><p>Contact: 9398131820</p></div>`,
      }).catch(console.error);
    }

    return NextResponse.json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    console.error("Admission submission error:", error);
    return NextResponse.json({ success: false, message: "Failed to submit application" }, { status: 500 });
  }
}
