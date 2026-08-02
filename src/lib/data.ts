import { db } from "@/db";
import { siteSettings, socialLinks, branches } from "@/db/schema";
import { eq, and } from "drizzle-orm";

export async function getSiteSettings() {
  const settings = await db.select().from(siteSettings);
  const map: Record<string, string> = {};
  for (const s of settings) {
    if (s.key) map[s.key] = s.value || "";
  }
  return map;
}

export async function getSocialLinks() {
  return db
    .select()
    .from(socialLinks)
    .where(eq(socialLinks.isActive, true));
}

export async function getBranches() {
  return db
    .select()
    .from(branches)
    .where(eq(branches.isActive, true));
}

export function getPlaceholderImage(type: string, index = 1): string {
  const images: Record<string, string[]> = {
    hero: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9b1?w=1200&h=600&fit=crop",
    ],
    about: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=500&fit=crop",
    ],
    course: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c99a2ee9bcf1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513258496099-95d4d4542d8c?w=600&h=400&fit=crop",
    ],
    testimonial: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    ],
    logo: [
      "https://placehold.co/200x60/0F8A5F/white?text=Inspire+Academy",
    ],
  };
  const group = images[type] || images.course;
  return group[(index - 1) % group.length];
}
