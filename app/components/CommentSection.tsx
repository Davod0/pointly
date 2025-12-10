"use client";
import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  Timestamp,
  CollectionReference,
} from "firebase/firestore";
import { db } from "@/database/firestoreDbConfig";
import { Comment } from "../../types/types";

interface Props {
  sessionId: string;
  noteId: string;
  currentUserId: string | null;
}

export default function CommentSection({ sessionId, noteId, currentUserId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const q = collection(
      db,
      "retroSessions",
      sessionId,
      "notes",
      noteId,
      "comments"
    ) as CollectionReference<Omit<Comment, "id">>;

    const unsub = onSnapshot(q, (snapshot) => {
      const list: Comment[] = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .sort((a, b) => a.createdAt.seconds - b.createdAt.seconds);

      setComments(list);
    });

    return () => unsub();
  }, [sessionId, noteId]);

  const addComment = async () => {
    if (!currentUserId || !text.trim()) return;

    await addDoc(
      collection(db, "retroSessions", sessionId, "notes", noteId, "comments"),
      {
        userId: currentUserId,
        text,
        createdAt: Timestamp.now(),
      }
    );

    setText("");
  };

  return (
    <div className="mt-3 p-3 bg-white/60 rounded-lg border border-violet-200">
      <ul className="space-y-2 mb-3 max-h-40 overflow-y-auto pr-1">
        {comments.map((c) => (
          <li
            key={c.id}
            className="bg-gray-100 px-3 py-2 rounded-md border border-gray-300"
          >
            <p className="text-gray-800 text-sm">{c.text}</p>
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <button
          onClick={addComment}
          className="shrink-0 bg-violet-800 hover:bg-violet-900 cursor-pointer text-white px-3 py-1.5
          rounded-lg text-sm font-semibold transition"
        >
          Add
        </button>

        <input
          type="text"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 min-w-0 border border-gray-300 rounded-lg px-3 py-1.5
          text-sm outline-gray-200 text-gray-700"
        />
      </div>
    </div>
  );
}
