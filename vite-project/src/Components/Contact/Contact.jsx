// src/Components/Contact/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

const container = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.15 * i },
  }),
};

// Web3Forms access key (agar chaaho to .env me daal sakte ho)
const WEB3FORMS_ACCESS_KEY = "c0766d3b-8190-4f52-ac8f-85a80d1edd2a";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const form = e.target;
      const formData = new FormData(form);

      // Web3Forms ke liye access_key add karo
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);

      const json = JSON.stringify(Object.fromEntries(formData));

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          ok: true,
          msg: "Thank you. We have received your project details.",
        });
        form.reset();
      } else {
        setStatus({
          ok: false,
          msg: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        ok: false,
        msg: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-[#F5F7FB] to-slate-100 py-16 sm:py-20 lg:py-24"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-28 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full bg-amber-200/60 blur-3xl" />
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
          <p className="inline-flex items-center justify-center rounded-full border border-sky-200/80 bg-white/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-900/90 shadow-sm">
            CONTACT US
          </p>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-sky-500 to-blue-700">
              LET&apos;S DISCUSS YOUR NEXT
            </span>
            <span className="block text-slate-900">
              CONSTRUCTION PROJECT
            </span>
          </h2>

          <p className="mt-3 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">
            Share your requirements and our team will get back to you with
            suitable options, timelines and a clear way forward.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.25fr)] items-start">
          {/* Left: Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            variants={container}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-white/95 border border-slate-100/80 shadow-lg shadow-slate-200/80 px-5 py-5 sm:px-6 sm:py-6">
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
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                    <FiPhone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Phone
                    </p>
                    <a
                      href="tel:+919340945885"
                      className="font-semibold text-slate-900 hover:text-sky-700 transition-colors"
                    >
                      +91-93409 45885
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                    <FiMail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Email
                    </p>
                    <a
                      href="mailto:project@risevo.in"
                      className="font-semibold text-slate-900 hover:text-sky-700 transition-colors break-all"
                    >
                      project@risevo.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                    <FiMapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Office Address
                    </p>
                    <p className="font-semibold leading-snug">
                      MIG 9/12 Pirda Ring Road No 3 Near Brothers Dhaba,Pirda2
                      <br />
                      Raipur, Chhattisgarh, India 492101
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
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
            <div className="rounded-2xl bg-sky-50/90 border border-sky-100 px-4 py-3 text-[12px] sm:text-[13px] text-slate-700 shadow-sm">
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
            className="rounded-2xl bg-white/95 border-t-4 border-t-sky-500/80 border border-slate-100/90 shadow-[0_18px_60px_rgba(15,23,42,0.16)] px-5 py-6 sm:px-7 sm:py-7 backdrop-blur-sm"
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
                    name="name"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-[13px] text-slate-800 shadow-inner shadow-slate-100 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-300/70"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-[13px] text-slate-800 shadow-inner shadow-slate-100 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-300/70"
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
                    name="email"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-[13px] text-slate-800 shadow-inner shadow-slate-100 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-300/70"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Project Type
                  </label>
                  <input
                    type="text"
                    name="project_type"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-[13px] text-slate-800 shadow-inner shadow-slate-100 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-300/70"
                    placeholder="e.g. Residential, Commercial, Infrastructure"
                  />
                </div>
              </div>

              {/* Row 3 – Location */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Location / City
                </label>
                <input
                  type="text"
                  name="location"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-[13px] text-slate-800 shadow-inner shadow-slate-100 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-300/70"
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
                  name="message"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-[13px] text-slate-800 shadow-inner shadow-slate-100 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-300/70 resize-none"
                  placeholder="Short brief about your project, plot size, timeline, etc."
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    inline-flex items-center justify-center gap-2 rounded-full
                    bg-gradient-to-r from-[#064789] via-sky-700 to-[#053467]
                    px-6 sm:px-8 py-2.5
                    text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em]
                    text-white shadow-md shadow-slate-500/40
                    hover:from-[#053467] hover:to-sky-800
                    transition-transform transition-colors
                    duration-200
                    hover:scale-[1.02]
                    w-full sm:w-auto
                    disabled:opacity-60 disabled:cursor-not-allowed
                  "
                >
                  {isSubmitting ? "Sending..." : "Submit Details"}
                  <FiArrowRight className="h-4 w-4" />
                </button>

                {status && (
                  <p
                    className={`mt-3 text-xs sm:text-[13px] ${
                      status.ok ? "text-emerald-600" : "text-red-600"
                    }`}
                  >
                    {status.msg}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;