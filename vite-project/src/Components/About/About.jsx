// src/Components/About/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import logo from "../../images/logo.png";

const textVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F5F7FB] py-16 sm:py-20 lg:py-24"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-32 h-72 w-72 rounded-full bg-sky-200/80 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-amber-200/80 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
          {/* Text side */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <p className="inline-flex items-center justify-center rounded-full border border-sky-200/70 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-900 shadow-sm">
              ABOUT THE COMPANY
            </p>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              RISEVO PROJECT &amp; DEVELOPERS
            </h2>

            <p className="mt-4 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
              Risevo Construction &amp; Developers is a professionally managed
              civil construction company with deep expertise across{" "}
              <span className="font-semibold text-slate-900">
                residential, commercial and infrastructure projects
              </span>
              . We deliver comprehensive, end‑to‑end construction solutions that
              meet the highest standards.
            </p>

            <p className="mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
              Our reputation is built on an unwavering commitment to{" "}
              <span className="font-semibold text-[#F5C041]">
                quality craftsmanship, rigorous safety protocols
              </span>{" "}
              and on‑time project delivery. Every project we undertake reflects
              our dedication to excellence, accountability and long‑term client
              satisfaction.
            </p>
                   {/* CTA */}
            <motion.a
              href="/leadership"
              whileHover={{ x: 4 }}
              className="
                group mt-6 inline-flex items-center gap-2
                rounded-full bg-slate-900 px-5 py-2.5
                text-[11px] font-semibold uppercase tracking-[0.2em]
                text-white shadow-lg shadow-slate-500/40
                border border-slate-800
              "
            >
              <span>Meet Our Leadership</span>
              <span
                className="
                  flex h-6 w-6 items-center justify-center
                  rounded-full bg-white/15
                  transition-transform duration-300 group-hover:translate-x-0.5
                "
              >
                <FiArrowRight className="h-3.5 w-3.5 text-[#F5C041]" />
              </span>
            </motion.a>
          </motion.div>

          {/* Image / visual side */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div
              className="
                relative aspect-[4/3] w-full
                rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-sky-800
                shadow-[0_26px_80px_rgba(15,23,42,0.65)]
                overflow-hidden transform-gpu
              "
            >
              {/* Glow overlays (background) */}
              <div className="absolute -top-10 -left-8 h-40 w-40 rounded-full bg-sky-400/40 blur-3xl" />
              <div className="absolute bottom-[-40px] right-[-30px] h-44 w-44 rounded-full bg-amber-300/40 blur-3xl" />

              {/* Main image – only this visible on top */}
              <img
                src={logo}
                alt="Risevo logo"
                className="relative h-full w-full object-cover opacity-90 mix-blend-screen"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;