// "use client";

// import React, { useEffect, useState } from "react";
// import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
// import { GetCareers, ApplyJob } from "../../services/Services";

// const CareersSection = () => {
//   const [positions, setPositions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filterJob, setFilterJob] = useState("all");
//   const [formCareer, setFormCareer] = useState(""); // career id
//   const [submitting, setSubmitting] = useState(false);

//   // fetch careers from API
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await GetCareers();
//       if (res) setPositions(res);
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const visiblePositions =
//     filterJob === "all"
//       ? positions
//       : positions.filter((job) => String(job.id) === String(filterJob));

//   const handleApplyClick = (careerId) => {
//     setFormCareer(careerId);
//     // scroll to form smoothly
//     document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     const formData = new FormData(e.target);
//     formData.append("career", formCareer); // ensure FK id goes

//     const res = await ApplyJob(formData);

//     if (res) {
//       alert("Application submitted successfully 🎉");
//       e.target.reset();
//       setFormCareer("");
//     } else {
//       alert("Something went wrong. Please try again.");
//     }

//     setSubmitting(false);
//   };

//   return (
//     <section className="relative overflow-hidden bg-[#020617] py-12 sm:py-16 lg:py-20">
//       <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

//         {/* ------------ JOB LIST ------------- */}
//         <div className="space-y-6 lg:space-y-7">
//           <div className="rounded-2xl border border-sky-500/25 bg-[#020d1f]/90 p-5">
//             <div className="flex justify-between mb-4">
//               <h3 className="text-lg font-semibold text-slate-50">
//                 CURRENT OPPORTUNITIES
//               </h3>

//               <select
//                 value={filterJob}
//                 onChange={(e) => setFilterJob(e.target.value)}
//                 className="rounded-lg border border-sky-500/40 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-100"
//               >
//                 <option value="all">All Positions</option>
//                 {positions.map((job) => (
//                   <option key={job.id} value={job.id}>
//                     {job.designation}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {loading ? (
//               <p className="text-slate-400 text-sm">Loading jobs…</p>
//             ) : visiblePositions.length === 0 ? (
//               <p className="text-slate-400 text-sm">No openings found.</p>
//             ) : (
//               <div className="space-y-2.5">
//                 {visiblePositions.map((job) => (
//                   <div
//                     key={job.id}
//                     className="rounded-xl border border-sky-500/20 bg-slate-900/50 p-4"
//                   >
//                     <div className="flex justify-between">
//                       <h4 className="text-slate-50 font-semibold">
//                         {job.designation}
//                       </h4>

//                       <button
//                         onClick={() => handleApplyClick(job.id)}
//                         className="text-[11px] flex items-center gap-1 px-3 py-1 rounded-md bg-sky-500/20 text-sky-200"
//                       >
//                         Apply
//                         <ArrowRight size={12} />
//                       </button>
//                     </div>

//                     <div className="flex gap-4 text-xs text-slate-300 mt-1">
//                       <span className="flex items-center gap-1">
//                         <MapPin size={14} />
//                         {job.location}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Clock size={14} />
//                         {job.experience}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* ------------- APPLY FORM --------------- */}
//           <div id="apply-form" className="rounded-2xl border border-sky-500/25 bg-[#020d1f]/90 p-5">
//             <h3 className="text-base font-semibold text-slate-50">
//               Job Application
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-3" encType="multipart/form-data">
//               {/* Position dropdown (career id) */}
//               <div>
//                 <label className="text-xs text-slate-200">Position</label>
//                 <select
//                   name="career"
//                   value={formCareer}
//                   onChange={(e) => setFormCareer(e.target.value)}
//                   required
//                   className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100"
//                 >
//                   <option value="">Select a role</option>
//                   {positions.map((job) => (
//                     <option key={job.id} value={job.id}>
//                       {job.designation}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Name */}
//               <input name="name" required placeholder="Full Name" className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100" />

//               {/* Email */}
//               <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100" />

//               {/* Contact */}
//               <input name="contact_no" required placeholder="Contact Number" className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100" />

//               {/* Cover Letter */}
//               <textarea name="cover_letter" rows={3} required className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100" />

//               {/* Resume */}
// {/* Resume Upload - Replace your current input */}
// <div>
//   <label className="text-xs text-slate-200 mb-1 block">Resume / CV</label>
//   <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-sky-500/40 rounded-xl bg-slate-900/60 cursor-pointer hover:border-sky-400 hover:bg-slate-800/60 transition-all duration-300">
//     <div className="flex flex-col items-center justify-center pt-5 pb-6">
//       <svg className="w-8 h-8 mb-2 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//       </svg>
//       <p className="text-sm text-slate-300">
//         <span className="text-sky-400 font-medium">Click to upload</span> or drag & drop
//       </p>
//       <p className="text-xs text-slate-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
//     </div>
//     <input 
//       name="resume" 
//       type="file" 
//       accept=".pdf,.doc,.docx" 
//       required 
//       className="hidden" 
//     />
//   </label>
// </div>
//               <button
//                 disabled={submitting}
//                 className="rounded-lg bg-sky-400 px-4 py-2 text-[11px] font-semibold text-slate-950"
//               >
//                 {submitting ? "Submitting…" : "Apply Now"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareersSection;
"use client";

