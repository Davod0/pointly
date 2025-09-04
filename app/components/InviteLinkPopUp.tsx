"use client";
import React, { useState, useRef, useEffect } from "react";

interface InviteLinkPopoverProps {
  sessionUrl?: string;
}

export default function InviteLinkPopUp({ sessionUrl }: InviteLinkPopoverProps) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [animation, setAnimation] = useState<null | "in" | "out">(null);
  const timerRef = useRef<number | null>(null);

  const sUrl = `${sessionUrl}`;

  function showPopover() {
    setVisible(true);
    setAnimation("in");
    timerRef.current = window.setTimeout(() => setAnimation(null), 250);
  }

  function hidePopover() {
    setAnimation("out");
    timerRef.current = window.setTimeout(() => {
      setVisible(false);
      setAnimation(null);
    }, 250);
  }

  const handleToggle = () => {
    if (visible) {
      hidePopover();
    } else {
      showPopover();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(sUrl);
    setCopied(true);
    hidePopover();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = hidePopover;

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const shouldRender = visible || animation === "out";

  return (
    <div className="relative inline-block">
      <button
        onClick={handleToggle}
        className="text-sm sm:text-base md:text-lg font-medium text-violet-800 underline hover:text-violet-900 transition px-1 sm:px-2 cursor-pointer"
      >
        🔗 Invite others
      </button>
      {shouldRender && (
        <div
          className={`
            absolute left-0 mt-2 w-64 sm:w-80 md:w-96
            bg-white p-2 sm:p-3 md:p-4
            rounded-xl shadow-xl border border-violet-200 z-50
            transition-all duration-250
            ${animation === "in"
                ? "opacity-0 translate-y-2"
                : animation === "out"
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
            }
          `}
        >
          <div className="flex justify-between items-start mb-2">
            <div className="text-xs sm:text-sm text-gray-600">Share this link:</div>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <input
              readOnly
              value={sUrl}
              className="
                flex-1 px-2 sm:px-3 py-0.5 sm:py-1
                text-xs sm:text-sm
                border rounded-md bg-gray-100 text-gray-700 truncate
              "
            />
            <button
              onClick={handleCopy}
              className="
                px-2 sm:px-3 py-0.5 sm:py-1
                text-xs sm:text-sm
                bg-violet-800 text-white rounded-md hover:bg-violet-900 transition cursor-pointer
              "
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
