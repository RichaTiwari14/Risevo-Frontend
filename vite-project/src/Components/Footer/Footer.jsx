// Footer.jsx
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      Icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/risevo_project_developers/",
    },
    {
      Icon: FaYoutube,
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCbfde5GJZczh_ddozGSMqpw",
    },
    {
      Icon: FaTwitter,
      label: "X (Twitter)",
      href: "https://x.com/risevoproject?s=11",
    },
    {
      Icon: FaLinkedinIn,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/risevo-project-developers-404a853a1/",
    },
    {
      Icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/919340945885",
    },
  ];

  return (
    <footer className="relative bg-[#012943] text-slate-200 pt-8 pb-4 mt-8">
      {/* top gradient line */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#F5C041] via-[#5B86E5] to-[#F5C041]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* main grid */}
        <div className="grid gap-8 lg:gap-10 md:grid-cols-4">
          {/* Brand + text */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              Risevo Construction
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              From residential homes to large infrastructure, Risevo delivers
              reliable, quality‑driven construction with transparent execution
              and on‑time delivery.
            </p>

            {/* Social icons */}
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-slate-200 text-xs hover:text-[#F5C041] hover:border-[#F5C041] transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-[#F5C041] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="hover:text-[#F5C041] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#F5C041] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#F5C041] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#F5C041] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 tracking-tight">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Infrastructure Development</li>
              <li>Turnkey Solutions</li>
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 tracking-tight">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-0.5 text-[#F5C041]" />
                <span>Raipur, Chhattisgarh, India</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#F5C041]" />
                <a
                  href="tel:+919340945885"
                  className="hover:text-[#F5C041] transition-colors"
                >
                  +91 93409 45885
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-[#25D366]" />
                <a
                  href="https://wa.me/919340945885"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F5C041] transition-colors"
                >
                  +91 93409 45885
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#F5C041]" />
                <a
                  href="mailto:info@risevo.com"
                  className="hover:text-[#F5C041] transition-colors break-all"
                >
                  project@risevo.in
                </a>
              </li>
            </ul>

          
          </div>
        </div>

        {/* bottom center line */}
        <div className="mt-6 border-t border-white/10 pt-3 flex justify-center">
          <p className="text-[11px] sm:text-xs text-slate-400 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-200">Risevo Construction</span>. All
            rights reserved. | Designed by{" "}
            <span className="text-[#F5C041] font-semibold">MindBridge Tech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;