import React from 'react';

type SmallPointCardProps = {
  prop: string | number;
}

export default function SmallPointCard({ prop }: SmallPointCardProps) {
  return (
    <div className="w-[2cm] h-[4cm] flex flex-col items-center justify-center bg-white
      rounded-md shadow text-4xl font-bold text-gray-800 m-1 p-2">
      <span>{prop}</span>
    </div>
  );
}
