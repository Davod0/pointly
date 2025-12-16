export default function PlanningPokerSessionPageModal() {
  return (
    <div className="relative bg-gradient-to-br from-gray-100 to-violet-100 p-4 rounded-2xl
    shadow-xl w-[500px] mx-auto">
        {/* <div className="flex flex-col items-start space-y-2">
        <h1
            className="
            text-[12px] font-extrabold text-violet-900 bg-white/70
            px-2 py-1 rounded-md shadow border-l-2 border-violet-400
            "
        >
            Planning Poker Session
        </h1>
        <button
            className="
            text-[12px] font-medium text-violet-800 underline
            hover:text-violet-900 transition px-0.5 cursor-default
            "
            disabled
        >
            🔗 Invite others
        </button>
        <button
            className="
            px-2 py-1 rounded-md text-[11px] font-semibold
            bg-violet-800 text-white shadow hover:bg-violet-900 cursor-pointer
            "
        >
            End the Session
        </button>
        </div> */}
      <main className="flex flex-col items-center justify-center px-2 pt-4">
        <div className="relative bg-white/90 rounded-xl shadow-xl px-6 py-5 w-full border border-violet-200 flex">
          <div className="absolute left-0 pl-2 top-6 origin-top-left">
            <div className="bg-white/80 rounded-lg shadow p-2 w-24">
              <h2 className="text-xs font-semibold text-gray-600 mb-1 text-center">
                Participants
              </h2>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-1 px-2 py-1 rounded-md shadow-sm bg-gray-100">
                  <span className="font-semibold text-violet-800 text-xs">Sara</span>
                  <span className="text-green-600 text-[10px]">Picked</span>
                </li>
                <li className="flex items-center gap-1 px-2 py-1 rounded-md shadow-sm bg-gray-100">
                  <span className="font-semibold text-violet-800 text-xs">John</span>
                  <span className="text-gray-500 text-[10px]">Waiting</span>
                </li>
                <li className="flex items-center gap-1 px-2 py-1 rounded-md shadow-sm bg-gray-100">
                  <span className="font-semibold text-violet-800 text-xs">Layla</span>
                  <span className="text-gray-500 text-[10px]">Waiting</span>
                </li>
                <li className="flex items-center gap-1 px-2 py-1 rounded-md shadow-sm bg-violet-100 border border-violet-300">
                  <span className="font-semibold text-violet-800 text-xs">David</span>
                  <span className="text-green-600 text-[10px]">Picked</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col flex-1 items-center justify-between min-h-[220px] w-full px-1">
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full flex flex-col items-center">
              <div className="mb-3 text-sm font-semibold text-gray-700 text-center flex flex-col">
                <button
                  className="w-24 px-2 py-2 rounded-lg
                   bg-violet-800 text-white font-semibold text-sm
                   transition-all duration-200 hover:bg-violet-900 cursor-pointer mb-20"
                >
                  Reveal
                </button>
                <span className="text-xs">Pick your card</span>
              </div>
              <div className="flex flex-row justify-center gap-2 w-full px-1">
                {["☕️", 1, 2, 3, 4, 6, 8, 16, 32].map((v) => {
                  const isPicked = v === 3;
                  return (
                    <button
                      key={v}
                      className={`w-8 h-12 flex items-center justify-center rounded-md shadow
                        font-bold transition-all cursor-pointer text-sm
                        ${
                          isPicked
                            ? "bg-violet-200 text-violet-900 scale-105 ring-2 ring-violet-300"
                            : "bg-white text-gray-800 hover:bg-violet-100 hover:scale-105"
                        }`}
                    >
                      {v}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
