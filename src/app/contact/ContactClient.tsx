"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle } from "react-icons/fa";

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-green-50/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#0F8A5F] font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900 mt-2">Contact Us</h1>
          <div className="section-divider w-24 mx-auto mt-4" />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h2 className="text-xl font-bold font-poppins text-gray-900 mb-4">Our Offices</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#0F8A5F] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Head Office</h3>
                      <p className="text-gray-600 text-sm">Waram Gadda, Hyderabad, Telangana</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-[#0F8A5F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Branches</h3>
                      <p className="text-gray-600 text-sm">Mehdipatnam | Falaknuma</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 space-y-3">
                <a href="tel:9398131820" className="flex items-center gap-3 text-gray-700 hover:text-[#0F8A5F] transition">
                  <FaPhoneAlt className="text-[#0F8A5F]" /> <span className="font-medium">9398131820</span>
                </a>
                <a href="mailto:info@inspireacademy.edu" className="flex items-center gap-3 text-gray-700 hover:text-[#0F8A5F] transition">
                  <FaEnvelope className="text-[#0F8A5F]" /> <span>info@inspireacademy.edu</span>
                </a>
                <a href="https://wa.me/919398131820" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-[#0F8A5F] transition">
                  <FaWhatsapp className="text-green-500" /> <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Map placeholder */}
              <div className="glass-card p-2 overflow-hidden rounded-2xl">
                <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <FaMapMarkerAlt className="text-3xl mx-auto mb-2" />
                    <p className="text-sm">Google Maps</p>
                    <p className="text-xs">Waram Gadda, Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold font-poppins text-gray-900 mb-4">Send us a Message</h2>
              {submitted ? (
                <div className="text-center py-8">
                  <FaCheckCircle className="text-[#0F8A5F] text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-sm">We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: "Name *", name: "name", type: "text", required: true },
                    { label: "Phone *", name: "phone", type: "tel", required: true },
                    { label: "Email", name: "email", type: "email" },
                    { label: "Subject", name: "subject", type: "text" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                      <input type={f.type} name={f.name} value={(form as Record<string, string>)[f.name]} onChange={handleChange} required={f.required} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition text-sm" />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition text-sm" />
                  </div>
                  <button type="submit" disabled={loading} className="ripple-btn w-full bg-[#0F8A5F] text-white py-3 rounded-xl font-semibold hover:bg-[#0c7a4e] transition-all shadow-lg shadow-green-200 disabled:opacity-50">
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
