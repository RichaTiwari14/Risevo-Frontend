// src/Components/Contact/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";

const container = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.15 * i },
  }),
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // yaha tum apni form submit logic add kar sakte ho (API / Email etc.)
  };

  return (
    <section
      id="contact"
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={container}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="inline-flex items-center justify-center rounded-full border border-sky-200/70 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-900">
            CONTACT US
          </p>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            LET'S DISCUSS YOUR NEXT CONSTRUCTION PROJECT
          </h2>
          <p className="mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
            Share your requirements and our team will get back to you with
            suitable options, timelines and a clear way forward.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-start">
          {/* Left: Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            variants={container}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-white/95 border border-slate-100 shadow-[0_14px_45px_rgba(15,23,42,0.12)] px-5 py-5 sm:px-6 sm:py-6">
              <h3 className="text-sm sm:text-lg font-semibold text-[#064789]">
                Talk To Our Team
              </h3>
              <p className="mt-2 text-[12px] sm:text-[13px] text-slate-600 leading-relaxed">
                Whether it is a residential, commercial or infrastructure
                requirement, we are happy to understand your scope and suggest
                the best approach.
              </p>

              <div className="mt-4 space-y-3 text-[13px] sm:text-[14px] text-slate-700">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                    <FiPhone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Phone
                    </p>
                    <p className="font-semibold">+91-XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                    <FiMail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Email
                    </p>
                    <p className="font-semibold">info@risevo.in</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                    <FiMapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Office Address
                    </p>
                    <p className="font-semibold">
                      Your office address line 1
                      <br />
                      City, State, PIN
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                    <FiClock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Working Hours
                    </p>
                    <p className="font-semibold">
                      Monday – Saturday, 10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small note */}
            <div className="rounded-2xl bg-sky-50/80 border border-sky-100 px-4 py-3 text-[12px] sm:text-[13px] text-slate-700">
              <span className="font-semibold text-[#064789]">
                Prefer a site visit?
              </span>{" "}
              Share your location details in the form and our team will
              coordinate an on‑site discussion.
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            variants={container}
            className="rounded-2xl bg-white/95 border border-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.16)] px-5 py-6 sm:px-7 sm:py-7"
          >
            <h3 className="text-sm sm:text-lg font-semibold text-slate-900">
              Share Your Project Details
            </h3>
            <p className="mt-1 text-[12px] sm:text-[13px] text-slate-600">
              Fill in a few basic details and we&apos;ll get in touch within 24
              working hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* Row 1 */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2 text-[13px] text-slate-800 shadow-inner shadow-slate-100 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2 text-[13px] text-slate-800 shadow-inner shadow-slate-100 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-300"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2 text-[13px] text-slate-800 shadow-inner shadow-slate-100 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-300"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Project Type
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2 text-[13px] text-slate-800 shadow-inner shadow-slate-100 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-300"
                    placeholder="e.g. Residential, Commercial, Infrastructure"
                  />
                </div>
              </div>

              {/* Row 3 – only Location now */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Location / City
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2 text-[13px] text-slate-800 shadow-inner shadow-slate-100 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-300"
                  placeholder="Project location"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2 text-[13px] text-slate-800 shadow-inner shadow-slate-100 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-300"
                  placeholder="Short brief about your project, plot size, timeline, etc."
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="
                    inline-flex items-center gap-2 rounded-full
                    bg-[#064789] px-6 sm:px-8 py-2.5
                    text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em]
                    text-white shadow-md shadow-slate-500/40
                    hover:bg-[#053467] transition
                  "
                >
                  Submit Details
                  <FiArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;