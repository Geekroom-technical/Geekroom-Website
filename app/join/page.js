"use client";

import { useState } from "react";
import InteractiveBackground from "../../components/InteractiveBackground";

const BRANCH_OPTIONS = [
  "CSE - CORE",
  "CSE AIML",
  "CSE DS",
  "CSE CYBERSECURITY",
  "CSE-CLOUDCOMPUTING",
  "ECE-DS",
  "ECE CORE",
  "ECE AIML",
  "BCA",
  "MCA",
];

const SECTION_OPTIONS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const TIME_COMMITMENT_OPTIONS = [
  "1–2 hours",
  "3–5 hours",
  "5–8 hours",
  "8+ hours",
];

const DEPARTMENTS = [
  { id: "technical", label: "Technical" },
  { id: "management", label: "Management" },
  { id: "design", label: "Design" },
  { id: "editorial", label: "Editorial" },
  { id: "photography", label: "Photography" },
  { id: "sponsorship", label: "Sponsorship & Outreach" },
  { id: "treasury", label: "Treasury" },
  { id: "social_media", label: "Social Media & PR" },
];

const DESIGN_TOOLS = ["Canva", "Figma", "Photoshop", "Illustrator", "Other"];
const EDITORIAL_COMFORT = [
  "Captions",
  "Articles",
  "Blogs",
  "Scripts",
  "Copywriting",
];
const SOCIAL_PLATFORMS = [
  "Instagram",
  "LinkedIn",
  "X (Twitter)",
  "YouTube",
  "Other",
];
const TECH_DOMAINS = [
  "Web Development",
  "App Development",
  "AI / Machine Learning",
  "Cloud & DevOps",
  "Cybersecurity",
  "Open Source",
];

const SKILL_LEVELS = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

const RECRUITMENT_OPEN = false;

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    registrationNo: "",
    phone: "",
    branch: "",
    section: "",
    whyJoin: "",
    pastExperience: "",
    timeCommitment: "",
    department: "",
    // Department Specific Answers
    deptAnswers: {
      portfolioLink: "",
      // Management
      mgmtCoordinated: "",
      mgmtMultitasking: "",
      mgmtIncompleteTask: "",
      // Design
      designTools: [],
      designSkillLevel: "",
      designWorkLink: "",
      // Editorial
      editorialSkillLevel: "",
      editorialComfort: [],
      editorialCaption: "",
      // Photography
      photoEquipment: "",
      photoSkillLevel: "",
      photoWorkLink: "",
      // Sponsorship & Outreach
      outreachStrangersComfort: "",
      outreachPriorExperience: "",
      outreachApproach: "",
      // Treasury
      treasuryExcelComfort: "",
      treasuryHandledBudgets: "",
      treasuryResponsibilityComfort: "",
      // Social Media & PR
      socialPlatforms: [],
      socialManagedBefore: "",
      socialContentIdea: "",
      socialVideoEditing: "",
      // Technical
      techDomains: [],
      techSkillLevel: "",
      techProjects: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBaseChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDeptAnswerChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      deptAnswers: {
        ...prev.deptAnswers,
        [field]: value,
      },
    }));
  };

  const handleCheckboxToggle = (field, item) => {
    setFormData((prev) => {
      const currentList = prev.deptAnswers[field] || [];
      const updatedList = currentList.includes(item)
        ? currentList.filter((i) => i !== item)
        : [...currentList, item];
      return {
        ...prev,
        deptAnswers: {
          ...prev.deptAnswers,
          [field]: updatedList,
        },
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.department) {
      alert("Please select one team to apply for.");
      return;
    }

    const regPattern = /^RA\d{13}$/i;
    if (!regPattern.test(formData.registrationNo.trim())) {
      alert("Registration Number must start with 'RA' followed by 13 digits (15 characters total, e.g. RA2411003030xxx).");
      return;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.phone.trim())) {
      alert("Mobile number must be exactly 10 digits.");
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
      await fetch(`${apiUrl}/api/recruitment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      registrationNo: "",
      phone: "",
      branch: "",
      section: "",
      whyJoin: "",
      pastExperience: "",
      timeCommitment: "",
      department: "",
      deptAnswers: {
        portfolioLink: "",
        mgmtCoordinated: "",
        mgmtMultitasking: "",
        mgmtIncompleteTask: "",
        designTools: [],
        designSkillLevel: "",
        designWorkLink: "",
        editorialSkillLevel: "",
        editorialComfort: [],
        editorialCaption: "",
        photoEquipment: "",
        photoSkillLevel: "",
        photoWorkLink: "",
        outreachStrangersComfort: "",
        outreachPriorExperience: "",
        outreachApproach: "",
        treasuryExcelComfort: "",
        treasuryHandledBudgets: "",
        treasuryResponsibilityComfort: "",
        socialPlatforms: [],
        socialManagedBefore: "",
        socialContentIdea: "",
        socialVideoEditing: "",
        techDomains: [],
        techSkillLevel: "",
        techProjects: "",
      },
    });
    setIsSubmitted(false);
  };

  return (
    <InteractiveBackground>
      <div className="flex flex-col items-center justify-center px-4 w-full max-w-6xl mx-auto flex-grow py-32 space-y-16 animate-fadeIn">
        {/* Header */}
        <div className="space-y-6 text-center select-none animate-slideInUp">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tighter text-[#1a1a1a] uppercase leading-none">
            Join <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-cyan-500 to-cyan-600">
              GeekRoom
            </span>
          </h1>
          <p className="text-lg sm:text-2xl font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Let&apos;s • Geek • Out
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-4xl px-4 sm:px-8">
          {RECRUITMENT_OPEN ? (
            <form onSubmit={handleSubmit} className="w-full max-w-xl rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-md animate-fadeIn sm:p-8">
              <div className="space-y-5 text-left">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleBaseChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="10-digit mobile number"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="department" className="mb-2 block text-sm font-semibold text-gray-700">
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleBaseChange}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-cyan-500"
                  >
                    <option value="">Select a team</option>
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-black px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          ) : (
            <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center space-y-5 animate-fadeIn">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
                Notice
              </p>
              <p className="max-w-xl text-xl font-medium leading-relaxed text-gray-800 sm:text-2xl sm:leading-[1.6]">
                Recruitment is closed for now, but we&apos;ll be back next semester.
              </p>
              </div>
          )}
        </div>

        {/* Footer note */}
        <p className="text-base sm:text-lg font-semibold tracking-tight text-gray-800 opacity-50 animate-fadeIn select-none text-center">
          Join ✦ Learn ✦ Build ✦ Lead
        </p>
      </div>
    </InteractiveBackground>
  );
}
