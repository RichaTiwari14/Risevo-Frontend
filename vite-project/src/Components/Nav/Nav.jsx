import React, { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const services = [
    { name: "All Services", href: "/#service" },
    { name: "Residential Construction", href: "/residential" },
    { name: "Commercial Construction", href: "/commercial" },
    { name: "Infrastructure Development", href: "/infra" },
    { name: "Turnkey Solutions", href: "/turnkey" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const closeDesktopServices = () => setDesktopServicesOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300 scale-110" />
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-xl border-2 border-amber-400/60 overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black shadow-lg shadow-amber-500/30 group-hover:shadow-amber-400/50 transition-all duration-300">
              <img
                src={logo}
                alt="Risevo Construction Logo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-amber-400 group-hover:text-amber-300 transition-colors">
              RISEVO
            </p>
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-amber-300/70 group-hover:text-amber-300 transition-colors">
              PROJECT & DEVELOPERS
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-[13px]">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg text-white/80 hover:text-amber-400 hover:bg-white/8 transition-all duration-200"
          >
            HOME
          </Link>

          {/* Desktop Services Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setDesktopServicesOpen((prev) => !prev)
              }
              className="px-4 py-2 rounded-lg text-white/80 hover:text-amber-400 hover:bg-white/8 transition-all duration-200 flex items-center gap-2"
              aria-haspopup="true"
              aria-expanded={desktopServicesOpen}
            >
              <span>SERVICES</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  desktopServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`
                absolute left-0 mt-2 w-72 rounded-xl bg-black/95
                border border-amber-400/40 shadow-2xl shadow-black/80
                backdrop-blur-xl overflow-hidden
                transition-all duration-300
                ${
                  desktopServicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }
              `}
            >
              <div className="h-px bg-gradient-to-r from-amber-400/0 via-amber-400/60 to-amber-400/0" />
              <div className="py-2">
                {services.map((service, idx) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    onClick={closeDesktopServices}
                    className={`
                      group flex items-center justify-between
                      px-4 py-2.5 text-xs rounded-lg transition-all duration-200
                      ${
                        idx === 0
                          ? "bg-gradient-to-r from-amber-400/20 to-orange-500/20 text-amber-300 font-semibold border border-amber-400/40 mx-2 my-1"
                          : "text-white/80 hover:text-amber-400 hover:bg-white/8 mx-1"
                      }
                    `}
                  >
                    <span>{service.name}</span>
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 text-amber-300 transition-opacity duration-200"
                    />
                  </Link>
                ))}
              </div>
              <div className="h-px bg-gradient-to-r from-amber-400/0 via-amber-400/50 to-amber-400/0" />
            </div>
          </div>

          <Link
            to="/about"
            className="px-4 py-2 rounded-lg text-white/80 hover:text-amber-400 hover:bg-white/8 transition-all duration-200"
          >
            ABOUT
          </Link>

          <Link
            to="/foundation"
            className="px-4 py-2 rounded-lg text-white/80 hover:text-amber-400 hover:bg-white/8 transition-all duration-200"
          >
            FOUNDATION
          </Link>

          <Link
            to="/leadership"
            className="px-4 py-2 rounded-lg text-white/80 hover:text-amber-400 hover:bg-white/8 transition-all duration-200"
          >
            DIRECTOR
          </Link>

          <Link
            to="/gallery"
            className="px-4 py-2 rounded-lg text-white/80 hover:text-amber-400 hover:bg-white/8 transition-all duration-200"
          >
            GALLERY
          </Link>
        </nav>

        {/* Right Side: CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="
              hidden md:inline-flex items-center gap-1.5
              rounded-lg bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600
              px-4 py-2 text-[11px] font-bold uppercase tracking-[0.13em]
              text-white shadow-md shadow-blue-500/40
              transition-all duration-200
              hover:shadow-blue-400/70 hover:scale-105 active:scale-95
            "
          >
            CONTACT
            <ArrowRight size={14} strokeWidth={3} />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-amber-400/40 text-amber-400 hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden w-full bg-black/98 border-t border-amber-400/20 backdrop-blur-xl max-h-[calc(100vh-4rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 space-y-2 text-sm">
            <Link
              to="/"
              onClick={closeMenu}
              className="block px-4 py-2.5 rounded-lg text-white/80 hover:text-amber-400 hover:bg-white/8 border-b border-white/10 transition-all"
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div className="border-b border-white/10">
              <button
                onClick={() =>
                  setMobileServicesOpen((prev) => !prev)
                }
                className="w-full text-left px-4 py-2.5 rounded-lg text-white/80 hover:text-amber-400 hover:bg-white/8 transition-all flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-2 mt-2 mb-2 space-y-1 bg-white/5 rounded-lg p-2 border border-white/10">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      onClick={closeMenu}
                      className="block px-3 py-1.5 rounded text-xs text-white/80 hover:text-amber-400 hover:bg-white/8 transition-all"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              onClick={closeMenu}
              className="block px-4 py-2.5 rounded-lg text-white/80 hover:text-amber-400 hover:bg-white/8 border-b border-white/10 transition-all"
            >
              About
            </Link>

            <Link
              to="/foundation"
              onClick={closeMenu}
              className="block px-4 py-2.5 rounded-lg text-white/80 hover:text-amber-400 hover:bg-white/8 border-b border-white/10 transition-all"
            >
              Foundation
            </Link>

            <Link
              to="/leadership"
              onClick={closeMenu}
              className="block px-4 py-2.5 rounded-lg text-white/80 hover:text-amber-400 hover:bg-white/8 border-b border-white/10 transition-all"
            >
              Director
            </Link>

            <Link
              to="/gallery"
              onClick={closeMenu}
              className="block px-4 py-2.5 rounded-lg text-white/80 hover:text-amber-400 hover:bg-white/8 border-b border-white/10 transition-all"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black shadow-lg shadow-amber-500/50 transition-all hover:scale-105 active:scale-95"
            >
              Contact Us
              <ArrowRight size={14} strokeWidth={3} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;