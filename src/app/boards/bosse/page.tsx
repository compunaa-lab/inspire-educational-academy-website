import type { Metadata } from "next";
import BoardDetailClient from "../BoardDetailClient";

export const metadata: Metadata = {
  title: "BOSSE - Board of Open Schooling and Skill Education",
  description: "Complete SSC & Intermediate through BOSSE. 100% online platform with live classes, digital notes, online exams & digital certificates.",
};

export default function BossePage() {
  return (
    <BoardDetailClient
      boardName="BOSSE"
      fullName="Board of Open Schooling and Skill Education"
      color="#7C3AED"
      description="BOSSE (Board of Open Schooling and Skill Education) is a modern, technology-driven open schooling board offering a fully digital learning experience. With live classes, online exams, and digital certificates, BOSSE is perfect for tech-savvy students."
      features={[
        { title: "Live Classes", desc: "Interactive live online classes with real-time doubt clearing and student-teacher interaction." },
        { title: "Recorded Classes", desc: "Complete library of recorded class sessions for revision and self-paced learning." },
        { title: "Digital Notes", desc: "Comprehensive digital study notes, presentations, and learning materials." },
        { title: "PDF Materials", desc: "Downloadable PDF study materials, bit banks, and practice papers for offline access." },
        { title: "Online Quiz", desc: "Regular online quizzes and self-assessment tests to track your learning progress." },
        { title: "Assignments", desc: "Submit assignments online through the student portal. Get digital feedback and grading." },
        { title: "Online Exams", desc: "Appear for examinations online from designated centres or home-based proctored exams." },
        { title: "Student Dashboard", desc: "Personalised dashboard to track your progress, attendance, assignments, and results." },
        { title: "Digital Certificate Support", desc: "Receive digital certificates that are verifiable online and recognised for all purposes." },
      ]}
      eligibility={[
        "SSC: Age 14+ years, basic computer literacy recommended",
        "Intermediate: Passed SSC/10th from any recognised board",
        "Valid ID proof (Aadhaar card required)",
        "Access to computer/smartphone with internet",
      ]}
      imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    />
  );
}
