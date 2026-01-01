// src/Components/Gallery/Gallery.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Images
import Img1 from "../../images/1.jpeg";
import Img2 from "../../images/2.jpeg";
import Img3 from "../../images/3.jpeg";
import Img4 from "../../images/4.jpeg";
import Img5 from "../../images/gallery.jpeg";
import Img6 from "../../images/gallery2.jpeg";
import Img7 from "../../images/pipe.jpeg";
import Img8 from "../../images/road1.jpeg";
import Img9 from "../../images/road2.jpeg";
import Img10 from "../../images/a.jpeg";
import Img11 from "../../images/b.jpeg";
import Img12 from "../../images/c.jpeg";
import Img13 from "../../images/d.jpeg";
import Img14 from "../../images/e.jpeg";
import Img15 from "../../images/infrastrucure1.jpeg";
import Img16 from "../../images/infrastrucure2.jpeg";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  },
});

const Gallery = () => {
  const photos = [
    {
      src: Img1,
      tag: "STRUCTURE",
      title: "RCC Columns & Slabs",
      desc: "Reinforced concrete frame with columns, beams and slabs cast strictly as per structural drawings.",
    },
    {
      src: Img2,
      tag: "FINISHES",
      title: "Internal Finishing",
      desc: "Internal plaster, putty and paint executed with proper levels, lines and corner detailing.",
    },
    {
      src: Img3,
      tag: "EXECUTION",
      title: "Site Coordination",
      desc: "Site engineers and supervisors coordinating daily progress, safety and quality on the ground.",
    },
    {
      src: Img4,
      tag: "FORMWORK",
      title: "Shuttering & Supports",
      desc: "Formwork alignment, levels and cover checked thoroughly before each concrete pour.",
    },
    {
      src: Img5,
      tag: "SITE OVERVIEW",
      title: "Multiple Work Fronts",
      desc: "Multiple zones planned in parallel so the site progresses smoothly without idle time.",
    },
    {
      src: Img6,
      tag: "PLANNING",
      title: "On‑Site Review",
      desc: "On‑site planning, marking and verification carried out directly with the latest drawings.",
    },
    {
      src: Img7,
      tag: "UTILITIES",
      title: "Pipeline & Services",
      desc: "Water and drainage pipelines installed with correct slopes, levels and maintenance access.",
    },
    {
      src: Img8,
      tag: "ROADS",
      title: "Road Base Preparation",
      desc: "Internal road base prepared with proper sub‑base, base course and compaction testing.",
    },
    {
      src: Img9,
      tag: "ROADS",
      title: "Finished Road Surface",
      desc: "Final road layer finished with camber, slopes and edges designed to prevent water stagnation.",
    },
    {
      src: Img15,
      tag: "INFRA",
      title: "Infra – Roads & Access",
      desc: "Internal streets and access routes integrated with drainage and utility corridors.",
    },
    {
      src: Img16,
      tag: "INFRA",
      title: "Infra – Utilities",
      desc: "Underground infrastructure laid out with chambers and manholes for easy maintenance.",
    },
    {
      src: Img10,
      tag: "COMMERCIAL",
      title: "Under‑Construction Block",
      desc: "Commercial framework and cores in progress, with clear circulation and service planning.",
    },
    {
      src: Img11,
      tag: "COMMERCIAL",
      title: "Completed Commercial Front",
      desc: "Finished commercial elevation ready for branding, fit‑out and operations.",
    },
    {
      src: Img12,
      tag: "RESIDENTIAL",
      title: "Residential Structure",
      desc: "Multi‑storey residential frame designed for light, ventilation and safe circulation.",
    },
    {
      src: Img13,
      tag: "TURNKEY",
      title: "Turnkey Site Execution",
      desc: "Single‑team turnkey execution – structural, MEP and finishes under one coordinated schedule.",
    },
    {
      src: Img14,
      tag: "TURNKEY",
      title: "Ready‑to‑Move Delivery",
      desc: "Turnkey project at final stage – snag‑free, tested and ready for possession.",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#F5F7FB] py-16 sm:py-20 lg:py-24"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="inline-flex items-center justify-center rounded-full border border-sky-200/70 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-900">
            PROJECT GALLERY
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Done With Responsibility, From The Heart
          </h2>
          <p className="mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
            Every Risevo project is handled with{" "}
            <span className="font-semibold text-slate-900">responsibility</span>
            , completed with{" "}
            <span className="font-semibold text-slate-900">sincerity</span> and
            delivered with{" "}
            <span className="font-semibold text-slate-900">accountability</span>
            . These real on‑site moments show how we actually build – in
            structure, finishes, infrastructure and turnkey delivery.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          variants={fadeUp(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
            mt-10
            grid gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {photos.map((item) => (
            <motion.article
              key={item.title}
              whileHover={{
                y: -6,
                boxShadow: "0 24px 70px rgba(15,23,42,0.25)",
              }}
              className="
                group flex flex-col overflow-hidden
                rounded-2xl bg-white
                border border-slate-200/80
                shadow-sm
                transition-all duration-300
              "
            >
              {/* Image block */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                {/* Top-right chip */}
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/30 px-2 py-1 text-[10px] text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                  <FiArrowRight className="w-3 h-3" />
                </div>

                {/* Tag + title */}
                <div className="absolute inset-x-3 bottom-3 flex flex-col gap-1">
                  {item.tag && (
                    <span className="inline-flex w-fit items-center rounded-full bg-white/90 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-800 shadow-sm">
                      {item.tag}
                    </span>
                  )}
                  <h3 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-slate-100/95">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Text block */}
              <div className="px-3.5 sm:px-4 py-3 sm:py-3.5">
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;