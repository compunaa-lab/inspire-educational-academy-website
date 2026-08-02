import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Inspire Educational Academy. Head Office: Waram Gadda. Branches: Mehdipatnam, Falaknuma. Phone: 9398131820. Get in touch for admissions and enquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
