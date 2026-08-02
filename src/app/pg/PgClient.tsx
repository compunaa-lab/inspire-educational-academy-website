"use client";

import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaStar, FaBookOpen, FaChartBar, FaLaptop, FaGlobe, FaBuilding, FaUsers, FaGraduationCap } from "react-icons/fa";

const programs = [
  {
    name: "MA",
    fullName: "Master of Arts",
    icon: FaBookOpen,
    desc: "Advanced postgraduate program in humanities and social sciences. Deepen your knowledge and enhance career prospects in academia, research, and civil services.",
    subjects: "History, Political Science, Economics, Sociology, English Literature, Public Administration",
    careers: "Lecturer, Civil Services, Research Scholar, Journalist, Policy Analyst, NGO Management",
  },
  {
    name: "M.Com",
    fullName: "Master of Commerce",
    icon: FaChartBar,
    desc: "Advanced commerce program covering accounting, finance, taxation, and business strategy. Ideal for careers in banking, corporate finance, and academia.",
    subjects: "Advanced Accounting, Corporate Finance, Taxation Law, Business Strategy, International Business, Research Methodology",
    careers: "Banking, Corporate Finance, Lecturer, CA Firm, Financial Analyst, Tax Consultant",
  },
];

export default function PgClient() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-green-50/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#8B0000] text-white px-4 py-2 rounded-full text-sm font-medium">
                <FaStar className="text-yellow-300" />
                PG Programs
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900">
                <span className="text-[#0F8A5F]">MA & M.Com</span> Post Graduation
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Advance your career with UGC recognised postgraduate programs.
                Flexible learning options - online, distance, and regular mode.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/admissions" className="ripple-btn inline-flex items-center gap-2 bg-[#0F8A5F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c7a4e] transition-all shadow-lg shadow-green-200">
                  Apply Now <FaArrowRight />
                </Link>
              </div>
            </div>
            <div>
              <img src="https://ik.imagekit.io/afxstudio/inspire/0A4A9798.JPG.jpeg?updatedAt=1785534514948"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((p) => (
              <div key={p.name} className="card-3d glass-card p-8">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-4">
                  <p.icon className="text-[#0F8A5F] text-2xl" />
                </div>
                <h2 className="text-2xl font-extrabold font-poppins text-gray-900">{p.name}</h2>
                <p className="text-[#0F8A5F] font-medium text-sm mb-3">{p.fullName}</p>
                <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                <div className="space-y-2">
                  <div><span className="text-xs font-semibold text-gray-500 uppercase">Subjects</span><p className="text-sm text-gray-700">{p.subjects}</p></div>
                  <div><span className="text-xs font-semibold text-gray-500 uppercase">Career Scope</span><p className="text-sm text-gray-700">{p.careers}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-poppins text-gray-900">Program Highlights</h2>
            <div className="section-divider w-24 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: FaCheckCircle, label: "UGC Recognised" },
              { icon: FaGlobe, label: "Online Programs" },
              { icon: FaBuilding, label: "Distance Mode" },
              { icon: FaUsers, label: "Regular Mode" },
              { icon: FaLaptop, label: "Live Classes" },
              { icon: FaBookOpen, label: "Study Materials" },
              { icon: FaGraduationCap, label: "Faculty Support" },
              { icon: FaStar, label: "Career Guidance" },
            ].map((item) => (
              <div key={item.label} className="glass-card p-4 text-center">
                <item.icon className="text-[#0F8A5F] text-xl mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#0F8A5F] to-[#0c7a4e]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-extrabold font-poppins mb-4">Advance Your Career</h2>
          <p className="text-green-100 mb-8 text-lg">Enroll in MA or M.Com program today!</p>
          <Link href="/admissions" className="inline-flex items-center gap-2 bg-white text-[#0F8A5F] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg">
            Apply Now <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
