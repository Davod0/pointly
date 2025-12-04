"use client";
import { Note } from "../../types/types";
import { useState } from "react";
import CommentSection from "./CommentSection";

interface CategoryColumnProps {
  category: string;
  notes: Note[];
  onAddNote: (category: string, text: string) => void;
  onVote: (note: Note) => void;
  currentUserId: string | null;
  sessionId: string;
}

export default function CategoryColumn({
  category,
  notes,
  onAddNote,
  onVote,
  currentUserId,
  sessionId,
}: CategoryColumnProps) {
  const [text, setText] = useState("");

  return (
    <div className="bg-white p-4 rounded-xl shadow border border-violet-200">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-violet-800 mb-3">
        <span
          className={`inline-block w-3 h-3 rounded-full ${
            category === "Start"
              ? "bg-sky-500"
              : category === "Stop"
              ? "bg-red-500"
              : category === "Continue"
              ? "bg-emerald-500"
              : "bg-amber-500"
          }`}
        ></span>
        {category}
      </h3>

      <textarea
        className="w-full p-2 border rounded-lg text-sm mb-2
         text-gray-700 border-gray-300
         outline-gray-200"
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => {
          onAddNote(category, text);
          setText("");
        }}
        className="w-full bg-violet-800 hover:bg-violet-900 cursor-pointer
         text-white py-1 rounded-lg text-sm font-semibold"
      >
        Add Note
      </button>

      <ul className="mt-4 space-y-3">
        {notes.map((note) => (
          <li key={note.id} className="border rounded-lg p-3 bg-gray-50">
            <p className="text-sm text-gray-700">{note.text}</p>

            <button
              onClick={() => onVote(note)}
              className={`mt-2 px-2 py-1 text-xs rounded-md cursor-pointer ${
                note.voters.includes(currentUserId || "")
                  ? "bg-violet-300 text-violet-900"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              👍 {note.votes}
            </button>

            <CommentSection
              noteId={note.id}
              currentUserId={currentUserId}
              sessionId={sessionId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}