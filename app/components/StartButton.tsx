'use client';
import { useRouter } from 'next/navigation';

interface StartButtonProps {
  title?: string;
  route?: string;
  onClick?: () => void;
}

export default function StartButton({ title, route, onClick }: StartButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (onClick) onClick();
        else if (route) router.push(route);
      }}
        className="
          mb-8
          inline-block
          px-6 py-3 text-base       /* mobile */
          sm:px-8 sm:py-3.5 sm:text-lg /* tablet */
          md:px-9 md:py-3.5 md:text-lg /* small desktop */
          lg:px-10 lg:py-4 lg:text-xl  /* desktop */
          xl:px-11 xl:py-4 xl:text-xl   /* large desktop */
          rounded-xl
          bg-violet-800
          text-white
          font-semibold
          shadow-lg
          transition-all
          duration-200
          hover:bg-violet-900
          hover:shadow-xl
          focus:outline-none
          focus:ring-4
          focus:ring-violet-300
          cursor-pointer
          no-underline
        "
      >
      {title}
    </button>

  );
}
