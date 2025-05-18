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
        w-[2cm] h-[4cm] flex flex-col items-center justify-center
        rounded-md shadow text-4xl font-bold m-1 p-2 cursor-pointer
        transition duration-200
        ${ isSelected
          ? "bg-violet-100 text-violet-800 scale-110 -translate-y-2 ring-4 ring-violet-300"
          : "bg-white text-gray-800 hover:scale-110 hover:-translate-y-2"}
                `}>
      {value}
    </div>
  );
}
