import { useState } from "react";
import Link from "next/link";
import PointCard from "./PointCard";

export default function PointCardContainer() {
  const PointCardValues = ["☕️", 1, 2, 3, 5, 8, 16, 32];
  const [selectedValue, setSelectedValue] = useState<string | number>("");

  return (
    <div
      className="
        flex flex-col items-center justify-center
        mt-6 sm:mt-8 lg:mt-0
        w-full lg:w-auto
        px-2 sm:px-4
      "
    >
      {selectedValue === "" ? (
        <span className="mb-4 text-sm sm:text-base md:text-lg font-medium text-gray-700 tracking-normal text-center">
          Select Your Card
        </span>
      ) : (
        <Link
          href="/planning-poker/session-start"
          className="mb-6 inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full
            bg-violet-100 text-violet-800 font-semibold text-sm sm:text-base md:text-lg shadow
            border border-violet-300 transition duration-300 hover:bg-violet-200 hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-violet-300 cursor-pointer no-underline"
        >
          Create a room and invite your team
        </Link>
      )}

      <div
        className="
          flex flex-wrap justify-center items-center
          gap-3 sm:gap-4 md:gap-4 lg:gap-3 xl:gap-4
        "
      >
        {PointCardValues.map((n) => (
          <div key={n}>
            <PointCard
              value={n}
              isSelected={selectedValue === n}
              onClick={() => setSelectedValue(n)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
