// src/components/FloatingLogo.jsx
import React from "react";
import Logo from "../../images/logo.png"; // square logo

const FloatingLogo = () => {
  return (
    <a
      href="/"
      className="fixed z-50 bottom-28 left-4 sm:bottom-32 sm:left-10"
      aria-label="Go to home"
    >
      <div className="relative h-24 w-24 sm:h-28 sm:w-28">
        {/* Main square box: border + subtle border glow + image */}
        <div
          className="
            relative h-full w-full
            rounded-2xl
            border-2 border-cyan-300/85
            bg-slate-950/95
            overflow-hidden
            flex items-center justify-center
            shadow-[0_0_8px_rgba(34,211,238,0.35)]
            hover:shadow-[0_0_12px_rgba(34,211,238,0.5)]
            transition-shadow duration-200
          "
        >
          <img
            src={Logo}
            alt="Company Logo"
            className="h-full w-full object-cover" // square image, edges == border
          />
        </div>
      </div>
    </a>
  );
};

export default FloatingLogo;