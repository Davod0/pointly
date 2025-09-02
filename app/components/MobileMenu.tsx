'use client';
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PlaceHolder from "./PlaceHolder";

interface MobileMenuProps {
  navOptions: { label: string; href: string }[];
  selectedNav: string;
  setSelectedNav: (label: string) => void;
}

export default function MobileMenu({ navOptions, selectedNav, setSelectedNav }: MobileMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPlaceHolder, setShowPlaceHolder] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="lg:hidden relative" ref={menuRef}>
      <button
        onClick={(e) => {
          setMenuOpen(!menuOpen);
          e.currentTarget.blur();
        }}
        className="px-2 py-1 rounded-md border-2 border-violet-200 text-gray-700 bg-white hover:bg-violet-50
        focus:outline-none focus:ring-2 focus:ring-violet-300 transition cursor-pointer w-7 h-7 flex flex-col justify-center items-center
        sm:px-1.5 sm:py-1 sm:rounded-[6px] sm:w-9 sm:h-9"
      >
        <span className="block w-3.5 h-0.5 bg-black mb-1 sm:w-4"></span>
        <span className="block w-3.5 h-0.5 bg-black mb-1 sm:w-4"></span>
        <span className="block w-3.5 h-0.5 bg-black sm:w-4"></span>
      </button>
      {menuOpen && (
        <div className="absolute right-0 mt-1 w-28 bg-white border border-gray-200 rounded-[6px] shadow-lg z-50 flex flex-col py-0.5
        sm:mt-2 sm:w-32 sm:rounded-md sm:py-1">
          {navOptions.map((option) => (
            <Link
              key={option.label}
              href={option.href}
              onClick={() => { setSelectedNav(option.label); setMenuOpen(false); }}
              className={`px-2 py-1 text-xs text-gray-700 hover:bg-violet-50 cursor-pointer ${
                selectedNav === option.label ? "font-bold" : "font-medium"
              } rounded sm:px-3 sm:py-1 sm:text-sm`}
            >
              {option.label}
            </Link>
          ))}
          <div className="relative">
            <button
              onClick={() => { setShowPlaceHolder(true); setMenuOpen(false); }}
              className="px-2 py-1 text-xs text-gray-700 hover:bg-violet-50 cursor-pointer font-medium rounded sm:px-3 sm:py-1 sm:text-sm text-left"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
      {showPlaceHolder && (
        <div className="absolute right-0 mt-1 z- w-max">
          <PlaceHolder onClose={() => setShowPlaceHolder(false)} />
        </div>
      )}
    </div>
  );
}
