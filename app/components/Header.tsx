'use client';
import { useState, useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { setBadgeTitle } from "../store/badgeSlice";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [selectedNav, setSelectedNav] = useState("");
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(() => {
  const pathToLabelMap: Record<string, string> = {
    "/home": "Home",
    "/retrospective": "Retrospective",
    "/planning-poker": "Planning Poker",
  };

  const currentLabel = pathToLabelMap[pathname] || "Home";
  setSelectedNav(currentLabel);
  dispatch(setBadgeTitle(currentLabel));
  }, [pathname, dispatch]);

  const navOptions = [
    { label: "Home", href: "/home" },
    { label: "Retrospective", href: "/retrospective" },
    { label: "Planning Poker", href: "/planning-poker" },
  ];

  return (
    <header className="w-full flex items-center px-18 py-8">
        <Link href="/home" className="flex items-center" {...{ onClick: () => setSelectedNav("Home") }}>
          <Image
            src="/p.png"
            alt="Pointly Badge"
            width={90}
            height={90}
            className="rounded-full hover:opacity-90 transition shadow-md border border-gray-300 max-w-full h-auto bg-white"
          />
        </Link>
      <div className="flex items-center ml-[6cm]">
        {navOptions.map((option) => (
          <Link
            key={option.label}
            href={option.href}
            onClick={() => setSelectedNav(option.label)}
            className={`text-black text-lg px-5 py-2 rounded-full transition-all duration-200 cursor-pointer
              ${selectedNav === option.label
                ? "font-bold"
                : " hover:text-violet-800 font-semibold"
              }`}
          >
            {option.label}
          </Link>
        ))}
      </div>
      <div className="flex-1"></div>
      <Link
        href="#"
        className="px-4 py-2 rounded-lg border-2 font-semibold transition cursor-pointer
          bg-white border-violet-200 text-gray-700 hover:bg-violet-50
          focus:outline-none focus:ring-2 focus:ring-violet-300 text-base"
      >
        Sign In
      </Link>
    </header>
  );
}
