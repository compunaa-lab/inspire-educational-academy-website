"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaLock, FaUser } from "react-icons/fa";

export default function AdminLoginClient() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#0F8A5F] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaLock className="text-white text-2xl" />
            </div>
            <h1 className="text-2xl font-extrabold font-poppins text-gray-900">Admin Login</h1>
            <p className="text-gray-500 text-sm mt-1">Inspire Educational Academy</p>
          </div>

          {error && (
            <div className="bg-red-50 text-[#8B0000] text-sm px-4 py-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <div className="relative">
                <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="ripple-btn w-full bg-[#0F8A5F] text-white py-3 rounded-xl font-semibold hover:bg-[#0c7a4e] transition-all shadow-lg shadow-green-200 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">
          Secure admin panel for Inspire Educational Academy
        </p>
      </div>
    </div>
  );
}
