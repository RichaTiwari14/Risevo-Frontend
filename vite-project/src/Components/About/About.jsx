import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
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
      className="relative overflow-hidden bg-[#F5F7FB] pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24"
    >
      {/* Back to Home Button - Page content mein */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-8"
      >
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="
            inline-flex items-center gap-2
            rounded-full bg-white/95 backdrop-blur-xl px-4 py-2.5
            text-sm font-semibold text-slate-900 shadow-xl shadow-black/20
            border border-slate-200/80 hover:bg-white hover:shadow-2xl
            transition-all duration-300
            lg:px-5 lg:py-3
          "
        >
          <FiArrowLeft className="h-4 w-4 lg:h-5 lg:w-5" />
          <span className="hidden sm:inline">Back to Home</span>
        </motion.a>
      </motion.div>

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-32 h-72 w-72 rounded-full bg-sky-200/80 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-amber-200/80 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
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

            <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              RISEVO PROJECT & DEVELOPERS
            </h2>

            <p className="mt-6 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
              Risevo Project & Developers is a professionally managed
              civil construction company with deep expertise across{" "}
              <span className="font-semibold text-slate-900">
                residential, commercial and infrastructure projects
              </span>
              . We deliver comprehensive, end‑to‑end construction solutions that
              adhere to the highest standards of quality and reliability.
            </p>

            <p className="mt-4 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
              Our reputation is built on an unwavering commitment to{" "}
              <span className="font-semibold text-[#F5C041]">
                superior craftsmanship, robust safety practices
              </span>{" "}
              and consistently on‑time project delivery. Every assignment we
              undertake reflects our focus on excellence, accountability and
              long‑term client satisfaction.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              {/* Leadership CTA */}
              <motion.a
                href="/leadership"
                whileHover={{ x: 4 }}
                className="
                  group inline-flex items-center gap-2
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

              {/* Foundation CTA */}
              <motion.a
                href="/foundation"
                whileHover={{ x: 4 }}
                className="
                  group inline-flex items-center gap-2
                  rounded-full bg-white px-5 py-2.5
                  text-[11px] font-semibold uppercase tracking-[0.2em]
                  text-slate-900 shadow-md shadow-slate-300/60
                  border border-slate-300
                "
              >
                <span>Learn About Our Foundation</span>
                <span
                  className="
                    flex h-6 w-6 items-center justify-center
                    rounded-full bg-slate-900/5
                    transition-transform duration-300 group-hover:translate-x-0.5
                  "
                >
                  <FiArrowRight className="h-3.5 w-3.5 text-slate-700" />
                </span>
              </motion.a>
            </div>
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
              {/* Glow overlays */}
              <div className="absolute -top-10 -left-8 h-40 w-40 rounded-full bg-sky-400/40 blur-3xl" />
              <div className="absolute bottom-[-40px] right-[-30px] h-44 w-44 rounded-full bg-amber-300/40 blur-3xl" />

              {/* Main image */}
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
