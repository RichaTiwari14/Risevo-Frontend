import React, { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import logo from "../../images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleServices = () => setServicesOpen((prev) => !prev);
  const closeServices = () => setServicesOpen(false);

  const services = [
    { name: "All Services", href: "/#service" },
    { name: "Residential Construction", href: "/residential" },
    { name: "Commercial Construction", href: "/commercial" },
    { name: "Infrastructure Development", href: "/infra" },
    { name: "Turnkey Solutions", href: "/turnkey" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section - bada, but compact height */}
        <a href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/35 to-orange-500/20 rounded-full blur-xl opacity-70 scale-110" />
            {/* Logo image */}
            <div className="relative h-12 w-12 sm:h-13 sm:w-13 rounded-full border border-amber-400/50 overflow-hidden bg-black/70 shadow-lg shadow-amber-500/50">
              <img
                src={logo}
                alt="Risevo Construction Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-amber-400">
              RISEVO
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-300/80">
              PROJECT &amp; DEVELOPERS
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3 text-[13px]">
          <a
            href="/"
            className="px-3 py-1.5 rounded-lg text-white/90 hover:text-amber-400 hover:bg-white/5 transition-all duration-150"
          >
            HOME
          </a>

          {/* Services Dropdown – CLICK ONLY */}
          <div className="relative">
            <button
              type="button"
              onClick={toggleServices}
              className="px-3 py-1.5 rounded-lg text-white/90 hover:text-amber-400 hover:bg-white/5 transition-all duration-150 flex items-center gap-1.5"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              <span>SERVICES
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`
                absolute left-0 mt-2 w-72 rounded-xl bg-black/98
                border border-amber-400/30 shadow-2xl shadow-black/60
                backdrop-blur-xl overflow-hidden
                transition-all duration-200
                ${
                  servicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1"
                }
              `}
            >
              {/* Gradient top border */}
              <div className="h-0.5 bg-gradient-to-r from-amber-400/0 via-amber-400/60 to-amber-400/0" />

              <div className="py-1">
                {services.map((service, idx) => (
                  <a
                    key={service.href}
                    href={service.href}
                    onClick={closeServices}
                    className={`
                      group flex items-center justify-between
                      px-3.5 py-2.5 text-xs rounded-md transition-all duration-150
                      ${
                        idx === 0
                          ? "bg-gradient-to-r from-amber-400/15 to-orange-500/15 text-amber-300 font-semibold border border-amber-400/30 mx-2 mt-1 mb-1"
                          : "text-white/85 hover:text-amber-400 hover:bg-white/5 mx-1"
                      }
                    `}
                  >
                    <span>{service.name}</span>
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 text-amber-300 transition-opacity duration-150"
                    />
                  </a>
                ))}
              </div>

              {/* Gradient bottom border */}
              <div className="h-0.5 bg-gradient-to-r from-amber-400/0 via-amber-400/50 to-amber-400/0" />
            </div>
          </div>

          <a
            href="/#about"
            className="px-3 py-1.5 rounded-lg text-white/90 hover:text-amber-400 hover:bg-white/5 transition-all duration-150"
          >
            ABOUT
          </a>

          <a
            href="/foundation"
            className="px-3 py-1.5 rounded-lg text-white/90 hover:text-amber-400 hover:bg-white/5 transition-all duration-150"
          >
            
            FOUNDATION
          </a>

          <a
            href="/leadership"
            className="px-3 py-1.5 rounded-lg text-white/90 hover:text-amber-400 hover:bg-white/5 transition-all duration-150"
          >
            DIRECTOR
          </a>

          <a
            href="/#testimonials"
            className="px-3 py-1.5 rounded-lg text-white/90 hover:text-amber-400 hover:bg-white/5 transition-all duration-150"
          >
            
            TESTIMONIALS
          </a>

          <a
            href="/#gallery"
            className="px-3 py-1.5 rounded-lg text-white/90 hover:text-amber-400 hover:bg-white/5 transition-all duration-150"
          >GALLERY
            
          </a>
        </nav>

        {/* Right Side: CTA + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Desktop CTA Button */}
          <a
            href="/#contact"
            className="
              hidden md:inline-flex items-center gap-2
              rounded-lg bg-gradient-to-r from-amber-400 to-orange-500
              px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em]
              text-black shadow-md shadow-amber-500/40
              transition-all duration-150
              hover:shadow-amber-400/60 hover:scale-[1.03] active:scale-95
            "
          >
            CONTACT
            <ArrowRight size={14} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-amber-400/30 text-white hover:bg-white/5 transition-all duration-150"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden w-full bg-black/98 border-t border-amber-400/20 backdrop-blur-xl">
          <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 space-y-1 text-sm">
            <a
              href="/"
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-white/90 hover:text-amber-400 hover:bg-white/5 border-b border-white/10 transition-all"
            >
              Home
            </a>

            {/* Mobile Services */}
            <div className="border-b border-white/10 pb-1">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-white/90 hover:text-amber-400 hover:bg-white/5 transition-all flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="ml-2 mt-1 mb-2 space-y-1 bg-white/5 rounded-lg p-2">
                  {services.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      onClick={closeMenu}
                      className="block px-3 py-1.5 rounded text-xs text-white/80 hover:text-amber-400 hover:bg-white/5 transition-all"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/#about"
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-white/90 hover:text-amber-400 hover:bg:white/5 border-b border-white/10 transition-all"
            >
              About
            </a>

            <a
              href="/foundation"
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-white/90 hover:text-amber-400 hover:bg:white/5 border-b border-white/10 transition-all"
            >
              Foundation
            </a>

            <a
              href="/leadership"
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text:white/90 hover:text-amber-400 hover:bg:white/5 border-b border-white/10 transition-all"
            >
              Director
            </a>

            <a
              href="/#testimonials"
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-white/90 hover:text-amber-400 hover:bg:white/5 border-b border-white/10 transition-all"
            >
              Testimonials
            </a>

            <a
              href="/#gallery"
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-lg text-white/90 hover:text-amber-400 hover:bg:white/5 border-b border-white/10 transition-all"
            >
              Gallery
            </a>

            {/* Mobile CTA */}
            <a
              href="/#contact"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-black shadow-md shadow-amber-500/40 transition-all hover:scale-[1.03] active:scale-95"
            >
              Contact Us
              <ArrowRight size={14} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;