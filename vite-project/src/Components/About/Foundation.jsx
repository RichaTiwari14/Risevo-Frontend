import React from "react";
import {
  FiHeart,
  FiBookOpen,
  FiUsers,
  FiTarget,
  FiCheckCircle,
  FiCloudRain,
} from "react-icons/fi";

import donateImg from "../../images/donate.jpg";
import donateImg2 from "../../images/donate2.jpg";
import treeImg from "../../images/tree.jpg";
import treeImg2 from "../../images/tree1.jpg";

const Foundation = () => {
  return (
    <main className="relative overflow-hidden bg-slate-950 pt-24 pb-16 sm:pt-28 sm:pb-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-[-60px] top-40 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute left-1/2 bottom-[-120px] h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* BREADCRUMB */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
          <span className="text-sky-300">RISEVO FOUNDATION</span>
        </div>

        {/* HERO */}
        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] items-start">
          {/* LEFT: INTRO */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-100">
              WE SUPPORT COMMUNITIES DURING FLOODS • CRISES • NATURAL DISASTERS
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
              A FOUNDATION THAT STANDS WITH COMMUNITIES IN EVERY CRISIS.
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
              <span className="font-semibold text-sky-200">Risevo Foundation</span> is the
              social impact arm of{" "}
              <span className="font-semibold text-sky-200">Risevo Construction</span>. A
              defined share of revenue from every project is allocated to support{" "}
              <span className="font-semibold text-orange-200">
                people and communities with genuine needs
              </span>
              — ranging from education and healthcare to urgent{" "}
              <span className="font-semibold text-sky-200">
                flood and disaster relief
              </span>
              .
            </p>

            {/* KEY TAGS */}
            <div className="mt-5 inline-flex flex-wrap gap-2">
              <span className="rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100">
                TRANSPARENT & ACCOUNTABLE GIVING
              </span>
              <span className="rounded-full border border-slate-600/60 bg-slate-900/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.20em] text-slate-100">
                EDUCATION • RELIEF • COMMUNITY RESILIENCE
              </span>
              <span className="rounded-full border border-orange-400/60 bg-orange-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.20em] text-orange-50">
                FLOOD & DISASTER RESPONSE
              </span>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-900/70 shadow-xl shadow-black/40 border border-sky-900/80">
            <img
              src={donateImg}
              alt="Risevo Foundation supporting people in need"
              className="h-56 w-full object-cover sm:h-64 md:h-72 opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 px-4 py-4 sm:px-5 sm:py-5">
              <div className="mt-3 flex flex-wrap gap-4 text-[11px] sm:text-[12px] text-slate-100">
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>

        {/* WHAT WE STAND FOR + KEY AREAS */}
        <section className="mt-14">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            {/* LEFT: NARRATIVE */}
            <div className="rounded-2xl bg-slate-900/80 border border-sky-900 px-4 py-5 sm:px-6 sm:py-7 shadow-xl shadow-black/40">
              <h2 className="text-base sm:text-lg font-semibold text-white uppercase">
                WHAT THE FOUNDATION STANDS FOR
              </h2>
              <p className="mt-3 text-[13px] sm:text-[14px] text-slate-200 leading-relaxed">
                The{" "}
                <span className="font-semibold text-sky-200">Risevo Foundation</span>{" "}
                channels a fixed share of revenue from each project into{" "}
                <span className="font-semibold text-orange-200">
                  direct, responsible support
                </span>{" "}
                for underprivileged individuals, families in crisis and
                vulnerable communities.
              </p>
              <p className="mt-3 text-[13px] sm:text-[14px] text-slate-200 leading-relaxed">
                Our objective is to provide{" "}
                <span className="font-semibold text-sky-200">immediate relief</span>{" "}
                where it is urgently required, and to build{" "}
                <span className="font-semibold text-sky-200">long‑term dignity</span> and
                stability wherever possible — through education, healthcare and essential
                infrastructure.
              </p>

              <ul className="mt-4 space-y-2.5 text-[13px] sm:text-[14px] text-slate-100">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>
                    Transparent use of funds with a clear focus on verified needs.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>
                    Rapid response during floods, natural disasters and large‑scale
                    emergencies.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>
                    Compassionate, dignified support that respects every person we serve.
                  </span>
                </li>
              </ul>
            </div>

            {/* RIGHT: PRIMARY AREAS */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                OUR PRIMARY AREAS OF SUPPORT
              </p>

              <div className="mt-5 space-y-4">
                {/* EDUCATION */}
                <div className="flex gap-3 rounded-xl bg-slate-900/70 px-3 py-3 sm:px-4 sm:py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                    <FiBookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-100">
                      EDUCATION SUPPORT
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-[12px] text-slate-200 leading-relaxed">
                      Assistance with school and college fees, books, uniforms and
                      essential learning resources for capable students from
                      low‑income backgrounds.
                    </p>
                  </div>
                </div>

                {/* CARE & MEDICAL RELIEF */}
                <div className="flex gap-3 rounded-xl bg-slate-900/70 px-3 py-3 sm:px-4 sm:py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                    <FiHeart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-100">
                      CARE & MEDICAL RELIEF
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-[12px] text-slate-200 leading-relaxed">
                      Support for medical emergencies, life‑saving treatments and
                      sudden financial shocks that place families under severe
                      pressure.
                    </p>
                  </div>
                </div>

                {/* FLOOD & DISASTER RELIEF */}
                <div className="flex gap-3 rounded-xl bg-slate-900/70 px-3 py-3 sm:px-4 sm:py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 text-orange-300">
                    <FiCloudRain className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-100">
                      FLOOD & DISASTER RELIEF
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-[12px] text-slate-200 leading-relaxed">
                      Rapid relief during floods and natural disasters, including
                      food, safe drinking water, clothing, temporary shelter and
                      on‑ground volunteer support.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[11px] sm:text-[12px] text-slate-400 leading-relaxed">
                If you are aware of an{" "}
                <span className="text-sky-300">
                  individual, family or disaster‑affected community
                </span>{" "}
                requiring legitimate support, please reach out to the{" "}
                <span className="text-orange-300 font-medium">
                  Risevo Foundation
                </span>{" "}
                through our contact section.
              </p>
            </div>
          </div>
        </section>

        {/* FLOOD / DISASTER SECTION */}
        <section className="mt-14">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] items-center rounded-2xl border border-sky-900 bg-slate-900/80 px-4 py-6 sm:px-8 sm:py-8 shadow-xl shadow-black/40">
            {/* LEFT: FLOOD CONTENT */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200">
                FLOODS & NATURAL DISASTERS
              </p>
              <h3 className="mt-2 text-lg sm:text-xl font-semibold text-white uppercase">
                ON‑GROUND FLOOD RELIEF & COMMUNITY SUPPORT
              </h3>
              <p className="mt-3 text-[13px] sm:text-[14px] text-slate-100 leading-relaxed">
                When floods or natural disasters affect a region, our first
                priority is to reach the{" "}
                <span className="font-semibold text-orange-200">
                  most severely impacted families
                </span>{" "}
                as quickly and safely as possible. We work with local partners
                and volunteers to deliver{" "}
                <span className="font-semibold text-sky-200">
                  immediate, practical and meaningful assistance
                </span>
                .
              </p>

              <ul className="mt-3 space-y-1.5 text-[12px] sm:text-[13px] text-slate-100">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Rapid assessment of impacted areas and priority needs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>
                    Distribution of food, clean drinking water, clothing and
                    hygiene kits.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>
                    Support for temporary shelter, basic bedding and essential
                    household items.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>
                    Follow‑up assistance for families as they begin to rebuild
                    their homes and lives.
                  </span>
                </li>
              </ul>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl border border-sky-900/60 bg-slate-950">
                <img
                  src={donateImg2}
                  alt="Risevo Foundation providing flood and disaster relief on the ground"
                  className="h-48 w-full object-cover sm:h-56 md:h-60"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ENVIRONMENT & TREE PLANTATION SECTION */}
        <section className="mt-14">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1.1fr)] items-center rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-900/60 via-slate-950 to-slate-950 px-4 py-6 sm:px-8 sm:py-8 shadow-xl shadow-black/40">
            {/* LEFT: TEXT */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-200">
                GREEN INITIATIVES • TREE PLANTATION
              </p>
              <h3 className="mt-2 text-lg sm:text-xl font-semibold text-white uppercase">
                RESTORING THE ENVIRONMENT ALONGSIDE REBUILDING COMMUNITIES
              </h3>
              <p className="mt-3 text-[13px] sm:text-[14px] text-slate-100 leading-relaxed">
                Floods and natural disasters impact not only people and
                infrastructure, but also the natural ecosystems around them. A
                dedicated part of the{" "}
                <span className="font-semibold text-emerald-200">
                  Risevo Foundation&apos;s work
                </span>{" "}
                focuses on{" "}
                <span className="font-semibold text-emerald-200">
                  tree plantation and environmental restoration
                </span>{" "}
                in high‑risk and affected areas.
              </p>
              <ul className="mt-3 space-y-1.5 text-[12px] sm:text-[13px] text-slate-100">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    Tree plantation drives around project locations and
                    flood‑prone zones.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    Targeted plantation to help reduce soil erosion, support
                    ground‑water recharge and improve local micro‑climates.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    Collaboration with local communities, schools and volunteers
                    to create sustainable green belts.
                  </span>
                </li>
              </ul>
            </div>

            {/* RIGHT: IMAGE GRID WITH tree & tree1 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Main image */}
              <div className="col-span-2 overflow-hidden rounded-xl border border-emerald-500/60 bg-slate-950">
                <img
                  src={treeImg}
                  alt="Tree plantation initiative by Risevo Foundation"
                  className="h-40 sm:h-52 md:h-56 w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Secondary image */}
              <div className="overflow-hidden rounded-xl border border-emerald-500/40 bg-slate-950">
                <img
                  src={treeImg2}
                  alt="Volunteers planting trees with Risevo Foundation"
                  className="h-28 sm:h-32 md:h-36 w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text card */}
              <div className="flex flex-col justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-3 py-3 sm:px-4 sm:py-4">
                <p className="text-[11px] sm:text-[12px] text-emerald-100 font-semibold uppercase tracking-[0.2em]">
                  A GREENER FUTURE
                </p>
                <p className="mt-1 text-[11px] sm:text-[12px] text-slate-100 leading-relaxed">
                  Each year, the Foundation supports new plantation drives that
                  contribute to{" "}
                  <span className="font-semibold text-emerald-200">
                    safer, greener and healthier
                  </span>{" "}
                  neighbourhoods for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="mt-14">
          <div className="rounded-2xl border border-sky-900 bg-slate-950/90 px-4 py-5 sm:px-6 sm:py-7 shadow-xl shadow-black/40">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  HOW THE FOUNDATION WORKS
                </p>
                <h3 className="mt-2 text-base sm:text-lg font-semibold text-white uppercase">
                  SIMPLE, CLEAR AND RESPONSIBLE
                </h3>
              </div>
              <div className="text-[11px] sm:text-[12px] text-slate-300 max-w-sm">
                We follow a straightforward process to ensure that{" "}
                <span className="font-semibold text-sky-200">
                  every contribution and every action
                </span>{" "}
                is used wisely and reaches a genuine need.
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-4">
              {/* STEP 1 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-300">
                    <FiTarget className="h-5 w-5" />
                  </div>
                  <p className="text-[12px] font-semibold text-slate-100 uppercase">
                    01 — IDENTIFY
                  </p>
                </div>
                <p className="text-[11px] sm:text-[12px] text-slate-300 leading-relaxed">
                  We identify genuine cases through local references, verified
                  partners, our internal teams and on‑ground information during
                  crises.
                </p>
              </div>

              {/* STEP 2 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-300">
                    <FiCheckCircle className="h-5 w-5" />
                  </div>
                  <p className="text-[12px] font-semibold text-slate-100 uppercase">
                    02 — VERIFY
                  </p>
                </div>
                <p className="text-[11px] sm:text-[12px] text-slate-300 leading-relaxed">
                  We verify backgrounds, documentation and on‑ground realities to
                  confirm that each request is authentic and that support is
                  appropriate.
                </p>
              </div>

              {/* STEP 3 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-orange-300">
                    <FiHeart className="h-5 w-5" />
                  </div>
                  <p className="text-[12px] font-semibold text-slate-100 uppercase">
                    03 — SUPPORT
                  </p>
                </div>
                <p className="text-[11px] sm:text-[12px] text-slate-300 leading-relaxed">
                  We provide focused assistance — such as education fees, medical
                  aid, relief kits or financial support — based on the actual
                  requirement.
                </p>
              </div>

              {/* STEP 4 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-300">
                    <FiUsers className="h-5 w-5" />
                  </div>
                  <p className="text-[12px] font-semibold text-slate-100 uppercase">
                    04 — FOLLOW‑UP
                  </p>
                </div>
                <p className="text-[11px] sm:text-[12px] text-slate-300 leading-relaxed">
                  Wherever possible, we remain in touch to understand the
                  long‑term impact and to assess if further support is required.
                </p>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </main>
  );
};

export default Foundation;