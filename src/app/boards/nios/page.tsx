import type { Metadata } from "next";
import BoardDetailClient from "../BoardDetailClient";

export const metadata: Metadata = {
  title: "NIOS - National Institute of Open Schooling",
  description: "Complete SSC & Intermediate through NIOS. India's largest open schooling system under Ministry of Education. Nationally & internationally recognised.",
};

export default function NiosPage() {
  return (
    <BoardDetailClient
      boardName="NIOS"
      fullName="National Institute of Open Schooling"
      color="#2563EB"
      description="NIOS (National Institute of Open Schooling) is the largest open schooling system in India, established by the Ministry of Education, Government of India. NIOS certificates are recognised nationwide and internationally for higher education and employment."
      features={[
        { title: "Government Recognition", desc: "NIOS is a national-level board under the Ministry of Education, Government of India. Certificates are valid across India and abroad." },
        { title: "Flexible Learning", desc: "Study at your own pace with the flexibility to choose subjects and appear for exams when ready." },
        { title: "Online Classes", desc: "Attend live online classes conducted by qualified NIOS-trained faculty members." },
        { title: "Offline Guidance", desc: "Regular in-person guidance sessions at our centres for doubt clearing and mentoring." },
        { title: "Recorded Sessions", desc: "Complete library of recorded video lectures covering all subjects and topics." },
        { title: "Study Material", desc: "NIOS-prescribed study material along with supplementary notes prepared by our expert faculty." },
        { title: "Assignments", desc: "Guided support for completing NIOS Tutor Marked Assignments (TMA)." },
        { title: "Practical Guidance", desc: "Hands-on practical session guidance for science and vocational subjects." },
        { title: "Examination Support", desc: "Complete support from exam registration to result declaration." },
      ]}
      eligibility={[
        "SSC: Age 14+ years, basic literacy and numeracy skills",
        "Intermediate: Passed SSC/10th from any recognised board",
        "Valid ID proof (Aadhaar card required)",
        "Passport size photographs",
      ]}
      imageUrl="https://ik.imagekit.io/afxstudio/inspire/WhatsApp%20Image%202026-07-04%20at%201.23.05%20AM%20(1).jpeg?updatedAt=1783108442947"
    />
  );
}
