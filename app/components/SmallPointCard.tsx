import React from 'react';

interface SmallPointCardProps {
  value: string | number;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function SmallPointCard({ value, isSelected = false, onClick }: SmallPointCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center
        rounded-md shadow font-bold m-1 p-2 cursor-pointer
        transition duration-200
        w-12 h-18 text-md        /* mobile*/
        sm:w-14 sm:h-24 sm:text-1xl  /* tablet */
        md:w-16 md:h-26 md:text-2xl  /* small desktop */
        lg:w-16 lg:h-26 lg:text-2xl  /* desktop */
        xl:w-20 xl:h-30 xl:text-3xl  /* large desktop */
        ${isSelected
          ? "bg-violet-100 text-violet-800 scale-110 -translate-y-2 ring-4 ring-violet-300"
          : "bg-white text-gray-800 hover:scale-110 hover:-translate-y-2"}
      `}
    >
      {value}
    </div>
  );
}
