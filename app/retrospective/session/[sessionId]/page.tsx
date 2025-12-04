"use client";
import React, { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  doc,
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  getDoc,
  Timestamp,
  CollectionReference,
} from "firebase/firestore";
import { db } from "@/database/firestoreDbConfig";
import UserNameModal from "@/app/components/UserNameModal";
import InviteLinkPopUp from "@/app/components/InviteLinkPopUp";
import LoadingIndicator from "@/app/components/LoadingIndicator";
import CategoryColumn from "@/app/components/CategoryColumn";
import { Note, Participants } from "../../../../types/types";


export default function RetroSessionPage() {
  const params = useParams();
  const router = useRouter();
  const sessionId = params?.sessionId as string;

  const [sessionUrl, setSessionUrl] = useState("");
  const [sessionName, setSessionName] = useState("Retrospective");
  const [participants, setParticipants] = useState<Participants[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [showUserNameModal, setShowUserNameModal] = useState(true);

  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  const [showParticipants, setShowParticipants] = useState(false);

  const participantsRef = useRef<HTMLDivElement | null>(null);

  const categories = ["Start", "Stop", "Continue", "Improve"];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        participantsRef.current &&
        !participantsRef.current.contains(e.target as Node)
      ) {
        setShowParticipants(false);
      }
    }

    if (showParticipants) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showParticipants]);


  useEffect(() => {
    if (!sessionId) return;

    const fetchSession = async () => {
      const ref = doc(db, "retroSessions", sessionId);
      const snap = await getDoc(ref);

      if (!snap.exists()) return router.push("/home");
      setSessionName(snap.data().roomName || "Retrospective");
    };

    fetchSession();
    setSessionUrl(window.location.href);
  }, [router, sessionId]);


  useEffect(() => {
    if (!sessionId) return;

    const q = collection(
      db,
      "retroSessions",
      sessionId,
      "participants"
    ) as CollectionReference<Omit<Participants, "uid">>;

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Participants[] = snapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));

      setParticipants(data);
    });

    return () => unsubscribe();
  }, [sessionId]);



  useEffect(() => {
    if (!sessionId) return;

    const q = collection(
      db,
      "retroSessions",
      sessionId,
      "notes"
    ) as CollectionReference<Omit<Note, "id">>;

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Note[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNotes(data);
    });

    return () => unsubscribe();
  }, [sessionId]);



  useEffect(() => {
    const uid = localStorage.getItem(`retro_${sessionId}_userId`);
    const name = localStorage.getItem(`retro_${sessionId}_userName`);

    if (uid && name) {
      setCurrentUserId(uid);
      setShowUserNameModal(false);
    }

    setTimeout(() => setLoading(false), 1000);
  }, [sessionId]);


  const handleUserNameSubmit = async (name: string) => {
    const ref = await addDoc(
      collection(db, "retroSessions", sessionId, "participants"),
      { name }
    );

    localStorage.setItem(`retro_${sessionId}_userId`, ref.id);
    localStorage.setItem(`retro_${sessionId}_userName`, name);

    setCurrentUserId(ref.id);
    setShowUserNameModal(false);
  };


  const addNote = async (category: string, text: string) => {
    if (!currentUserId || !text.trim()) return;

    await addDoc(collection(db, "retroSessions", sessionId, "notes"), {
      categoryName: category,
      text,
      userId: currentUserId,
      votes: 0,
      voters: [],
      createdAt: Timestamp.now(),
    });
  };


  const toggleVote = async (note: Note) => {
    if (!currentUserId) return;

    const ref = doc(db, "retroSessions", sessionId, "notes", note.id);
    const alreadyVoted = note.voters.includes(currentUserId);

    const newVoters = alreadyVoted
      ? note.voters.filter((id) => id !== currentUserId)
      : [...note.voters, currentUserId];

    await updateDoc(ref, { voters: newVoters, votes: newVoters.length });
  };


  const endSession = async () => {
    await updateDoc(doc(db, "retroSessions", sessionId), { completed: true });
    router.push("/home");
  };


return (
  <>
    {loading ? (
      <LoadingIndicator />
    ) : (
      showUserNameModal && (
        <UserNameModal
          onSubmit={handleUserNameSubmit}
          onClose={() => setShowUserNameModal(false)}
        />
      )
    )}

    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 p-4">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1
            className="mt-2 ml-2 mb-5 text-xs sm:text-sm md:text-lg font-extrabold
              text-violet-900 tracking-tight bg-white/80 px-1 sm:px-2
              md:px-4 py-0.5 sm:py-1 md:py-2 rounded-lg shadow border-l-4
              border-violet-400 lg:px-4 lg:py-3"
          >
            {sessionName}
          </h1>

          <InviteLinkPopUp sessionUrl={sessionUrl} />
          <p></p>

          <button
            className="mt-5 ml-2
              px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 rounded-lg
              sm:rounded-xl bg-violet-800 text-[10px] sm:text-sm md:text-base
              text-white font-semibold shadow-md sm:shadow-lg transition-all
              duration-200 hover:bg-violet-900 focus:outline-none focus:ring-violet-300
              focus:ring-2 sm:focus:ring-4 cursor-pointer no-underline"
            onClick={endSession}
          >
            End the Session
          </button>
        </div>

        {/* PARTICIPANTS DROPDOWN BUTTON */}
        <div className="relative" ref={participantsRef}>
          <button
            onClick={() => setShowParticipants((s) => !s)}
            className="px-2 py-1.5 rounded-lg border-2 font-semibold transition cursor-pointer
              bg-white border-violet-200 text-gray-700 hover:bg-violet-50
              focus:outline-none text-sm sm:text-base"
          >
            Participants
          </button>

          <div
            className={`absolute right-0 z-20 w-64 transition-all duration-300 origin-top ${
              showParticipants ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
            }`}
            style={{ transformOrigin: "top" }}
          >
            <div className="bg-white shadow rounded-xl p-4 border border-violet-200 mt-2">
              <ul className="space-y-1">
                {participants.map((p) => (
                  <li
                    key={p.uid}
                    className={`p-2 rounded-md ${
                      p.uid === currentUserId
                        ? "bg-violet-100 border border-violet-300"
                        : "bg-gray-100"
                    }`}
                  >
                    <p className="text-gray-700">{p.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-7">
        {categories.map((cat) => (
          <CategoryColumn
            key={cat}
            category={cat}
            notes={notes.filter((n) => n.categoryName === cat)}
            onAddNote={addNote}
            onVote={toggleVote}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  </>
);

}