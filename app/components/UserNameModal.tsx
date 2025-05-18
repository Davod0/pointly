'use client';
import React, { useEffect, useRef, useState, FormEvent, ChangeEvent, KeyboardEvent } from "react";

interface UserNameModalProps {
  onSubmit?: (userName: string) => void;
  onClose?: () => void;
}

const UserNameModal: React.FC<UserNameModalProps> = ({ onSubmit, onClose }) => {
  const [userName, setUserName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = userName.trim();
    if (trimmedName) {
      localStorage.setItem("userName", trimmedName);
      if (onSubmit) onSubmit(trimmedName);
    }
  };

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && onClose) onClose();
    }
    const listener = (e: Event) => handleKeyDown(e as unknown as KeyboardEvent);
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center gap-y-6 min-w-[340px] max-w-[90vw] relative"
        style={{ minHeight: "320px" }}
      >
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-violet-600 text-2xl cursor-pointer"
            aria-label="Close"
          >
            &times;
          </button>
        )}
        <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-2 text-center">
          Enter Your Name
        </h2>
        <input
          ref={inputRef}
          type="text"
          value={userName}
          onChange={handleInputChange}
          className="w-full px-5 py-3 rounded-xl border-2 border-violet-200
            focus:border-violet-400 focus:ring-2 focus:ring-violet-200 text-lg outline-none transition text-gray-700"
          placeholder="Your name"
          maxLength={32}
          required
        />
        <button
          type="submit"
          className="
            mt-7
            px-8 py-3
            rounded-xl
            bg-violet-800
            text-white
            text-lg
            font-semibold
            shadow-lg
            transition-all
            duration-200
            hover:bg-violet-900
            hover:shadow-xl
            focus:outline-none
            focus:ring-4
            focus:ring-violet-300
            cursor-pointer
            no-underline
          "
          disabled={!userName.trim()}
          >
          Join Session
        </button>
      </form>
    </div>
  );
};

export default UserNameModal;
