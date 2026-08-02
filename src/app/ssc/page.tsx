import type { Metadata } from "next";
import SscClient from "./SscClient";

export const metadata: Metadata = {
  title: "SSC (10th Class)",
  description: "Complete SSC in just 3 months through TOSS, NIOS, or BOSSE. Government recognised. Online & offline classes, printed study material, and expert guidance.",
};

export default function SscPage() {
  return <SscClient />;
}
