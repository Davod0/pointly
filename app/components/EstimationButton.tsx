'use client';

import { useRouter } from 'next/navigation';

export default function EstimationButton() {
    const router = useRouter();

    return (
        <button
        onClick={() => router.push('/planning-poker')}
        className="
        mb-8
        inline-block
        px-10 py-4
        rounded-xl
        bg-violet-400
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
        Start Estimating
      </button>

    );
}