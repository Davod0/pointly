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

        <div className="mt-4 sm:mt-6">
          <StartButton title="Start the Session" onClick={handleSessionStart} />
        </div>

      </div>
    </div>
  );
}



{/*
    Database

retroSessions/
    sessionId/
        roomName
        createdAt
        createdBy
        completed

        participants/
            uid/
                name

        notes/
            noteId/
                categoryName
                text
                userId
                votes
                voters: ["uid"]

                comments/
                    commentId/
                        userId
                        text
*/}