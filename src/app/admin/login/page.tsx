import type { Metadata } from "next";
import AdminLoginClient from "./AdminLoginClient";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Secure admin login for Inspire Educational Academy management panel.",
};

export default function AdminLoginPage() {
  return <AdminLoginClient />;
}
