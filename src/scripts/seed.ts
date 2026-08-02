import { db } from "@/db";
import { admins, siteSettings, socialLinks, branches } from "@/db/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

async function seed() {
  console.log("🌱 Seeding database...");

  // Seed admin user
  const existingAdmin = await db
    .select()
    .from(admins)
    .where(eq(admins.username, "admin"))
    .limit(1);

  if (existingAdmin.length === 0) {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await db.insert(admins).values({
      username: "admin",
      password: hashedPassword,
      email: "admin@inspireacademy.edu",
    });
    console.log("✅ Admin user created (username: admin, password: admin123)");
  } else {
    console.log("ℹ️  Admin user already exists");
  }

  // Seed site settings
  const settings = [
    { key: "site_name", value: "Inspire Educational Academy" },
    { key: "site_tagline", value: "Government Recognised Education Programs" },
    { key: "phone", value: "9398131820" },
    { key: "email", value: "info@inspireacademy.edu" },
    { key: "head_office", value: "Waram Gadda, Hyderabad" },
    { key: "established_year", value: "2010" },
    { key: "hero_title", value: "Complete SSC or Intermediate in Just 3 Months" },
    { key: "hero_subtitle", value: "Government Recognised Education Programs" },
  ];

  for (const setting of settings) {
    const exists = await db
      .select()
      .from(siteSettings)
      .where(eq(siteSettings.key, setting.key))
      .limit(1);
    if (exists.length === 0) {
      await db.insert(siteSettings).values(setting);
    }
  }
  console.log("✅ Site settings seeded");

  // Seed social links
  const socials = [
    { platform: "Facebook", url: "https://facebook.com/inspireacademy", icon: "FaFacebook" },
    { platform: "Instagram", url: "https://instagram.com/inspireacademy", icon: "FaInstagram" },
    { platform: "YouTube", url: "https://youtube.com/@inspireacademy", icon: "FaYoutube" },
    { platform: "WhatsApp", url: "https://wa.me/919398131820", icon: "FaWhatsapp" },
  ];

  for (const social of socials) {
    const exists = await db
      .select()
      .from(socialLinks)
      .where(eq(socialLinks.platform, social.platform))
      .limit(1);
    if (exists.length === 0) {
      await db.insert(socialLinks).values(social);
    }
  }
  console.log("✅ Social links seeded");

  // Seed branches
  const branchData = [
    { name: "Head Office - Waram Gadda", address: "Waram Gadda, Hyderabad, Telangana", phone: "9398131820", isHeadOffice: true },
    { name: "Mehdipatnam Branch", address: "Mehdipatnam, Hyderabad, Telangana", phone: "9398131820", isHeadOffice: false },
    { name: "Falaknuma Branch", address: "Falaknuma, Hyderabad, Telangana", phone: "9398131820", isHeadOffice: false },
  ];

  for (const branch of branchData) {
    const exists = await db
      .select()
      .from(branches)
      .where(eq(branches.name, branch.name))
      .limit(1);
    if (exists.length === 0) {
      await db.insert(branches).values(branch);
    }
  }
  console.log("✅ Branches seeded");

  console.log("🎉 Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});
