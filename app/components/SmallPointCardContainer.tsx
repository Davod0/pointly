'use client';
import { useState } from "react";
import Link from "next/link";
import SmallPointCard from "./SmallPointCard";
import styles from "./smallPointCardContainer.module.css";

export default function SmallPointCardContainer() {
  const SmallPointCardValues = ["☕️", 1, 2, 3, 5, 8, 16, 32];
  const [selectedValue, setSelectedValue] = useState<string | number>('');

  return (
    <div className="absolute bottom-[4cm] right-[5cm] flex flex-col items-center">
      {selectedValue === '' ? (
        <div className={`relative flex flex-col items-center mb-8 bottom-[0.5cm] ${styles.animateFloatUpDown}`}>
          <span className="bg-violet-200 text-violet-800 px-10 py-4 rounded-full font-bold shadow-md text-2xl">
            Choose your card
          </span>
          <svg
            className="absolute left-1/2 -translate-x-1/2 mt-[-2px]"
            width="32"
            height="20"
            viewBox="0 0 32 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ top: '100%' }}
          >
            <polygon points="16,20 0,0 32,0" fill="#C4B5FD" />
          </svg>
        </div>
      ) : (
        <Link
          href="/home"
          className="
            mb-8
            inline-block
            px-8 py-3
            rounded-full
            bg-violet-100
            text-violet-800
            font-semibold
            text-lg
            shadow
            border border-violet-300
            transition
            duration-300
            hover:bg-violet-200
            hover:scale-105
            focus:outline-none
            focus:ring-2
            focus:ring-violet-300
            cursor-pointer
            no-underline
          "
        >
          Create a room and invite your team
        </Link>
      )}

      <div className="flex flex-row items-center gap-[0.5cm]">
        {SmallPointCardValues.map((n) => (
          <SmallPointCard
            key={n}
            value={n}
            isSelected={selectedValue === n}
            onClick={() => setSelectedValue(n)}
          />
        ))}
      </div>
    </div>
  );
}
