import type { Metadata } from "next";
import { requireAuth } from "@/lib/auth";
import AdminDashboardClient from "./AdminDashboardClient";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default async function AdminDashboardPage() {
  await requireAuth();
  return <AdminDashboardClient />;
}
