import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications",
  description: "Latest notifications, exam schedules, admission notices, timetables, and updates from Inspire Educational Academy.",
};

const notifications = [
  { id: 1, title: "Admissions Open for 2025-26 Academic Year", type: "admission", date: "2025-06-15", important: true, content: "Admissions are now open for SSC, Intermediate, Degree, and PG programs for the academic year 2025-26. Limited seats available. Apply now!" },
  { id: 2, title: "TOSS Examination Schedule - July 2026", type: "exam", date: "2025-06-10", important: true, content: "The TOSS examination for SSC and Intermediate will commence from July 15, 2025. Hall tickets will be issued one week before the exam." },
  { id: 3, title: "NIOS Assignment Submission Deadline", type: "notice", date: "2025-06-05", important: false, content: "All NIOS students must submit their Tutor Marked Assignments (TMA) by June 30, 2025. Late submissions will not be accepted." },
  { id: 4, title: "Online Class Schedule - Updated", type: "timetable", date: "2025-06-01", important: false, content: "New online class timetable effective from June 1, 2025. Check the updated schedule on your student dashboard." },
  { id: 5, title: "BOSSE Online Exam Registration Open", type: "exam", date: "2025-05-28", important: true, content: "BOSSE online exam registration for the September 2025 session is now open. Register before July 15, 2025." },
  { id: 6, title: "Pre-Examination Seminar - All Boards", type: "update", date: "2025-05-20", important: false, content: "We are conducting a special pre-examination seminar for all our students on June 10, 2025. Expert tips and strategies will be shared." },
];

const typeColors: Record<string, string> = {
  admission: "bg-green-100 text-[#0F8A5F]",
  exam: "bg-red-100 text-[#8B0000]",
  notice: "bg-blue-100 text-blue-700",
  timetable: "bg-purple-100 text-purple-700",
  update: "bg-orange-100 text-orange-700",
};

export default function NotificationsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-green-50/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#0F8A5F] font-semibold text-sm uppercase tracking-wider">Stay Updated</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900 mt-2">Notifications</h1>
          <div className="section-divider w-24 mx-auto mt-4" />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          {notifications.map((n) => (
            <div key={n.id} className={`glass-card p-5 card-3d ${n.important ? "border-l-4 border-l-[#8B0000]" : ""}`}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase ${typeColors[n.type]}`}>{n.type}</span>
                  {n.important && <span className="px-2 py-0.5 bg-[#8B0000] text-white rounded-full text-xs font-semibold">Important</span>}
                </div>
                <span className="text-xs text-gray-400">{n.date}</span>
              </div>
              <h3 className="text-lg font-bold font-poppins text-gray-900">{n.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{n.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
