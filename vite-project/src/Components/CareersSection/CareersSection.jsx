"use client";

import React, { useEffect, useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { GetCareers, ApplyJob } from "../../services/Services";

const CareersSection = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterJob, setFilterJob] = useState("all");
  const [formCareer, setFormCareer] = useState(""); // career id
  const [submitting, setSubmitting] = useState(false);

  // fetch careers from API
  useEffect(() => {
    const fetchData = async () => {
      const res = await GetCareers();
      if (res) setPositions(res);
      setLoading(false);
    };
    fetchData();
  }, []);

  const visiblePositions =
    filterJob === "all"
      ? positions
      : positions.filter((job) => String(job.id) === String(filterJob));

  const handleApplyClick = (careerId) => {
    setFormCareer(careerId);
    // scroll to form smoothly
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("career", formCareer); // ensure FK id goes

    const res = await ApplyJob(formData);

    if (res) {
      alert("Application submitted successfully 🎉");
      e.target.reset();
      setFormCareer("");
    } else {
      alert("Something went wrong. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <section className="relative overflow-hidden bg-[#020617] py-12 sm:py-16 lg:py-20">
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

        {/* ------------ JOB LIST ------------- */}
        <div className="space-y-6 lg:space-y-7">
          <div className="rounded-2xl border border-sky-500/25 bg-[#020d1f]/90 p-5">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-50">
                CURRENT OPPORTUNITIES
              </h3>

              <select
                value={filterJob}
                onChange={(e) => setFilterJob(e.target.value)}
                className="rounded-lg border border-sky-500/40 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-100"
              >
                <option value="all">All Positions</option>
                {positions.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.designation}
                  </option>
                ))}
              </select>
            </div>

            {loading ? (
              <p className="text-slate-400 text-sm">Loading jobs…</p>
            ) : visiblePositions.length === 0 ? (
              <p className="text-slate-400 text-sm">No openings found.</p>
            ) : (
              <div className="space-y-2.5">
                {visiblePositions.map((job) => (
                  <div
                    key={job.id}
                    className="rounded-xl border border-sky-500/20 bg-slate-900/50 p-4"
                  >
                    <div className="flex justify-between">
                      <h4 className="text-slate-50 font-semibold">
                        {job.designation}
                      </h4>

                      <button
                        onClick={() => handleApplyClick(job.id)}
                        className="text-[11px] flex items-center gap-1 px-3 py-1 rounded-md bg-sky-500/20 text-sky-200"
                      >
                        Apply
                        <ArrowRight size={12} />
                      </button>
                    </div>

                    <div className="flex gap-4 text-xs text-slate-300 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ------------- APPLY FORM --------------- */}
          <div id="apply-form" className="rounded-2xl border border-sky-500/25 bg-[#020d1f]/90 p-5">
            <h3 className="text-base font-semibold text-slate-50">
              Job Application
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3" encType="multipart/form-data">
              {/* Position dropdown (career id) */}
              <div>
                <label className="text-xs text-slate-200">Position</label>
                <select
                  name="career"
                  value={formCareer}
                  onChange={(e) => setFormCareer(e.target.value)}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100"
                >
                  <option value="">Select a role</option>
                  {positions.map((job) => (
                    <option key={job.id} value={job.id}>
                      {job.designation}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <input name="name" required placeholder="Full Name" className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100" />

              {/* Email */}
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100" />

              {/* Contact */}
              <input name="contact_no" required placeholder="Contact Number" className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100" />

              {/* Cover Letter */}
              <textarea name="cover_letter" rows={3} required className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100" />

              {/* Resume */}
              <input name="resume" type="file" accept=".pdf,.doc,.docx" required />

              <button
                disabled={submitting}
                className="rounded-lg bg-sky-400 px-4 py-2 text-[11px] font-semibold text-slate-950"
              >
                {submitting ? "Submitting…" : "Apply Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
