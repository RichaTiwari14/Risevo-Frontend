// src/Components/Residential/Residential.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiHome, FiGrid, FiLayers, FiArrowLeft } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

// Reusable 3D Card component
const Card3D = ({
  icon: Icon,
  accentColor,
  bgAccent,
  borderColor,
  stripGradient,
  label,
  title,
  description,
  bullets,
}) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 14;
    const rotateY = (x - 0.5) * 16;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative transform-gpu"
      style={{ perspective: "1200px" }}
    >
      {/* soft glow behind card */}
      <div
        className={`
          pointer-events-none absolute inset-x-6 -top-3 h-28
          rounded-[2rem] blur-2xl opacity-70
          ${bgAccent}
        `}
      />

      <motion.article
        className={`
          relative rounded-3xl bg-white/98
          border ${borderColor}
          shadow-[0_28px_90px_rgba(15,23,42,0.15)]
          p-5 sm:p-6 lg:p-7 transform-gpu
          transition-transform duration-300
        `}
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(18px)`,
        }}
      >
        {/* top strip */}
        <div
          className={`
            absolute inset-x-10 -top-px h-1 rounded-full
            bg-gradient-to-r ${stripGradient}
          `}
        />

        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div
            className={`
              rounded-2xl p-2.5 border shrink-0 sm:mt-1
              flex items-center justify-center
              ${bgAccent} ${borderColor}
            `}
          >
            <Icon className="h-5 w-5" style={{ color: accentColor }} />
          </div>

          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: accentColor }}
            >
              {label}
            </p>
            <h3 className="mt-1 text-sm sm:text-base md:text-lg font-semibold text-slate-900">
              {title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {description}
            </p>
            {bullets && bullets.length > 0 && (
              <ul className="mt-3 space-y-1.5 text-[11px] sm:text-xs text-slate-700">
                {bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </motion.article>

      {/* floor shadow */}
      <div className="pointer-events-none mx-auto mt-3 h-5 w-4/5 rounded-full bg-slate-400/40 blur-xl opacity-90" />
    </div>
  );
};

const Residential = () => {
  const processSteps = [
    {
      step: "01",
      title: "Concept & Feasibility",
      accent: "from-sky-400 to-sky-600",
      text: "We begin with site review, requirement definition, preliminary layout options and a realistic budget range so that expectations are aligned before design and execution start.",
    },
    {
      step: "02",
      title: "Technical Drawings",
      accent: "from-emerald-400 to-emerald-600",
      text: "Architectural, structural and MEP drawings are coordinated as one set, reducing clashes on site and avoiding rework once construction has begun.",
    },
    {
      step: "03",
      title: "On‑Site Execution",
      accent: "from-amber-400 to-amber-600",
      text: "From excavation and foundations through slabs, masonry, services and finishes, every major stage is monitored and recorded with quality checks and progress updates.",
    },
    {
      step: "04",
      title: "Finishing & Handover",
      accent: "from-indigo-400 to-indigo-600",
      text: "Snag lists are closed, cleaning and final detailing are completed, and documentation is handed over in an organized way to ensure a smooth move‑in experience.",
    },
  ];

  return (
    <section
      id="residential"
      className="
        relative overflow-hidden
        bg-[#f7fafc]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* Textured + animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* animated glows */}
        <motion.div
          className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-sky-200/75 blur-3xl"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 -right-24 h-80 w-80 -translate-y-1/2 rounded-full bg-amber-200/75 blur-3xl"
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* dot grid */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,_rgba(148,163,184,0.18)_1px,transparent_0)]
            bg-[length:22px_22px]
            opacity-45 mix-blend-multiply
          "
        />
        {/* diagonal lines */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(135deg,rgba(148,163,184,0.12)_1px,transparent_0)]
            bg-[length:30px_30px]
            opacity-30 mix-blend-soft-light
          "
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Back to Home button */}
        <div className="mb-6 flex items-center justify-between">
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -24, y: -8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              group inline-flex items-center gap-2
              rounded-full border border-slate-200
              bg-white/80 px-3.5 py-1.5
              text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em]
              text-slate-700 shadow-sm shadow-slate-300/60 backdrop-blur-sm
              hover:border-slate-300
            "
          >
            <span
              className="
                flex h-6 w-6 items-center justify-center
                rounded-full bg-slate-900 text-white
                transition-transform duration-300
                group-hover:-translate-x-0.5
              "
            >
              <FiArrowLeft className="h-3.5 w-3.5" />
            </span>
            <span>Back to Home</span>
          </motion.a>
        </div>

        {/* Heading */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <p className="inline-flex items-center justify-center rounded-full border border-sky-200/80 bg-white/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-800 shadow-sm">
            RESIDENTIAL CONSTRUCTION
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            PREMIUM HOMES, VILLAS &amp; APARTMENTS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-700 to-amber-500">
              BUILT TO LAST
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-[17px] text-slate-600 leading-relaxed">
            We design and deliver residential projects that balance structure,
            planning and finishes – creating homes that feel considered and
            comfortable from day one, and remain robust for years to come.
          </p>
        </motion.div>

        {/* MAIN 3D CARDS (stacked) */}
        <div className="mt-12 space-y-7 sm:space-y-8">
          <Card3D
            icon={FiHome}
            accentColor="#0f5fa8"
            bgAccent="bg-sky-50"
            borderColor="border-sky-200"
            stripGradient="from-sky-400 via-sky-600 to-amber-400"
            label="CUSTOM HOMES"
            title="Signature Bungalows & Duplex Homes"
            description="Thoughtfully planned residences with generous natural light, cross‑ventilation and well‑sized rooms, designed around how your family actually lives day to day."
            bullets={[
              "Functional layouts that respect privacy and shared family spaces",
              "Structural design prepared to accommodate future extensions",
              "Careful selection of doors, windows, railings and finish materials",
            ]}
          />

          <Card3D
            icon={FiGrid}
            accentColor="#b97311"
            bgAccent="bg-amber-50"
            borderColor="border-amber-200"
            stripGradient="from-amber-300 via-amber-500 to-sky-400"
            label="VILLAS & GATED COMMUNITIES"
            title="Planned Villa Streets & Community Townships"
            description="Master‑planned villa layouts with coordinated façades, internal roads, utilities, lighting and common amenities, giving the entire development a unified and high‑quality character."
            bullets={[
              "Entry, security and shared amenities planned as one system",
              "Roads, drainage and utilities aligned with villa plots and open spaces",
              "Landscape, play areas and clubhouse integrated into the overall plan",
            ]}
          />

          <Card3D
            icon={FiLayers}
            accentColor="#3b4254"
            bgAccent="bg-slate-50"
            borderColor="border-slate-200"
            stripGradient="from-slate-400 via-sky-500 to-amber-400"
            label="APARTMENTS & HOUSING BLOCKS"
            title="Apartments & Multi‑Storey Residential Towers"
            description="Low‑rise and multi‑storey towers with efficient units, well‑positioned cores, parking, fire compliance and services shafts – planned to support long‑term living and maintenance."
            bullets={[
              "Per‑floor structural and MEP drawings coordinated before execution",
              "Lift, staircase and refuge planning in line with local regulations",
              "Parking layouts, ducts and services kept accessible for maintenance teams",
            ]}
          />
        </div>

        {/* PROCESS – animated, more solid */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 sm:mt-16"
        >
          <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-[0.18em] mb-4">
            HOW YOUR RESIDENTIAL PROJECT MOVES FROM IDEA TO REALITY
          </p>
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-4">
            {processSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0 22px 60px rgba(15,23,42,0.25)",
                }}
                className="relative rounded-2xl bg-white/95 border border-slate-200/80 p-4 sm:p-5 shadow-sm transform-gpu transition-transform duration-300"
              >
                {/* animated accent strip */}
                <motion.div
                  className={`
                    absolute inset-x-6 -top-px h-1 rounded-full
                    bg-gradient-to-r ${item.accent}
                  `}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-400 uppercase">
                  STEP {item.step}
                </p>
                <h3 className="mt-1 text-xs sm:text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {item.text}
                </p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden sm:block absolute -right-4 top-1/2 h-px w-6 -translate-y-1/2 bg-gradient-to-r from-slate-300 to-slate-200" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Residential;