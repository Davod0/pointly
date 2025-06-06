"use client";
import React, { useState } from "react";
import Footer from "@/app/components/Footer";
import { mockedUsers } from "@/app/mock-data/data";
import { User } from "@/app/mock-data/data";
import UserNameModal from "@/app/components/UserNameModal";
import { useParams } from "next/navigation";


const fibonacciValues = ["☕️", 1, 2, 3, 5, 8, 13, 21];
const sessionName = "Sprint 42 Poker";

export default function SessionPage() {
  const AllUsers = mockedUsers;
  const [users, setUsers] = useState<User[]>(AllUsers);
  const [selectedCard, setSelectedCard] = useState<string | number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [showUserNameModal, setShowUserNameModal] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);

  const params = useParams();
  const sessionId = params?.sessionId as string;


  const handleUserNameSubmit = (userName: string) => {
    const newUser: User = {
      id: Date.now(),
      name: userName,
      selectedCard: null,
    };
    setUsers((prev) => [newUser, ...prev]);
    setCurrentUserId(newUser.id); // Set the joined user's ID and save it even in the session on the server
    setShowUserNameModal(false);
  };

  const handleCardSelect = (value: string | number) => {
    setSelectedCard(value);
    setUsers((prev) =>
      prev.map((u) =>
        u.id === currentUserId ? { ...u, selectedCard: value } : u
      )
    );
  };

  const handleReveal = () => setRevealed(true);

  const handleRestart = () => {
    setRevealed(false);
    setSelectedCard(null);
    setUsers((prev) => prev.map((u) => ({ ...u, selectedCard: null })));
  };

  // Calculate average of numeric picks
  const numericPicks = users
    .map(u => u.selectedCard)
    .filter(p => typeof p === "number") as number[];
  const averagePick = numericPicks.length
    ? (numericPicks.reduce((a, b) => a + b, 0) / numericPicks.length).toFixed(2)
    : null;

  return (
    <>
      {showUserNameModal && (
        <UserNameModal
          sessionId={sessionId}
          onSubmit={handleUserNameSubmit}
          onClose={() => setShowUserNameModal(false)}
        />
      )}
      <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
        <div className="absolute top-15 left-15 flex flex-col items-start z-20 space-y-5">
          <div className="text-2xl font-extrabold text-violet-900 tracking-tight bg-white/80 px-4 py-2 rounded-lg shadow border-l-4 border-violet-400">
            {sessionName}
          </div>
          <a
            href="#"
            className="text-lg font-medium text-violet-700 underline hover:text-violet-900 transition px-2"
          >
            🔗 Invite others
          </a>
          {revealed && (
            <div className="bg-violet-100 rounded-lg px-6 py-4 mb-4 shadow-lg flex items-center gap-3">
              <span className="text-xl font-bold text-violet-800">Average:</span>
              <span className="text-2xl font-extrabold text-violet-800 drop-shadow">
                {averagePick !== null ? averagePick : "N/A"}
              </span>
            </div>
          )}
        </div>

        <main className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="relative bg-white/90 rounded-2xl shadow-2xl px-12 py-10 max-w-3xl w-full border border-violet-200 mt-10 flex">
            <div className="absolute left-0 top-40 -translate-y-1/2 pl-4">
              <div className="bg-white/80 rounded-xl shadow p-3">
                <h2 className="text-sm font-semibold text-gray-600 mb-2 text-center">Participants</h2>
                <ul className="flex flex-col gap-2">
                  {users.map((user) => (
                    <li
                      key={user.id}
                      className={`flex items-center gap-2 px-3 py-1 rounded-lg shadow-sm
                        ${user.id === currentUserId ? "bg-violet-100 border border-violet-300" : "bg-gray-100"}
                      `}
                    >
                      <span className="font-semibold text-violet-800">{user.name}</span>
                      <span className="text-gray-500 text-xs">
                        {revealed
                          ? user.selectedCard !== null
                            ? <span className="font-bold text-violet-900">{user.selectedCard}</span>
                            : <span className="italic text-gray-400">No pick</span>
                          : user.selectedCard !== null
                            ? <span className="text-green-600">Picked</span>
                            : <span className="text-gray-400">Waiting</span>
                        }
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col flex-1 items-center justify-between min-h-[500px] w-full ml-36">
              <div className="flex flex-col items-center mt-40">
                <button
                  onClick={revealed ? handleRestart : handleReveal}
                  disabled={!revealed && selectedCard === null}
                  className={`
                    w-56 px-8 py-3 rounded-xl bg-violet-800 text-white font-semibold text-lg
                    transition-all duration-200 hover:bg-violet-900 cursor-pointer
                    text-center mr-30 mt-15
                    ${!revealed && selectedCard === null ? "opacity-25 cursor-not-allowed" : ""}
                  `}
                >
                  {revealed ? "Start new voting" : "Reveal"}
                </button>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex flex-col items-center">
                <div className="mb-4 text-lg font-semibold text-gray-700 text-center">Pick your card</div>
                <div className="flex flex-row flex-wrap gap-4 justify-center">
                  {fibonacciValues.map((val) => (
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
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
