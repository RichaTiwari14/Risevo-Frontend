import React from "react";
import {
    Briefcase,
    MapPin,
    Clock,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

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

const perks = [
    "Work on high-impact residential, commercial and infrastructure projects",
    "Clear growth pathways with responsibility-based progression",
    "Direct mentorship from experienced project leaders",
    "Performance-linked rewards and recognition",
];

const CareersSection = () => {
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
                {/* Top heading + intro */}
                <div className="max-w-3xl space-y-3 mb-7 sm:mb-8">
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

                    {/* Small pills for focus areas */}
                    <div className="mt-2 flex flex-wrap gap-2 text-[11px] sm:text-xs">
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

                {/* Main content: two cards */}
                <div className="flex flex-col gap-6 lg:gap-7 lg:flex-row">
                    {/* Left: About working at Risevo */}
                    <div className="w-full lg:w-5/12">
                        <div className="rounded-2xl border border-sky-500/25 bg-[#020d1f]/90 backdrop-blur-xl p-4 sm:p-5 lg:p-6 shadow-[0_14px_40px_rgba(0,0,0,0.85)] space-y-4">
                            <h3 className="text-base sm:text-lg font-semibold text-slate-50">
                                Working with Risevo
                            </h3>
                            <p className="text-sm text-slate-300/85 leading-relaxed">
                                We look for professionals who combine technical competence with
                                ownership, integrity and attention to detail. If you are
                                comfortable taking responsibility for outcomes and collaborating
                                across disciplines, you will fit well into our culture.
                            </p>

                            <div className="space-y-2.5">
                                {perks.map((perk) => (
                                    <div key={perk} className="flex items-start gap-2.5">
                                        <CheckCircle2 className="mt-[2px] h-4 w-4 text-cyan-400 flex-shrink-0" />
                                        <p className="text-sm text-slate-200/90">{perk}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-2.5">
                                <a
                                    href="mailto:hr@risevo.in?subject=Career%20Application"
                                    className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] leading-none text-slate-950 shadow-md shadow-cyan-500/30 transition-all hover:scale-105 active:scale-95"
                                >
                                    Submit your resume
                                    <ArrowRight size={12} strokeWidth={3} />
                                </a><p className="mt-2 text-[11px] text-slate-400">
                                    Please share a concise summary of your key project experience
                                    along with your CV.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Open Positions */}
                    <div className="w-full lg:w-7/12">
                        <div className="rounded-2xl border border-sky-500/25 bg-[#020d1f]/90 backdrop-blur-xl p-4 sm:p-5 lg:p-6 shadow-[0_14px_40px_rgba(0,0,0,0.85)]">
                            <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
                                        CURRENT OPPORTUNITIES
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-400">
                                        Explore openings across engineering, site management and
                                        design.
                                    </p>
                                </div>
                                <div className="hidden sm:flex items-center gap-2 rounded-full border border-sky-500/40 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-sky-300 bg-sky-500/6">
                                    <Briefcase size={14} />
                                    <span>Now Hiring</span>
                                </div>
                            </div>

                            <div className="space-y-2.5">
                                {positions.map((job) => (
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
                                                Applications should include relevant project details,
                                                responsibilities handled and team size.
                                            </p>
                                            <button className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-300 hover:text-sky-200">
                                                Apply now
                                                <ArrowRight
                                                    size={14}
                                                    className="transition-transform group-hover:translate-x-0.5"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                {/* If no positions – keep for later if needed */}
                                {/* <p className="text-sm text-slate-400">
                  We currently do not have open positions. You may still share
                  your profile at{" "}
                  <span className="text-sky-300 font-medium">
                    hr@risevo.in
                  </span>{" "}
                  for future consideration.
                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareersSection;