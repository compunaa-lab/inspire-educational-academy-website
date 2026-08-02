"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaStar, FaUpload } from "react-icons/fa";

const courses = ["SSC", "Intermediate - MPC", "Intermediate - BiPC", "Intermediate - CEC", "Intermediate - HEC", "BA", "B.Com", "MA", "M.Com"];
const boards = ["TOSS", "NIOS", "BOSSE", "University"];
const qualifications = ["7th Pass", "8th Pass", "9th Pass", "10th Pass / SSC", "Intermediate / 12th", "Graduate"];

export default function AdmissionsClient() {
  const [form, setForm] = useState({
    studentName: "", fatherName: "", motherName: "", gender: "", dob: "",
    aadhaar: "", mobile: "", whatsapp: "", email: "", sscHallTicket: "",
    qualification: "", board: "", course: "", address: "", district: "",
    state: "", pincode: "", photoUrl: "", signatureUrl: "", documentsUrl: "",
    declaration: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-[#0F8A5F] text-4xl" />
          </div>
          <h1 className="text-3xl font-extrabold font-poppins text-gray-900 mb-4">Application Submitted!</h1>
          <p className="text-gray-600 mb-6">Thank you for applying. We will review your application and contact you within 24-48 hours.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-[#0F8A5F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c7a4e] transition">
            Back to Home <FaArrowRight />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-green-50/20 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#8B0000] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaStar className="text-yellow-300" /> Admissions Open 2026-27
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900">Online Admission Form</h1>
          <div className="section-divider w-24 mx-auto mt-4" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Fill the form below to apply for your desired program. All fields marked with * are mandatory.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <h2 className="text-xl font-bold font-poppins text-gray-900 border-b pb-3">Personal Details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Student Name *", name: "studentName", type: "text", required: true },
                { label: "Father Name *", name: "fatherName", type: "text", required: true },
                { label: "Mother Name *", name: "motherName", type: "text", required: true },
                { label: "Date of Birth *", name: "dob", type: "date", required: true },
                { label: "Aadhaar Number *", name: "aadhaar", type: "text", required: true },
                { label: "Mobile Number *", name: "mobile", type: "tel", required: true },
                { label: "WhatsApp Number", name: "whatsapp", type: "tel" },
                { label: "Email ID", name: "email", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                  <input type={field.type} name={field.name} value={(form as Record<string, unknown>)[field.name] as string} onChange={handleChange} required={field.required} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition text-sm" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                <select name="gender" value={form.gender} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition text-sm bg-white">
                  <option value="">Select Gender</option>
                  <option>Male</option><option>Female</option><option>Other</option>
                </select>
              </div>
            </div>

            <h2 className="text-xl font-bold font-poppins text-gray-900 border-b pb-3">Academic Details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Qualification *</label>
                <select name="qualification" value={form.qualification} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition text-sm bg-white">
                  <option value="">Select Qualification</option>
                  {qualifications.map((q) => <option key={q}>{q}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Board *</label>
                <select name="board" value={form.board} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition text-sm bg-white">
                  <option value="">Select Board</option>
                  {boards.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course *</label>
                <select name="course" value={form.course} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition text-sm bg-white">
                  <option value="">Select Course</option>
                  {courses.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SSC Hall Ticket (if applicable)</label>
                <input type="text" name="sscHallTicket" value={form.sscHallTicket} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition text-sm" />
              </div>
            </div>

            <h2 className="text-xl font-bold font-poppins text-gray-900 border-b pb-3">Address Details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                <textarea name="address" value={form.address} onChange={handleChange} required rows={2} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition text-sm" />
              </div>
              {[
                { label: "District *", name: "district", required: true },
                { label: "State *", name: "state", required: true },
                { label: "Pincode *", name: "pincode", required: true },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                  <input type="text" name={f.name} value={(form as Record<string, unknown>)[f.name] as string} onChange={handleChange} required={f.required} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition text-sm" />
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold font-poppins text-gray-900 border-b pb-3">Document URLs</h2>
            <p className="text-xs text-gray-500">Upload your documents to any cloud service (Google Drive, Dropbox, etc.) and paste the shareable links below.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Photo URL", name: "photoUrl" },
                { label: "Signature URL", name: "signatureUrl" },
                { label: "Documents URL", name: "documentsUrl" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                  <input type="url" name={f.name} value={(form as Record<string, unknown>)[f.name] as string} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition text-sm" placeholder="https://..." />
                </div>
              ))}
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" name="declaration" checked={form.declaration} onChange={handleChange} required className="mt-1" />
              <label className="text-sm text-gray-600">I declare that all information provided is true and correct. I agree to the terms and conditions. *</label>
            </div>

            <button type="submit" disabled={loading} className="ripple-btn w-full bg-[#0F8A5F] text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-[#0c7a4e] transition-all shadow-lg shadow-green-200 disabled:opacity-50">
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
