"use client";
import { Note, Participants } from "../../types/types";
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import CommentSection from "./CommentSection";

interface CategoryColumnProps {
  category: string;
  notes: Note[];
  onAddNote: (category: string, text: string) => void;
  onVote: (note: Note) => void;
  onDeleteNote: (note: Note) => void;
  currentUserId: string | null;
  sessionId: string;
  participants: Participants[];
}

export default function CategoryColumn({
  category,
  notes,
  onAddNote,
  onVote,
  onDeleteNote,
  currentUserId,
  sessionId,
  participants,
}: CategoryColumnProps) {
  const [text, setText] = useState("");

  const getAuthorName = (userId: string) => {
    const participant = participants.find((p) => p.uid === userId);
    return participant ? participant.name : "Unknown";
  };

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
            <div className="flex justify-between items-center">
              <p
                className="
                  font-semibold text-violet-800
                  sm:text-xs md:text-sm lg:text-base
                "
              >
                {getAuthorName(note.userId)}
              </p>

              <button
                onClick={() => onDeleteNote(note)}
                className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[11px] font-semibold
                          text-red-600 hover:bg-red-100 hover:border-red-100 hover:text-red-700
                          transition-colors cursor-pointer"
              >
                <TrashIcon className="w-5 h-6" />
              </button>
            </div>

            <p className="text-sm text-gray-700 mt-1">{note.text}</p>

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
