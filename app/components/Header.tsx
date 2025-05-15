'use client';

import { useState } from "react";

export default function Header() {
  const [selectedNav, setSelectedNav] = useState("Home");

  const navOptions = [
    { label: "Home", href: "/home" },
    { label: "Retrospective", href: "/home" },
    { label: "Planning Poker", href: "/planning-poker" },
  ];

  return (
    <header className="w-full flex items-center px-16 py-8">
      <span className="text-2xl font-bold text-violet-500">
        Welcome to Pointly
      </span>
      <div className="flex items-center ml-[7cm] gap-1">
        {navOptions.map((option) => (
          <a
            key={option.label}
            href={option.href}
            onClick={() => setSelectedNav(option.label)}
            className={`
              text-black font-semibold text-lg px-4 py-2 rounded-lg transition-all duration-200
              ${
                selectedNav === option.label
                  ? "bg-violet-100 shadow"
                  : "hover:bg-violet-100"
              }
              cursor-pointer
            `}
            style={{ fontWeight: selectedNav === option.label ? 700 : 600 }}
          >
            {option.label}
          </a>
        ))}
      </div>
      {/* Spacer to push Sign In to the right corner*/}
      <div className="flex-1"></div>
      <a
        href="#"
        className="bg-violet-400 hover:bg-violet-200 text-white py-2 px-6 rounded-xl text-lg font-semibold shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-violet-300"
      >
        Sign In
      </a>
    </header>
  );
}