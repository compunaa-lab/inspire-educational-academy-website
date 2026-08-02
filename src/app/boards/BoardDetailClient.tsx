"use client";

import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaStar, FaUniversity } from "react-icons/fa";

interface BoardDetailProps {
  boardName: string;
  fullName: string;
  color: string;
  description: string;
  features: { title: string; desc: string }[];
  eligibility: string[];
  imageUrl: string;
}

export default function BoardDetailClient({
  boardName,
  fullName,
  color,
  description,
  features,
  eligibility,
  imageUrl,
}: BoardDetailProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-green-50/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div
                className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: color }}
              >
                <FaStar className="text-yellow-300" />
                {boardName} Board
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900">
                {boardName}{" "}
                <span className="text-[#0F8A5F]">Open Schooling</span>
              </h1>
              <p className="text-lg font-medium" style={{ color }}>
                {fullName}
              </p>
              <p className="text-gray-600 leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/admissions"
                  className="ripple-btn inline-flex items-center gap-2 bg-[#0F8A5F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c7a4e] transition-all shadow-lg shadow-green-200"
                >
                  Apply Now <FaArrowRight />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-[#0F8A5F] text-[#0F8A5F] px-6 py-3 rounded-xl font-semibold hover:bg-[#0F8A5F] hover:text-white transition-all"
                >
                  Enquiry
                </Link>
              </div>
            </div>
            <div>
              <img
                src={imageUrl}
                alt={`${boardName} Education`}
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-poppins text-gray-900">
              {boardName} Features
            </h2>
            <div className="section-divider w-24 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-3d glass-card p-5"
              >
                <h3 className="font-bold font-poppins text-gray-900 mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-[#0F8A5F] text-sm" />
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-poppins text-gray-900">
              Eligibility Criteria
            </h2>
            <div className="section-divider w-24 mx-auto mt-4" />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-6 space-y-3">
              {eligibility.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#0F8A5F] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0F8A5F] to-[#0c7a4e]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-extrabold font-poppins mb-4">
            Ready to Join {boardName}?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Start your educational journey with {boardName} through Inspire Educational Academy.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 bg-white text-[#0F8A5F] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg"
          >
            Apply Now <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
