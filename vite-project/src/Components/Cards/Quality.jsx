// src/Components/Equipment/QualityAndEquipment.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckDouble,
  FaCertificate,
  FaHardHat,
  FaBalanceScale,
} from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

const qualityItems = [
  {
    title: "STRICT QUALITY CONTROL",
    desc: "Comprehensive quality management systems monitor materials, workmanship and key site activities to ensure consistent excellence on every project.",
    icon: FaCheckDouble,
  },
  {
    title: "APPROVED MATERIALS",
    desc: "Only approved, specification-compliant materials sourced from trusted vendors with proven supply records are used in our works.",
    icon: FaCertificate,
  },
  {
    title: "SAFETY SUPERVISION",
    desc: "Dedicated supervision, safety briefings and PPE compliance help maintain a zero‑compromise approach to worker and site safety.",
    icon: FaHardHat,
  },
  {
    title: "REGULATORY COMPLIANCE",
    desc: "We adhere to relevant building codes, environmental norms and municipal regulations to safeguard project integrity and approvals.",
    icon: FaBalanceScale,
  },
];

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.15 * i },
  }),
};

const QualityAndEquipment = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#c7d5f5] blur-3xl opacity-60" />
        <div className="absolute right-[-40px] bottom-[-40px] h-72 w-72 rounded-full bg-[#f5e3b2] blur-3xl opacity-60" />
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

        {/* QUALITY & SAFETY STANDARDS – heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          custom={0}
          variants={container}
          className="max-w-3xl text-center mx-auto"
        >
          <p className="text-[20px] font-bold uppercase tracking-tight">
            <span className="text-[#064789]">QUALITY &amp;</span>{" "}
            <span className="text-[#F5C041]">SAFETY STANDARDS</span>
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#012943] tracking-tight">
            WE BUILD WITH QUALITY, SAFETY AND TRUST
          </h2>
          <p className="mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
            Every Risevo project follows structured quality checks, approved
            materials and a safety‑first mindset – protecting both your
            investment and the people working on site.
          </p>
        </motion.div>

        {/* Quality cards */}
        <div className="mt-10 grid gap-7 sm:grid-cols-2">
          {qualityItems.map((item, index) => {
            const Icon = item.icon;
            const serial = String(index + 1).padStart(2, "0");
            return (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={index + 1}
                variants={container}
                whileHover={{
                  y: -4,
                  boxShadow: "0 18px 40px rgba(15,23,42,0.16)",
                }}
                className="
                  group relative overflow-hidden
                  rounded-2xl bg-[#F5F7FB]/95 border border-slate-100
                  px-5 py-5 sm:px-6 sm:py-6
                  transition-shadow duration-200
                "
              >
                {/* hover gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F5C041]/12 via-transparent to-[#5B86E5]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex gap-4">
                  {/* Icon + serial */}
                  <div className="mt-1 flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5C041]/15 text-[#F5C041] shadow-sm shadow-amber-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="mt-2 rounded-full bg-white px-2 py-[2px] text-[10px] font-semibold text-[#064789] shadow-sm">
                      {serial}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-[13px] sm:text-[15px] md:text-[16px] font-bold text-[#012943] uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[12px] sm:text-[13px] text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QualityAndEquipment;