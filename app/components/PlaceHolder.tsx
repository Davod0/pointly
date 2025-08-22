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
    <section className="absolute transform -translate-x-1/2 ml-[-130px]">
      <div
        className={`flex items-center justify-center px-4 py-2
        bg-white border-2 border-violet-200
        rounded-lg shadow-md text-gray-700 font-semibold
        ${visible ? "animate-fade-in" : "animate-fade-out"}`}
        style={{
          minWidth: "260px",
          maxWidth: "80vw",
        }}
      >
        <span>
          This feature is not available yet, but coming soon.
        </span>
      </div>
    </section>
  );
}
