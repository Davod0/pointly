import { useEffect, useState } from "react";

interface Props {
  onClose: () => void;
}

export default function PlaceHolder({ onClose }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setVisible(false), 2000);
    const timer2 = setTimeout(() => onClose(), 2300);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onClose]);

  return (
    <div
      className={`inline-flex items-center justify-center
        px-2 py-1 text-xs
        sm:px-4 sm:py-2 sm:text-sm
        bg-white border-2 border-violet-200
        rounded-lg shadow text-gray-700 font-semibold
        transition-opacity duration-300
        ${visible ? "animate-fade-in" : "animate-fade-out"}`}
      style={{
        minWidth: "160px",
        maxWidth: "100%",
      }}
    >
      <span>This feature is not available yet but coming soon.</span>
    </div>
  );
}
