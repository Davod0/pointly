import { useEffect, useState } from "react";

interface Props {
  onClose: () => void;
}

export default function ComingSoonPopup({ onClose }: Props) {
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
        px-1.5 py-0.5 text-[0.65rem]
        sm:px-4 sm:py-2 sm:text-sm
        bg-white border-2 border-violet-200
        rounded-lg shadow text-gray-700 font-semibold
        transition-opacity duration-300
        ${visible ? "animate-fade-in" : "animate-fade-out"}`}
      style={{
        minWidth: "140px",
        maxWidth: "100%",
      }}
    >
      <span>This feature is not available yet but coming soon</span>
    </div>
  );
}
