// src/Components/Equipment/ConstructionHighlights.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaCogs, FaProjectDiagram, FaShieldAlt } from "react-icons/fa";

const cards = [
  {
    id: "equipment",
    badge: "EQUIPMENT & TECHNICAL STRENGTH",
    title: "Strong Machinery, Stronger Team",
    desc: "Powered by modern construction machinery, skilled engineers and an experienced workforce, Risevo delivers projects with precision, reliability and consistent site performance.",
    icon: FaCogs,
    href: "/equipment", // yaha tum Equipment page ka route use karo
    cta: "Explore Equipment & Team",
  },
  {
    id: "specialized",
    badge: "OUR SPECIALIZED AREAS",
    title: "End‑to‑End Construction Solutions",
    desc: "Specialized in road, drainage, sewer, storm line, water supply, paver work, RCC structures and complete garden & landscape development – from planning to final finishing.",
    icon: FaProjectDiagram,
    href: "/specialized", // yaha tum apna Infrastructure / Projects page use kar sakte ho
    cta: "View Specialized Works",
  },
  {
    id: "quality-safety",
    badge: "QUALITY & SAFETY STANDARDS",
    title: "Built With Trust & Discipline",
    desc: "Defined procedures for quality checks, material approvals and on‑site safety ensure that every project meets technical specifications and protects workers and end‑users.",
    icon: FaShieldAlt,
    href: "/quality", // agar tum quality-safety ka page banao
    cta: "Learn Our Standards",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 * i },
  }),
};

const ConstructionHighlights = () => {
  return (
    <section className="relative bg-[#F5F7FB] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-80px] h-64 w-64 rounded-full bg-amber-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Optional overall heading */}
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

        {/* 3 cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6 }}
                className="
                  flex h-full flex-col
                  rounded-2xl bg-white/95 border border-slate-100
                  shadow-[0_16px_50px_rgba(15,23,42,0.15)]
                  p-5 sm:p-6
                  transition-transform duration-200
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

                {/* CTA */}
                <motion.a
                  href={card.href}
                  whileHover={{ x: 2 }}
                  className="
                    mt-4 inline-flex items-center justify-center gap-2
                    rounded-full border border-slate-300 bg-white
                    px-4 py-2 text-[10px] sm:text-[11px]
                    font-semibold uppercase tracking-[0.16em]
                    text-slate-800 shadow-sm shadow-slate-200
                    hover:bg-slate-900 hover:text-white hover:border-slate-900
                    transition-colors duration-200
                  "
                >
                  <span>{card.cta}</span>
                  <FiArrowRight className="h-3.5 w-3.5" />
                </motion.a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConstructionHighlights;