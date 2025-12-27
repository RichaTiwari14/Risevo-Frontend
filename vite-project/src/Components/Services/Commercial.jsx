// src/Components/Commercial/Commercial.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaStore,
  FaCity,
  FaRegClock,
  FaHardHat,
  FaProjectDiagram,
} from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

// Two high-quality commercial images (front & back for flip)
const HERO_FRONT =
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600";
const HERO_BACK =
  "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1600";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

const Commercial = () => {
  return (
    <section
      id="commercial"
      className="
        relative overflow-hidden
        bg-[#f5f7fb]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* Textured + animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* animated glows */}
        <motion.div
          className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-sky-200/80 blur-3xl"
          animate={{ x: [0, 26, 0], y: [0, -12, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-80px] right-[-40px] h-80 w-80 rounded-full bg-indigo-200/80 blur-3xl"
          animate={{ x: [0, -26, 0], y: [0, 14, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* dot grid */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,_rgba(148,163,184,0.2)_1px,transparent_0)]
            bg-[length:22px_22px]
            opacity-50 mix-blend-multiply
          "
        />
        {/* diagonal lines */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(135deg,rgba(148,163,184,0.15)_1px,transparent_0)]
            bg-[length:30px_30px]
            opacity-25 mix-blend-soft-light
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

        {/* HERO: text + image flip snapshot */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.95fr)] items-center"
        >
          {/* Text side */}
          <div className="space-y-5">
            <p className="inline-flex items-center justify-center rounded-full border border-sky-300/70 bg-white/90 px-4 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-sky-900 shadow-sm">
              COMMERCIAL CONSTRUCTION
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              OFFICE, RETAIL &amp; COMMERCIAL ASSETS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-700 to-sky-500">
                ENGINEERED FOR BUSINESS
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-[17px] text-slate-600 leading-relaxed">
              We design and construct commercial environments that support real
              business operations – efficient floor plates, safe circulation,
              impactful visibility and building services that are simple to
              operate and maintain.
            </p>
            <ul className="space-y-1.5 text-[13px] sm:text-sm text-slate-700">
              <li>• Integrated structure, MEP, fire and finishes from the outset</li>
              <li>• Coordination with architects, consultants and tenant fit‑out teams</li>
              <li>• Phased execution aligned with business launch and handover plans</li>
            </ul>
          </div>

          {/* Flipping image snapshot (images only, no text inside) */}
          <motion.div
            variants={fadeUp(0.1)}
            className="relative [perspective:1200px]"
          >
            <motion.div
              className="
                group relative h-56 sm:h-64 md:h-72 w-full
                rounded-3xl overflow-hidden
                shadow-[0_26px_90px_rgba(15,23,42,0.3)]
                bg-slate-900
                transform-gpu
              "
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRONT FACE */}
              <div
                className="absolute inset-0"
                style={{ backfaceVisibility: "hidden" }}
              >
                <motion.img
                  src={HERO_FRONT}
                  alt="Modern commercial glass tower"
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.03 }}
                  animate={{ scale: [1.03, 1.0, 1.03] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              </div>

              {/* BACK FACE */}
              <div
                className="absolute inset-0"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <motion.img
                  src={HERO_BACK}
                  alt="Retail and commercial plaza"
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.03 }}
                  animate={{ scale: [1.03, 1.0, 1.03] }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* MAIN CARDS – COMMERCIAL TYPES */}
        <div className="mt-16 space-y-8 sm:space-y-9">
          {/* Offices */}
          <motion.article
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              y: -10,
              scale: 1.01,
              boxShadow: "0 26px 90px rgba(15,23,42,0.22)",
            }}
            className="
              relative rounded-3xl bg-white
              border border-sky-200
              shadow-[0_20px_60px_rgba(15,23,42,0.16)]
              px-6 py-6 sm:px-7 sm:py-7
              transform-gpu transition-all duration-300
            "
          >
            <motion.div
              className="absolute inset-x-10 -top-px h-1 rounded-full bg-gradient-to-r from-sky-400 via-sky-600 to-indigo-500"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <motion.div
                whileHover={{ rotate: 4 }}
                className="rounded-2xl bg-sky-50 p-3 border border-sky-200 text-sky-700 shrink-0 sm:mt-1"
              >
                <FaBuilding className="h-6 w-6" />
              </motion.div>
              <div className="space-y-2">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
                  OFFICE BUILDINGS &amp; CORPORATE SPACES
                </p>
                <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-slate-900 uppercase tracking-tight">
                  EFFICIENT, ADAPTABLE WORKPLACE INFRASTRUCTURE
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We construct office buildings with rational structural grids,
                  clear cores and coordinated building services – making it easy
                  for interior teams to create flexible, future‑proof
                  workplaces.
                </p>
                <ul className="pt-1 space-y-1.5 text-[12px] sm:text-sm text-slate-700">
                  <li>• Optimised cores, column spans and slab depths</li>
                  <li>• Logical placement of lobbies, washrooms and plant rooms</li>
                  <li>• Service risers and terraces aligned to building usage</li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* Retail & Showrooms */}
          <motion.article
            variants={fadeUp(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              y: -10,
              scale: 1.01,
              boxShadow: "0 26px 90px rgba(15,23,42,0.22)",
            }}
            className="
              relative rounded-3xl bg-white
              border border-amber-200
              shadow-[0_20px_60px_rgba(15,23,42,0.16)]
              px-6 py-6 sm:px-7 sm:py-7
              transform-gpu transition-all duration-300
            "
          >
            <motion.div
              className="absolute inset-x-10 -top-px h-1 rounded-full bg-gradient-to-r from-amber-300 via-amber-500 to-pink-400"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <motion.div
                whileHover={{ rotate: -4 }}
                className="rounded-2xl bg-amber-50 p-3 border border-amber-200 text-amber-700 shrink-0 sm:mt-1"
              >
                <FaStore className="h-6 w-6" />
              </motion.div>
              <div className="space-y-2">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
                  RETAIL &amp; HIGH‑STREET SHOWROOMS
                </p>
                <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-slate-900 uppercase tracking-tight">
                  HIGH VISIBILITY, SMOOTH CUSTOMER MOVEMENT
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Retail shells are built to give brands clean volumes, clear
                  frontage and simple circulation, with service areas that make
                  daily operations efficient and predictable.
                </p>
                <ul className="pt-1 space-y-1.5 text-[12px] sm:text-sm text-slate-700">
                  <li>• Balanced façade for glazing, display and signage</li>
                  <li>• Clear customer approach, navigation and exit routing</li>
                  <li>• Integrated service access, loading bays and storage rooms</li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* Commercial Complexes */}
          <motion.article
            variants={fadeUp(0.35)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              y: -10,
              scale: 1.01,
              boxShadow: "0 26px 90px rgba(15,23,42,0.22)",
            }}
            className="
              relative rounded-3xl bg-white
              border border-slate-200
              shadow-[0_20px_60px_rgba(15,23,42,0.16)]
              px-6 py-6 sm:px-7 sm:py-7
              transform-gpu transition-all duration-300
            "
          >
            <motion.div
              className="absolute inset-x-10 -top-px h-1 rounded-full bg-gradient-to-r from-slate-400 via-indigo-500 to-emerald-400"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <motion.div
                whileHover={{ rotate: 3 }}
                className="rounded-2xl bg-slate-50 p-3 border border-slate-200 text-slate-700 shrink-0 sm:mt-1"
              >
                <FaCity className="h-6 w-6" />
              </motion.div>
              <div className="space-y-2">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-slate-800">
                  COMMERCIAL COMPLEXES &amp; BUSINESS PARKS
                </p>
                <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-slate-900 uppercase tracking-tight">
                  MIXED‑USE DEVELOPMENTS WITH CLEAR ZONING
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Larger projects are zoned to separate offices, retail, F&amp;B,
                  parking and back‑of‑house activities, so daily operations,
                  safety and maintenance remain intuitive and manageable.
                </p>
                <ul className="pt-1 space-y-1.5 text-[12px] sm:text-sm text-slate-700">
                  <li>• Distinct access for visitors, staff and services</li>
                  <li>• Grouped service corridors, shafts and plant rooms</li>
                  <li>• Operation &amp; maintenance workflow built into the layout</li>
                </ul>
              </div>
            </div>
          </motion.article>
        </div>

        {/* PROCESS SECTION – centered heading */}
        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 space-y-6"
        >
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h3 className="text-base sm:text-xl font-semibold text-slate-900 uppercase tracking-[0.12em]">
              HOW WE DELIVER COMMERCIAL PROJECTS
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Each commercial build follows a defined, engineering‑led workflow —
              from feasibility and coordinated design, through on‑site
              construction, to final testing and handover.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-4 text-[13px] sm:text-sm">
            {/* Step 1 */}
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 18px 45px rgba(15,23,42,0.25)" }}
              className="relative rounded-2xl border border-sky-200 bg-white/95 p-4 sm:p-5"
            >
              <div className="flex items-center gap-2 text-sky-700">
                <FaProjectDiagram className="h-4 w-4" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                  STEP 01
                </p>
              </div>
              <h4 className="mt-2 font-semibold text-slate-900 uppercase">
                BRIEF &amp; FEASIBILITY
              </h4>
              <p className="mt-1.5 text-slate-600 leading-relaxed">
                Business model, target users, area program, parking, norms and
                budget band are translated into a clear, buildable brief.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 18px 45px rgba(15,23,42,0.25)" }}
              className="relative rounded-2xl border border-indigo-200 bg:white/95 p-4 sm:p-5"
            >
              <div className="flex items-center gap-2 text-indigo-700">
                <FaBuilding className="h-4 w-4" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                  STEP 02
                </p>
              </div>
              <h4 className="mt-2 font-semibold text-slate-900 uppercase">
                DESIGN &amp; COORDINATION
              </h4>
              <p className="mt-1.5 text-slate-600 leading-relaxed">
                Architectural, structural, MEP and fire drawings are developed
                and coordinated, supporting faster approvals and smoother
                execution.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 18px 45px rgba(15,23,42,0.25)" }}
              className="relative rounded-2xl border border-emerald-200 bg-white/95 p-4 sm:p-5"
            >
              <div className="flex items-center gap-2 text-emerald-700">
                <FaHardHat className="h-4 w-4" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                  STEP 03
                </p>
              </div>
              <h4 className="mt-2 font-semibold text-slate-900 uppercase">
                EXECUTION &amp; SAFETY
              </h4>
              <p className="mt-1.5 text-slate-600 leading-relaxed">
                Civil, structural and services work are executed with site
                supervision, QA checklists and safety protocols at every
                critical stage.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 18px 45px rgba(15,23,42,0.25)" }}
              className="relative rounded-2xl border border-amber-200 bg-white/95 p-4 sm:p-5"
            >
              <div className="flex items-center gap-2 text-amber-700">
                <FaRegClock className="h-4 w-4" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                  STEP 04
                </p>
              </div>
              <h4 className="mt-2 font-semibold text-slate-900 uppercase">
                FINISHING &amp; COMMISSIONING
              </h4>
              <p className="mt-1.5 text-slate-600 leading-relaxed">
                Finishes, service testing, snag removal and handover are aligned
                with fit‑out teams and opening dates so operations can start
                with confidence.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Commercial;