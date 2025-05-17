'use client'
import React, { useState } from "react";
import StartButton from "@/app/components/StartButton";

const fibonacciPresets = [
  { label: "Classic", values: [["☕️", 1, 2, 3, 5, 8, 16, 32]] },
  { label: "Extended", values: [[0.5, 1, 2, 3, 5, 8, 16, 32, 40, 64]] },
  { label: "T-Shirt", values: [["XS", "S", "M", "L", "XL", "XXL"]] },
];

function getDefaultRoomName() {
  const now = new Date();
  return now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function SessionSetupContainer() {
  const [roomName, setRoomName] = useState(getDefaultRoomName());
  const [selectedFibIndex, setSelectedFibIndex] = useState(0);

  function handleStart() {
    alert(
      `Room: ${roomName}\nDeck: ${fibonacciPresets[selectedFibIndex].label}\nValues: ${fibonacciPresets[selectedFibIndex].values.join(
        ", "
      )}`
    );
  }

  return (
    <>
      <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 items-center justify-center">
        <div className="flex flex-col items-start gap-y-8 max-w-xl w-full px-6">
          <p className="ml-13 text-lg font-semibold text-gray-600 mb-4">
            Name your room and choose a Fibonacci <br />
            deck to kick off your estimation session
          </p>
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
              {fibonacciPresets.map((preset, idx) => (
                <button
                  key={preset.label}
                  type="button"
                  className={`px-6 py-3 rounded-xl border-2 font-semibold transition
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
              {fibonacciPresets[selectedFibIndex].values.join(", ")}
            </div>
          </div>
          <div className="mt-6">
            <StartButton
              title="Start Session"
              route="#"
              onClick={handleStart}
            />
          </div>
        </div>
      </div>
    </>
  );
}
