"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaTachometerAlt,
  FaUsers,
  FaEnvelope,
  FaBell,
  FaBookOpen,
  FaQuestionCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaFileAlt,
  FaCog,
  FaDownload,
  FaPhone,
} from "react-icons/fa";

const menuItems = [
  { label: "Dashboard", icon: FaTachometerAlt, section: "dashboard" },
  { label: "Admissions", icon: FaUsers, section: "admissions" },
  { label: "Enquiries", icon: FaEnvelope, section: "enquiries" },
  { label: "Notifications", icon: FaBell, section: "notifications" },
  { label: "Results", icon: FaFileAlt, section: "results" },
  { label: "Courses", icon: FaBookOpen, section: "courses" },
  { label: "FAQ", icon: FaQuestionCircle, section: "faq" },
  { label: "Downloads", icon: FaDownload, section: "downloads" },
  { label: "Contact Messages", icon: FaPhone, section: "contacts" },
  { label: "Settings", icon: FaCog, section: "settings" },
];

export default function AdminDashboardClient() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0F8A5F] rounded-lg flex items-center justify-center text-white font-bold">I</div>
            <div className="leading-tight">
              <div className="font-bold text-gray-900 text-sm">INSPIRE</div>
              <div className="text-[10px] text-gray-400">Admin Panel</div>
            </div>
          </div>
        </div>
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.section}
              onClick={() => {
                setActiveSection(item.section);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeSection === item.section
                  ? "bg-[#0F8A5F] text-white shadow-lg shadow-green-200"
                  : "text-gray-600 hover:bg-green-50 hover:text-[#0F8A5F]"
              }`}
            >
              <item.icon />
              {item.label}
            </button>
          ))}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all mt-4"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </nav>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Top Bar */}
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-gray-600 hover:text-[#0F8A5F] transition">
            <FaBars />
          </button>
          <h1 className="text-xl font-bold font-poppins text-gray-900">
            {menuItems.find((m) => m.section === activeSection)?.label || "Dashboard"}
          </h1>
          <div className="w-8" />
        </header>

        {/* Content Area */}
        <div className="p-6">
          {activeSection === "dashboard" && <DashboardOverview />}
          {activeSection === "admissions" && <SectionPlaceholder title="Admissions" icon={FaUsers} desc="View and manage student admissions. Feature available for full implementation." />}
          {activeSection === "enquiries" && <SectionPlaceholder title="Enquiries" icon={FaEnvelope} desc="View and manage student enquiries. Feature available for full implementation." />}
          {activeSection === "notifications" && <SectionPlaceholder title="Notifications" icon={FaBell} desc="Create, edit, and manage notifications, exam schedules, and updates." />}
          {activeSection === "results" && <SectionPlaceholder title="Results" icon={FaFileAlt} desc="Add and manage result links for students." />}
          {activeSection === "courses" && <SectionPlaceholder title="Courses" icon={FaBookOpen} desc="Manage course details, descriptions, and availability." />}
          {activeSection === "faq" && <SectionPlaceholder title="FAQ" icon={FaQuestionCircle} desc="Add, edit, and manage frequently asked questions." />}
          {activeSection === "downloads" && <SectionPlaceholder title="Downloads" icon={FaDownload} desc="Manage downloadable resources, prospectus, and study materials." />}
          {activeSection === "contacts" && <SectionPlaceholder title="Contact Messages" icon={FaPhone} desc="View and respond to contact form submissions." />}
          {activeSection === "settings" && <SectionPlaceholder title="Settings" icon={FaCog} desc="Manage site settings, social media links, branches, and more." />}
        </div>
      </div>
    </div>
  );
}

function DashboardOverview() {
  const stats = [
    { label: "Total Admissions", value: "1,245", icon: FaUsers, color: "bg-green-100 text-[#0F8A5F]" },
    { label: "New Enquiries", value: "38", icon: FaEnvelope, color: "bg-blue-100 text-blue-700" },
    { label: "Active Courses", value: "9", icon: FaGraduationCap, color: "bg-purple-100 text-purple-700" },
    { label: "Notifications", value: "6", icon: FaBell, color: "bg-red-100 text-[#8B0000]" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
              <stat.icon />
            </div>
            <div className="text-3xl font-extrabold font-poppins text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold font-poppins text-gray-900 mb-4">Recent Admissions</h3>
          <div className="space-y-3">
            {[
              { name: "S Srikaanth", course: "Intermediate MPC", date: "2025-06-15" },
              { name: "Samreen Begum", course: "SSC - TOSS", date: "2025-06-14" },
              { name: "Mohammad Ali", course: "BA", date: "2025-06-14" },
            ].map((a) => (
              <div key={a.name} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <div>
                  <div className="font-medium text-gray-900 text-sm">{a.name}</div>
                  <div className="text-xs text-gray-500">{a.course}</div>
                </div>
                <span className="text-xs text-gray-400">{a.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold font-poppins text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Add Notification", icon: FaBell },
              { label: "Add Result", icon: FaFileAlt },
              { label: "View Admissions", icon: FaUsers },
              { label: "Export Data", icon: FaDownload },
            ].map((a) => (
              <button key={a.label} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-green-50 hover:text-[#0F8A5F] transition text-sm font-medium">
                <a.icon /> {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionPlaceholder({ title, icon: Icon, desc }: { title: string; icon: React.ElementType; desc: string }) {
  return (
    <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
      <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Icon className="text-[#0F8A5F] text-2xl" />
      </div>
      <h2 className="text-xl font-bold font-poppins text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-500 text-sm max-w-md mx-auto">{desc}</p>
      <p className="text-xs text-gray-400 mt-4">Full CRUD functionality available in the complete admin panel implementation.</p>
    </div>
  );
}
