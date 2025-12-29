// src/Components/Equipment/ConstructionHighlights.jsx
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  FaCogs,
  FaProjectDiagram,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

const cards = [
  {
    id: "equipment",
    badge: "EQUIPMENT & TECHNICAL STRENGTH",
    title: "Strong Machinery, Stronger Team",
    desc: "Powered by modern construction machinery, skilled engineers and an experienced workforce, Risevo delivers projects with precision, reliability and consistent site performance.",
    icon: FaCogs,
    href: "/equipment",
    cta: "Explore Equipment & Team",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-200/50",
  },
  {
    id: "specialized",
    badge: "OUR SPECIALIZED AREAS",
    title: "End‑to‑End Construction Solutions",
    desc: "Specialized in road, drainage, sewer, storm line, water supply, paver work, RCC structures and complete garden & landscape development – from planning to final finishing.",
    icon: FaProjectDiagram,
    href: "/specialized",
    cta: "View Specialized Works",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-200/50",
  },
  {
    id: "quality-safety",
    badge: "QUALITY & SAFETY STANDARDS",
    title: "Built With Trust & Discipline",
    desc: "Defined procedures for quality checks, material approvals and on‑site safety ensure that every project meets technical specifications and protects workers and end‑users.",
    icon: FaShieldAlt,
    href: "/quality",
    cta: "Learn Our Standards",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-200/50",
  },

  {
    id: "core-services",
    badge: "CORE SERVICE • SURVEY & TESTING",
    title: "Land Survey, Quality Check & Core Cutting",
    desc: "Dedicated team for land survey, independent quality checking agency, RCC core cutting and repairing work – with detailed site photos and technical reports for full transparency.",
    icon: FaTools,
    href: "/land",
    cta: "View Core Services ",
    gradient: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-200/50",
  },
];

const ConstructionHighlights = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 py-20 sm:py-24">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-amber-100/30 blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 rounded-full bg-slate-200/20 blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center rounded-full border border-blue-300/50 bg-white px-4 py-1.5 mb-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-700">
              CORE CAPABILITIES
            </span>
          </div>
          
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            EQUIPMENT, EXPERTISE <span className="text-blue-600">&amp; ASSURANCE</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Risevo integrates strong site resources, specialised execution and disciplined quality practices to deliver end‑to‑end construction solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === card.id;

            return (
              <article
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  relative flex flex-col h-full
                  rounded-2xl overflow-hidden
                  border ${card.borderColor}
                  bg-white backdrop-blur-sm
                  shadow-lg shadow-slate-200/50
                  p-6 sm:p-7
                  transition-all duration-300 ease-out
                  hover:shadow-xl hover:shadow-slate-300/60
                  ${isHovered ? '-translate-y-2' : ''}
                  group
                `}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon + Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`
                      flex h-12 w-12 items-center justify-center 
                      rounded-xl border transition-all duration-300
                      ${isHovered ? 'scale-110 shadow-lg' : 'shadow-md'}
                      bg-gradient-to-br ${card.gradient}
                    `}>
                      <Icon className="h-6 w-6 text-slate-700" />
                    </div>
                  </div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
                    {card.badge}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-slate-600 leading-relaxed flex-1 mb-5">
                    {card.desc}
                  </p>

                  {/* CTA Button */}
                  <a
                    href={card.href}
                    className={`
                      inline-flex items-center justify-center gap-2
                      rounded-lg border border-slate-300
                      px-4 py-2.5 text-[11px] font-bold
                      uppercase tracking-[0.16em]
                      bg-white text-slate-800
                      shadow-md shadow-slate-200/40
                      transition-all duration-300
                      hover:bg-slate-900 hover:text-white
                      hover:border-slate-900 hover:shadow-lg
                      hover:shadow-slate-900/20
                      group/btn
                    `}
                  >
                    <span>{card.cta}</span>
                    <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-full duration-500" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConstructionHighlights;