import React from 'react';


interface MiniVotingCardProps {
  prop: number;
}

export default function MiniVotingCard({ prop }: MiniVotingCardProps) {

  return (
      <div className="w-[2cm] h-[4cm] flex items-center justify-center bg-white
      rounded-md shadow text-4xl font-bold text-gray-800 m-1 p-2">
      {prop}
    </div>
  );
}
