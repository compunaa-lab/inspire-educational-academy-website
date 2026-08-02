import type { Metadata } from "next";
import { FaExternalLinkAlt, FaDownload } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Results",
  description: "Check your examination results for SSC, Intermediate, Degree & PG programs. Direct links to official result portals and download options.",
};

const results = [
  { id: 1, title: "TOSS SSC Results - March 2025", resultLink: "#", officialLink: "#", downloadLink: "#", date: "2025-05-15" },
  { id: 2, title: "TOSS Intermediate Results - March 2025", resultLink: "#", officialLink: "#", downloadLink: "#", date: "2025-05-15" },
  { id: 3, title: "NIOS SSC Results - April 2025", resultLink: "#", officialLink: "#", downloadLink: "#", date: "2025-06-01" },
  { id: 4, title: "NIOS Intermediate Results - April 2025", resultLink: "#", officialLink: "#", downloadLink: "#", date: "2025-06-01" },
  { id: 5, title: "BOSSE SSC Results - May 2025", resultLink: "#", officialLink: "#", downloadLink: "#", date: "2025-06-10" },
  { id: 6, title: "Degree Results - BA/B.Com Semester Exams", resultLink: "#", officialLink: "#", downloadLink: "#", date: "2025-05-20" },
];

export default function ResultsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-green-50/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#0F8A5F] font-semibold text-sm uppercase tracking-wider">Examination</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900 mt-2">Results</h1>
          <div className="section-divider w-24 mx-auto mt-4" />
          <p className="text-gray-600 mt-4">Click on the links below to check your results. Links open official result portals.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0F8A5F] text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Result</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Date</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {results.map((r) => (
                  <tr key={r.id} className="hover:bg-green-50/50 transition">
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900 text-sm">{r.title}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 hidden md:table-cell">{r.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <a href={r.resultLink} className="inline-flex items-center gap-1.5 bg-[#0F8A5F] text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-[#0c7a4e] transition">
                          <FaExternalLinkAlt /> View Result
                        </a>
                       
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
