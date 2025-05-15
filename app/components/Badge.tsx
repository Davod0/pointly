

export default function Badge() {

    return (
        // Planning Poker badge closer to heading (reduced bottom margin)
        <span className="mb-5 inline-flex items-center bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1 rounded-full border border-violet-300">
            <span className="flex items-center justify-center w-5 h-5 mr-1 rounded-full border border-violet-300 bg-white">
              <svg
                className="w-3 h-3 text-violet-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Planning Poker
        </span>
    )
}