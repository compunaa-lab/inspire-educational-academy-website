import type { Metadata } from "next";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: "All Courses",
  description: "Explore all courses at Inspire Educational Academy - SSC, Intermediate (MPC, BiPC, CEC, HEC), BA, B.Com, MA, M.Com. Government recognised programs.",
};

export default function CoursesPage() {
  return <CoursesClient />;
}
