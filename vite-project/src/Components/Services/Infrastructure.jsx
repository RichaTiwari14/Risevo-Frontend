// src/Components/Services/Infra.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiMap,
  FiDroplet,
  FiZap,
  FiCheckCircle,
  FiArrowLeft,
} from "react-icons/fi";

// Local images (2 images)
import infra1 from "../../images/c.jpeg";
import infra2 from "../../images/4.jpeg";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

const Infra = () => {
  return (
    <section
      id="infra"
      className="
        relative overflow-hidden
        bg-[#f7fafc]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* Textured + soft background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* animated glows */}
        <motion.div
          className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-sky-200/80 blur-3xl"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-80px] right-[-40px] h-80 w-80 rounded-full bg-emerald-200/80 blur-3xl"
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* dot grid */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,_rgba(148,163,184,0.22)_1px,transparent_0)]
            bg-[length:22px_22px]
            opacity-45 mix-blend-multiply
          "
        />
        {/* diagonal lines */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(135deg,rgba(148,163,184,0.14)_1px,transparent_0)]
            bg-[length:28px_28px]
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

        {/* HERO */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <p
            className="
              inline-flex items-center justify-center rounded-full
              border border-sky-200/80 bg-white/90 px-4 py-1
              text-[11px] sm:text-xs font-semibold uppercase
              tracking-[0.25em] text-sky-800 shadow-sm
            "
          >
            INFRASTRUCTURE DEVELOPMENT
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            INFRASTRUCTURE THAT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-emerald-600 to-amber-500">
              HOLDS COMMUNITIES TOGETHER
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-[17px] text-slate-600 leading-relaxed">
            We design and deliver roads, drainage networks, utilities and
            municipal interfaces that quietly keep developments running — safe,
            reliable and easy to maintain over their entire lifecycle.
          </p>
        </motion.div>

        {/* HIGHLIGHTS */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-8 grid gap-4 sm:grid-cols-3 text-xs sm:text-sm"
        >
          <div className="rounded-2xl bg-white/95 border border-sky-200 px-4 py-3 shadow-sm">
            <p className="font-semibold text-sky-800 uppercase tracking-[0.16em]">
              INTERNAL ROAD NETWORKS
            </p>
            <p className="mt-1 text-slate-600">
              Access roads, junctions and entry sequences that feel intuitive
              and safe for residents and visitors.
            </p>
          </div>
          <div className="rounded-2xl bg-white/95 border border-emerald-200 px-4 py-3 shadow-sm">
            <p className="font-semibold text-emerald-800 uppercase tracking-[0.16em]">
              STORM‑WATER &amp; SEWER
            </p>
            <p className="mt-1 text-slate-600">
              Drainage and sewer systems sized and sloped to avoid flooding and
              back‑flows.
            </p>
          </div>
          <div className="rounded-2xl bg-white/95 border border-amber-200 px-4 py-3 shadow-sm">
            <p className="font-semibold text-amber-800 uppercase tracking-[0.16em]">
              UTILITIES &amp; LIGHTING
            </p>
            <p className="mt-1 text-slate-600">
              Electrical, telecom and lighting laid out in clean, maintainable
              corridors.
            </p>
          </div>
        </motion.div>

        {/* TOP IMAGE – CARDS KE UPAR */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 max-w-5xl mx-auto"
        >
          <div
            className="
              relative overflow-hidden rounded-3xl
              bg-slate-900/5
              shadow-[0_18px_60px_rgba(15,23,42,0.25)]
            "
          >
            <img
              src={infra1}
              alt="Infrastructure roads and access network"
              className="
                w-full h-64 sm:h-80 md:h-96 object-cover
                transition-transform duration-[1200ms] ease-out hover:scale-105
              "
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* MAIN CARDS */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 space-y-8 sm:space-y-9"
        >
          {/* Roads & Access */}
          <motion.article
            whileHover={{
              y: -8,
              scale: 1.01,
              boxShadow: "0 26px 90px rgba(15,23,42,0.2)",
            }}
            className="
              relative rounded-3xl bg-white
              border border-sky-200
              shadow-[0_20px_70px_rgba(15,23,42,0.16)]
              px-6 py-6 sm:px-7 sm:py-7
              transform-gpu transition-all duration-300
            "
          >
            <div className="absolute inset-x-10 -top-px h-1 rounded-full bg-gradient-to-r from-sky-400 via-sky-600 to-emerald-400" />
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="rounded-2xl bg-sky-50 p-3 border border-sky-200 text-sky-700 shrink-0 sm:mt-1">
                <FiMap className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
                  ROAD NETWORKS &amp; ACCESS SPINES
                </p>
                <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-slate-900 uppercase tracking-tight">
                  CONNECTIVITY THAT FEELS NATURAL AND SAFE
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We lay out internal roads and access routes so that vehicles,
                  pedestrians and service traffic can move smoothly, with clear
                  sightlines and safe turning geometries.
                </p>
                <ul className="pt-1 space-y-1.5 text-[12px] sm:text-sm text-slate-700">
                  <li>• Road widths and turning radii tuned to actual usage</li>
                  <li>• Junctions designed around visibility and traffic flow</li>
                  <li>• Camber, cross‑falls and shoulders integrated with drains</li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* Drainage & Water */}
          <motion.article
            whileHover={{
              y: -8,
              scale: 1.01,
              boxShadow: "0 26px 90px rgba(15,23,42,0.2)",
            }}
            className="
              relative rounded-3xl bg-white
              border border-emerald-200
              shadow-[0_20px_70px_rgba(15,23,42,0.16)]
              px-6 py-6 sm:px-7 sm:py-7
              transform-gpu transition-all duration-300
            "
          >
            <div className="absolute inset-x-10 -top-px h-1 rounded-full bg-gradient-to-r from-emerald-300 via-emerald-500 to-sky-400" />
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="rounded-2xl bg-emerald-50 p-3 border border-emerald-200 text-emerald-700 shrink-0 sm:mt-1">
                <FiDroplet className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  DRAINAGE, STORM‑WATER &amp; WATER SUPPLY
                </p>
                <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-slate-900 uppercase tracking-tight">
                  NETWORKS DESIGNED TO KEEP WATER UNDER CONTROL
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Storm‑water, sewer and potable networks are laid out with
                  proper slopes, chamber spacing and access points, so they are
                  easy to understand, maintain and connect to municipal mains.
                </p>
                <ul className="pt-1 space-y-1.5 text-[12px] sm:text-sm text-slate-700">
                  <li>• Pipe sizing, gradients and sections matched to load</li>
                  <li>• Chambers and manholes at logical maintenance locations</li>
                  <li>
                    • Interfaces to existing drains and water mains documented
                    clearly
                  </li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* Utilities & Lighting */}
          <motion.article
            whileHover={{
              y: -8,
              scale: 1.01,
              boxShadow: "0 26px 90px rgba(15,23,42,0.2)",
            }}
            className="
              relative rounded-3xl bg-white
              border border-slate-200
              shadow-[0_20px_70px_rgba(15,23,42,0.16)]
              px-6 py-6 sm:px-7 sm:py-7
              transform-gpu transition-all duration-300
            "
          >
            <div className="absolute inset-x-10 -top-px h-1 rounded-full bg-gradient-to-r from-slate-400 via-sky-500 to-amber-400" />
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="rounded-2xl bg-slate-50 p-3 border border-slate-200 text-slate-700 shrink-0 sm:mt-1">
                <FiZap className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-slate-800">
                  POWER, TELECOM &amp; LIGHTING
                </p>
                <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-slate-900 uppercase tracking-tight">
                  SERVICE CORRIDORS THAT STAY ORGANIZED
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We create dedicated corridors, trenches and chambers for
                  power, communication and lighting, so that upgrades and
                  repairs remain neat instead of turning into surface clutter.
                </p>
                <ul className="pt-1 space-y-1.5 text-[12px] sm:text-sm text-slate-700">
                  <li>
                    • Trenching and ducting designed for present and future
                    capacity
                  </li>
                  <li>• Street lighting layouts for safe, uniform illumination</li>
                  <li>
                    • Structured routes for electrical and data to every
                    plot/building
                  </li>
                </ul>
              </div>
            </div>
          </motion.article>
        </motion.div>

        {/* BOTTOM IMAGE – CARDS KE NICHE */}
        <motion.div
          variants={fadeUp(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 sm:mt-14 max-w-5xl mx-auto"
        >
          <div
            className="
              relative overflow-hidden rounded-3xl
              bg-slate-900/5
              shadow-[0_18px_60px_rgba(15,23,42,0.25)]
            "
          >
            <img
              src={infra2}
              alt="Second view of infrastructure utilities and networks"
              className="
                w-full h-64 sm:h-80 md:h-96 object-cover
                transition-transform duration-[1200ms] ease-out hover:scale-105
              "
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* PROCESS SECTION */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="infra-process mt-16 space-y-6"
        >
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h3 className="text-base sm:text-xl font-semibold text-slate-900 uppercase tracking-[0.12em]">
              HOW WE DELIVER INFRASTRUCTURE PROJECTS
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Every infrastructure scope is handled as an engineered system –
              survey, design, execution and testing are clearly defined and
              tracked.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-4 text-[13px] sm:text-sm">
            {[
              {
                step: "01",
                title: "SURVEY &amp; FEASIBILITY",
                text: "Existing levels, utilities, access and constraints are surveyed and a realistic, buildable concept is prepared.",
              },
              {
                step: "02",
                title: "DESIGN &amp; DRAWINGS",
                text: "Road, drainage and utility layouts, profiles and details are developed and coordinated with architects and authorities.",
              },
              {
                step: "03",
                title: "EXECUTION &amp; QA",
                text: "Excavation, bedding, laying, chamber casting and road layers are executed, with stage‑wise checks and records.",
              },
              {
                step: "04",
                title: "TESTING &amp; HANDOVER",
                text: "Levels, gradients and flows are tested and documented before final backfilling, surfacing and handover.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                whileHover={{
                  y: -4,
                  boxShadow: "0 18px 45px rgba(15,23,42,0.25)",
                }}
                className="infra-step relative rounded-2xl border border-slate-200 bg-white/95 p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 text-slate-700 mb-1">
                  <FiCheckCircle className="h-4 w-4 text-emerald-500" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    STEP {item.step}
                  </p>
                </div>
                <h4
                  className="mt-1 font-semibold text-slate-900 uppercase"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className="mt-1.5 text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Infra;