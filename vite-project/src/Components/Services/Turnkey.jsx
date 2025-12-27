// src/Components/Services/Turnkey.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiPackage,
  FiCalendar,
  FiCheckSquare,
  FiUsers,
  FiLayers,
  FiArrowLeft,   // 🔹 added
} from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

const Turnkey = () => {
  return (
    <section
      id="turnkey"
      className="
        relative overflow-hidden
        bg-[#f7fafc]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* Textured + soft animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-sky-200/80 blur-3xl"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-80px] right-[-40px] h-80 w-80 rounded-full bg-amber-200/80 blur-3xl"
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle,_rgba(148,163,184,0.2)_1px,transparent_0)]
            bg-[length:22px_22px]
            opacity-45 mix-blend-multiply
          "
        />
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
          <p className="inline-flex items-center justify-center rounded-full border border-sky-200/80 bg-white/90 px-4 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-sky-800 shadow-sm">
            TURNKEY PROJECT DELIVERY
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            ONE TEAM FROM{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-700 to-amber-500">
              FIRST SKETCH TO FINAL HANDOVER
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-[17px] text-slate-600 leading-relaxed">
            With turnkey delivery, we take responsibility for your project from
            concept and design coordination through construction, finishing and
            handover – giving you a single point of accountability.
          </p>
        </motion.div>

        {/* HERO STATS / HIGHLIGHTS */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-8 grid gap-4 sm:grid-cols-3 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-3 rounded-2xl bg-white/95 border border-sky-200 px-4 py-3 shadow-sm">
            <div className="rounded-xl bg-sky-50 p-2 text-sky-700 border border-sky-200">
              <FiPackage className="h-4 w-4" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 uppercase tracking-[0.12em]">
                SINGLE CONTRACT
              </p>
              <p className="text-slate-600">
                One contract, one team – no fragmented responsibilities.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/95 border border-amber-200 px-4 py-3 shadow-sm">
            <div className="rounded-xl bg-amber-50 p-2 text-amber-700 border border-amber-200">
              <FiCalendar className="h-4 w-4" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 uppercase tracking-[0.12em]">
                CONTROLLED TIMELINES
              </p>
              <p className="text-slate-600">
                Defined milestones and progress tracking from day one.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/95 border border-emerald-200 px-4 py-3 shadow-sm">
            <div className="rounded-xl bg-emerald-50 p-2 text-emerald-700 border border-emerald-200">
              <FiCheckSquare className="h-4 w-4" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 uppercase tracking-[0.12em]">
                QUALITY &amp; COORDINATION
              </p>
              <p className="text-slate-600">
                Structure, services and finishes all aligned under one plan.
              </p>
            </div>
          </div>
        </motion.div>

        {/* MAIN TURNKEY CARDS (3D-ish) */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 space-y-7 sm:space-y-8"
        >
          {/* Turnkey for Homes */}
          <motion.article
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0 26px 90px rgba(15,23,42,0.2)",
            }}
            className="
              relative rounded-3xl bg-white/98
              border border-sky-200
              shadow-[0_20px_70px_rgba(15,23,42,0.14)]
              px-6 py-6 sm:px-7 sm:py-7
              transform-gpu transition-all duration-300
            "
          >
            <div className="absolute inset-x-10 -top-px h-1 rounded-full bg-gradient-to-r from-sky-400 via-sky-600 to-amber-400" />
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="rounded-2xl bg-sky-50 p-3 border border-sky-200 text-sky-700 shrink-0 sm:mt-1">
                <FiUsers className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
                  TURNKEY FOR HOMES &amp; VILLAS
                </p>
                <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-slate-900 uppercase tracking-tight">
                  COMPLETE DELIVERY FROM PLANS TO POSSESSION
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  For individual homes and villas, we handle design
                  coordination, construction, services and final finishes –
                  taking the project from drawings to a move‑in ready home under
                  one team.
                </p>
                <ul className="pt-1 space-y-1.5 text-[12px] sm:text-sm text-slate-700">
                  <li>• Coordination with your architect or in‑house design team</li>
                  <li>• Structural, MEP and finishing trades managed under one schedule</li>
                  <li>• Cost tracking and change management through the build</li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* Turnkey for Commercial */}
          <motion.article
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0 26px 90px rgba(15,23,42,0.2)",
            }}
            className="
              relative rounded-3xl bg-white/98
              border border-indigo-200
              shadow-[0_20px_70px_rgba(15,23,42,0.14)]
              px-6 py-6 sm:px-7 sm:py-7
              transform-gpu transition-all duration-300
            "
          >
            <div className="absolute inset-x-10 -top-px h-1 rounded-full bg-gradient-to-r from-indigo-400 via-indigo-600 to-sky-400" />
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="rounded-2xl bg-indigo-50 p-3 border border-indigo-200 text-indigo-700 shrink-0 sm:mt-1">
                <FiLayers className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-indigo-800">
                  TURNKEY FOR COMMERCIAL SPACES
                </p>
                <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-slate-900 uppercase tracking-tight">
                  SHELL, CORE &amp; FIT‑OUT READY DELIVERIES
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  For offices, retail and mixed‑use blocks, we execute the
                  entire shell and core with service infrastructure, and prepare
                  spaces to a level that is ready for tenant fit‑out.
                </p>
                <ul className="pt-1 space-y-1.5 text-[12px] sm:text-sm text-slate-700">
                  <li>• Coordination with base building and tenant requirements</li>
                  <li>• Fire, HVAC, electrical and low‑voltage integrated in sequence</li>
                  <li>• Handover aligned to fit‑out schedules and business launch</li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* Turnkey for Interiors */}
          <motion.article
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0 26px 90px rgba(15,23,42,0.2)",
            }}
            className="
              relative rounded-3xl bg-white/98
              border border-emerald-200
              shadow-[0_20px_70px_rgba(15,23,42,0.14)]
              px-6 py-6 sm:px-7 sm:py-7
              transform-gpu transition-all duration-300
            "
          >
            <div className="absolute inset-x-10 -top-px h-1 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-600 to-sky-500" />
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="rounded-2xl bg-emerald-50 p-3 border border-emerald-200 text-emerald-700 shrink-0 sm:mt-1">
                <FiPackage className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  TURNKEY INTERIORS &amp; FINISHING
                </p>
                <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-slate-900 uppercase tracking-tight">
                  FROM CIVIL SHELL TO COMPLETE INTERIOR HANDOVER
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We manage all interior trades – partitions, ceilings,
                  flooring, joinery, services and final installation – working
                  to a single design intent and timeline.
                </p>
                <ul className="pt-1 space-y-1.5 text-[12px] sm:text-sm text-slate-700">
                  <li>• Material selection, procurement and installation under one plan</li>
                  <li>• Coordination between civil, MEP and finishing teams</li>
                  <li>• Snagging and handover directly to the client/operator</li>
                </ul>
              </div>
            </div>
          </motion.article>
        </motion.div>

        {/* PROCESS SECTION */}
        <motion.div
          variants={fadeUp(0.35)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 space-y-6"
        >
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h3 className="text-base sm:text-xl font-semibold text-slate-900 uppercase tracking-[0.12em]">
              TURNKEY DELIVERY WORKFLOW
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              A structured sequence that keeps design, construction and handover
              on a single track – with one accountable team.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-4 text-[13px] sm:text-sm">
            {[
              {
                step: "01",
                title: "BRIEF &amp; TARGETS",
                text: "We align on scope, budget band, timelines and performance requirements before locking a turnkey brief.",
              },
              {
                step: "02",
                title: "DESIGN &amp; COORDINATION",
                text: "Architectural, structural and MEP drawings are coordinated, so site execution is smooth and clash‑free.",
              },
              {
                step: "03",
                title: "EXECUTION &amp; TRACKING",
                text: "All trades – civil, services, finishes – are managed under one schedule with stage‑wise reporting.",
              },
              {
                step: "04",
                title: "SNAG‑FREE HANDOVER",
                text: "Snag correction, testing, documentation and final walk‑throughs are completed before formal handover.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                whileHover={{
                  y: -4,
                  boxShadow: "0 18px 45px rgba(15,23,42,0.25)",
                }}
                className="relative rounded-2xl border border-slate-200 bg-white/95 p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 text-slate-700 mb-1">
                  <FiCheckSquare className="h-4 w-4 text-emerald-500" />
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

export default Turnkey;