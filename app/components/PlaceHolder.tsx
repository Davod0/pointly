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
    <section className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`flex items-center justify-center px-6 py-4
        bg-white border-2 border-violet-200
        rounded-lg shadow-lg text-gray-700 font-semibold
        transition-opacity duration-300
        ${visible ? "animate-fade-in" : "animate-fade-out"}`}
        style={{
          minWidth: "280px",
          maxWidth: "90vw",
        }}
      >
        <span>
          This feature is not available yet but coming soon.
        </span>
      </div>
    </section>
  );
}
