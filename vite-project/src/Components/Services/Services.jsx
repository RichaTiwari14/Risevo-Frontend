// src/Components/Service/Services3D.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaBuilding, FaRoad, FaTools } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    title: "RESIDENTIAL CONSTRUCTION",
    highlight: "Residential",
    description:
      "Custom homes, villas, apartments, and housing developments built to the highest standards of quality and comfort.",
    icon: FaHome,
    cta: "View Residential Work",
  },
  {
    title: "COMMERCIAL CONSTRUCTION",
    highlight: "Commercial",
    description:
      "Office buildings, retail spaces, and commercial complexes designed for modern business needs and efficiency.",
    icon: FaBuilding,
    cta: "View Commercial Work",
  },
  {
    title: "INFRASTRUCTURE DEVELOPMENT",
    highlight: "Infrastructure",
    description:
      "Roads, drainage systems, utilities, and municipal projects that strengthen community foundations.",
    icon: FaRoad,
    cta: "Explore Infrastructure",
  },
  {
    title: "TURNKEY SOLUTIONS",
    highlight: "Turnkey",
    description:
      "Complete project management from concept to completion with finishing and maintenance support.",
    icon: FaTools,
    cta: "Discover Turnkey Model",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -20, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

const linksByHighlight = {
  Residential: "/residential",
  Commercial: "/commercial",
  Infrastructure: "/infra",
  Turnkey: "/turnkey",
};

// Simple, clean CTA button
const CTAButton = ({ href, label }) => (
  <motion.a
    href={href}
    whileHover={{ x: 2 }}
    className="
      mt-5 inline-flex items-center justify-center gap-2
      rounded-full border border-slate-300 bg-white
      px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em]
      text-slate-800 shadow-sm shadow-slate-300/60
      transition-colors duration-200
      hover:bg-slate-900 hover:text-white hover:border-slate-900
    "
  >
    <span>{label}</span>
    <FiArrowRight className="h-3.5 w-3.5" />
  </motion.a>
);

