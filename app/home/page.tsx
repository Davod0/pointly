import SmallPointCardContainer from "../components/SmallPointCardContainer";

export default function HomePage() {


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex">
      <div className="mt-16 ml-16 flex flex-col items-start">
        {/* Top left heading*/}
        <div className="text-lg font-semibold mb-2 text-violet-700">
          Welcome to Pointly
        </div>
        {/* Planning Poker badge*/}
        <span className="mb-8 inline-flex items-center bg-violet-100 text-violet-700 text-xs font-bold px-3 py-0.5 rounded-full border border-violet-300">
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
        {/* Main large heading*/}
        <div className="mt-12">
          <h1
            className="text-5xl font-serif font-semibold text-gray-900 mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            Easier estimation by Pointly
          </h1>
        </div>
        {/* Subheading*/}
        <p className="text-lg text-gray-600 mb-8">
          Pointly is a tool for task estimation during development sprints
        </p>
        {/* Points list*/}
        <ul className="mb-12 space-y-3">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
            <span className="text-gray-700">Improving estimation accuracy</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
            <span className="text-gray-700">Boosting team collaboration</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
            <span className="text-gray-700">Start for free</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
            <span className="text-gray-700">No signup required</span>
          </li>
        </ul>
        {/* Button*/}
        <button className="
                mb-8
                inline-block
                px-10 py-4
                rounded-xl
                bg-violet-600
                text-white
                text-xl
                font-semibold
                shadow-lg
                transition-all
                duration-200
                hover:bg-violet-700
                hover:scale-105
                focus:outline-none
                focus:ring-4
                focus:ring-violet-300
                cursor-pointer
                no-underline
              ">
          Start Estimating
        </button>
      </div>
      <div>
        <SmallPointCardContainer />
      </div>
    </div>
  );
}
