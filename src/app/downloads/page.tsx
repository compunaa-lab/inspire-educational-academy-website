import type { Metadata } from "next";
import { FaDownload, FaFilePdf, FaFileAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Download prospectus, study materials, admission forms, fee structure, and other PDF documents from Inspire Educational Academy.",
};

const downloads = [
  { id: 1, title: "Academy Prospectus 2025-26", desc: "Complete information about all programs and the academy.", category: "prospectus", url: "#" },
  { id: 2, title: "SSC Study Material - All Subjects", desc: "Comprehensive study material for SSC students.", category: "study-material", url: "#" },
  { id: 3, title: "Intermediate Study Material - MPC", desc: "Mathematics, Physics, Chemistry study notes.", category: "study-material", url: "#" },
  { id: 4, title: "Intermediate Study Material - BiPC", desc: "Biology, Physics, Chemistry study notes.", category: "study-material", url: "#" },
  { id: 5, title: "Admission Form - Download PDF", desc: "Offline admission form for all programs.", category: "admission-form", url: "#" },
  { id: 6, title: "Fee Structure 2025-26", desc: "Complete fee details for all courses.", category: "fee-structure", url: "#" },
  { id: 7, title: "TOSS Bit Bank - SSC", desc: "Important questions and answers for TOSS SSC.", category: "study-material", url: "#" },
  { id: 8, title: "NIOS Previous Papers - SSC", desc: "Collection of previous year question papers.", category: "study-material", url: "#" },
];

const categoryNames: Record<string, string> = {
  prospectus: "Prospectus",
  "study-material": "Study Material",
  "admission-form": "Admission Form",
  "fee-structure": "Fee Structure",
};

export default function DownloadsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-green-50/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#0F8A5F] font-semibold text-sm uppercase tracking-wider">Resources</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900 mt-2">Downloads</h1>
          <div className="section-divider w-24 mx-auto mt-4" />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4">
            {downloads.map((d) => (
              <a key={d.id} href={d.url} className="card-3d glass-card p-5 flex items-center gap-4 group hover:border-green-200 transition-all">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0F8A5F] transition-all">
                  <FaFilePdf className="text-[#0F8A5F] group-hover:text-white transition-all" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm truncate">{d.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{d.desc}</p>
                  <span className="inline-block mt-1 text-[10px] font-medium text-[#0F8A5F] bg-green-50 px-2 py-0.5 rounded">
                    {categoryNames[d.category]}
                  </span>
                </div>
                <FaDownload className="text-gray-400 group-hover:text-[#0F8A5F] transition flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
