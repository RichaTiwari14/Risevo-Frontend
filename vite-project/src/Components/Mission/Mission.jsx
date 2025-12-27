// VisionMission.jsx
import React, { useEffect, useRef } from "react";
import { FaBullseye, FaHandshake } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Vision/Mission heading
      gsap.from(".vm-badge, .vm-title, .vm-sub", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".vm-heading",
          start: "top 80%",
        },
      });

      gsap.from(".vm-underline", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".vm-heading",
          start: "top 75%",
        },
      });

      gsap.from(".vm-card-vision", {
        opacity: 0,
        x: -120,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".vm-card-vision",
          start: "top 80%",
        },
      });

      gsap.from(".vm-card-mission", {
        opacity: 0,
        x: 120,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".vm-card-mission",
          start: "top 80%",
        },
      });

      gsap.from(".vm-bg-shape", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vision-mission"
      className="relative overflow-hidden bg-[#F5F7FB] py-16 sm:py-20"
    >
      {/* background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="vm-bg-shape absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#c7d5f5] blur-3xl opacity-70" />
        <div className="vm-bg-shape absolute right-[-40px] bottom-[-40px] h-72 w-72 rounded-full bg-[#d7e1ff] blur-3xl opacity-80" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission Heading */}
        <div className="vm-heading text-center max-w-3xl mx-auto">
          <p className="vm-badge inline-flex items-center justify-center rounded-full border border-[#8EA9FF]/50 bg-white/80 px-4 py-1 text-[20px] font-bold uppercase text-[#064789] tracking-tight">
            VISION & MISSION
          </p>
          <h2 className="vm-title mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#064789] tracking-tight">
            DRIVING EVERY PROJECT WITH PURPOSE
          </h2>

          <p className="vm-sub mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
            Risevo is guided by a clear{" "}
            <span className="font-semibold text-[#F5C041]">VISION</span> and a
            strong <span className="font-semibold text-[#F5C041]">MISSION</span>{" "}
            to deliver reliable construction that stands the test of time.
          </p>

          <div className="vm-underline mx-auto mt-5 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#F5C041] via-[#5B86E5] to-[#F5C041]" />
        </div>

        {/* Vision & Mission Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Vision */}
          <div className="vm-card-vision relative overflow-hidden rounded-2xl bg-white/95 border border-slate-100 shadow-lg p-6 sm:p-8 group">
            <div className="absolute inset-0 opacity-0 pointer-events-none bg-gradient-to-br from-[#5B86E5]/10 via-transparent to-[#F5C041]/15 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex flex-col h-full">
              <div className="inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5C041]/15 text-[#F5C041] ring-1 ring-[#F5C041]/40">
                  <FaBullseye className="h-5 w-5" />
                </div>
                <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#064789]">
                  OUR VISION
                </span>
              </div>

              <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#064789] tracking-tight">
                TO BE A TRUSTED NAME IN QUALITY CONSTRUCTION
              </h3>

              <p className="mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
                To become a trusted name synonymous with quality construction,
                recognized for{" "}
                <span className="font-semibold text-[#F5C041]">
                  integrity, innovation, and excellence
                </span>{" "}
                in every project we deliver across residential, commercial, and
                infrastructure sectors.
              </p>

              {/* CTA for Vision */}
              <a
                href="/vision"
                className="
                  group mt-5 inline-flex w-fit items-center gap-2
                  rounded-full border border-[#064789]
                  bg-[#064789] px-4 py-2
                  text-[11px] font-semibold uppercase tracking-[0.2em]
                  text-white shadow-md shadow-slate-400/40
                  transition hover:bg-transparent hover:text-[#064789]
                "
              >
                <span>Read Full Vision</span>
                <span
                  className="
                    flex h-6 w-6 items-center justify-center
                    rounded-full bg-white/15
                    transition-transform duration-300 group-hover:translate-x-0.5
                  "
                >
                  <FiArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>
          </div>

          {/* Mission */}
          <div className="vm-card-mission relative overflow-hidden rounded-2xl bg-white/95 border border-slate-100 shadow-lg p-6 sm:p-8 group">
            <div className="absolute inset-0 opacity-0 pointer-events-none bg-gradient-to-br from-[#F5C041]/18 via-transparent to-[#5B86E5]/15 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex flex-col h-full">
              <div className="inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5B86E5]/12 text-[#5B86E5] ring-1 ring-[#5B86E5]/45">
                  <FaHandshake className="h-5 w-5" />
                </div>
                <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#064789]">
                  OUR MISSION
                </span>
              </div>

              <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#064789] tracking-tight">
                TO DELIVER DURABLE, TRANSPARENT SOLUTIONS
              </h3>

              <p className="mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
                To deliver{" "}
                <span className="font-semibold text-[#F5C041]">
                  durable, cost‑effective
                </span>{" "}
                construction solutions that exceed client expectations while
                ensuring complete transparency, superior workmanship, and
                lasting client satisfaction throughout every phase of
                development.
              </p>

              {/* CTA for Mission */}
              <a
                href="/mission"
                className="
                  group mt-5 inline-flex w-fit items-center gap-2
                  rounded-full border border-[#064789]
                  bg-[#064789] px-4 py-2
                  text-[11px] font-semibold uppercase tracking-[0.2em]
                  text-white shadow-md shadow-slate-400/40
                  transition hover:bg-transparent hover:text-[#064789]
                "
              >
                <span>Read Full Mission</span>
                <span
                  className="
                    flex h-6 w-6 items-center justify-center
                    rounded-full bg-white/15
                    transition-transform duration-300 group-hover:translate-x-0.5
                  "
                >
                  <FiArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;