'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../../database/firestoreDbConfig";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import StartButton from "@/app/components/StartButton";

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
  const router = useRouter();

  const handleSessionStart = async () => {
    const sessionId = uuidv4();

    const newSession = {
      roomName: roomName,
      createdAt: Timestamp.fromDate(new Date()),
      completed: false,
    };

    try {
      const sessionRef = doc(db, "retroSessions", sessionId);
      await setDoc(sessionRef, newSession);
      router.push(`/retrospective/session/${sessionId}`);
    } catch (error) {
      console.error("Error creating retrospective session:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 items-center justify-center p-4 sm:p-6 md:p-10">
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
            maxLength={40}
          />
        </div>

        <div className="w-full">
          <h3 className="text-gray-700 font-semibold mb-3 text-sm sm:text-base">
            Template
          </h3>

          <div className="flex flex-row flex-nowrap gap-3 sm:gap-4">
            {[
              {
                label: "Start",
                color: "bg-sky-500",
                hint: "New ideas",
              },
              {
                label: "Stop",
                color: "bg-red-500",
                hint: "habits to discontinue",
              },
              {
                label: "Continue",
                color: "bg-emerald-500",
                hint: "Wins we want to keep",
              },
              {
                label: "Improve",
                color: "bg-amber-500",
                hint: "Practices to refine",
              },
            ].map((col) => (
              <div
                key={col.label}
                className="bg-white border-2 border-violet-200 rounded-xl px-4 py-3 shadow-sm
                  text-gray-700 text-sm sm:text-base flex flex-col items-start
                  flex-1 min-w-0"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${col.color}`}
                    aria-hidden="true"
                  />
                  <span className="font-medium">{col.label}</span>
                </div>
                <span className="text-xs text-gray-500 mt-2">
                  {col.hint}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <StartButton title="Start the Session" onClick={handleSessionStart} />
        </div>
      </div>
    </div>
  );
}



