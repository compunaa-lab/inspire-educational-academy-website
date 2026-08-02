import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Inspire Educational Academy - Government recognised, NAAC A++ accredited institution offering SSC, Intermediate, Degree & PG programs.",
};

export default function AboutPage() {
  return <AboutClient />;
}
