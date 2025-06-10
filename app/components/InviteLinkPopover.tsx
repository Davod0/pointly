"use client";
import React, { useState } from "react";

interface InviteLinkPopoverProps {
  sessionUrl?: string;
}

export default function InviteLinkPopover({ sessionUrl }: InviteLinkPopoverProps) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const sUrl = `${sessionUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setVisible(!visible)}
        className="text-lg font-medium text-violet-700 underline hover:text-violet-900 transition px-2 cursor-pointer"
      >
        🔗 Invite others
      </button>

      {visible && (
        <div className="absolute left-0 mt-2 w-96 bg-white p-4 rounded-xl shadow-xl border border-violet-200 z-50">
          <div className="flex justify-between items-start mb-2">
            <div className="text-sm text-gray-600">Share this link:</div>
            <button
              onClick={() => setVisible(false)}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center transition cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              readOnly
              value={sUrl}
              className="flex-1 px-3 py-1 text-sm border rounded-md bg-gray-100 text-gray-700 truncate"
            />
            <button
              onClick={handleCopy}
              className="px-3 py-1 text-sm bg-violet-800 text-white rounded-md hover:bg-violet-900 transition cursor-pointer"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
