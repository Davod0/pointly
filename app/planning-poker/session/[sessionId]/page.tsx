"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/app/components/Footer";
import UserNameModal from "@/app/components/UserNameModal";
import InviteLinkPopUp from "@/app/components/InviteLinkPopUp";
import LoadingIndicator from "@/app/components/LoadingIndicator";
import { useParams, useRouter } from "next/navigation";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  addDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../../database/firestoreDbConfig";
import { Participants } from "../../../../types/types";

export default function SessionPage() {
  const [participants, setParticipants] = useState<Participants[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [showUserNameModal, setShowUserNameModal] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [sessionName, setSessionName] = useState<string>("no name picked");
  const [fibonacciValues, setFibonacciValues] = useState<(string | number)[]>([]);
  const [sessionUrl, setSessionUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const sessionId = params?.sessionId as string;
  const router = useRouter();

  useEffect(() => {
    const fetchSessionMeta = async () => {
      if (!sessionId) return;

      try {
        const sessionRef = doc(db, "sessions", sessionId);
        const sessionSnap = await getDoc(sessionRef);

        if (sessionSnap.exists()) {
          const sessionData = sessionSnap.data();
          setSessionName(sessionData.roomName || "no name picked");
          const fibonacciLabel = sessionData.fibonacciLabel || "Classic";
          const fibonacciRef = doc(db, "fibonacci", fibonacciLabel);
          const fibonacciSnap = await getDoc(fibonacciRef);

          if (fibonacciSnap.exists()) {
            const fibonacciData = fibonacciSnap.data();
            if (Array.isArray(fibonacciData.values)) {
              setFibonacciValues(fibonacciData.values);
            } else {
              setFibonacciValues(["☕️", 0.5, 1, 2, 4, 6, 8, 16, 32]);
            }
          } else {
            setFibonacciValues(["☕️", 0.5, 1, 2, 4, 6, 8, 16, 32]);
          }
        }
      } catch (error) {
        console.error("Error fetching session metadata or Fibonacci values:", error);
        setFibonacciValues(["☕️", 0.5, 1, 2, 4, 6, 8, 16, 32]);
      }
    };

    fetchSessionMeta();
    setSessionUrl(window.location.href);
  }, [sessionId]);

  useEffect(() => {
    if (!sessionId) return;

    const q = query(collection(db, "sessions", sessionId, "participants"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedParticipants: Participants[] = snapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));
      setParticipants(fetchedParticipants);
    });

    return () => unsubscribe();
  }, [sessionId]);

  useEffect(() => {
    if (!sessionId) return;

    const sessionRef = doc(db, "sessions", sessionId);
    const unsubscribe = onSnapshot(sessionRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setRevealed(data.isRevealed);
      }
    });

    return () => unsubscribe();
  }, [sessionId]);

  useEffect(() => {
    const storedUserId = localStorage.getItem(`session_${sessionId}_userId`);
    const storedUserName = localStorage.getItem(`session_${sessionId}_userName`);
    if (storedUserId && storedUserName) {
      setCurrentUserId(storedUserId);
      setShowUserNameModal(false);
    }

    setLoading(false);
  }, [sessionId]);

  const handleUserNameSubmit = async (userName: string) => {
    const userRef = await addDoc(collection(db, "sessions", sessionId, "participants"), {
      name: userName,
      selectedCard: null,
    });
    const userId = userRef.id;
    setCurrentUserId(userId);
    setShowUserNameModal(false);
    localStorage.setItem(`session_${sessionId}_userId`, userId);
    localStorage.setItem(`session_${sessionId}_userName`, userName);
  };

  useEffect(() => {
    if (!sessionId) return;
    const sessionRef = doc(db, "sessions", sessionId);
    const unsubscribe = onSnapshot(sessionRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.status === "completed") {
          router.push("/home");
        }
      }
    });
    return () => unsubscribe();
  }, [sessionId, router]);

  const handleCardSelect = async (value: string | number) => {
    if (currentUserId) {
      await updateDoc(
        doc(db, "sessions", sessionId, "participants", currentUserId),
        { selectedCard: value }
      );
    }
  };

  const handleReveal = async () => {
    const sessionRef = doc(db, "sessions", sessionId);
    await updateDoc(sessionRef, {
      isRevealed: true,
    });
  };

  const handleSessionCompletion = async () => {
    localStorage.removeItem(`session_${sessionId}_userId`);
    localStorage.removeItem(`session_${sessionId}_userName`);

    const sessionRef = doc(db, "sessions", sessionId);
    await updateDoc(sessionRef, {
      status: "completed",
    });
  };

  const handleRestart = async () => {
    const sessionRef = doc(db, "sessions", sessionId);
    await updateDoc(sessionRef, {
      isRevealed: false,
    });

    const participantsRef = collection(db, "sessions", sessionId, "participants");
    for (const participant of participants) {
      if (participant.uid) {
        await updateDoc(doc(participantsRef, participant.uid), {
          selectedCard: null,
        });
      }
    }
  };

  const numericPicks = participants
    .map((p) => p.selectedCard)
    .filter((p) => typeof p === "number") as number[];

  const averagePick = numericPicks.length
    ? (numericPicks.reduce((a, b) => a + b, 0) / numericPicks.length).toFixed(2)
    : null;

  const currentParticipant = participants.find((p) => p.uid === currentUserId);

  return (
    <>
      {loading ? <LoadingIndicator /> :
          <>
            {showUserNameModal && (
            <UserNameModal
              onSubmit={handleUserNameSubmit}
              onClose={() => setShowUserNameModal(false)}
            />
          )}
        </>
      }
      <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
        {/* Top-left controls */}
        <div className="absolute top-2 left-2 sm:top-6 sm:left-6 flex flex-col items-start z-20 space-y-2 sm:space-y-4 md:space-y-5">
          {/* Session name */}
          <div
            className="
              text-xs sm:text-sm md:text-lg
              font-extrabold text-violet-900 tracking-tight 
              bg-white/80 px-1 sm:px-2 md:px-4 py-0.5 sm:py-1 md:py-2 
              rounded-lg shadow border-l-4 border-violet-400
              lg:px-6 lg:py-4
            "
          >
            {sessionName}
          </div>

          {/* Invite link */}
          <div className="scale-90 sm:scale-100">
            <InviteLinkPopUp sessionUrl={sessionUrl} />
          </div>

          {/* End Session button */}
          <button
            className="
              px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3
              rounded-lg sm:rounded-xl
              bg-violet-800
              text-[10px] sm:text-sm md:text-base
              text-white font-semibold
              shadow-md sm:shadow-lg
              transition-all duration-200
              hover:bg-violet-900
              focus:outline-none
              focus:ring-violet-300 focus:ring-2 sm:focus:ring-4
              cursor-pointer
              no-underline
            "
            onClick={handleSessionCompletion}
          >
            End Session
          </button>

          {revealed && (
            <div className="bg-violet-100 rounded-lg px-3 py-2 sm:px-6 sm:py-4 mb-4 shadow-lg flex items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-xl font-bold text-violet-800">Average:</span>
              <span className="text-sm sm:text-2xl font-extrabold text-violet-800 drop-shadow">
                {averagePick !== null ? averagePick : "N/A"}
              </span>
            </div>
          )}
        </div>

        <main className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="relative bg-white/90 rounded-2xl shadow-2xl px-8 sm:px-12 py-6 sm:py-10 max-w-3xl w-full border border-violet-200 mt-10 flex">
            {/* Participants list */}
            <div className="absolute left-0 top-40 -translate-y-1/2 pl-1 sm:pl-2 md:pl-4">
              <div className="bg-white/80 rounded-lg sm:rounded-xl shadow p-1.5 sm:p-2 md:p-3">
                <h2 className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-600 mb-1 sm:mb-2 text-center">Participants</h2>
                <ul className="flex flex-col gap-0.5 sm:gap-1 md:gap-2">
                  {participants.map((p) => (
                    <li
                      key={p.uid}
                      className={`flex items-center gap-1 sm:gap-2 px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg shadow-sm
                        ${p.uid === currentUserId ? "bg-violet-100 border border-violet-300" : "bg-gray-100"}
                      `}
                    >
                      <span className="font-semibold text-violet-800 text-[10px] sm:text-xs md:text-sm lg:text-base">{p.name}</span>
                      <span className="text-gray-500 text-[8px] sm:text-[10px] md:text-xs lg:text-sm">
                        {revealed
                          ? p.selectedCard !== null
                            ? <span className="font-bold text-violet-900">{p.selectedCard}</span>
                            : <span className="italic text-gray-400">No pick</span>
                          : p.selectedCard !== null
                            ? <span className="text-green-600">Picked</span>
                            : <span className="text-gray-400">Waiting</span>
                        }
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

{/* Center area */}
<div className="
  flex flex-col flex-1 items-center justify-between
  min-h-[350px] sm:min-h-[420px] md:min-h-[500px]
  w-full px-2 sm:px-6 md:px-12 lg:px-0   /* Added responsive horizontal padding */
  ml-12 sm:ml-20 md:ml-28 lg:ml-36
">
  {/* Reveal button */}
  <div className="flex flex-col items-center mt-16 sm:mt-28 md:mt-40 w-full sm:mr-32">
    <button
      onClick={revealed ? handleRestart : handleReveal}
      disabled={!revealed && currentParticipant?.selectedCard === null}
      className={`w-24 sm:w-36 md:w-56
        px-2 sm:px-4 md:px-8
        py-1 sm:py-2 md:py-3
        rounded-lg sm:rounded-xl bg-violet-800 text-white font-semibold
        text-xs sm:text-sm md:text-base
        transition-all duration-200 hover:bg-violet-900 cursor-pointer text-center
        ${!revealed && currentParticipant?.selectedCard === null ? "opacity-25 cursor-not-allowed" : ""}
      `}
    >
      {revealed ? "Start new voting" : "Reveal"}
    </button>
  </div>



              {/* Cards */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex flex-col items-center">
                <div className="mb-2 sm:mb-3 md:mb-4 text-xs sm:text-base md:text-lg font-semibold text-gray-700 text-center">
                  Pick your card
                </div>
                <div className="flex flex-row justify-center gap-1.5 sm:gap-3 md:gap-4 w-full px-1 sm:px-2">
                  {fibonacciValues.map((val) => {
                    const isMyPick = currentParticipant?.selectedCard === val;
                    return (
                      <button
                        key={val}
                        onClick={() => handleCardSelect(val)}
                        disabled={revealed}
                        className={`flex-shrink-0
                          w-7 h-12 text-sm          /* 📱 Extra small for mobile */
                          sm:w-12 sm:h-18 sm:text-lg
                          md:w-14 md:h-22 md:text-xl
                          lg:w-16 lg:h-24 lg:text-2xl
                          flex items-center justify-center rounded-xl shadow
                          font-bold
                          transition-all duration-200
                          ${isMyPick
                            ? "bg-violet-200 text-violet-900 scale-110 ring-4 ring-violet-300"
                            : "bg-white text-gray-800 hover:bg-violet-100 hover:scale-105"}
                          ${revealed ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
                        `}
                      >
                        {val}
                      </button>
                    );
                  })}
                </div>
              </div>
              
            </div>
          </div>
        </main>
        <div className="hidden lg:block">
          <Footer />
        </div>
      </div>
    </>
  );
}
