'use client';
import { useState } from "react";
import SmallPointCard from "./SmallPointCard";

export default function SmallCardBoard() {
  const SmallPointCardValues = ["☕️", 1, 2, 3, 5, 8, 16, 32];
  const [selected, setSelected] = useState<string | number>('');

  return (
      <div className="absolute bottom-[4cm] right-[5cm] flex flex-col items-center">
      <div className="flex flex-row items-center gap-[0.5cm]">
        {SmallPointCardValues.map((n) => (
            <SmallPointCard
            key={n}
            value={n}
            selected={selected === n}
            onClick={() => setSelected(n)}
            />
        ))}
      </div>
    </div>
  );
}
