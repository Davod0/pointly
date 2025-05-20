'use client'
import React, { useState } from "react";
import StartButton from "@/app/components/StartButton";
import UserNameModal from "@/app/components/UserNameModal";
import { useRouter } from "next/navigation";
import { fibonacciValues } from "@/app/mock-data/data";
import { Fibonacci } from "@/app/mock-data/data";



function getDefaultRoomName() {
  const now = new Date();
  return now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function SessionSetupPage() {
  const fibonacci: Fibonacci[] = fibonacciValues;

  const [roomName, setRoomName] = useState(getDefaultRoomName());
  const [selectedFibIndex, setSelectedFibIndex] = useState(0);
  const [showUserNameModal, setShowUserNameModal] = useState(false);
  const router = useRouter();

  // const handleUserNameSubmit = (userName: string) => {
  const handleUserNameSubmit = () => {
  setShowUserNameModal(false);

  const sessionId = "102030";
  router.push(
    `/planning-poker/session/${sessionId}`
  );
};

  return (
    <>
      <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 items-center justify-center">
        <div className="flex flex-col items-start gap-y-8 max-w-xl w-full px-6">
          <div className="w-full">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="roomName">
              Room Name
            </label>
            <input
              id="roomName"
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              className="w-full px-5 py-3 rounded-xl border-2 border-violet-200
              focus:border-violet-400 focus:ring-2 focus:ring-violet-200 text-lg outline-none transition text-gray-600"
              placeholder="e.g. Sprint 35, Team Alpha"
              maxLength={32}
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-gray-700 font-semibold mb-2">
              Fibonacci Deck
            </label>
            <div className="flex flex-row gap-4">
              {fibonacci.map((preset, idx) => (
                <button
                  key={preset.label}
                  type="button"
                  className={`px-6 py-3 rounded-xl border-2 font-semibold transition cursor-pointer
                    ${
                      idx === selectedFibIndex
                        ? "bg-violet-200 border-violet-600 text-violet-900"
                        : "bg-white border-violet-200 text-gray-700 hover:bg-violet-50"
                    }
                  `}
                  onClick={() => setSelectedFibIndex(idx)}
                >
                  {preset.label}
                </button>
              ))}
            </div>
            <div className="mt-4 text-gray-500 text-me">
              {fibonacci[selectedFibIndex].values.join(", ")}
            </div>
          </div>
          <div className="mt-6">
            <StartButton
              title="Start Session"
              route="#"
              onClick={() => setShowUserNameModal(true)}
            />
          </div>
        </div>
      </div>
      {showUserNameModal && (
        <UserNameModal
          onSubmit={handleUserNameSubmit}
          onClose={() => setShowUserNameModal(false)}
        />
      )}
    </>
  );
}
