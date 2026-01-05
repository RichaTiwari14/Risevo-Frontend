// Next.js app router use kar rahe ho to top pe ye line laga dena:
// 'use client';

import React, { useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

const positions = [
  {
    title: "Site Engineer",
    type: "Full-time",
    location: "Pune, Maharashtra",
    experience: "3+ years",
  },
  {
    title: "Project Manager",
    type: "Full-time",
    location: "Mumbai, Maharashtra",
    experience: "5+ years",
  },
  {
    title: "Junior Architect",
    type: "Full-time",
    location: "Hybrid / Pune",
    experience: "1–3 years",
  },
];

const CareersSection = () => {
  // job list ke liye filter
  const [filterJob, setFilterJob] = useState("all");
  // form ke career select ke liye
  const [formCareer, setFormCareer] = useState("");

  const visiblePositions =
    filterJob === "all"
      ? positions
      : positions.filter((job) => job.title === filterJob);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // yahan Django backend/API ko POST karo:
    // fetch("/api/job-applications/", {
    //   method: "POST",
    //   body: formData,
    // }).then(...);

    alert("Form submitted (front-end). Backend se connect yahan karo.");
  };

  return (
    <section
      id="careers"
      className="relative overflow-hidden bg-[#020617] py-12 sm:py-16 lg:py-20"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/12 blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-72 w-72 rounded-full bg-sky-500/12 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Heading center me */}
        <div className="max-w-3xl mx-auto space-y-3 mb-7 sm:mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            Careers
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-50">
            SHAPE YOUR{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              CAREER WITH RISEVO
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300/85 leading-relaxed">
            Join a team that delivers technically sound, design-driven and
            responsibly executed projects. At Risevo, you collaborate with
            experienced professionals across engineering, project management and
            on-ground execution.
          </p>

          {/* Small pills center me */}
          <div className="mt-2 flex flex-wrap justify-center gap-2 text-[11px] sm:text-xs">
            <span className="rounded-full border border-cyan-400/25 bg-cyan-500/5 px-3 py-1 uppercase tracking-[0.18em] text-sky-100/90">
              On-site project roles
            </span>
            <span className="rounded-full border border-sky-400/25 bg-sky-500/5 px-3 py-1 uppercase tracking-[0.18em] text-sky-100/90">
              Design &amp; engineering
            </span>
            <span className="rounded-full border border-emerald-400/25 bg-emerald-500/5 px-3 py-1 uppercase tracking-[0.18em] text-sky-100/90">
              Project management
            </span>
          </div>
        </div>

        {/* Heading ke baad: pehle jobs card, phir form */}
        <div className="space-y-6 lg:space-y-7">
          {/* JOBS CARD */}
          <div className="w-full">
            <div className="rounded-2xl border border-sky-500/25 bg-[#020d1f]/90 backdrop-blur-xl p-4 sm:p-5 lg:p-6 shadow-[0_14px_40px_rgba(0,0,0,0.85)]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
                    CURRENT OPPORTUNITIES
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Explore openings across engineering, site management and
                    design.
                  </p>
                </div>

                <div className="flex flex-col items-stretch sm:items-end gap-2">
                  <div className="hidden sm:flex items-center gap-2 rounded-full border border-sky-500/40 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-sky-300 bg-sky-500/6">
                    <Briefcase size={14} />
                    <span>Now Hiring</span>
                  </div>

                  {/* Dropdown filter */}
                  <select
                    value={filterJob}
                    onChange={(e) => setFilterJob(e.target.value)}
                    className="min-w-[180px] rounded-lg border border-sky-500/40 bg-slate-900/70 px-3 py-1.5 text-[11px] sm:text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/70"
                  >
                    <option value="all">All Positions</option>
                    {positions.map((job) => (
                      <option key={job.title} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2.5">
                {visiblePositions.map((job) => (
                  <div
                    key={job.title}
                    className="group rounded-2xl border border-sky-500/15 bg-slate-900/40 hover:bg-slate-900/70 transition-all duration-200 px-4 py-3 sm:px-5 sm:py-3.5 flex flex-col gap-2 sm:gap-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-semibold text-slate-50">
                        {job.title}
                      </h4>
                      <span className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.15em] text-sky-300">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs text-slate-300/80">
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} className="text-cyan-400" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={14} className="text-cyan-400" />
                        {job.experience} experience
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <p className="text-[11px] text-slate-400">
                        Click apply to pre-fill the form for this role and
                        submit your details.
                      </p>
                      
                    </div>
                  </div>
                ))}

                {visiblePositions.length === 0 && (
                  <p className="text-sm text-slate-400">
                    No positions found for the selected role.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="w-full">
            <div className="rounded-2xl border border-sky-500/25 bg-[#020d1f]/90 backdrop-blur-xl p-4 sm:p-5 lg:p-6 shadow-[0_14px_40px_rgba(0,0,0,0.85)] space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-slate-50">
                Job Application
              </h3>
              <p className="text-sm text-slate-300/85 leading-relaxed">
                Fill in your details to apply. Our HR team will review your
                application and contact you if there&apos;s a match.
              </p>

              <form
                className="space-y-3"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                {/* career (ForeignKey) */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="career"
                    className="text-xs font-medium text-slate-200"
                  >
                    Position (Career)
                  </label>
                  <select
                    id="career"
                    name="career"
                    value={formCareer}
                    onChange={(e) => setFormCareer(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/70"
                    required
                  >
                    <option value="">Select a role</option>
                    {positions.map((job) => (
                      <option key={job.title} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* name + email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-slate-200"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-slate-200"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* contact_no */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact_no"
                    className="text-xs font-medium text-slate-200"
                  >
                    Contact Number
                  </label>
                  <input
                    id="contact_no"
                    name="contact_no"
                    type="tel"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70"
                    placeholder="+91-XXXXXXXXXX"
                    required
                  />
                </div>

                {/* cover_letter */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="cover_letter"
                    className="text-xs font-medium text-slate-200"
                  >
                    Cover Letter
                  </label>
                  <textarea
                    id="cover_letter"
                    name="cover_letter"
                    rows={4}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70"
                    placeholder="Brief about your experience and key projects…"
                    required
                  />
                </div>

                {/* resume (FileField) */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="resume"
                    className="text-xs font-medium text-slate-200"
                  >
                    Resume (PDF / DOC)
                  </label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full text-[11px] text-slate-300 file:mr-3 file:rounded-md file:border-0 file:bg-sky-500/10 file:px-3 file:py-1.5 file:text-[11px] file:font-semibold file:uppercase file:tracking-[0.12em] file:text-sky-200 hover:file:bg-sky-500/20"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-4 py-2 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.15em] text-slate-950 shadow-md shadow-cyan-500/30 transition-all hover:scale-105 active:scale-95"
                >
                  Apply Now
                  <ArrowRight size={14} strokeWidth={3} />
                </button>

                <p className="mt-1.5 text-[11px] text-slate-400">
                  Alternatively, email your resume to{" "}
                  <span className="font-medium text-sky-300">
                    hr@risevo.in
                  </span>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;