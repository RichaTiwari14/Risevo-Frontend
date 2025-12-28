// src/Components/Header/Header.jsx
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import logo from "../../images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        w-full
        border-b border-white/10
        bg-black/80 backdrop-blur-md
        overflow-x-hidden
      "
    >
      {/* Top bar */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo + name */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Risevo Construction Logo"
            className="h-10 w-10 rounded-full border border-white/25 object-cover shadow-sm shadow-black/40"
          />
          <div className="hidden sm:block leading-tight">
            <p className="text-[11px] font-semibold uppercase tracking-tight text-amber-300">
              Risevo
            </p>
            <p className="text-[10px] uppercase tracking-tight text-white/70">
              Construction
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/85 relative">
          <a href="/" className="hover:text-amber-400 transition-colors">
            Home
          </a>

          {/* SERVICES + DROPDOWN */}
          <div className="relative group">
            <a
              href="/#service"
              className="inline-flex items-center gap-1 hover:text-amber-400 transition-colors"
            >
              <span>Services</span>
              <svg
                className="h-3.5 w-3.5 mt-[1px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.178l3.71-3.946a.75.75 0 111.08 1.04l-4.25 4.52a.75.75 0 01-1.08 0l-4.25-4.52a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 hidden min-w-[220px] rounded-xl bg-black/95 border border-white/10 shadow-xl group-hover:block">
              <a
                href="/#service"
                className="block px-4 py-2.5 text-xs text-white/90 hover:bg-white/10"
              >
                All Services
              </a>
              <a
                href="/residential"
                className="block px-4 py-2.5 text-xs text-white/90 hover:bg-white/10"
              >
                Residential Construction
              </a>
              <a
                href="/commercial"
                className="block px-4 py-2.5 text-xs text-white/90 hover:bg-white/10"
              >
                Commercial Construction
              </a>
              <a
                href="/infra"
                className="block px-4 py-2.5 text-xs text-white/90 hover:bg-white/10"
              >
                Infrastructure Development
              </a>
              <a
                href="/turnkey"
                className="block px-4 py-2.5 text-xs text-white/90 hover:bg-white/10"
              >
                Turnkey Solutions
              </a>
            </div>
          </div>

          {/* Direct links */}
          <a
            href="/#about"
            className="hover:text-amber-400 transition-colors"
          >
            About
          </a>

          {/* Foundation page */}
          <a
            href="/foundation"
            className="hover:text-amber-400 transition-colors"
          >
            Foundation
          </a>

          {/* Director / Leadership page */}
          <a
            href="/leadership"
            className="hover:text-amber-400 transition-colors"
          >
            Director
          </a>

          <a
            href="/#testimonials"
            className="hover:text-amber-400 transition-colors"
          >
            Testimonials
          </a>

          {/* Gallery link */}
          <a
            href="/#gallery"
            className="hover:text-amber-400 transition-colors"
          >
            Gallery
          </a>
        </nav>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Desktop CTA */}
          <a
            href="/#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 lg:px-5 py-2 text-xs font-semibold uppercase tracking-tight text-black shadow-md shadow-amber-500/40 transition hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-amber-400/60"
          >
            Contact
            <FiArrowRight className="h-4 w-4" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              // X icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-black/95 text-white border-t border-white/10">
          <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 space-y-1 text-sm">
            <a
              href="/"
              onClick={closeMenu}
              className="block py-2 border-b border-white/10 hover:text-amber-400"
            >
              Home
            </a>

            {/* Services + sub items (mobile) */}
            <div className="border-b border-white/10 pb-2 mb-1">
              <a
                href="/#service"
                onClick={closeMenu}
                className="block py-2 hover:text-amber-400"
              >
                Services
              </a>
              <div className="ml-4 mt-1 space-y-1 text-[13px] text-white/80">
                <a
                  href="/residential"
                  onClick={closeMenu}
                  className="block py-1 hover:text-amber-400"
                >
                  Residential Construction
                </a>
                <a
                  href="/commercial"
                  onClick={closeMenu}
                  className="block py-1 hover:text-amber-400"
                >
                  Commercial Construction
                </a>
                <a
                  href="/infra"
                  onClick={closeMenu}
                  className="block py-1 hover:text-amber-400"
                >
                  Infrastructure Development
                </a>
                <a
                  href="/turnkey"
                  onClick={closeMenu}
                  className="block py-1 hover:text-amber-400"
                >
                  Turnkey Solutions
                </a>
              </div>
            </div>

            <a
              href="/residential"
              onClick={closeMenu}
              className="block py-2 border-b border-white/10 hover:text-amber-400"
            >
              Residential
            </a>
            <a
              href="/infra"
              onClick={closeMenu}
              className="block py-2 border-b border-white/10 hover:text-amber-400"
            >
              Infrastructure
            </a>
            <a
              href="/turnkey"
              onClick={closeMenu}
              className="block py-2 border-b border-white/10 hover:text-amber-400"
            >
              Turnkey
            </a>

            <a
              href="/#about"
              onClick={closeMenu}
              className="block py-2 border-b border-white/10 hover:text-amber-400"
            >
              About
            </a>

            {/* Foundation (mobile) -> /foundation */}
            <a
              href="/foundation"
              onClick={closeMenu}
              className="block py-2 border-b border-white/10 hover:text-amber-400"
            >
              Foundation
            </a>

            {/* Director (mobile) -> /leadership */}
            <a
              href="/leadership"
              onClick={closeMenu}
              className="block py-2 border-b border-white/10 hover:text-amber-400"
            >
              Director
            </a>

            <a
              href="/#testimonials"
              onClick={closeMenu}
              className="block py-2 border-b border-white/10 hover:text-amber-400"
            >
              Testimonials
            </a>

            {/* Gallery link mobile */}
            <a
              href="/#gallery"
              onClick={closeMenu}
              className="block py-2 border-b border-white/10 hover:text-amber-400"
            >
              Gallery
            </a>

            {/* Mobile CTA */}
            <a
              href="/#contact"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-amber-400 px-4 py-2.5 text-xs font-semibold uppercase tracking-tight text-black shadow-md shadow-amber-500/40 transition hover:bg-amber-300"
            >
              Contact
              <FiArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;