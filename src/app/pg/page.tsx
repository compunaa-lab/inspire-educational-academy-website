import type { Metadata } from "next";
import PgClient from "./PgClient";

export const metadata: Metadata = {
  title: "Post Graduation Programs",
  description: "MA & M.Com PG programs through UGC recognised universities. Online, distance & regular mode. Expert faculty support and career guidance.",
};

export default function PgPage() {
  return <PgClient />;
}
