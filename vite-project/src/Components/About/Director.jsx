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
      "Mr. Devendra Kumar has 8 years of experience in the construction sector with a strong focus on finance, business management, and commercial operations. He is responsible for financial planning, budgeting, cost control, cash flow management, and statutory compliance, supporting the company's financial stability and sustainable growth.",
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
      "Mr. Ishwar Prasad Verma has 8 years of experience in construction and infrastructure development. He focuses on infrastructure planning, execution, and coordination of large-scale projects, supporting the company's expansion in the infrastructure sector.",
  },
];

const LeadershipPage = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 pt-24 pb-16 overflow-hidden">
      {/* Subtle background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl opacity-60" />
        <div className="absolute bottom-[-100px] right-[-80px] h-72 w-72 rounded-full bg-amber-100/30 blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back
          </a>
        </motion.div>

        {/* Philosophy Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              WE ARE NOT IN THE BUSINESS OF CONSTRUCTION.
              <br />
              <span className="text-blue-600">
            WE ARE IN THE BUSINESS OF LEGACY.
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              At RISEVO Project & Developers, construction is measured by trust preserved and standards set for the future.
            </p>
          </div>

          {/* Philosophy Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">
                  Core Philosophy
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  True construction is measured by how responsibly we build, how deeply people trust us, and how long our work stands as a symbol of integrity.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">
                  Three Key Questions
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>✓ Does it serve people with dignity?</li>
                  <li>✓ Does it respect nature and resources?</li>
                  <li>✓ Will it stand as a symbol of integrity?</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">
                  Our Respect
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  We treat time as a commitment, resources as borrowed from the future, and nature as a partner — not a commodity.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Card 4 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200 shadow-sm">
                <h3 className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-3">
                  Legendary Thinking
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Quality is our signature</li>
                  <li>• Trust is our real asset</li>
                  <li>• Discipline defines our process</li>
                  <li>• Longevity defines our success</li>
                </ul>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">
                  The RISEVO Standard
                </h3>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  "If it cannot last, we do not build it. If it compromises values, we do not accept it."
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 shadow-sm">
                <h3 className="text-amber-800 font-semibold text-sm uppercase tracking-wide mb-3">
                  Founder's Statement
                </h3>
                <p className="text-amber-900 font-semibold text-sm">
                  "Structures may age. Standards must not."
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Leadership Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              OUR LEADERSHIP TEAM
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each director combines deep experience with our founder's philosophy of legacy, integrity, and long-term thinking.
            </p>
          </div>

          {/* Directors Grid */}
          <div className="space-y-12">
            {directors.map((director, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={director.name}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className={isEven ? "md:order-1" : "md:order-2"}
                  >
                    <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden bg-slate-200 shadow-lg">
                      <img
                        src={director.image}
                        alt={director.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-xs font-semibold text-blue-200 uppercase tracking-wide">
                          {director.role}
                        </p>
                        <p className="text-lg font-bold mt-1">{director.name}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className={isEven ? "md:order-2" : "md:order-1"}
                  >
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {director.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
                      {director.role}
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      {director.focus}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default LeadershipPage;