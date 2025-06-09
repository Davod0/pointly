"use client";

import { useEffect, useState } from "react";
import { db } from "../../database/firestoreDbConfig";
import { Participants, Votes } from "../../types/types";
import {
  collection,
  doc,
  setDoc,
  Timestamp,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

interface SessionData {
  id: string;
  createdAt: Timestamp;
  createdBy: string;
  fibonacciLabel?: string;
  status: string;
  isRevealed: boolean;
  currentIssue?: string;
  participants: Participants[];
  votes: Votes[];
}

const fibonacciValues = [
  { label: "Classic", values: ["☕️", 0.5, 1, 2, 4, 6, 8, 16, 32] },
  { label: "Extended", values: ["☕️", 0.5, 1, 2, 3, 5, 8, 16, 32, 40, 64] },
  { label: "T-Shirt", values: ["XXS", "XS", "S", "M", "L", "XL", "XXL"] },
];



export default function TestFirestorePage() {
  const [sessions, setSessions] = useState<SessionData[]>([]);

  const handleCreateSession = async () => {
    try {
      const sessionId = uuidv4();
      const sessionRef = doc(db, "sessions", sessionId);

      await setDoc(sessionRef, {
        id: sessionId,
        createdAt: Timestamp.now(),
        createdBy: "test-user-id",
        fibonacciLabel: "test",
        status: "test",
        isRevealed: false,
        currentIssue: "test",
      });

      const participantsRef = doc(collection(sessionRef, "participants"), "user_1");
      await setDoc(participantsRef, {
        uid: "user_1",
        name: "Alice",
      });

      const votesRef = doc(collection(sessionRef, "votes"), "user_1");
      await setDoc(votesRef, {
        uid: "user_1",
        userName: "Alice",
        point: "",
        isPicked: false,
      });

      console.log("Session and subcollections created successfully!");
      fetchSessions(); // Refresh view
    } catch (error) {
      console.error("Error creating Firestore structure:", error);
    }
  };

  const fetchSessions = async () => {
    try {
      const sessionsSnapshot = await getDocs(collection(db, "sessions"));
      const sessionData: SessionData[] = [];

      for (const sessionDoc of sessionsSnapshot.docs) {
        const session = sessionDoc.data();

        // Fetch subcollections
        const participantsSnapshot = await getDocs(collection(sessionDoc.ref, "participants"));
        const votesSnapshot = await getDocs(collection(sessionDoc.ref, "votes"));

        const participants = participantsSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            uid: data.uid,
            name: data.name,
          } as Participants;
        });
        const votes = votesSnapshot.docs.map(doc => doc.data() as Votes);

        sessionData.push({
          ...(session as SessionData),
          participants,
          votes,
        });
      }

      setSessions(sessionData);
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleAddFibonacciSets = async () => {
  try {
    const fibonacciCollectionRef = collection(db, "fibonacci");

    for (const fib of fibonacciValues) {
      const fibDocRef = doc(fibonacciCollectionRef, fib.label); // use label as document ID
      await setDoc(fibDocRef, {
        label: fib.label,
        values: fib.values,
      });
    }

    console.log("Fibonacci sets added to Firestore!");
  } catch (error) {
    console.error("Error adding Fibonacci sets:", error);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-blue-900">Test Firestore Page</h1>
        <p className="text-gray-600 mb-8 text-lg">
          This page is used to test Firestore functionality.
        </p>

        <button
          onClick={handleCreateSession}
          className="mb-10 bg-blue-600 text-white font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          Create Test Session in Firestore
        </button>

        <button
          onClick={handleAddFibonacciSets}
          className="mb-10 ml-4 bg-green-600 text-white font-semibold py-2.5 px-8 rounded-lg shadow-lg
                    hover:bg-green-700 hover:scale-105 transition-transform
                    focus:ring-2 focus:ring-green-400 focus:outline-none"
          >
          Add Fibonacci Sets to Firestore
        </button>


        <div className="space-y-8">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="border border-gray-200 rounded-xl p-6 shadow-lg bg-white hover:shadow-xl hover:border-blue-300 transition-shadow"
            >
              <h2 className="text-xl font-bold text-blue-800 mb-2 break-all">
                Session: <span className="font-mono">{session.id}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-4">
                <p>
                  <span className="font-semibold text-gray-700">Created By:</span>{" "}
                  <span className="text-gray-900">{session.createdBy}</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Status:</span>{" "}
                  <span className="text-gray-900">{session.status}</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Is Revealed:</span>{" "}
                  <span className="text-gray-900">
                    {session.isRevealed ? "Yes" : "No"}
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Fibonacci Label:</span>{" "}
                  <span className="text-gray-900">{session.fibonacciLabel}</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Current Issue:</span>{" "}
                  <span className="text-gray-900">{session.currentIssue}</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Created At:</span>{" "}
                  <span className="text-gray-900">
                    {session.createdAt.toDate().toLocaleString()}
                  </span>
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-blue-700 font-semibold mb-1">Participants</h3>
                <ul className="list-disc list-inside pl-4 space-y-1 divide-y divide-gray-100 text-gray-900">
                  {session.participants.length > 0 ? (
                    session.participants.map((p, idx) => (
                      <li key={idx} className="py-1">
                        <span className="text-gray-900">{p.name}</span>{" "}
                        <span className="text-gray-900">({p.uid})</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-900 italic">No participants</li>
                  )}
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-blue-700 font-semibold mb-1">Votes</h3>
                <ul className="list-disc list-inside pl-4 space-y-1 divide-y text-gray-900">
                  {session.votes.length > 0 ? (
                    session.votes.map((v, idx) => (
                      <li key={idx} className="py-1">
                        <span className="text-gray-900">{v.userName}</span> — Point:{" "}
                        <span className="text-blue-800">{v.point || "N/A"}</span>{" "}
                        | Picked:{" "}
                        <span
                          className={
                            v.isPicked
                              ? "text-green-600 font-semibold"
                              : "text-gray-500"
                          }
                        >
                          {v.isPicked ? "Yes" : "No"}
                        </span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400 italic">No votes</li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
