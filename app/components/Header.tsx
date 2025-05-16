'use client';
import { useState, useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { setBadgeTitle } from "../store/badgeSlice";
import Link from "next/link";

export default function Header() {
  const [selectedNav, setSelectedNav] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedNav) {
      dispatch(setBadgeTitle(selectedNav));
    }
  }, [selectedNav, dispatch]);

  const navOptions = [
    { label: "Home", href: "/home" },
    { label: "Retrospective", href: "/retrospective " },
    { label: "Planning Poker", href: "/planning-poker" },
  ];

  return (
    <header className="w-full flex items-center px-16 py-8">
      <span className="text-2xl font-bold text-violet-800">
        Welcome to Pointly
      </span>
      <div className="flex items-center ml-[7cm]">
          {navOptions.map((option) => (
          <Link
            key={option.label}
            href={option.href}
            onClick={() => setSelectedNav(option.label)}
            className={`text-black text-lg px-5 py-2 rounded-full transition-all duration-200
              ${selectedNav === option.label ? "bg-violet-100 shadow font-bold" : "hover:bg-violet-100 font-semibold"} cursor-pointer`}
            >
            {option.label}
         </Link>
          ))}
      </div>
      {/* Spacer to push Sign In to the right corner*/}
      <div className="flex-1"></div>
      <Link
        href="#"
        className="bg-violet-400 hover:bg-violet-200 text-white py-2 px-6 rounded-xl text-lg font-semibold shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-violet-300"
      >
        Sign In
      </Link>
    </header>
  );
}
