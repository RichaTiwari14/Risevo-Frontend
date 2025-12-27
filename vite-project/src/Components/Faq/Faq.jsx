// FAQSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "How does Risevo start a new construction project?",
    a: "We begin with a site visit and detailed discussion of your requirements, budget and timeline. After this, we share a preliminary plan, estimation and execution schedule for your approval.",
  },
  {
    q: "Do you handle both design and construction?",
    a: "Yes. We can work with your architect or provide complete design + build solutions including architecture, structure, MEP, interiors and finishing.",
  },
  {
    q: "How is project costing decided?",
    a: "Cost is based on built‑up area, specification level, material brands and complexity of the structure. We share a transparent BOQ and rate breakup before starting work.",
  },
  {
    q: "Will I get regular progress updates?",
    a: "Absolutely. We provide site photos, status reports and milestone updates so you always know how your project is progressing.",
  },
  {
    q: "Do you work only in Raipur?",
    a: "Our core operations are based in Raipur, but we can take up selected residential, commercial or infrastructure projects in nearby regions as well.",
  },
  {
    q: "Can you take turnkey projects with material?",
    a: "Yes. We execute turnkey projects including labour, material, planning and supervision, so you have a single point of responsibility.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F5F7FB] py-16 sm:py-20"
    >
      {/* subtle background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-60 w-60 rounded-full bg-[#c7d5f5] blur-3xl opacity-60" />
        <div className="absolute right-[-40px] bottom-[-40px] h-72 w-72 rounded-full bg-[#f5e3b2] blur-3xl opacity-70" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[20px] font-bold uppercase text-[#064789] tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#012943] tracking-tight">
            CLEAR ANSWERS FOR YOUR CONSTRUCTION QUERIES
          </h2>
          <p className="mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
            If you’re planning a residential, commercial or infrastructure
            project with Risevo, these answers will help you understand our
            process, timelines and way of working.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-10 space-y-3">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={item.q}
                className="rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5 sm:py-4 text-left"
                >
                  <span className="text-[13px] sm:text-[15px] font-semibold text-[#064789]">
                    {item.q}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5F7FB] text-[#064789] border border-slate-200 shrink-0">
                    {isOpen ? (
                      <FiMinus className="h-4 w-4" />
                    ) : (
                      <FiPlus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0 text-[12px] sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Extra line */}
        <div className="mt-8 text-center text-[12px] text-slate-500">
          Didn&apos;t find your question?{" "}
          <a
            href="#contact"
            className="font-semibold text-[#064789] hover:text-[#F5C041] transition-colors"
          >
            Reach out to our team
          </a>{" "}
          and we&apos;ll be happy to help.
        </div>
      </div>
    </section>
  );
};

export default FAQSection;