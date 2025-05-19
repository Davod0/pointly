"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


// Example users (replace with real-time data in production)
type User = { id: number; name: string; picked: string | number | null };

const initialUsers: User[] = [
  { id: 1, name: "Alice", picked: null },
  { id: 2, name: "Bob", picked: null },
  { id: 3, name: "Charlie", picked: null },
];

const cardValues = ["☕️", 1, 2, 3, 5, 8, 13, 21];

export default function SessionPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedCard, setSelectedCard] = useState<string | number | null>(null);
  const [revealed, setRevealed] = useState(false);

  // Simulate current user (replace with auth/session logic)
  const currentUserId = 1;

  // Handle card selection
  const handleCardSelect = (value: string | number) => {
    setSelectedCard(value);
    setUsers((prev) =>
      prev.map((u) =>
        u.id === currentUserId ? { ...u, picked: value } : u
      )
    );
  };

  // Reveal all cards
  const handleReveal = () => setRevealed(true);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="bg-white/90 rounded-2xl shadow-2xl px-10 py-8 max-w-2xl w-full border border-violet-200 mt-10">
          <h1 className="text-3xl font-serif font-semibold text-violet-800 mb-6 text-center">
            Planning Poker Session
          </h1>
          {/* User list */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Participants</h2>
            <ul className="flex flex-wrap gap-4">
              {users.map((user) => (
                <li
                  key={user.id}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm
                    ${user.id === currentUserId ? "bg-violet-100 border border-violet-300" : "bg-gray-100"}
                  `}
                >
                  <span className="font-semibold text-violet-700">{user.name}</span>
                  <span className="text-gray-500 text-sm">
                    {revealed
                      ? user.picked !== null
                        ? <span className="font-bold text-violet-900">{user.picked}</span>
                        : <span className="italic text-gray-400">No pick</span>
                      : user.picked !== null
                        ? <span className="text-green-600">Picked</span>
                        : <span className="text-gray-400">Waiting</span>
                    }
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Card selection */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Pick your estimate</h2>
            <div className="flex flex-row flex-wrap gap-4 justify-center mb-6">
              {cardValues.map((val) => (
                <button
                  key={val}
                  onClick={() => handleCardSelect(val)}
                  disabled={revealed}
                  className={`
                    w-16 h-24 flex items-center justify-center rounded-xl shadow font-bold text-2xl
                    transition-all duration-200
                    ${selectedCard === val
                      ? "bg-violet-200 text-violet-900 scale-110 ring-4 ring-violet-300"
                      : "bg-white text-gray-800 hover:bg-violet-100 hover:scale-105"}
                    ${revealed ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
                  `}
                >
                  {val}
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleReveal}
                disabled={revealed || selectedCard === null}
                className={`
                  px-8 py-3 rounded-xl bg-violet-800 text-white font-semibold text-lg shadow-lg
                  transition-all duration-200 hover:bg-violet-900 hover:shadow-xl
                  focus:outline-none focus:ring-4 focus:ring-violet-300
                  ${revealed || selectedCard === null ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                Reveal
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