import React, { useEffect, useState } from "react";
import { MapPin, Clock, ArrowRight, CheckCircle2, Upload } from "lucide-react";
import { GetCareers, ApplyJob } from "../../services/Services";

const CareersSection = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formCareer, setFormCareer] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const load = async () => {
      const res = await GetCareers();
      if (res) setPositions(res);
      setLoading(false);
    };
    load();
  }, []);

  const handleApplyClick = (careerId) => {
    setFormCareer(careerId);
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("career", formCareer);

    const res = await ApplyJob(formData);
    if (res) {
      setResumeFile(null);
      e.target.reset();
      setFormCareer("");
      alert("Application submitted 🎉");
    } else {
      alert("Something went wrong.");
    }

    setSubmitting(false);
  };

  return (
    <section className="relative bg-[#020617] py-14">
      <div className="mx-auto max-w-6xl px-4 space-y-10">

        {/* ================= JOB GRID ================= */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Current Openings
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            Select a role and apply in one click
          </p>

          {loading ? (
            <p className="text-slate-400 text-sm">Loading...</p>
          ) : positions.length === 0 ? (
            <p className="text-slate-400 text-sm">No openings right now.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {positions.map((job) => (
                <div
                  key={job.id}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 shadow-lg hover:shadow-cyan-500/10 hover:border-sky-400/30 transition"
                >
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {job.designation}
                  </h4>

                  <div className="text-xs text-slate-300 space-y-1 mb-3">
                    <p className="flex items-center gap-1">
                      <MapPin size={14} /> {job.location}
                    </p>
                    <p className="flex items-center gap-1">
                      <Clock size={14} /> {job.experience}
                    </p>
                  </div>

                  <button
                    onClick={() => handleApplyClick(job.id)}
                    className="w-full rounded-lg bg-sky-500/20 text-sky-200 border border-sky-500/40 px-3 py-1.5 text-[11px] flex items-center justify-center gap-1 hover:bg-sky-500/30 transition"
                  >
                    Apply Now <ArrowRight size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ================= FORM - COMPACT & BALANCED ================= */}
        <div
          id="apply-form"
          className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-1">
            Job Application
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            Fill your details & upload resume
          </p>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="space-y-4"
          >
            {/* Position */}
            <div>
              <label className="text-xs text-slate-300 mb-1 block">
                Position
              </label>
              <select
                name="career"
                value={formCareer}
                onChange={(e) => setFormCareer(e.target.value)}
                required
                className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white focus:ring-2 focus:ring-sky-500/50 outline-none"
              >
                <option value="">Select position</option>
                {positions.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.designation}
                  </option>
                ))}
              </select>
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                name="name"
                required
                placeholder="Full Name"
                className="rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white focus:ring-2 focus:ring-sky-500/50 outline-none"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white focus:ring-2 focus:ring-sky-500/50 outline-none"
              />
              <input
                name="contact_no"
                required
                placeholder="Contact Number"
                className="rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white focus:ring-2 focus:ring-sky-500/50 outline-none md:col-span-2"
              />
            </div>

            {/* Cover Letter */}
            <textarea
              name="cover_letter"
              rows={4}
              required
              placeholder="Short introduction / experience summary"
              className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white focus:ring-2 focus:ring-sky-500/50 outline-none"
            />

            {/* Resume Upload */}
            <div>
              <label className="text-xs text-slate-300 mb-1 block">
                Resume / CV
              </label>

              <label
                className={`flex flex-col items-center justify-center w-full h-28 border-2 border-dashed rounded-xl transition
                  ${
                    resumeFile
                      ? "border-emerald-400/60 bg-emerald-500/5"
                      : "border-sky-400/40 bg-black/40 hover:bg-black/60"
                  }
                `}
              >
                {!resumeFile ? (
                  <>
                    <Upload className="w-6 h-6 text-sky-400 mb-1" />
                    <p className="text-sm text-slate-300">
                      Click to upload or drag & drop
                    </p>
                    <p className="text-xs text-slate-500">
                      PDF / DOC / DOCX (Max 5MB)
                    </p>
                  </>
                ) : (
                  <div className="flex items-center gap-2 text-emerald-300 font-medium">
                    <CheckCircle2 className="w-5 h-5" />
                    {resumeFile.name}
                  </div>
                )}

                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden"
                  onChange={(e) => setResumeFile(e.target.files[0])}
                />
              </label>
            </div>

            <button
              disabled={submitting}
              className="w-full rounded-lg bg-gradient-to-r from-sky-400 to-cyan-300 px-5 py-2.5 text-[12px] font-semibold text-slate-900 shadow hover:scale-[1.01] active:scale-95 transition disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
