import type { Metadata } from "next";
import IntermediateClient from "./IntermediateClient";

export const metadata: Metadata = {
  title: "Intermediate",
  description: "Complete Intermediate (MPC, BiPC, CEC, HEC) in just 3 months. Government recognised. Online & offline classes with expert faculty.",
};

export default function IntermediatePage() {
  return <IntermediateClient />;
}
