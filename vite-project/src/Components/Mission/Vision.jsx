// src/pages/VisionPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaBullseye, FaBuilding, FaCity } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.12 * i,
      ease: "easeOut",
    },
  }),
};

const VisionPage = () => {
  return (
    <main className="relative min-h-screen bg-[#F5F7FB] pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-sky-200/80 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full bg-amber-200/80 blur-3xl" />
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,_rgba(148,163,184,0.18)_1px,transparent_0)]
            bg-[length:22px_22px]
            opacity-50
          "
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with Back button */}
        <div className="flex items-center justify-between mb-6">
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

        {/* Badge + Title + Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="inline-flex items-center justify-center rounded-full border border-[#8EA9FF]/50 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#064789]">
            OUR VISION
          </p>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#064789] tracking-tight">
            Building Spaces That Inspire Confidence And Endure Over Time
          </h1>
          <p className="mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
            Our vision is to ensure that every Risevo project is more than just
            a structure – it is a{" "}
            <span className="font-semibold text-[#F5C041]">
              long‑term asset
            </span>{" "}
            that strengthens communities, adds real value to our clients, and
            contributes positively to the built environment.
          </p>
        </motion.div>

        {/* Main content sections */}
        <div className="mt-10 space-y-8">
          {/* Section 1 */}
          <motion.section
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{
              y: -6,
              rotateX: 3,
              scale: 1.02,
              boxShadow: "0 24px 70px rgba(15,23,42,0.25)",
            }}
            className="
              relative overflow-hidden
              rounded-2xl bg-white/95 border border-slate-100
              shadow-[0_18px_60px_rgba(15,23,42,0.18)]
              p-6 sm:p-8 transform-gpu
            "
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F5C041]/15 via-transparent to-[#5B86E5]/12 opacity-90" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F5C041]/15 text-[#F5C041]">
                  <FaBullseye className="h-5 w-5" />
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-[#064789]">
                  A Brand Aligned With Quality And Integrity
                </h2>
              </div>
              <p className="text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
                We aspire to be recognised not just as a contractor, but as a{" "}
                <span className="font-semibold">
                  trusted construction partner
                </span>
                . Our vision is to uphold integrity in every interaction —
                maintaining transparent processes, ethical practices and clear
                communication from initial planning through to final handover.
              </p>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{
              y: -6,
              rotateX: 3,
              scale: 1.02,
              boxShadow: "0 24px 70px rgba(15,23,42,0.25)",
            }}
            className="
              relative overflow-hidden
              rounded-2xl bg-white/95 border border-slate-100
              shadow-[0_18px_60px_rgba(15,23,42,0.18)]
              p-6 sm:p-8 transform-gpu
            "
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#5B86E5]/14 via-transparent to-[#0EA5E9]/10 opacity-90" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#5B86E5]/12 text-[#5B86E5]">
                  <FaBuilding className="h-5 w-5" />
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-[#064789]">
                  Future‑Ready Residential & Commercial Spaces
                </h2>
              </div>
              <p className="text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
                Whether it is a single home or a large commercial development,
                our vision is to create{" "}
                <span className="font-semibold">
                  functional, safe and aesthetically compelling
                </span>{" "}
                spaces that evolve with changing lifestyles and modern business
                requirements, while remaining efficient and durable.
              </p>
            </div>
          </motion.section>

          {/* Section 3 */}
          <motion.section
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{
              y: -6,
              rotateX: 3,
              scale: 1.02,
              boxShadow: "0 24px 70px rgba(15,23,42,0.25)",
            }}
            className="
              relative overflow-hidden
              rounded-2xl bg-white/95 border border-slate-100
              shadow-[0_18px_60px_rgba(15,23,42,0.18)]
              p-6 sm:p-8 transform-gpu
            "
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/14 via-transparent to-[#F5C041]/14 opacity-90" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0EA5E9]/12 text-[#0EA5E9]">
                  <FaCity className="h-5 w-5" />
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-[#064789]">
                  Resilient Infrastructure For Stronger Communities
                </h2>
              </div>
              <p className="text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
                From roads and utilities to community infrastructure, our vision
                is that{" "}
                <span className="font-semibold">every development</span> should
                enhance connectivity, improve everyday life and support
                long‑term sustainability. We aim to contribute to cities and
                towns that are resilient, inclusive and well‑planned.
              </p>
            </div>
          </motion.section>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          <a
            href="/mission"
            className="
              group inline-flex items-center gap-2 rounded-full
              bg-[#064789] px-4 py-2
              text-[11px] font-semibold uppercase tracking-[0.2em]
              text-white shadow-md shadow-slate-500/40
              hover:bg-[#03223f] transition
            "
          >
            <span>View Our Mission</span>
            <span
              className="
                flex h-6 w-6 items-center justify-center
                rounded-full bg-white/15
                transition-transform duration-300 group-hover:translate-x-0.5
              "
            >
              <FiArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default VisionPage;