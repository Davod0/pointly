'use client';
import React, { useState, useEffect } from "react";
import StartButton from "@/app/components/StartButton";
import { useRouter } from "next/navigation";
import { Fibonacci } from "../../../types/types";
import LoadingIndicator from "@/app/components/LoadingIndicator";
import { collection, getDocs, setDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "../../../database/firestoreDbConfig";
import { v4 as uuidv4 } from "uuid";

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
  const [roomName, setRoomName] = useState(getDefaultRoomName());
  const [selectedFibLabel, setSelectedFibLabel] = useState<string | null>(null);
  const [fibonacci, setFibonacci] = useState<Fibonacci[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchFibonacciValues = async () => {
    const querySnapshot = await getDocs(collection(db, "fibonacci"));
    const fetched: Fibonacci[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      fetched.push({
        label: data.label,
        values: data.values,
      });
    });

    setFibonacci(fetched);
    setLoading(false);
  };

  useEffect(() => {
    fetchFibonacciValues();
  }, []);

  const handleSessionStart = async () => {
    if (fibonacci.length === 0 || !selectedFibLabel) return;

    const sessionId = uuidv4();

    const newSession = {
      id: sessionId,
      createdAt: Timestamp.fromDate(new Date()),
      fibonacciLabel: selectedFibLabel,
      status: "active",
      isRevealed: false,
      roomName: roomName,
    };

    try {
      const sessionRef = doc(db, "sessions", sessionId);
      await setDoc(sessionRef, newSession);
      router.push(`/planning-poker/session/${sessionId}`);
    } catch (error) {
      console.error("Error creating session:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 items-center justify-center p-4 sm:p-6 md:p-10">
      {loading && <LoadingIndicator />}
      <div className="flex flex-col items-start gap-y-6 sm:gap-y-8 max-w-lg sm:max-w-xl md:max-w-2xl w-full">
        <div className="w-full">
          <label
            className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base"
            htmlFor="roomName"
          >
            Room Name
          </label>
          <input
            id="roomName"
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="w-full px-4 py-2 sm:px-5 sm:py-3 rounded-xl border-2 border-violet-200
              focus:border-violet-400 focus:ring-2 focus:ring-violet-200
              text-sm sm:text-base md:text-lg outline-none transition text-gray-600"
            placeholder="e.g. Sprint 35, Team Alpha"
            maxLength={32}
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
            Fibonacci Deck
          </label>
          {fibonacci.length > 0 ? (
            <>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {fibonacci
                  .filter((preset) => preset.label !== "Extended") // exclude ExtendedOption temporarily
                  .map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl border-2 font-semibold transition cursor-pointer text-sm sm:text-base
                        ${
                          preset.label === selectedFibLabel
                            ? "bg-violet-200 border-violet-600 text-violet-900"
                            : "bg-white border-violet-200 text-gray-700 hover:bg-violet-50"
                        }
                      `}
                      onClick={() => setSelectedFibLabel(preset.label)}
                    >
                      {preset.label}
                    </button>
                  ))}
              </div>

              <div className="mt-3 sm:mt-4 text-gray-500 text-sm sm:text-base">
                {selectedFibLabel &&
                  fibonacci.find((f) => f.label === selectedFibLabel)?.values.join(", ")}
              </div>
            </>
          ) : (
            <div className="text-gray-500 italic">Loading Fibonacci decks...</div>
          )}
        </div>
        <div className="mt-4 sm:mt-6">
          <StartButton title="Start Session" onClick={handleSessionStart} />
        </div>
      </div>
    </div>
  );
}
