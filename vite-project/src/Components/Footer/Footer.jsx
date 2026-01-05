// Footer.jsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

/* ===== Scroll only for HOME sections (Services etc.) ===== */
const ScrollLink = ({ to, children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(to)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document.querySelector(to)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-left hover:text-[#F5C041] transition-colors"
    >
      {children}
    </button>
  );
};

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
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#F5C041] via-[#5B86E5] to-[#F5C041]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid gap-8 lg:gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Risevo Project & Developers
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              From residential homes to large infrastructure, Risevo delivers
              reliable, quality-driven construction with transparent execution
              and on-time delivery.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-slate-200 text-xs hover:text-[#F5C041] hover:border-[#F5C041] transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#F5C041]">
                  Home
                </Link>
              </li>

              <li>
                <ScrollLink to="#service">Services</ScrollLink>
              </li>

              <li>
                <Link to="/leadership" className="hover:text-[#F5C041]">
                  Director
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#F5C041]">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#F5C041]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Infrastructure Development</li>
              <li>Turnkey Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
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
                  className="hover:text-[#F5C041]"
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
                  className="hover:text-[#F5C041]"
                >
                  +91 93409 45885
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#F5C041]" />
                <a
                  href="mailto:project@risevo.in"
                  className="hover:text-[#F5C041] break-all"
                >
                  project@risevo.in
                </a>
              </li>
            </ul>
          </div>
        </div>

       {/* Bottom */}
<div className="mt-6 border-t border-white/10 pt-3 flex justify-center">
  <p className="text-[11px] sm:text-xs text-slate-300 text-center">
    Powered By {"   "}
    <a
      href="https://wa.me/917470958844"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-1.5
        rounded-full px-3 py-0.5
        bg-yellow-500/10
        border border-yellow-400/70
        text-yellow-300 font-semibold
        shadow-[0_0_8px_rgba(250,204,21,0.45)]
        hover:bg-yellow-500/15 hover:text-yellow-200 hover:border-yellow-300
        transition-colors
      "
    >
      {/* chhota glow dot icon (solid yellow) */}
      <span className="inline-block h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_6px_rgba(250,204,21,0.8)]" />
      <span>MIND BRIDGE TECH</span>
    </a>
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;
