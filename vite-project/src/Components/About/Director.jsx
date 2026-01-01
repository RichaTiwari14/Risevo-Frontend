// src/pages/LeadershipPage.jsx
import React from "react";
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
    <main className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl opacity-70" />
        <div className="absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full bg-amber-400/20 blur-3xl opacity-70" />
        <div className="absolute inset-x-0 top-40 h-64 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar: Back (left) + Login (right) */}
        <div className="mb-10 flex items-center justify-between gap-4">
          {/* Back button - Left */}
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700/60 bg-slate-900/70 text-slate-100 text-sm font-medium shadow-sm hover:bg-slate-800 hover:border-slate-500 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back
          </a>

          {/* Login button - Right (dark blue, premium) */}
          <a
            href="/login"
            className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-900/40 hover:from-blue-800 hover:via-blue-700 hover:to-blue-500 transition-colors border border-blue-400/40"
          >
            Login
          </a>
        </div>

        {/* Philosophy Section */}
        <section className="mt-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-slate-900/70 border border-slate-700 text-xs font-medium uppercase tracking-[0.2em] text-slate-300 mb-5">
              Our Philosophy
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-5">
              WE ARE NOT IN THE BUSINESS OF{" "}
              <span className="text-slate-300">CONSTRUCTION.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                WE ARE IN THE BUSINESS OF LEGACY.
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto">
              At RISEVO Project &amp; Developers, construction is measured by
              trust preserved and standards set for the future.
            </p>
          </div>

          {/* Philosophy Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="relative bg-slate-900/70 rounded-2xl p-6 border border-slate-700/70 shadow-xl shadow-black/30 backdrop-blur">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />
                <h3 className="text-blue-300 font-semibold text-xs uppercase tracking-[0.25em] mb-3">
                  Core Philosophy
                </h3>
                <p className="text-slate-100/90 leading-relaxed text-sm md:text-base">
                  True construction is measured by how responsibly we build, how
                  deeply people trust us, and how long our work stands as a
                  symbol of integrity.
                </p>
              </div>

              {/* Card 2 */}
              <div className="relative bg-slate-900/70 rounded-2xl p-6 border border-slate-700/70 shadow-xl shadow-black/30 backdrop-blur">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />
                <h3 className="text-blue-300 font-semibold text-xs uppercase tracking-[0.25em] mb-3">
                  Three Key Questions
                </h3>
                <ul className="space-y-2 text-slate-100/90 text-sm md:text-base">
                  <li>✓ Does it serve people with dignity?</li>
                  <li>✓ Does it respect nature and resources?</li>
                  <li>✓ Will it stand as a symbol of integrity?</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="relative bg-slate-900/70 rounded-2xl p-6 border border-slate-700/70 shadow-xl shadow-black/30 backdrop-blur">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
                <h3 className="text-blue-300 font-semibold text-xs uppercase tracking-[0.25em] mb-3">
                  Our Respect
                </h3>
                <p className="text-slate-100/90 leading-relaxed text-sm md:text-base">
                  We treat time as a commitment, resources as borrowed from the
                  future, and nature as a partner — not a commodity.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Card 4 */}
              <div className="relative bg-gradient-to-br from-blue-950/70 via-slate-900/80 to-slate-900/80 rounded-2xl p-6 border border-blue-600/60 shadow-xl shadow-blue-900/40 backdrop-blur">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_60%)] pointer-events-none" />
                <h3 className="relative text-blue-200 font-semibold text-xs uppercase tracking-[0.25em] mb-3">
                  Legendary Thinking
                </h3>
                <ul className="relative space-y-2 text-slate-100/90 text-sm md:text-base">
                  <li>• Quality is our signature</li>
                  <li>• Trust is our real asset</li>
                  <li>• Discipline defines our process</li>
                  <li>• Longevity defines our success</li>
                </ul>
              </div>

              {/* Card 5 */}
              <div className="relative bg-slate-900/70 rounded-2xl p-6 border border-slate-700/70 shadow-xl shadow-black/30 backdrop-blur">
                <h3 className="text-blue-300 font-semibold text-xs uppercase tracking-[0.25em] mb-3">
                  The RISEVO Standard
                </h3>
                <p className="text-slate-100/90 text-sm md:text-base italic leading-relaxed">
                  "If it cannot last, we do not build it. If it compromises
                  values, we do not accept it."
                </p>
              </div>

              {/* Card 6 */}
              <div className="relative bg-gradient-to-br from-amber-500/15 via-slate-900/80 to-slate-900/80 rounded-2xl p-6 border border-amber-400/70 shadow-xl shadow-amber-900/30 backdrop-blur">
                <h3 className="text-amber-300 font-semibold text-xs uppercase tracking-[0.25em] mb-3">
                  Founder's Statement
                </h3>
                <p className="text-amber-100 font-semibold text-sm md:text-base">
                  "Structures may age. Standards must not."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-500/10 border border-blue-400/40 text-xs font-medium uppercase tracking-[0.25em] text-blue-200 mb-4">
              Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50 mb-4">
              OUR LEADERSHIP TEAM
            </h2>
            <p className="text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto">
              Each director combines deep experience with our founder&apos;s
              philosophy of legacy, integrity, and long-term thinking.
            </p>
          </div>

          {/* Directors Grid */}
          <div className="space-y-10 md:space-y-12">
            {directors.map((director, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={director.name}
                  className="relative rounded-3xl bg-slate-950/70 border border-slate-800/80 shadow-2xl shadow-black/40 overflow-hidden backdrop-blur-lg"
                >
                  {/* Accent gradient line */}
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400" />

                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center px-6 py-7 md:px-8 md:py-8">
                    {/* Image + Name/Role panel */}
                    <div
                      className={
                        isEven
                          ? "order-1 md:order-1 flex justify-center"
                          : "order-1 md:order-2 flex justify-center"
                      }
                    >
                      <div className="relative w-full max-w-xs lg:max-w-sm rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-700/80 shadow-xl shadow-black/40">
                        {/* Image area with fixed aspect ratio */}
                        <div className="relative aspect-[3/4] w-full">
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/60" />
                          <img
                            src={director.image}
                            alt={director.name}
                            className="relative w-full h-full object-contain"
                          />
                        </div>

                        {/* Footer panel with name and role */}
                        <div className="border-t border-slate-700/80 bg-black/80 px-4 py-3">
                          <p className="text-[0.65rem] font-semibold text-blue-200/80 uppercase tracking-[0.25em]">
                            {director.role}
                          </p>
                          <p className="text-sm md:text-base font-semibold text-slate-50 mt-1">
                            {director.name}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={
                        isEven
                          ? "order-2 md:order-2 text-left"
                          : "order-2 md:order-1 text-left"
                      }
                    >
                      <p className="text-[0.7rem] font-semibold text-blue-300/80 uppercase tracking-[0.3em] mb-2">
                        Leadership Profile
                      </p>
                      <h3 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-2">
                        {director.name}
                      </h3>
                      <p className="text-sm font-semibold text-blue-300 uppercase tracking-[0.25em] mb-4">
                        {director.role}
                      </p>
                      <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                        {director.focus}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default LeadershipPage;