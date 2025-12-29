// src/pages/land.jsx
import React from "react";
import {
  FaDraftingCompass,
  FaClipboardCheck,
  FaDotCircle,
  FaTools,
} from "react-icons/fa";
import { FiCheckCircle, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import img from "../../images/1.jpeg";
import img2 from "../../images/3.jpeg";
import img3 from "../../images/4.jpeg";

const coreServices = [
  {
    id: "land-survey",
    icon: FaDraftingCompass,
    title: "Land Survey & Site Leveling",
    desc:
      "An accurate land survey is the most critical step before construction. It gives complete clarity for plotting, boundaries, roads and drainage planning.",
    points: [
      "Total station / GPS-based land measurement & mapping",
      "Boundary, corner & plot demarcation with permanent reference points",
      "Topographical survey, contour & level planning for site",
      "Road, drainage & plot layout planning inputs for engineers",
    ],
    borderColor: "border-blue-300/40",
    iconBg: "bg-blue-100 text-blue-700 border-blue-200",
  },
  {
    id: "quality-checking",
    icon: FaClipboardCheck,
    title: "Independent Quality Checking Agency",
    desc:
      "Independent third‑party quality checks give you confidence that both materials and workmanship comply with the required standards, without any compromise.",
    points: [
      "Cement, steel, bricks, sand & concrete quality verification on-site",
      "Shuttering, reinforcement placement & cover block checking",
      "Concrete mix, slump & cube testing coordination",
      "Stage-wise inspection: footing, slab, brickwork, plaster, finishing",
    ],
    borderColor: "border-purple-300/40",
    iconBg: "bg-purple-100 text-purple-700 border-purple-200",
  },
  {
    id: "core-cutting",
    icon: FaDotCircle,
    title: "RCC Core Cutting & Service Openings",
    desc:
      "For openings in RCC required for plumbing, fire‑fighting, electrical services or testing, controlled core cutting is essential to ensure structural safety.",
    points: [
      "Diamond core cutting with minimum vibration & neat finish",
      "Openings in slabs, beams & walls for pipes, cables & ducts",
      "Core sample extraction for compressive strength testing",
      "Work area safety, barricading & clean handover after cutting",
    ],
    borderColor: "border-green-300/40",
    iconBg: "bg-green-100 text-green-700 border-green-200",
  },
  {
    id: "repairing-work",
    icon: FaTools,
    title: "Structural & Finishing Repair Works",
    desc:
      "Whether it is an old building or a new structure with issues, we provide complete repair solutions from structural rehabilitation to finishing improvements.",
    points: [
      "Structural crack treatment, jacketing & micro-concreting",
      "Terrace, toilet & basement waterproofing systems",
      "Plaster, POP, putty & paint rectification (internal & external)",
      "Leakage source identification, rectification & monitoring",
    ],
    borderColor: "border-amber-300/40",
    iconBg: "bg-amber-100 text-amber-700 border-amber-200",
  },
];

const Land = () => {
  // Sirf bottom CTA ke liye smooth scroll
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#contact";
    }
  };

  return (
    <main className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <section id="land-survey" className="mb-10">
          {/* Back to Home - left side */}
          <div className="mb-3">
            <a
              href="/"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              <FiArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </a>
          </div>

          <div className="grid gap-6 md:gap-10 md:grid-cols-2 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center rounded-full border border-slate-300/60 bg-slate-50 px-4 py-1.5 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700">
                  CORE TECHNICAL SERVICES
                </span>
              </div>

              {/* HERO HEADING - CAPS + BLUE MIX COLOR + kam spacing */}
              <h1
                className="
    text-2xl sm:text-3xl md:text-4xl
    font-extrabold
    leading-snug mb-2
    uppercase
    text-transparent
    bg-clip-text
    bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600
  "
              >
                Land Survey, Quality Audits, Core Cutting &amp; Repair Works
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-4">
                Risevo provides integrated technical services that support your
                project from the very first layout marking to long‑term
                performance. Our team combines precise land survey, independent
                quality checking, controlled RCC core cutting and specialised
                repair works – all backed by clear documentation, site
                photographs and transparent reporting.
              </p>

              {/* Info Cards – neutral colours */}
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                  <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-wide mb-0.5">
                    Scope
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">
                    Land survey, quality checks, core cutting &amp; repairs
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                  <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-wide mb-0.5">
                    Documentation
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">
                    Site photos, checklists &amp; concise technical notes
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                  <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-wide mb-0.5">
                    Suitable For
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">
                    Plot developments, residential, commercial &amp; infra
                    projects
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Images */}
            <div className="grid gap-3 grid-cols-2 h-fit">
              {/* Large image */}
              <div className="col-span-2 rounded-2xl overflow-hidden h-52 sm:h-60 shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={img}
                  alt="Risevo technical services"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Two small images */}
              <div className="rounded-xl overflow-hidden h-28 sm:h-32 shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={img2}
                  alt="On-site quality checking"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-28 sm:h-32 shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={img3}
                  alt="Repairing & finishing work"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section id="services-list" className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            OUR CORE SERVICES
          </h2>

          <div className="space-y-4">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className={`
                    rounded-2xl bg-white border ${service.borderColor}
                    shadow-md hover:shadow-lg transition-all duration-300
                    overflow-hidden
                  `}
                >
                  <div className="relative p-5 sm:p-6">
                    {/* Header with Icon */}
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`
                          flex h-12 w-12 items-center justify-center rounded-xl
                          ${service.iconBg} border
                          flex-shrink-0 shadow-md
                        `}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-[13px] sm:text-[14px] text-slate-600">
                          {service.desc}
                        </p>
                      </div>
                    </div>

                    {/* Points List */}
                    <ul className="space-y-2 text-[13px] sm:text-[14px] text-slate-700">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex gap-2.5">
                          <FiCheckCircle className="mt-0.5 h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {/* CTA yahan se hata diya (sirf bottom CTA rahega) */}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

      
      </div>
    </main>
  );
};

export default Land;