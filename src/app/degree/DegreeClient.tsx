"use client";

import Link from "next/link";
import {
  FaArrowRight, FaCheckCircle, FaStar, FaBookOpen, FaBuilding, FaChartBar,
  FaLaptop, FaVideo, FaUsers, FaGraduationCap, FaClock, FaGlobe,
} from "react-icons/fa";

const programs = [
  {
    name: "BA",
    fullName: "Bachelor of Arts",
    icon: FaBookOpen,
    desc: "A comprehensive undergraduate program covering humanities, social sciences, and languages. Ideal for civil services, teaching, and research careers.",
    subjects: "History, Political Science, Economics, Sociology, English, Telugu/Hindi",
    careers: "Civil Services, Teaching, Journalism, Social Work, Research, Law",
  },
  {
    name: "B.Com",
    fullName: "Bachelor of Commerce",
    icon: FaChartBar,
    desc: "A professional commerce degree focusing on accounting, finance, taxation, and business management. Perfect for banking and corporate careers.",
    subjects: "Accountancy, Business Economics, Taxation, Banking, Business Law, Statistics",
    careers: "Banking, CA/CS, Accounting, Finance, Insurance, Business Management",
  },
];

const features = [
  { icon: FaClock, title: "Duration", desc: "3 Years (6 Semesters)" },
  { icon: FaCheckCircle, title: "Eligibility", desc: "Passed Intermediate/12th from any recognised board" },
  { icon: FaGlobe, title: "Distance Mode", desc: "Study from anywhere with flexible Distance Education option" },
  { icon: FaBuilding, title: "Regular Mode", desc: "Attend regular college with direct admission support" },
  { icon: FaLaptop, title: "Online Classes", desc: "Daily live online classes by experienced faculty" },
  { icon: FaVideo, title: "Recorded Lectures", desc: "24/7 access to recorded video lectures" },
  { icon: FaBookOpen, title: "Study Materials", desc: "Comprehensive printed and digital study materials" },
  { icon: FaUsers, title: "Live Classes", desc: "Interactive live sessions with doubt clearing" },
  { icon: FaGraduationCap, title: "Career Support", desc: "Career guidance and placement assistance" },
];

export default function DegreeClient() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-green-50/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#8B0000] text-white px-4 py-2 rounded-full text-sm font-medium">
                <FaStar className="text-yellow-300" />
                Degree Programs
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900">
                <span className="text-[#0F8A5F]">BA & B.Com</span> Degree Programs
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                UGC recognised degree programs through NAAC A++ universities.
                Choose from distance or regular mode. Complete guidance from admission to graduation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/admissions" className="ripple-btn inline-flex items-center gap-2 bg-[#0F8A5F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c7a4e] transition-all shadow-lg shadow-green-200">
                  Apply Now <FaArrowRight />
                </Link>
              </div>
            </div>
            <div>
              <img src="https://ik.imagekit.io/afxstudio/inspire/0A4A9686.JPG.jpeg?updatedAt=1785534514569" alt="Degree Programs" className="w-full rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div key={program.name} className="card-3d glass-card p-8">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-4">
                  <program.icon className="text-[#0F8A5F] text-2xl" />
                </div>
                <h2 className="text-2xl font-extrabold font-poppins text-gray-900">
                  {program.name}
                </h2>
                <p className="text-[#0F8A5F] font-medium text-sm mb-3">{program.fullName}</p>
                <p className="text-gray-600 text-sm mb-4">{program.desc}</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase">Subjects</span>
                    <p className="text-sm text-gray-700">{program.subjects}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase">Career Opportunities</span>
                    <p className="text-sm text-gray-700">{program.careers}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-poppins text-gray-900">Program Features</h2>
            <div className="section-divider w-24 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-5 text-center card-3d">
                <f.icon className="text-2xl text-[#0F8A5F] mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 text-sm">{f.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#0F8A5F] to-[#0c7a4e]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-extrabold font-poppins mb-4">Start Your Degree Journey</h2>
          <p className="text-green-100 mb-8 text-lg">Admissions open for BA & B.Com programs. Apply now!</p>
          <Link href="/admissions" className="inline-flex items-center gap-2 bg-white text-[#0F8A5F] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg">
            Apply Now <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
