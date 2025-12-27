// src/Components/Gallery/Gallery.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Images – yaha apne actual images ka path use karo
// Example: /src/images/gallery1.jpg, gallery2.jpg, gallery3.jpg
import Img1 from "../../images/1.jpeg";
import Img2 from "../../images/2.jpeg";
import Img3 from "../../images/3.jpeg";


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
      title: "Responsible Site Execution",
      subtitle: "Planned, monitored and documented at every stage.",
    },
    {
      src: Img2,
      title: "Work Done With Heart",
      subtitle: "Craftsmanship that reflects care in every detail.",
    },
    {
      src: Img3,
      title: "Accountable Delivery",
      subtitle: "Structures built with ownership and transparency.",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#F5F7FB] py-16 sm:py-20 lg:py-24"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-28 h-72 w-72 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full bg-amber-200/70 blur-3xl" />
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
            <span className="font-semibold text-slate-900">accountability</span>.
            Explore a few glimpses of our work below.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {photos.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{
                y: -4,
                boxShadow: "0 20px 60px rgba(15,23,42,0.25)",
              }}
              className="group relative h-48 sm:h-56 md:h-64 rounded-3xl overflow-hidden bg-slate-200 shadow-md"
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-6 flex flex-col">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-slate-100/90">
                  {item.title}
                </p>
                <p className="mt-1 text-[11px] sm:text-[12px] text-slate-200/90">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-[13px] sm:text-[15px] text-slate-700 max-w-xl">
            We believe that good construction is not just about materials and
            drawings — it is about{" "}
            <span className="font-semibold text-slate-900">
              ownership, care and long‑term commitment
            </span>{" "}
            on every site.
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
            Talk to us about your project
            <FiArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;