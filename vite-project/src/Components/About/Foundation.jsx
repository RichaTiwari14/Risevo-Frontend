import React from "react";
import {
  FiHeart,
  FiBookOpen,
  FiUsers,
  FiTarget,
  FiCheckCircle,
} from "react-icons/fi";

const Foundation = () => {
  return (
    <main className="relative overflow-hidden bg-slate-950 pt-24 pb-16 sm:pt-28 sm:pb-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="absolute right-[-60px] top-40 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute left-1/2 bottom-[-120px] h-80 w-80 -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* BREADCRUMB / SMALL TITLE */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
          <span className="inline-flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-amber-400" />
            Risevo Construction
          </span>
          <span className="text-slate-600">/</span>
          <span className="text-amber-300">Risevo Foundation</span>
        </div>

        {/* HERO */}
        <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,1.9fr)_minmax(0,1.3fr)] items-start">
          {/* Left: Intro */}
          <div>
            <h1 className="text-2.4xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-white">
              Extending our{" "}
              <span className="text-amber-400">
                impact beyond construction
              </span>
              .
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Risevo Foundation is the social initiative arm of{" "}
              <span className="font-semibold text-amber-200">
                Risevo Construction
              </span>
              . A dedicated portion of our earnings is reserved to support
              individuals and communities in genuine need – because growth
              means little if it is not shared.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              While we build structures that change skylines, the Foundation
              focuses on{" "}
              <span className="font-semibold text-amber-200">
                building lives, opportunities, and dignity
              </span>{" "}
              for those who need it the most.
            </p>

            {/* Key tag line */}
            <div className="mt-5 inline-flex flex-wrap gap-2">
              <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-200">
                Purpose with every project
              </span>
              <span className="rounded-full border border-slate-500/40 bg-slate-900/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.20em] text-slate-200">
                Community • Care • Opportunity
              </span>
            </div>
          </div>

          {/* Right: Impact overview card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 shadow-xl shadow-black/40 backdrop-blur-sm">
            <div className="border-b border-slate-800 px-5 py-4 sm:px-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Impact at a Glance
              </p>
              <p className="mt-2 text-[13px] sm:text-[14px] text-slate-200 leading-relaxed">
                Every Risevo project contributes directly to one or more
                Foundation initiatives, creating{" "}
                <span className="text-amber-300 font-semibold">
                  measurable and meaningful change
                </span>{" "}
                on the ground.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 px-4 py-4 sm:px-6 sm:py-5">
              <div>
                <p className="text-lg sm:text-xl font-bold text-amber-300">
                  100+
                </p>
                <p className="mt-1 text-[11px] sm:text-[12px] text-slate-300">
                  Children supported with education assistance.
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-amber-300">
                  50+
                </p>
                <p className="mt-1 text-[11px] sm:text-[12px] text-slate-300">
                  Families helped during critical medical needs.
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-amber-300">
                  25+
                </p>
                <p className="mt-1 text-[11px] sm:text-[12px] text-slate-300">
                  Community projects completed across local areas.
                </p>
              </div>
            </div>

            <div className="border-t border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent px-4 py-3 sm:px-6">
              <p className="text-[11px] sm:text-[12px] text-amber-100 leading-relaxed">
                When you partner with{" "}
                <span className="font-semibold">Risevo Construction</span>, you
                automatically become part of this impact story.
              </p>
            </div>
          </div>
        </div>

        {/* PRINCIPLES / WHAT IT STANDS FOR */}
        <section className="mt-12 sm:mt-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.5fr)] items-start">
            {/* Left: Narrative */}
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800 px-4 py-5 sm:px-6 sm:py-7 shadow-xl shadow-black/40">
              <h2 className="text-base sm:text-lg font-semibold text-white">
                What the Foundation stands for
              </h2>
              <p className="mt-3 text-[13px] sm:text-[14px] text-slate-300 leading-relaxed">
                Alongside our core construction business, we run the{" "}
                <span className="font-semibold text-amber-300">
                  Risevo Foundation
                </span>
                , where a fixed share of revenue from every project is
                earmarked to support{" "}
                <span className="font-semibold text-amber-200">
                  underprivileged individuals, families in crisis, and
                  community‑level initiatives
                </span>
                .
              </p>
              <p className="mt-3 text-[13px] sm:text-[14px] text-slate-300 leading-relaxed">
                We believe{" "}
                <span className="font-semibold text-amber-200">
                  development is complete only when society progresses with us
                </span>
                . The Foundation is our structured and transparent way of
                giving back.
              </p>

              <ul className="mt-4 space-y-2.5 text-[13px] sm:text-[14px] text-slate-100">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>
                    Supporting education for deserving children from
                    financially weaker backgrounds.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>
                    Assisting families facing medical, housing, or urgent
                    financial challenges.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>
                    Enabling small but meaningful community improvements
                    that uplift everyday life.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Pillars / Focus Areas */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Core Focus Areas
              </p>

              <div className="mt-4 grid gap-3 sm:gap-4 md:grid-cols-3">
                {/* Education */}
                <div className="rounded-xl bg-slate-900/70 border border-slate-800 px-3 py-3 sm:px-4 sm:py-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-amber-500/15 p-2 text-amber-300">
                      <FiBookOpen className="h-4 w-4" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                      Education
                    </p>
                  </div>
                  <p className="mt-2 text-[11px] sm:text-[12px] text-slate-300 leading-relaxed">
                    School fees, books, uniforms and basic essentials for
                    bright students from low‑income families.
                  </p>
                </div>

                {/* Care & Relief */}
                <div className="rounded-xl bg-slate-900/70 border border-slate-800 px-3 py-3 sm:px-4 sm:py-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-amber-500/15 p-2 text-amber-300">
                      <FiHeart className="h-4 w-4" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                      Care & Relief
                    </p>
                  </div>
                  <p className="mt-2 text-[11px] sm:text-[12px] text-slate-300 leading-relaxed">
                    Emergency support in times of medical need, crises and
                    unexpected hardships.
                  </p>
                </div>

                {/* Community */}
                <div className="rounded-xl bg-slate-900/70 border border-slate-800 px-3 py-3 sm:px-4 sm:py-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-amber-500/15 p-2 text-amber-300">
                      <FiUsers className="h-4 w-4" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                      Community
                    </p>
                  </div>
                  <p className="mt-2 text-[11px] sm:text-[12px] text-slate-300 leading-relaxed">
                    Local initiatives for better amenities, small
                    infrastructure and needs‑based interventions.
                  </p>
                </div>
              </div>

              {/* Small note */}
              <p className="mt-4 text-[11px] sm:text-[12px] text-slate-400 leading-relaxed">
                If you know an individual or community that genuinely needs
                help, you can share details with the{" "}
                <span className="text-amber-300 font-medium">
                  Risevo Foundation team
                </span>{" "}
                through our contact section.
              </p>
            </div>
          </div>
        </section>

        {/* HOW WE WORK / PROCESS */}
        <section className="mt-12 sm:mt-16">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-5 sm:px-6 sm:py-7 shadow-xl shadow-black/40">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  How the Foundation Operates
                </p>
                <h3 className="mt-2 text-base sm:text-lg font-semibold text-white">
                  A simple, transparent and accountable process.
                </h3>
              </div>
              <div className="text-[11px] sm:text-[12px] text-slate-300 max-w-sm">
                We follow a clear flow to ensure that every contribution is
                used responsibly and reaches the right people.
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-4">
              {/* Step 1 */}
              <div className="relative rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-4 sm:px-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="rounded-lg bg-amber-500/15 p-2 text-amber-300">
                    <FiTarget className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Step 01
                  </span>
                </div>
                <p className="mt-2 text-[12px] font-semibold text-slate-100">
                  Identification
                </p>
                <p className="mt-1 text-[11px] sm:text-[12px] text-slate-300 leading-relaxed">
                  Genuine cases are identified through local references,
                  our team, and verified leads.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-4 sm:px-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="rounded-lg bg-amber-500/15 p-2 text-amber-300">
                    <FiCheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Step 02
                  </span>
                </div>
                <p className="mt-2 text-[12px] font-semibold text-slate-100">
                  Verification
                </p>
                <p className="mt-1 text-[11px] sm:text-[12px] text-slate-300 leading-relaxed">
                  Background, documents and requirements are verified to
                  ensure authentic need.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-4 sm:px-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="rounded-lg bg-amber-500/15 p-2 text-amber-300">
                    <FiHeart className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Step 03
                  </span>
                </div>
                <p className="mt-2 text-[12px] font-semibold text-slate-100">
                  Support
                </p>
                <p className="mt-1 text-[11px] sm:text-[12px] text-slate-300 leading-relaxed">
                  Assistance is extended in the form of fees, supplies,
                  medical aid or direct relief.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-4 sm:px-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="rounded-lg bg-amber-500/15 p-2 text-amber-300">
                    <FiUsers className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Step 04
                  </span>
                </div>
                <p className="mt-2 text-[12px] font-semibold text-slate-100">
                  Follow‑up
                </p>
                <p className="mt-1 text-[11px] sm:text-[12px] text-slate-300 leading-relaxed">
                  We stay connected wherever possible to ensure that support
                  creates lasting impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="mt-10 sm:mt-14">
          <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent px-4 py-4 sm:px-6 sm:py-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-100">
                  Join the impact
                </p>
                <p className="mt-1 text-sm sm:text-base text-amber-50">
                  Have a genuine case to share or want to know more about the
                  Risevo Foundation?
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
                <p className="text-[11px] sm:text-[12px] text-amber-50/80">
                  Reach out through our contact section and our team will
                  connect with you.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full border border-amber-300/60 bg-black/30 px-4 py-2 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.18em] text-amber-100 shadow-md shadow-amber-500/30 hover:bg-amber-300 hover:text-black transition"
                >
                  Contact Foundation Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Foundation;