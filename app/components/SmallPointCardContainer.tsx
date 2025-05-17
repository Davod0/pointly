import { useState, useEffect } from "react";
import Link from "next/link";
import SmallPointCard from "./SmallPointCard";
import styles from "./smallPointCardContainer.module.css";

function useResponsiveCardCount() {
  const [count, setCount] = useState(8);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 1200) setCount(0);
      else if (width < 1400) setCount(4);
      else if (width < 1600) setCount(6);
      else setCount(8);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return count;
}

export default function SmallPointCardContainer() {
  const SmallPointCardValues = ["☕️", 1, 2, 3, 5, 8, 16, 32];
  const [selectedValue, setSelectedValue] = useState<string | number>('');
  const cardCount = useResponsiveCardCount();
  const visibleCards = SmallPointCardValues.slice(0, cardCount);
  const showBanner = cardCount > 0;

  return (
    <div className="absolute bottom-[4cm] right-[9cm] flex flex-col items-center">
      {selectedValue === '' ? (
        showBanner && (
          <div
            className={`relative flex flex-col items-center mb-8 bottom-[0.5cm] ${styles.animateFloatUpDown}`}
          >
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
        )
      ) : (
        <Link
          href="/home"
          className="mb-8 inline-block px-8 py-3 rounded-full bg-violet-100 text-violet-800 font-semibold text-lg shadow border border-violet-300 transition duration-300 hover:bg-violet-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-300 cursor-pointer no-underline"
        >
          Create a room and invite your team
        </Link>
      )}

      {cardCount > 0 && (
        <div className="flex flex-row items-center gap-[0.5cm]">
          {visibleCards.map((n) => (
            <SmallPointCard
              key={n}
              value={n}
              isSelected={selectedValue === n}
              onClick={() => setSelectedValue(n)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
