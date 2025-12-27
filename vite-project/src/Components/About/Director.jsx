// src/pages/LeadershipPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import Sagar from "../../images/sagar.jpeg";
import Devendra from "../../images/devendra.jpeg";
import Pramod from "../../images/pramod.jpeg";
import Munna from "../../images/munna.jpeg";
import Ishwar from "../../images/ishwar.jpeg";

const directors = [
  {
    name: "MR. SAGAR SEN",
    role: "Managing Director",
    image: Sagar,
    focus:
      "Mr. Sagar Sen is a seasoned construction professional with 9 years of experience in the civil construction industry. As the Managing Director, he provides overall leadership, strategic direction, and operational oversight to the organization. His expertise includes project planning, execution management, coordination with clients and consultants, and ensuring timely delivery of projects while maintaining quality and safety standards. He plays a key role in business growth and organizational development.",
  },
  {
    name: "MR. DEVENDRA KUMAR",
    role: "Finance & Business Director",
    image: Devendra,
    focus:
      "Mr. Devendra Kumar has 8 years of experience in the construction sector with a strong focus on finance, business management, and commercial operations. He is responsible for financial planning, budgeting, cost control, cash flow management, and statutory compliance, supporting the company’s financial stability and sustainable growth.",
  },
  {
    name: "MR. PRAMOD KUMAR SAHU",
    role: "Project Director",
    image: Pramod,
    focus:
      "With 10 years of extensive experience in the construction field, Mr. Pramod Kumar Sahu oversees end-to-end project execution, including planning, scheduling, resource allocation, and coordination with stakeholders. He ensures timely delivery while maintaining quality and safety standards.",
  },
  {
    name: "MR. MUNNA KUMAR",
    role: "Technical Director",
    image: Munna,
    focus:
      "Mr. Munna Kumar brings 9 years of technical expertise in civil construction. As Technical Director, he supervises design reviews, construction methodologies, quality assurance, and technical problem-solving to ensure compliance with approved drawings and industry best practices.",
  },
  {
    name: "MR. ISHWAR PRASAD VERMA",
    role: "Infra Developer Director",
    image: Ishwar,
    focus:
      "Mr. Ishwar Prasad Verma has 8 years of experience in construction and infrastructure development. He focuses on infrastructure planning, execution, and coordination of large-scale projects, supporting the company’s expansion in the infrastructure sector.",
  },
];

const LeadershipPage = () => {
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="inline-flex items-center justify-center rounded-full border border-[#8EA9FF]/50 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#064789]">
            LEADERSHIP TEAM
          </p>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#064789] tracking-tight">
            Meet The People Behind Risevo
          </h1>
          <p className="mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
            Risevo is led by a seasoned leadership team with hands‑on
            construction experience, strategic vision and a shared commitment to{" "}
            <span className="font-semibold text-[#F5C041]">
              quality, safety and transparency
            </span>{" "}
            across every project we deliver.
          </p>
        </motion.div>

        {/* Directors – alternating rows */}
        <div className="mt-10 space-y-10 sm:space-y-12">
          {directors.map((director, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={director.name}
                className="grid gap-8 lg:grid-cols-2 items-center"
              >
                {/* Image block */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isEven ? -40 : 40,
                    scale: 0.96,
                  }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  // hover: only slight lift/scale, no extra box-shadow
                  whileHover={{
                    y: -4,
                    scale: 1.01,
                  }}
                  className={isEven ? "order-1" : "order-1 lg:order-2"}
                >
                  <div
                    className="
                      relative w-full max-w-xs mx-auto lg:mx-0
                      aspect-[3/4]
                      rounded-3xl overflow-hidden
                      bg-gradient-to-br from-slate-900 via-slate-800 to-sky-800
                      shadow-[0_16px_50px_rgba(15,23,42,0.35)]
                      transform-gpu
                    "
                  >
                    <img
                      src={director.image}
                      alt={director.name}
                      className="
                        h-full w-full
                        object-cover object-top
                      "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/15 to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-sky-100/80">
                        {director.role}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-white uppercase">
                        {director.name}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Content block */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isEven ? 40 : -40,
                    scale: 0.98,
                  }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={isEven ? "order-2" : "order-2 lg:order-1"}
                >
                  <h3
                    className="
                      text-base sm:text-xl md:text-2xl
                      font-extrabold text-slate-900
                      uppercase
                    "
                  >
                    {director.name}
                  </h3>
                  <p
                    className="
                      mt-1 text-[11px] sm:text-[12px]
                      font-semibold uppercase tracking-[0.16em]
                      text-sky-800
                    "
                  >
                    {director.role}
                  </p>
                  <p className="mt-3 text-[13px] sm:text-[14px] text-slate-600 leading-relaxed">
                    {director.focus}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default LeadershipPage;