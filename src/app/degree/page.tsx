import type { Metadata } from "next";
import DegreeClient from "./DegreeClient";

export const metadata: Metadata = {
  title: "Degree Programs",
  description: "BA & B.Com degree programs through UGC recognised universities. 3-year duration. Distance & regular mode available. Online classes & study materials.",
};

export default function DegreePage() {
  return <DegreeClient />;
}
