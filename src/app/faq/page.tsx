import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about certificates, government recognition, courses, duration, and more at Inspire Educational Academy.",
};

export default function FaqPage() {
  return <FaqClient />;
}
