import type { Metadata } from "next";
import AdmissionsClient from "./AdmissionsClient";

export const metadata: Metadata = {
  title: "Online Admission",
  description: "Apply online for SSC, Intermediate, Degree & PG programs at Inspire Educational Academy. Government recognised education. Quick & easy admission process.",
};

export default function AdmissionsPage() {
  return <AdmissionsClient />;
}
