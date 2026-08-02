import type { Metadata } from "next";
import BoardDetailClient from "../BoardDetailClient";

export const metadata: Metadata = {
  title: "TOSS - Telangana Open School Society",
  description: "Complete SSC & Intermediate through TOSS (Telangana Open School Society). TS Government recognised. Online & offline classes with expert faculty.",
};

export default function TosPage() {
  return (
    <BoardDetailClient
      boardName="TOSS"
      fullName="Telangana Open School Society"
      color="#0F8A5F"
      description="TOSS (Telangana Open School Society) is a state government recognised open school board established by the Government of Telangana. It provides flexible education opportunities for students who could not complete formal schooling."
      features={[
        { title: "Daily Online Classes", desc: "Live interactive online classes conducted by experienced faculty members covering the complete syllabus." },
        { title: "Weekly Offline Classes", desc: "In-person doubt-clearing and guidance sessions at our centres across Hyderabad." },
        { title: "Printed Notes", desc: "Comprehensive printed study material and notes delivered for self-paced learning." },
        { title: "Recorded Videos", desc: "24/7 access to recorded video lectures for anytime revision and learning." },
        { title: "Bit Banks", desc: "Curated bit banks with important questions and answers for exam preparation." },
        { title: "Previous Papers", desc: "Access to previous year question papers to understand exam patterns." },
        { title: "Seminar Before Exams", desc: "Special pre-examination seminars with tips, strategies, and important questions." },
        { title: "Official Exam Centres", desc: "Examinations conducted at government-designated official exam centres." },
        { title: "Complete Student Support", desc: "End-to-end guidance from admission to certificate issuance." },
      ]}
      eligibility={[
        "SSC: Age 14+ years, completed primary education",
        "Intermediate: Passed SSC/10th from any recognised board",
        "Valid ID proof (Aadhaar card required)",
        "Recent passport size photographs",
      ]}
      imageUrl="https://ik.imagekit.io/afxstudio/inspire/WhatsApp%20Image%202026-07-04%20at%201.23.06%20AM%20(2).jpeg?updatedAt=1783108443162"
    />
  );
}
