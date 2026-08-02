"use client";

import Link from "next/link";
import { FaArrowRight, FaUniversity, FaGlobeAsia, FaLaptop, FaCheckCircle } from "react-icons/fa";

const boards = [
  {
    slug: "toss",
    name: "TOSS",
    fullName: "Telangana Open School Society",
    icon: FaUniversity,
    color: "#0F8A5F",
    desc: "Telangana State Government recognised open school board offering SSC and Intermediate. Ideal for students in Telangana seeking flexible education.",
    features: [
      "TS Government Recognised",
      "Daily Online Classes",
      "Weekly Offline Classes",
      "Printed Study Notes",
      "Recorded Video Lectures",
      "Bit Banks & Previous Papers",
      "Pre-Exam Seminars",
      "Official Exam Centres",
      "Complete Student Support",
    ],
  },
  {
    slug: "nios",
    name: "NIOS",
    fullName: "National Institute of Open Schooling",
    icon: FaGlobeAsia,
    color: "#2563EB",
    desc: "India's largest open schooling system under the Ministry of Education, Government of India. Recognised nationwide and internationally.",
    features: [
      "National Level Recognition",
      "Flexible Learning Options",
      "Online Classes Available",
      "Offline Guidance Sessions",
      "Recorded Video Sessions",
      "Comprehensive Study Material",
      "Assignment Support",
      "Practical Guidance",
      "Examination Support",
    ],
  },
  {
    slug: "bosse",
    name: "BOSSE",
    fullName: "Board of Open Schooling and Skill Education",
    icon: FaLaptop,
    color: "#7C3AED",
    desc: "Modern online-focused open schooling board offering fully digital learning experience with live classes, online exams, and digital certificates.",
    features: [
      "100% Online Platform",
      "Live Interactive Classes",
      "Recorded Class Library",
      "Digital Study Notes",
      "PDF Study Materials",
      "Online Quiz & Tests",
      "Online Assignments",
      "Student Dashboard",
      "Digital Certificate Support",
    ],
  },
];

export default function BoardsClient() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-green-50/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <span className="text-[#0F8A5F] font-semibold text-sm uppercase tracking-wider">
              Our Boards
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900 mt-2">
              Choose Your Education Board
            </h1>
            <div className="section-divider w-24 mx-auto mt-4" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
              We offer SSC and Intermediate through three government recognised boards.
              Each board has unique features to suit different learning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Board Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {boards.map((board) => (
              <div
                key={board.slug}
                className="card-3d bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:border-green-200 transition-all"
              >
                <div
                  className="p-8 text-white text-center"
                  style={{ background: `linear-gradient(135deg, ${board.color}, ${board.color}dd)` }}
                >
                  <board.icon className="text-4xl mx-auto mb-3" />
                  <h2 className="text-2xl font-extrabold font-poppins">{board.name}</h2>
                  <p className="text-sm opacity-90 mt-1">{board.fullName}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{board.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {board.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <FaCheckCircle className="text-[#0F8A5F] text-xs flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/boards/${board.slug}`}
                    className="inline-flex items-center gap-2 text-[#0F8A5F] font-semibold hover:gap-3 transition-all"
                  >
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
