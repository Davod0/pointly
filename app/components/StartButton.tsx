'use client';
import { useRouter } from 'next/navigation';

interface StartButtonProps {
    title: string;
    route: string;
    onClick?: () => void;
}

export default function StartButton({ title, route, onClick }: StartButtonProps) {
    const router = useRouter();

    return (
        <button
        onClick={() => {
          if (onClick) onClick();
          else router.push(route);
        }}
        className="
        mb-8
        inline-block
        px-10 py-4
        rounded-xl
        bg-violet-800
        text-white
        text-xl
        font-semibold
        shadow-lg
        transition-all
        duration-200
        hover:bg-violet-200
        hover:shadow-xl
        focus:outline-none
        focus:ring-4
        focus:ring-violet-300
        cursor-pointer
        no-underline">
        {title}
      </button>

    );
}