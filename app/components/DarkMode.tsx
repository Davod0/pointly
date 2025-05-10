export default function Home() {
  // Accent color for button and welcome text
  const accentColor = "oklch(90.1% 0.058 230.902)";

  return (
    <div className="min-h-screen flex items-start bg-gray-900">
      <div className="mt-16 ml-16 flex flex-col items-start">
        {/* Top left heading, spaced from corner */}
        <div
          className="text-lg font-semibold mb-2"
          style={{ color: accentColor }}
        >
          Welcome to the Pointly
        </div>
        {/* Improved badge under heading */}
        <span
          className="mb-8 inline-flex items-center text-xs font-bold px-3 py-0.5 rounded-full border"
          style={{
            background: "rgba(255,255,255,0.08)",
            borderColor: accentColor,
            color: accentColor,
          }}
        >
          <span
            className="flex items-center justify-center w-5 h-5 mr-1 rounded-full border"
            style={{
              borderColor: accentColor,
              background: "rgba(255,255,255,0.12)",
            }}
          >
            <svg
              className="w-3 h-3"
              style={{ color: accentColor }}
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
        {/* Main large heading, white */}
        <div className="mt-12">
          <h1
            className="text-5xl font-serif font-extrabold text-white mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            Easier estimation by Pointly
          </h1>
        </div>
        {/* Subheading, white */}
        <p className="text-lg text-white mb-8 opacity-80">
          Pointly is a tool for tasks estimation during development sprints
        </p>
        {/* Points with green dots */}
        <ul className="mb-12 space-y-3">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
            <span className="text-white opacity-90">Improving estimation accuracy</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
            <span className="text-white opacity-90">Boosting team collaboration</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
            <span className="text-white opacity-90">Start for free</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
            <span className="text-white opacity-90">No signup required</span>
          </li>
        </ul>
        {/* Button, spaced further down */}
        <button
          className="py-4 px-10 rounded-xl text-xl font-semibold shadow-lg transition-all focus:outline-none"
          style={{
            background: accentColor,
            color: "#222",
            boxShadow: "0 4px 14px 0 rgba(0,0,0,0.05)",
          }}
        >
          Start Estimating
        </button>
      </div>
    </div>
  );
}
