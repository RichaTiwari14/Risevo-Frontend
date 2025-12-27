// src/pages/EquipmentPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaUserTie, FaUsersCog, FaTruckMoving } from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

// 3 images – yaha apne actual equipment images rakhna
import Equip1 from "../../images/jcb.jpg";
import Equip2 from "../../images/jcb1.jpeg";
import Equip3 from "../../images/3.jpeg";

const featureCards = [
  {
    title: "Modern Construction Machinery",
    desc: "State-of-the-art equipment including excavators, concrete mixers, cranes, and specialized tools that enhance efficiency and precision.",
    icon: FaCogs,
  },
  {
    title: "Skilled Engineers & Supervisors",
    desc: "Qualified professionals with extensive experience in project management, structural engineering, and construction technology.",
    icon: FaUserTie,
  },
  {
    title: "Experienced Workforce",
    desc: "A dedicated team of trained craftsmen, technicians, and laborers committed to delivering superior workmanship on every project.",
    icon: FaUsersCog,
  },
  {
    title: "Reliable Vendor Network",
    desc: "Strategic partnerships with trusted suppliers and subcontractors ensure consistent material quality and service excellence.",
    icon: FaTruckMoving,
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

const EquipmentPage = () => {
  return (
    <main className="relative min-h-screen bg-[#F5F7FB] pt-24 pb-16 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-28 h-72 w-72 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full bg-amber-200/70 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with Back to Home */}
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

        {/* Hero: text + image */}
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-center">
          {/* Left: heading + intro */}
          <motion.section
            initial={{ opacity: 0, x: -40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-800">
              EQUIPMENT &amp; TECHNICAL STRENGTH
            </p>
            <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Strong Machinery,
              <br className="hidden sm:block" /> Stronger Team.
            </h1>
            <p className="mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
              Powered by modern construction machinery, skilled engineers and an
              experienced workforce, Risevo delivers projects with{" "}
              <span className="font-semibold text-[#F5C041]">
                precision and reliability
              </span>
              .
            </p>
            <p className="mt-2 text-[12px] sm:text-[13px] text-slate-600 leading-relaxed">
              Our on‑ground strength combines the right mix of{" "}
              <span className="font-semibold text-slate-900">
                machinery, technical expertise and site manpower
              </span>{" "}
              to execute civil and infrastructure projects in a predictable and
              controlled manner.
            </p>
          </motion.section>

          {/* Right: main image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.25)]"
          >
            <img
              src={Equip1}
              alt="Construction equipment on site"
              className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-100">
              <div>
                <p className="font-semibold tracking-[0.14em] uppercase">
                  SITE EQUIPMENT
                </p>
                <p className="text-[11px] text-slate-200/90">
                  Excavators • Mixers • Cranes • Compactors
                </p>
              </div>
              <span className="rounded-full bg-[#F5C041] px-3 py-1 text-[10px] font-semibold text-[#012943] shadow">
                ON‑GROUND POWER
              </span>
            </div>
          </motion.div>
        </section>

        {/* 4 feature cards */}
        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          {featureCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -4 }}
                className="
                  flex h-full flex-col
                  rounded-2xl bg-white/95 border border-slate-100
                  shadow-[0_12px_40px_rgba(15,23,42,0.12)]
                  p-5 sm:p-6
                  transition-transform duration-200
                "
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 border border-sky-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-sm sm:text-[15px] font-semibold text-slate-900">
                    {item.title}
                  </h2>
                </div>

                <p className="mt-3 text-[12px] sm:text-[13px] text-slate-600 leading-relaxed flex-1">
                  {item.desc}
                </p>
              </motion.article>
            );
          })}
        </section>

        {/* 2 extra images (gallery) – improved design */}
        <section className="mt-12">
          <h2 className="text-sm sm:text-base font-semibold uppercase tracking-[0.22em] text-slate-500 text-center">
            ON‑SITE CAPABILITIES
          </h2>
          <p className="mt-2 text-center text-[13px] sm:text-[15px] text-slate-700">
            A closer look at the equipment and teams that support our daily
            execution.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {/* Image 2 */}
            <div className="group relative h-40 sm:h-48 md:h-56 rounded-3xl overflow-hidden bg-slate-200 shadow-[0_14px_45px_rgba(15,23,42,0.18)]">
              <img
                src={Equip2}
                alt="Team and equipment"
                className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-8 flex flex-col">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-100/90">
                  TEAM &amp; SUPERVISION
                </p>
                <p className="mt-1 text-[11px] text-slate-200/90">
                  Site engineers and supervisors coordinating safe execution.
                </p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="group relative h-40 sm:h-48 md:h-56 rounded-3xl overflow-hidden bg-slate-200 shadow-[0_14px_45px_rgba(15,23,42,0.18)]">
              <img
                src={Equip3}
                alt="Site logistics"
                className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-8 flex flex-col">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-100/90">
                  LOGISTICS &amp; SUPPORT
                </p>
                <p className="mt-1 text-[11px] text-slate-200/90">
                  Material flow and equipment movement planned for each phase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA block */}
        <motion.section
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          <p className="max-w-xl text-[13px] sm:text[15px] text-slate-700 leading-relaxed">
            Contact us today to discuss your next construction project and see
            how our{" "}
            <span className="font-semibold text-slate-900">
              equipment and technical strength
            </span>{" "}
            can add value to your timelines, quality and budget.
          </p>

          <a
            href="/#contact"
            className="
              inline-flex items-center gap-2 rounded-full
              bg-slate-900 px-6 sm:px-8 py-2.5
              text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em]
              text-white shadow-md shadow-slate-500/40
              hover:bg-slate-800 transition
            "
          >
            Contact us today
            <FiArrowRight className="h-4 w-4" />
          </a>
        </motion.section>
      </div>
    </main>
  );
};

export default EquipmentPage;