// src/Components/Service/ConstructionSpecialties.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaHome, FaBuilding, FaRoad } from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// yahi paths sahi ho to images dikh jayenge
import Img1 from "../../images/residenctial.jpg";
import Img2 from "../../images/commercial.jpg";
import Img3 from "../../images/infrastructure.jpg";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: "residential",
    badge: "RESIDENTIAL",
    icon: FaHome,
    title: "RESIDENTIAL CONSTRUCTION EXCELLENCE",
    intro:
      "High-quality residential construction tailored to your lifestyle and long-term value.",
    image: Img1,
    cta: "VIEW RESIDENTIAL PROJECTS",
    points: [
      {
        heading: "INDEPENDENT HOUSES & VILLAS",
        body: "Custom-designed homes that reflect your unique vision, built with precision engineering and attention to every architectural detail.",
      },
      {
        heading: "APARTMENTS & HOUSING PROJECTS",
        body: "Multi-unit residential developments featuring modern amenities, efficient layouts, and sustainable construction practices.",
      },
      {
        heading: "STRUCTURAL & FINISHING WORKS",
        body: "From foundation to final touches, we use quality materials and skilled craftsmen to ensure durability, aesthetics, and long-lasting value.",
      },
    ],
  },
  {
    id: "commercial",
    badge: "COMMERCIAL",
    icon: FaBuilding,
    title: "COMMERCIAL CONSTRUCTION EXPERTISE",
    intro:
      "Efficient, modern commercial spaces that support productivity and business growth.",
    image: Img2,
    cta: "VIEW COMMERCIAL PROJECTS",
    points: [
      {
        heading: "OFFICE BUILDINGS & COMPLEXES",
        body: "Professional workspaces designed for productivity, featuring modern infrastructure and flexible floor plans.",
      },
      {
        heading: "RETAIL & COMMERCIAL SPACES",
        body: "Shops, showrooms, and commercial centers built to attract customers and maximize business potential.",
      },
      {
        heading: "INDUSTRIAL FACILITIES",
        body: "Warehouses, manufacturing units, and storage facilities constructed with advanced techniques for durability and functionality.",
      },
    ],
  },
  {
    id: "infrastructure",
    badge: "INFRASTRUCTURE",
    icon: FaRoad,
    title: "INFRASTRUCTURE DEVELOPMENT",
    intro:
      "Building the foundations of thriving communities through reliable infrastructure solutions.",
    image: Img3,
    cta: "EXPLORE INFRASTRUCTURE WORKS",
    points: [
      {
        heading: "ROAD CONSTRUCTION",
        body: "Durable road networks using modern paving techniques and quality materials for long-lasting performance.",
      },
      {
        heading: "DRAINAGE SYSTEMS",
        body: "Sewer lines, storm-water management, and underground utilities designed for efficient flow and environmental protection.",
      },
      {
        heading: "ELECTRICAL INFRASTRUCTURE",
        body: "Power line installation and electrical networks developed to meet stringent safety standards and regulations.",
      },
      {
        heading: "LANDSCAPING WORKS",
        body: "Paver blocks, beautification projects, and landscaping that enhance aesthetic appeal and functionality.",
      },
    ],
  },
];

const ConstructionSpecialties = () => {
  const sectionRef = useRef(null);

  // GSAP scroll reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".specialty-row").forEach((row, index) => {
        const image = row.querySelector(".specialty-image");
        const content = row.querySelector(".specialty-content");

        const fromImage = index % 2 === 0 ? -80 : 80;
        const fromContent = index % 2 === 0 ? 80 : -80;

        gsap.from(image, {
          opacity: 0,
          x: fromImage,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
          },
        });

        gsap.from(content, {
          opacity: 0,
          x: fromContent,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[20px] font-bold uppercase text-[#064789]">
            OUR SPECIALIZED AREAS
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#064789] tracking-tight">
            END-TO-END CONSTRUCTION SOLUTIONS
          </h2>
          <p className="mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
            From premium homes to large-scale infrastructure, Risevo delivers
            dependable,{" "}
            <span className="font-semibold text-[#F5C041]">
              quality-focused
            </span>{" "}
            construction across every segment.
          </p>
        </div>

        {/* 3 rows */}
        <div className="space-y-16">
          {sections.map((block, index) => {
            const Icon = block.icon;
            const reverse = index % 2 === 1;

            return (
              <div
                key={block.id}
                className="specialty-row grid items-center gap-10 md:grid-cols-2"
              >
                {/* Image */}
                <div
                  className={`specialty-image relative h-60 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg ${
                    reverse ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={block.image}
                    alt={block.title}
                    className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                  {/* badge */}
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 shadow-md">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F5C041] text-[11px] font-bold text-[#012943]">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[11px] font-semibold tracking-[0.14em] text-[#064789]">
                      {block.badge}
                    </span>
                  </div>
                </div>

                {/* Text content */}
                <div
                  className={`specialty-content ${
                    reverse ? "md:order-1" : ""
                  }`}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#064789] uppercase tracking-tight">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
                    {block.intro}
                  </p>

                  <div className="mt-5 space-y-4">
                    {block.points.map((p, idx) => {
                      const serial = String(idx + 1).padStart(2, "0"); // 01, 02, 03...
                      return (
                        <div key={p.heading} className="flex gap-3">
                          {/* serial number sab blocks me */}
                          <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F5C041]/15 text-[11px] font-bold text-[#F5C041]">
                            {serial}
                          </span>
                          <div>
                            <h4 className="text-[13px] sm:text-[15px] font-semibold text-[#064789] uppercase tracking-tight">
                              {p.heading}
                            </h4>
                            <p className="mt-1 text-[12px] sm:text-[14px] text-slate-600 leading-relaxed">
                              {p.body}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#064789] px-6 py-2.5 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-white shadow-sm shadow-slate-500/40 transition hover:bg-[#053467]"
                  >
                    {block.cta}
                    <FiArrowRight className="h-4 w-4 text-[#F5C041]" />
                  </motion.button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConstructionSpecialties;