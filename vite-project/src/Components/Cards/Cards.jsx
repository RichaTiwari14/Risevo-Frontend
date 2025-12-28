// src/Components/Equipment/ConstructionHighlights.jsx
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaCogs, FaProjectDiagram, FaShieldAlt } from "react-icons/fa";

const cards = [
  {
    id: "equipment",
    badge: "EQUIPMENT & TECHNICAL STRENGTH",
    title: "Strong Machinery, Stronger Team",
    desc: "Powered by modern construction machinery, skilled engineers and an experienced workforce, Risevo delivers projects with precision, reliability and consistent site performance.",
    icon: FaCogs,
    href: "/equipment",
    cta: "Explore Equipment & Team",
  },
  {
    id: "specialized",
    badge: "OUR SPECIALIZED AREAS",
    title: "End‑to‑End Construction Solutions",
    desc: "Specialized in road, drainage, sewer, storm line, water supply, paver work, RCC structures and complete garden & landscape development – from planning to final finishing.",
    icon: FaProjectDiagram,
    href: "/specialized",
    cta: "View Specialized Works",
  },
  {
    id: "quality-safety",
    badge: "QUALITY & SAFETY STANDARDS",
    title: "Built With Trust & Discipline",
    desc: "Defined procedures for quality checks, material approvals and on‑site safety ensure that every project meets technical specifications and protects workers and end‑users.",
    icon: FaShieldAlt,
    href: "/quality",
    cta: "Learn Our Standards",
  },
];

const ConstructionHighlights = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FB] py-16 sm:py-20">
      {/* Simple fade-up animation (CSS only) */}
      <style>{`
        @keyframes chFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-80px] h-64 w-64 rounded-full bg-amber-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="inline-flex items-center justify-center rounded-full border border-sky-200/70 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-900">
            CORE CAPABILITIES
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            EQUIPMENT, EXPERTISE &amp; ASSURANCE
          </h2>
          <p className="mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
            Risevo integrates strong site resources, specialised execution and
            disciplined quality practices to deliver end‑to‑end construction
            solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.id}
                style={{
                  animation: `chFadeUp 0.6s ease-out ${0.1 * index}s both`,
                }}
                className="
                  flex h-full flex-col
                  rounded-2xl bg-white/95 border border-slate-100
                  shadow-[0_16px_50px_rgba(15,23,42,0.15)]
                  p-5 sm:p-6
                  transition-all duration-200
                  hover:-translate-y-1.5 hover:shadow-[0_22px_60px_rgba(15,23,42,0.22)]
                "
              >
                {/* Icon + badge */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 border border-sky-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {card.badge}
                  </p>
                </div>

                <h3 className="mt-3 text-sm sm:text-base font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-[12px] sm:text-[13px] text-slate-600 leading-relaxed flex-1">
                  {card.desc}
                </p>

                {/* CTA – gap/letter-spacing thoda normal kar diya */}
                <a
                  href={card.href}
                  className="
                    mt-4 inline-flex items-center justify-center gap-2
                    rounded-full border border-slate-300 bg-white
                    px-4 py-2 text-[10px] sm:text-[11px]
                    font-semibold uppercase tracking-[0.14em]
                    text-slate-800 shadow-sm shadow-slate-200
                    transition-all duration-200
                    hover:bg-slate-900 hover:text-white hover:border-slate-900
                    hover:translate-x-[2px]
                  "
                >
                  <span>{card.cta}</span>
                  <FiArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConstructionHighlights;