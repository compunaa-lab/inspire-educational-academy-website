import {
  pgTable,
  text,
  timestamp,
  boolean,
  serial,
  integer,
  jsonb,
} from "drizzle-orm/pg-core";

// Admins
export const admins = pgTable("admins", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Students / Admissions
export const admissions = pgTable("admissions", {
  id: serial("id").primaryKey(),
  studentName: text("student_name").notNull(),
  fatherName: text("father_name").notNull(),
  motherName: text("mother_name").notNull(),
  gender: text("gender").notNull(),
  dob: text("dob").notNull(),
  aadhaar: text("aadhaar").notNull(),
  mobile: text("mobile").notNull(),
  whatsapp: text("whatsapp"),
  email: text("email"),
  sscHallTicket: text("ssc_hall_ticket"),
  qualification: text("qualification").notNull(),
  board: text("board"),
  course: text("course").notNull(),
  address: text("address").notNull(),
  district: text("district").notNull(),
  state: text("state").notNull(),
  pincode: text("pincode").notNull(),
  photoUrl: text("photo_url"),
  signatureUrl: text("signature_url"),
  documentsUrl: text("documents_url"),
  declaration: boolean("declaration").default(false),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Enquiries
export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  course: text("course"),
  message: text("message"),
  status: text("status").default("new"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Notifications
export const notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  type: text("type").default("notice"), // notice, exam, admission, timetable, update
  isImportant: boolean("is_important").default(false),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Results
export const results = pgTable("results", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  resultLink: text("result_link"),
  officialLink: text("official_link"),
  downloadLink: text("download_link"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Courses
export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  category: text("category").notNull(), // ssc, intermediate, degree, pg
  description: text("description"),
  longDescription: text("long_description"),
  eligibility: text("eligibility"),
  duration: text("duration"),
  subjects: text("subjects"),
  careerOpportunities: text("career_opportunities"),
  imageUrl: text("image_url"),
  features: jsonb("features"),
  isActive: boolean("is_active").default(true),
  orderIndex: integer("order_index").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// FAQ
export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  category: text("category").default("general"),
  orderIndex: integer("order_index").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Homepage Content (editable sections)
export const homepageContent = pgTable("homepage_content", {
  id: serial("id").primaryKey(),
  sectionKey: text("section_key").notNull().unique(),
  title: text("title"),
  subtitle: text("subtitle"),
  content: text("content"),
  imageUrl: text("image_url"),
  linkUrl: text("link_url"),
  isActive: boolean("is_active").default(true),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Site Settings
export const siteSettings = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  value: text("value"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Branches
export const branches = pgTable("branches", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  address: text("address"),
  phone: text("phone"),
  mapUrl: text("map_url"),
  isHeadOffice: boolean("is_head_office").default(false),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Gallery
export const gallery = pgTable("gallery", {
  id: serial("id").primaryKey(),
  title: text("title"),
  imageUrl: text("image_url").notNull(),
  category: text("category").default("general"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Testimonials
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  studentName: text("student_name").notNull(),
  course: text("course"),
  content: text("content").notNull(),
  rating: integer("rating").default(5),
  imageUrl: text("image_url"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Downloads
export const downloads = pgTable("downloads", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  fileUrl: text("file_url").notNull(),
  category: text("category").default("general"), // prospectus, study-material, admission-form, fee-structure
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Social Media Links
export const socialLinks = pgTable("social_links", {
  id: serial("id").primaryKey(),
  platform: text("platform").notNull(),
  url: text("url").notNull(),
  icon: text("icon"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Contact Messages
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject"),
  message: text("message").notNull(),
  status: text("status").default("new"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Announcement Popup
export const announcements = pgTable("announcements", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content"),
  isActive: boolean("is_active").default(true),
  showAsPopup: boolean("show_as_popup").default(false),
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
  createdAt: timestamp("created_at").defaultNow(),
});
