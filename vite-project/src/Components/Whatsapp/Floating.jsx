import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const FloatingSocials = () => {
  const socials = [
    {
      icon: <FaInstagram className="text-lg" />,
      link: "https://www.instagram.com/risevo_project_developers/",
      bg: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400",
      hover: "hover:from-pink-600 hover:via-red-600 hover:to-yellow-500",
      label: "Instagram (Risevo Developers)",
    },
    {
      icon: <FaYoutube className="text-xl" />,
      link: "https://www.youtube.com/channel/UCbfde5GJZczh_ddozGSMqpw",
      bg: "bg-red-600",
      hover: "hover:bg-red-700",
      label: "YouTube Channel",
    },
    {
      icon: <FaTwitter className="text-lg" />,
      link: "https://x.com/risevoproject?s=11",
      bg: "bg-sky-500",
      hover: "hover:bg-sky-600",
      label: "X (Twitter)",
    },
    {
      icon: <FaLinkedinIn className="text-lg" />,
      link: "https://www.linkedin.com/in/risevo-project-developers-404a853a1/",
      bg: "bg-blue-600",
      hover: "hover:bg-blue-700",
      label: "LinkedIn",
    },
  
  ];

  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex flex-col space-y-3">
      {socials.map((s, index) => (
        <a
          key={index}
          href={s.link}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          title={s.label}
          className="group relative flex items-center"
        >
          {/* Icon button */}
          <span
            className={`flex items-center justify-center w-12 h-12 ${s.bg} text-white rounded-l-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl ${s.hover}`}
          >
            {s.icon}
          </span>

          {/* Hover label */}
          <span className="pointer-events-none absolute right-full mr-3 px-3 py-1 rounded-full bg-slate-900/90 text-xs text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
            {s.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingSocials;