import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
});

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "admissions@inspireacademy.edu",
      to,
      subject,
      html,
    });
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error };
  }
}

export function admissionEmailHtml(data: Record<string, string>) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
      <div style="background: #0F8A5F; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0;">New Admission Application</h1>
        <p style="margin: 5px 0 0;">Inspire Educational Academy</p>
      </div>
      <div style="padding: 20px; background: #fff;">
        <table style="width: 100%; border-collapse: collapse;">
          ${Object.entries(data).map(([key, value]) => `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${key}</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; color: #555;">${value || "N/A"}</td>
            </tr>
          `).join("")}
        </table>
      </div>
      <div style="background: #f9f9f9; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; color: #888;">
        <p>This is an automated email from Inspire Educational Academy</p>
      </div>
    </div>
  `;
}

export function enquiryEmailHtml(data: Record<string, string>) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
      <div style="background: #8B0000; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0;">New Enquiry</h1>
        <p style="margin: 5px 0 0;">Inspire Educational Academy</p>
      </div>
      <div style="padding: 20px; background: #fff;">
        <table style="width: 100%; border-collapse: collapse;">
          ${Object.entries(data).map(([key, value]) => `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${key}</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; color: #555;">${value || "N/A"}</td>
            </tr>
          `).join("")}
        </table>
      </div>
    </div>
  `;
}
