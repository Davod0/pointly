"use client";
import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function RetroSessionPageModel() {
  const categories = ["Start", "Stop", "Continue", "Improve"];

  const mockNotes = [
    {
      id: "1",
      author: "Anna Lindberg",
      text: "Improve cross-team communication and create clearer ownership.",
      votes: 3,
    },
    {
      id: "2",
      author: "Simon Keller",
      text: "Streamline daily standups to keep them focused.",
      votes: 1,
    },
  ];

  const mockComments = [
    { id: "c1", text: "Totally agree with this." },
    { id: "c2", text: "Yes, this would help a lot." },
  ];

  return (
    <div className="h-auto bg-gradient-to-br from-gray-100
    to-violet-100 p-2 select-none scale-[0.85] origin-top-left rounded-lg">
      <div className="flex justify-between items-start">
        <div>
          <h1
            className="
              text-[10px] font-extrabold text-violet-900 tracking-tight bg-white/80
              px-2 py-0.5 rounded-md shadow border-l-2 border-violet-400
            "
          >
            Retrospective (Preview Model)
          </h1>

          <button
            className="
              mt-2 ml-0.5 px-2 py-0.5 rounded-md text-[10px] font-semibold
              bg-violet-800 text-white shadow hover:bg-violet-900
            "
          >
            End Session
          </button>
        </div>
        <div className="relative">
          <button
            className="
              px-2 py-0.5 rounded-md border font-semibold text-[10px]
              bg-white border-violet-200 text-gray-700 hover:bg-violet-50
            "
          >
            Participants
          </button>

          <div
            className="
              absolute right-0 mt-1 bg-white shadow rounded-lg p-2 border border-violet-200
              w-36
            "
          >
            <ul className="space-y-1">
              <li className="p-1 rounded-md bg-violet-100 border border-violet-300">
                <p className="text-gray-700 text-[11px]">You (Maria Duarte)</p>
              </li>
              <li className="p-1 rounded-md bg-gray-100">
                <p className="text-gray-700 text-[11px]">Anna Lindberg</p>
              </li>
              <li className="p-1 rounded-md bg-gray-100">
                <p className="text-gray-700 text-[11px]">Simon Keller</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-2">
        {categories.map((cat) => (
          <div
            key={cat}
            className="bg-white p-2 rounded-lg shadow border border-violet-200"
          >
            <h3 className="flex items-center gap-1 text-[12px] font-semibold text-violet-800 mb-2">
              <span
                className={`
                  inline-block w-2 h-2 rounded-full
                  ${
                    cat === "Start"
                      ? "bg-sky-500"
                      : cat === "Stop"
                      ? "bg-red-500"
                      : cat === "Continue"
                      ? "bg-emerald-500"
                      : "bg-amber-500"
                  }
                `}
              ></span>
              {cat}
            </h3>
            <textarea
              className="
                w-full p-1 border rounded-md text-[11px] mb-1
                text-gray-700 border-gray-300 outline-gray-200
              "
              placeholder="Write a note..."
              disabled
            />

            <button
              className="
                w-full bg-violet-800 hover:bg-violet-900
                text-white py-1 rounded-md text-[11px] font-semibold
              "
            >
              Add Note
            </button>
            <ul className="mt-2 space-y-1">
              {mockNotes.map((note) => (
                <li
                  key={note.id}
                  className="border rounded-md p-2 bg-gray-50 text-[11px]"
                >
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-violet-800">
                      {note.author}
                    </p>

                    <button
                      className="
                        px-1 py-0.5 rounded-full text-[10px] font-semibold
                        text-red-600 hover:bg-red-100 cursor-default flex items-center
                      "
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-gray-700 mt-1">{note.text}</p>

                  <button
                    className="
                      mt-1 px-2 py-0.5 text-[10px] rounded-md bg-gray-200 text-gray-700
                    "
                  >
                    👍 {note.votes}
                  </button>
                  <div className="mt-2 p-2 bg-white/60 rounded-md border border-violet-200">
                    <ul className="space-y-1 mb-2 max-h-20 overflow-y-auto pr-1">
                      {mockComments.map((c) => (
                        <li
                          key={c.id}
                          className="
                            bg-gray-100 px-2 py-1 rounded-md border border-gray-300 text-[11px]
                          "
                        >
                          <p className="text-gray-800">{c.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-1">
                      <button
                        className="
                          bg-violet-800 text-white px-2 py-1
                          rounded-md text-[11px] font-semibold
                        "
                      >
                        Add
                      </button>

                      <input
                        type="text"
                        placeholder="Write a comment..."
                        disabled
                        className="
                          flex-1 min-w-0 border border-gray-300 rounded-md px-2 py-1 text-[11px]
                          text-gray-700 outline-gray-200
                        "
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
