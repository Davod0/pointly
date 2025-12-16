"use client";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { setBadgeTitle } from "../store/badgeSlice";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";


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
    const currentLabel = pathToLabelMap[pathname!] || "Home";
    setSelectedNav(currentLabel);
    dispatch(setBadgeTitle(currentLabel));
  }, [pathname, dispatch]);

  const navOptions = [
    { label: "Home", href: "/home" },
    { label: "Retrospective", href: "/retrospective" },
    { label: "Planning Poker", href: "/planning-poker" },
  ];

  return (
    <header className="w-full flex items-center justify-between px-6 sm:px-10 lg:px-18 py-6 lg:py-8 relative">
      <Link
        href="/home"
        className="flex items-center group"
        onClick={() => setSelectedNav("Home")}
      >
        <div className="relative">
          <Image
            src="/p.png"
            alt="Pointly Logo"
            width={90}
            height={90}
            className="rounded-2xl shadow-lg border border-gray-200 bg-white/80 backdrop-blur-sm transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-xl"
          />
          <span className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-violet-200/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>

        <div className="ml-3 hidden sm:flex flex-col">
          <span className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-500">
            Pointly
          </span>
          <span className="text-xs text-gray-400">
            Agile sessions made simple
          </span>
        </div>
      </Link>

      <nav
        className="hidden lg:flex items-center ml-25 xl:ml-[12cm] space-x-1
        rounded-full bg-white/70 backdrop-blur-sm border border-violet-100 px-1.5 py-1 shadow-sm"
      >
        {navOptions.map((option) => {
          const isActive = selectedNav === option.label;
          return (
            <Link
              key={option.label}
              href={option.href}
              onClick={() => setSelectedNav(option.label)}
              className={[
                "relative px-4 lg:px-5 py-2 text-sm lg:text-base rounded-full transition-all duration-200 cursor-pointer",
                "font-medium",
                isActive
                  ? "text-violet-800 bg-violet-50 shadow-[0_0_0_1px_rgba(139,92,246,0.15)]"
                  : "text-gray-700 hover:text-violet-800 hover:bg-violet-50/70",
              ].join(" ")}
            >
              {option.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center ml-auto space-x-3">
        <MobileMenu
          navOptions={navOptions}
          selectedNav={selectedNav}
          setSelectedNav={setSelectedNav}
        />
      </div>
    </header>
  );
}
