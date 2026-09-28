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

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    registrationNo: "",
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
      <div className="flex flex-col items-center justify-center px-4 w-full max-w-4xl mx-auto flex-grow py-24 sm:py-32 space-y-10 animate-fadeIn">
        {/* Header */}
        <div className="space-y-4 text-center select-none animate-slideInUp">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tighter text-[#1a1a1a] uppercase leading-none">
            Join <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-cyan-500 to-cyan-600">
              GeekRoom
            </span>
          </h1>
          <p className="text-base sm:text-xl font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Let&apos;s &nbsp; Geek &nbsp; Out
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/60 backdrop-blur-3xl border-2 border-black/5 rounded-[2.5rem] p-6 sm:p-12 w-full shadow-2xl relative overflow-hidden group hover:border-black/10 transition-all duration-500">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-orange-500 flex items-center justify-center text-white shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Application Submitted!
              </h2>
              <p className="text-gray-600 max-w-md mx-auto text-base">
                Thank you for applying to Geek Room! We have received your application for the{" "}
                <span className="font-semibold text-gray-900">
                  {DEPARTMENTS.find((d) => d.id === formData.department)?.label}
                </span>{" "}
                team. Please join our WhatsApp group for further updates.
              </p>

              {/* WhatsApp Group Link Button */}
              <div className="pt-2">
                <a
                  href="https://chat.whatsapp.com/LOSVcVFppVv0EZEZ37HQ70?s=cl&p=a&mlu=4&ilr=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-base sm:text-lg"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Join WhatsApp Group
                </a>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2 inline-block px-6 py-2.5 text-gray-500 hover:text-black font-semibold rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  Submit Another Response
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10 text-left">
              {/* SECTION 1: Personal Details */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Personal Details
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Tell us about yourself and your academic details.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 ml-1">
                    Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleBaseChange}
                    placeholder="Enter your full name"
                    className="w-full px-5 py-4 bg-white/80 border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-cyan-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  />
                </div>

                {/* Registration Number */}
                <div className="space-y-2">
                  <label htmlFor="registrationNo" className="block text-sm font-semibold text-gray-700 ml-1">
                    Registration No <span className="text-orange-500">*</span>
                  </label>
                  <input
                    id="registrationNo"
                    name="registrationNo"
                    type="text"
                    required
                    value={formData.registrationNo}
                    onChange={handleBaseChange}
                    placeholder="e.g. RA2411003010xxx"
                    className="w-full px-5 py-4 bg-white/80 border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-cyan-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  />
                </div>

                {/* Branch & Section Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Branch */}
                  <div className="space-y-2">
                    <label htmlFor="branch" className="block text-sm font-semibold text-gray-700 ml-1">
                      Branch <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="branch"
                        name="branch"
                        required
                        value={formData.branch}
                        onChange={handleBaseChange}
                        className="w-full px-5 py-4 bg-white/80 border-2 border-transparent rounded-2xl text-gray-900 focus:bg-white focus:border-cyan-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-gray-400">
                          Select your branch
                        </option>
                        {BRANCH_OPTIONS.map((branch) => (
                          <option key={branch} value={branch} className="text-gray-900">
                            {branch}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Section */}
                  <div className="space-y-2">
                    <label htmlFor="section" className="block text-sm font-semibold text-gray-700 ml-1">
                      Section <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="section"
                        name="section"
                        required
                        value={formData.section}
                        onChange={handleBaseChange}
                        className="w-full px-5 py-4 bg-white/80 border-2 border-transparent rounded-2xl text-gray-900 focus:bg-white focus:border-cyan-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-gray-400">
                          Select section (A - J)
                        </option>
                        {SECTION_OPTIONS.map((sec) => (
                          <option key={sec} value={sec} className="text-gray-900">
                            Section {sec}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Join */}
                <div className="space-y-2">
                  <label htmlFor="whyJoin" className="block text-sm font-semibold text-gray-700 ml-1">
                    Why do you want to join Geek Room? <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="whyJoin"
                    name="whyJoin"
                    rows="3"
                    required
                    value={formData.whyJoin}
                    onChange={handleBaseChange}
                    placeholder="Tell us what motivates you to be part of Geek Room..."
                    className="w-full px-5 py-4 bg-white/80 border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-cyan-500 focus:outline-none transition-all duration-300 resize-none shadow-sm hover:shadow-md"
                  />
                </div>
              </div>

              {/* SECTION 2: General Experience & Availability */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Experience & Availability
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Share your prior engagements and how much time you can dedicate.
                  </p>
                </div>

                {/* Q4: Prior Experience */}
                <div className="space-y-2">
                  <label htmlFor="pastExperience" className="block text-sm font-semibold text-gray-700 ml-1">
                    Have you worked in any clubs, societies, events, projects, or organizations before? If yes, briefly describe your role. <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="pastExperience"
                    name="pastExperience"
                    rows="3"
                    required
                    value={formData.pastExperience}
                    onChange={handleBaseChange}
                    placeholder="e.g. Worked as an event coordinator in school/college, lead a student team, or none (fresher looking for first opportunity)..."
                    className="w-full px-5 py-4 bg-white/80 border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-cyan-500 focus:outline-none transition-all duration-300 resize-none shadow-sm hover:shadow-md"
                  />
                </div>

                {/* Q5: Time Commitment */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700 ml-1">
                    How much time can you realistically contribute to Geek Room each week? <span className="text-orange-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {TIME_COMMITMENT_OPTIONS.map((option) => {
                      const isSelected = formData.timeCommitment === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, timeCommitment: option }))
                          }
                          className={`py-3.5 px-4 rounded-2xl font-semibold text-sm transition-all duration-200 border-2 text-center ${isSelected
                            ? "bg-black text-white border-black shadow-md scale-[1.02]"
                            : "bg-white/80 text-gray-700 border-transparent hover:border-gray-300 hover:bg-white shadow-sm"
                            }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  {/* Hidden input to ensure required validation */}
                  <input
                    type="text"
                    required
                    value={formData.timeCommitment}
                    onChange={() => { }}
                    className="opacity-0 h-0 w-0 absolute pointer-events-none"
                    tabIndex={-1}
                  />
                </div>
              </div>

              {/* SECTION 3: Team Preference */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Choose Your Department
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Select <strong>1 team</strong> you wish to apply for. Department-specific questions will appear below.
                  </p>
                </div>

                {/* Team Selection Grid (No Emojis, Clean Font) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {DEPARTMENTS.map((dept) => {
                    const isSelected = formData.department === dept.id;
                    return (
                      <button
                        key={dept.id}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, department: dept.id }))
                        }
                        className={`p-4 sm:p-5 rounded-2xl flex items-center justify-center text-center transition-all duration-300 border-2 font-semibold text-sm sm:text-base ${isSelected
                          ? "bg-black text-white border-orange-500 shadow-xl scale-[1.02]"
                          : "bg-white/80 text-gray-800 border-transparent hover:border-gray-300 hover:bg-white shadow-sm"
                          }`}
                      >
                        {dept.label}
                      </button>
                    );
                  })}
                </div>
                {/* Hidden input to ensure required department selection */}
                <input
                  type="text"
                  required
                  value={formData.department}
                  onChange={() => { }}
                  className="opacity-0 h-0 w-0 absolute pointer-events-none"
                  tabIndex={-1}
                />
              </div>

              {/* SECTION 4: Department-Specific Screening */}
              {formData.department && (
                <div className="space-y-6 animate-fadeIn bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-black/5 shadow-inner">
                  <div className="border-b border-gray-200 pb-3 flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {DEPARTMENTS.find((d) => d.id === formData.department)?.label} Screening
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Answer these department-specific questions to help us evaluate your fit.
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-200">
                      Required Section
                    </span>
                  </div>

                  {/* 1. MANAGEMENT */}
                  {formData.department === "management" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Have you ever coordinated an event/team? <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          rows="3"
                          required
                          value={formData.deptAnswers.mgmtCoordinated}
                          onChange={(e) => handleDeptAnswerChange("mgmtCoordinated", e.target.value)}
                          placeholder="Describe your event coordination experience, the scale of the event, and what you oversaw..."
                          className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all shadow-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          How comfortable are you with handling multiple tasks at once? <span className="text-orange-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {["Extremely comfortable", "Very comfortable", "Comfortable", "Learning / Adapting"].map((lvl) => (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() => handleDeptAnswerChange("mgmtMultitasking", lvl)}
                              className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-medium border text-center transition-all ${formData.deptAnswers.mgmtMultitasking === lvl
                                ? "bg-black text-white border-black shadow"
                                : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                }`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.deptAnswers.mgmtMultitasking}
                          onChange={() => { }}
                          className="opacity-0 h-0 w-0 absolute pointer-events-none"
                          tabIndex={-1}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          If a team member doesn&apos;t complete their task before an event, what would you do? <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          rows="3"
                          required
                          value={formData.deptAnswers.mgmtIncompleteTask}
                          onChange={(e) => handleDeptAnswerChange("mgmtIncompleteTask", e.target.value)}
                          placeholder="Share your approach to problem-solving, delegation, and crisis handling..."
                          className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  )}

                  {/* 2. DESIGN */}
                  {formData.department === "design" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Which tools do you know? <span className="text-orange-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2.5">
                          {DESIGN_TOOLS.map((tool) => {
                            const isChecked = (formData.deptAnswers.designTools || []).includes(tool);
                            return (
                              <button
                                key={tool}
                                type="button"
                                onClick={() => handleCheckboxToggle("designTools", tool)}
                                className={`py-2.5 px-5 rounded-xl text-sm font-medium border transition-all ${isChecked
                                  ? "bg-black text-white border-black shadow-sm"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                  }`}
                              >
                                {tool}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          How would you rate your design skills? (Beginner to Advanced) <span className="text-orange-500">*</span>
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {SKILL_LEVELS.map((lvl) => (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() => handleDeptAnswerChange("designSkillLevel", lvl)}
                              className={`py-3 px-4 rounded-xl text-sm font-semibold border text-center transition-all ${formData.deptAnswers.designSkillLevel === lvl
                                ? "bg-black text-white border-black shadow"
                                : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                }`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.deptAnswers.designSkillLevel}
                          onChange={() => { }}
                          className="opacity-0 h-0 w-0 absolute pointer-events-none"
                          tabIndex={-1}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Upload your best work / portfolio link <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="url"
                          required
                          value={formData.deptAnswers.designWorkLink}
                          onChange={(e) => handleDeptAnswerChange("designWorkLink", e.target.value)}
                          placeholder="Figma / Behance / Dribbble / Google Drive link"
                          className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  )}

                  {/* 3. EDITORIAL */}
                  {formData.department === "editorial" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          How would you rate your writing skills? (Beginner to Advanced) <span className="text-orange-500">*</span>
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {SKILL_LEVELS.map((lvl) => (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() => handleDeptAnswerChange("editorialSkillLevel", lvl)}
                              className={`py-3 px-4 rounded-xl text-sm font-semibold border text-center transition-all ${formData.deptAnswers.editorialSkillLevel === lvl
                                ? "bg-black text-white border-black shadow"
                                : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                }`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.deptAnswers.editorialSkillLevel}
                          onChange={() => { }}
                          className="opacity-0 h-0 w-0 absolute pointer-events-none"
                          tabIndex={-1}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Which are you comfortable with? <span className="text-orange-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2.5">
                          {EDITORIAL_COMFORT.map((item) => {
                            const isChecked = (formData.deptAnswers.editorialComfort || []).includes(item);
                            return (
                              <button
                                key={item}
                                type="button"
                                onClick={() => handleCheckboxToggle("editorialComfort", item)}
                                className={`py-2.5 px-5 rounded-xl text-sm font-medium border transition-all ${isChecked
                                  ? "bg-black text-white border-black shadow-sm"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                  }`}
                              >
                                {item}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Write a 2–3 line caption for a Geek Room tech event. <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          rows="3"
                          required
                          value={formData.deptAnswers.editorialCaption}
                          onChange={(e) => handleDeptAnswerChange("editorialCaption", e.target.value)}
                          placeholder="Drop a catchy and engaging caption here..."
                          className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  )}

                  {/* 4. PHOTOGRAPHY */}
                  {formData.department === "photography" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          What equipment do you use? (Phone / DSLR / Mirrorless / Other) <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.deptAnswers.photoEquipment}
                          onChange={(e) => handleDeptAnswerChange("photoEquipment", e.target.value)}
                          placeholder="e.g. Sony Alpha A6400, iPhone 15 Pro, Canon EOS..."
                          className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all shadow-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          How would you rate your photography skills? <span className="text-orange-500">*</span>
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {SKILL_LEVELS.map((lvl) => (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() => handleDeptAnswerChange("photoSkillLevel", lvl)}
                              className={`py-3 px-4 rounded-xl text-sm font-semibold border text-center transition-all ${formData.deptAnswers.photoSkillLevel === lvl
                                ? "bg-black text-white border-black shadow"
                                : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                }`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.deptAnswers.photoSkillLevel}
                          onChange={() => { }}
                          className="opacity-0 h-0 w-0 absolute pointer-events-none"
                          tabIndex={-1}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Upload 2–3 photographs you&apos;re proud of (Drive link) <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="url"
                          required
                          value={formData.deptAnswers.photoWorkLink}
                          onChange={(e) => handleDeptAnswerChange("photoWorkLink", e.target.value)}
                          placeholder="Google Drive / Dropbox / Cloud link (make sure access is set to anyone with link)"
                          className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  )}

                  {/* 5. SPONSORSHIP & OUTREACH */}
                  {formData.department === "sponsorship" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          How comfortable are you approaching strangers/professionals? <span className="text-orange-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {["Extremely confident", "Quite comfortable", "Moderate", "A bit nervous but eager"].map((lvl) => (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() => handleDeptAnswerChange("outreachStrangersComfort", lvl)}
                              className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-medium border text-center transition-all ${formData.deptAnswers.outreachStrangersComfort === lvl
                                ? "bg-black text-white border-black shadow"
                                : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                }`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.deptAnswers.outreachStrangersComfort}
                          onChange={() => { }}
                          className="opacity-0 h-0 w-0 absolute pointer-events-none"
                          tabIndex={-1}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Have you done sponsorship/outreach before? <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          rows="2"
                          required
                          value={formData.deptAnswers.outreachPriorExperience}
                          onChange={(e) => handleDeptAnswerChange("outreachPriorExperience", e.target.value)}
                          placeholder="Briefly state past sponsorship deals, college fests, or emails you sent..."
                          className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all shadow-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          If Geek Room needed a sponsor for an event, how would you approach a company? (Short answer) <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          rows="3"
                          required
                          value={formData.deptAnswers.outreachApproach}
                          onChange={(e) => handleDeptAnswerChange("outreachApproach", e.target.value)}
                          placeholder="Share your pitch strategy, value proposition for sponsors, or outreach workflow..."
                          className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  )}

                  {/* 6. TREASURY */}
                  {formData.department === "treasury" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Are you comfortable with Excel/Google Sheets? <span className="text-orange-500">*</span>
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {["Very Comfortable", "Basic Formulas", "Beginner"].map((lvl) => (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() => handleDeptAnswerChange("treasuryExcelComfort", lvl)}
                              className={`py-3 px-4 rounded-xl text-sm font-semibold border text-center transition-all ${formData.deptAnswers.treasuryExcelComfort === lvl
                                ? "bg-black text-white border-black shadow"
                                : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                }`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.deptAnswers.treasuryExcelComfort}
                          onChange={() => { }}
                          className="opacity-0 h-0 w-0 absolute pointer-events-none"
                          tabIndex={-1}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Have you handled budgets or financial records before? <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          rows="2"
                          required
                          value={formData.deptAnswers.treasuryHandledBudgets}
                          onChange={(e) => handleDeptAnswerChange("treasuryHandledBudgets", e.target.value)}
                          placeholder="e.g. Managed fest budget, high school committee, or looking forward to gaining hands-on experience..."
                          className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all shadow-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          How comfortable are you handling responsibility involving club finances? <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          rows="2"
                          required
                          value={formData.deptAnswers.treasuryResponsibilityComfort}
                          onChange={(e) => handleDeptAnswerChange("treasuryResponsibilityComfort", e.target.value)}
                          placeholder="Describe how you maintain accountability and transparency..."
                          className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  )}

                  {/* 7. SOCIAL MEDIA & PR */}
                  {formData.department === "social_media" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Which platforms are you comfortable managing? <span className="text-orange-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2.5">
                          {SOCIAL_PLATFORMS.map((platform) => {
                            const isChecked = (formData.deptAnswers.socialPlatforms || []).includes(platform);
                            return (
                              <button
                                key={platform}
                                type="button"
                                onClick={() => handleCheckboxToggle("socialPlatforms", platform)}
                                className={`py-2.5 px-5 rounded-xl text-sm font-medium border transition-all ${isChecked
                                  ? "bg-black text-white border-black shadow-sm"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                  }`}
                              >
                                {platform}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Have you managed a social media account before? <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          rows="2"
                          required
                          value={formData.deptAnswers.socialManagedBefore}
                          onChange={(e) => handleDeptAnswerChange("socialManagedBefore", e.target.value)}
                          placeholder="Mention any page handles, follower growth, or content experience..."
                          className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all shadow-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Give one content idea for Geek Room&apos;s Instagram. <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          rows="3"
                          required
                          value={formData.deptAnswers.socialContentIdea}
                          onChange={(e) => handleDeptAnswerChange("socialContentIdea", e.target.value)}
                          placeholder="Reels idea, carousel, student spotlight, meme format, tech tip..."
                          className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all shadow-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          How familiar are you with Canva/video editing? <span className="text-orange-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {["Proficient (Premiere/CapCut/Canva)", "Intermediate", "Basic (Canva only)", "Willing to learn"].map((lvl) => (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() => handleDeptAnswerChange("socialVideoEditing", lvl)}
                              className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-medium border text-center transition-all ${formData.deptAnswers.socialVideoEditing === lvl
                                ? "bg-black text-white border-black shadow"
                                : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                }`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.deptAnswers.socialVideoEditing}
                          onChange={() => { }}
                          className="opacity-0 h-0 w-0 absolute pointer-events-none"
                          tabIndex={-1}
                        />
                      </div>
                    </div>
                  )}

                  {/* 8. TECHNICAL */}
                  {formData.department === "technical" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Which tech domains are you interested or experienced in? <span className="text-orange-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2.5">
                          {TECH_DOMAINS.map((domain) => {
                            const isChecked = (formData.deptAnswers.techDomains || []).includes(domain);
                            return (
                              <button
                                key={domain}
                                type="button"
                                onClick={() => handleCheckboxToggle("techDomains", domain)}
                                className={`py-2.5 px-5 rounded-xl text-sm font-medium border transition-all ${isChecked
                                  ? "bg-black text-white border-black shadow-sm"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                  }`}
                              >
                                {domain}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          How would you rate your coding / technical skills? (Beginner to Advanced) <span className="text-orange-500">*</span>
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {SKILL_LEVELS.map((lvl) => (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() => handleDeptAnswerChange("techSkillLevel", lvl)}
                              className={`py-3 px-4 rounded-xl text-sm font-semibold border text-center transition-all ${formData.deptAnswers.techSkillLevel === lvl
                                ? "bg-black text-white border-black shadow"
                                : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                }`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.deptAnswers.techSkillLevel}
                          onChange={() => { }}
                          className="opacity-0 h-0 w-0 absolute pointer-events-none"
                          tabIndex={-1}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          What projects or technologies have you built or worked on? <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          rows="3"
                          required
                          value={formData.deptAnswers.techProjects}
                          onChange={(e) => handleDeptAnswerChange("techProjects", e.target.value)}
                          placeholder="Describe 1–2 projects, languages used (e.g. Next.js, Python, MERN), or what you're currently building..."
                          className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  )}

                  {/* OPTIONAL PORTFOLIO LINK IN EACH DEPARTMENT */}
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <label className="block text-sm font-semibold text-gray-800">
                      Portfolio / Work Link <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="url"
                      value={formData.deptAnswers.portfolioLink}
                      onChange={(e) => handleDeptAnswerChange("portfolioLink", e.target.value)}
                      placeholder="e.g. GitHub, Behance, Google Drive, LinkedIn, or personal website link"
                      className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all shadow-sm"
                    />
                    <p className="text-xs text-gray-500 ml-1">
                      Share any relevant portfolio, GitHub repo, drive folder, or proof of work if you have one.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white font-semibold py-5 px-10 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-95 transition-all duration-300 text-lg uppercase tracking-[0.2em] disabled:opacity-50 disabled:cursor-wait"
              >
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>

        {/* Footer note */}
        <p className="text-gray-800 text-base sm:text-lg font-semibold tracking-tight opacity-50 animate-fadeIn select-none text-center">
          Join ✦ Learn ✦ Build ✦ Lead
        </p>
      </div>
    </InteractiveBackground>
  );
}