const Services3D = () => {
  return (
    <section
      id="service"
      className="
        relative overflow-hidden
        bg-[#f3f6fb]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* Textured background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-sky-100/80 blur-3xl" />
        <div className="absolute top-1/2 -right-28 h-80 w-80 -translate-y-1/2 rounded-full bg-amber-100/80 blur-3xl" />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,_rgba(148,163,184,0.18)_1px,transparent_0)]
            bg-[length:22px_22px]
            opacity-55 mix-blend-multiply
          "
        />
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(135deg,rgba(148,163,184,0.14)_1px,transparent_0)]
            bg-[length:26px_26px]
            opacity-30 mix-blend-soft-light
          "
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="inline-flex items-center justify-center rounded-full border border-sky-200/70 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-800 shadow-sm">
            CORE SERVICES
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            EXPERTISE FOR EVERY{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-700 to-amber-500">
              CONSTRUCTION STAGE
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Risevo delivers end‑to‑end solutions from individual homes to
            large‑scale infrastructure, with a strong focus on{" "}
            <span className="font-semibold text-[#F5C041]">
              QUALITY, SAFETY
            </span>{" "}
            AND ON‑TIME DELIVERY.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            relative mt-12 sm:mt-16
            grid gap-7 md:grid-cols-2
            [perspective:1400px]
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            const meta = [
              {
                border: "border-sky-100/80",
                accent: "from-sky-400 via-sky-500 to-amber-300",
                blob1: "bg-sky-300/35",
                blob2: "bg-amber-300/30",
                tagBg: "bg-sky-50/90",
                tagText: "text-sky-800",
                iconBg: "bg-sky-50",
                iconBorder: "border-sky-200/80",
                iconColor: "text-sky-700",
              },
              {
                border: "border-amber-100/80",
                accent: "from-amber-400 via-amber-500 to-sky-400",
                blob1: "bg-amber-300/35",
                blob2: "bg-sky-300/25",
                tagBg: "bg-amber-50/90",
                tagText: "text-amber-800",
                iconBg: "bg-amber-50",
                iconBorder: "border-amber-200/80",
                iconColor: "text-amber-700",
              },
              {
                border: "border-slate-200/80",
                accent: "from-slate-500 via-sky-500 to-amber-400",
                blob1: "bg-slate-300/35",
                blob2: "bg-sky-300/25",
                tagBg: "bg-slate-50/90",
                tagText: "text-slate-800",
                iconBg: "bg-slate-50",
                iconBorder: "border-slate-200/80",
                iconColor: "text-slate-700",
              },
              {
                border: "border-sky-100/80",
                accent: "from-sky-500 via-amber-400 to-sky-700",
                blob1: "bg-sky-300/35",
                blob2: "bg-amber-300/30",
                tagBg: "bg-sky-50/90",
                tagText: "text-sky-800",
                iconBg: "bg-sky-50",
                iconBorder: "border-sky-200/80",
                iconColor: "text-sky-700",
              },
            ][index];

            const href = linksByHighlight[service.highlight] || "#";

            return (
              <motion.article
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{
                  y: -10,
                  rotateX: 3,
                  scale: 1.02,
                  boxShadow: "0 32px 100px rgba(15, 23, 42, 0.32)",
                }}
                className={`
                  relative group overflow-hidden
                  rounded-xl
                  border bg-gradient-to-b
                  from-white via-slate-50/80 to-slate-100/60
                  shadow-[0_22px_70px_rgba(15,23,42,0.24)]
                  p-5 sm:p-6
                  transform-gpu
                  transition-transform duration-300
                  ${meta.border}
                `}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Left accent bar */}
                <div
                  className={`
                    pointer-events-none
                    absolute inset-y-4 left-0 w-[3px]
                    rounded-r-full bg-gradient-to-b ${meta.accent}
                  `}
                />

                {/* Background glows */}
                <div className="pointer-events-none absolute inset-0 opacity-90">
                  <div
                    className={`
                      absolute -right-10 -top-10 h-32 w-32
                      rounded-full blur-3xl ${meta.blob1}
                    `}
                  />
                  <div
                    className={`
                      absolute -bottom-16 left-6 h-32 w-32
                      rounded-full blur-3xl ${meta.blob2}
                    `}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center text-center">
                  {/* Icon with effect */}
                  <div className="relative inline-flex items-center justify-center mt-1">
                    <div
                      className={`
                        absolute h-12 w-12 rounded-full
                        ${meta.blob1}
                        blur-xl opacity-60
                        transition-opacity duration-300
                        group-hover:opacity-90
                      `}
                    />
                    <div
                      className={`
                        relative flex h-12 w-12 items-center justify-center
                        rounded-2xl border
                        ${meta.iconBg} ${meta.iconBorder}
                        transition-transform duration-300
                        group-hover:scale-110 group-hover:-translate-y-1
                      `}
                    >
                      <Icon
                        className={`
                          h-6 w-6 ${meta.iconColor}
                          transition-transform duration-300
                          group-hover:rotate-3
                        `}
                      />
                    </div>
                  </div>

                  {/* Tag + Title */}
                  <p
                    className={`
                      mt-3 inline-flex items-center
                      rounded-full px-3 py-0.5
                      text-[10px] font-semibold uppercase
                      tracking-[0.16em] border border-white/60
                      shadow-sm shadow-slate-900/5
                      ${meta.tagBg} ${meta.tagText}
                    `}
                  >
                    {service.highlight}
                  </p>
                  <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <CTAButton href={href} label={service.cta} />
                </div>

                {/* Big background icon outline */}
                <Icon
                  className="
                    pointer-events-none absolute -right-4 -bottom-4
                    h-20 w-20 text-slate-200/45
                    transition-colors duration-500
                    group-hover:text-sky-200/60
                  "
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services3D;