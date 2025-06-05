"use client";

import { db } from "../../database/firestoreDbConfig";
import {
  collection,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default function TestFirestorePage() {
  const handleCreateTestSession = async () => {
    try {
      const sessionId = uuidv4();

      const sessionRef = doc(db, "sessions", sessionId);

      // Create the main session document
      await setDoc(sessionRef, {
        id: sessionId,
        createdBy: "test-user-id",
        createdAt: Timestamp.now(),
        isRevealed: false,
        fibonacciLabel: "Classic",
        status: "active",
        currentIssue: "Test task",
      });

      // Create subcollections: participants and votes
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
    } catch (error) {
      console.error("Error creating Firestore structure:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-2">Test Firestore Page</h1>
      <p>This page is used to test Firestore functionality.</p>
      <button className="mt-4 bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200 ease-in-out hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" onClick={handleCreateTestSession}>
        Create Test Session in Firestore
      </button>
    </div>
  );
}
