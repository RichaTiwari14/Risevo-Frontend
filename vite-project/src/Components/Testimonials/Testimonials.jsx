// Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Home Owner – Raipur",
    project: "Residential Villa Construction",
    quote:
      "Risevo turned our dream home into reality with clear timelines and excellent finish quality. Every detail from structure to interiors was handled professionally.",
  },
  {
    name: "Priya Enterprises",
    role: "Commercial Client",
    project: "Office & Retail Complex",
    quote:
      "From design coordination to execution, the Risevo team maintained transparency and delivered the project exactly as promised, within budget.",
  },
  {
    name: "City Infrastructure Dept.",
    role: "Government Project",
    project: "Road & Drainage Development",
    quote:
      "Their planning, safety standards and on‑site management were impressive. The team completed the work with minimal disruption and high workmanship.",
  },
  {
    name: "Green Valley Developers",
    role: "Real Estate Developer",
    project: "Turnkey Housing Project",
    quote:
      "A reliable partner for large‑scale projects. Risevo managed material, labour and quality checks efficiently and kept us updated at every stage.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i, ease: "easeOut" },
  }),
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#c7d5f5] blur-3xl opacity-60" />
        <div className="absolute right-[-40px] bottom-[-40px] h-72 w-72 rounded-full bg-[#f5e3b2] blur-3xl opacity-70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <p className="text-[20px] font-bold uppercase text-[#064789] tracking-tight">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#012943] tracking-tight">
            WHAT OUR CLIENTS SAY ABOUT RISEVO
          </h2>
          <p className="mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
            Honest feedback from homeowners, developers and organisations who
            trusted us with their construction and infrastructure projects.
          </p>
        </motion.div>

        {/* testimonials grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.name}
              className="relative overflow-hidden rounded-2xl bg-[#F5F7FB]/90 border border-slate-100 shadow-md px-6 py-6 sm:px-7 sm:py-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={fadeUp}
            >
              {/* quote mark */}
              <div className="absolute -top-5 -right-2 text-6xl text-[#F5C041]/25 select-none">
                &ldquo;
              </div>

              {/* rating */}
              <div className="flex items-center gap-1 text-[#F5C041] text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>

              <p className="mt-3 text-[13px] sm:text-[15px] text-slate-700 leading-relaxed">
                {t.quote}
              </p>

              <div className="mt-5 border-t border-slate-200 pt-4 flex flex-col">
                <span className="text-[13px] sm:text-[14px] font-semibold text-[#064789]">
                  {t.name}
                </span>
                <span className="text-[11px] sm:text-[12px] text-slate-500">
                  {t.role}
                </span>
                <span className="mt-1 text-[11px] sm:text-[12px] font-medium text-[#F5C041]">
                  {t.project}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* small CTA */}
        <div className="mt-10 flex justify-center">
          <button className="rounded-full bg-[#064789] px-6 py-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-tight text-white shadow-md shadow-slate-500/40 hover:bg-[#053467] transition">
            SHARE YOUR EXPERIENCE WITH RISEVO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;