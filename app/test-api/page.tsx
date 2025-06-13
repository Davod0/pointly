'use client';

import { useState } from 'react';

export default function SendDataPage() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState<string | null>(null);

  const handleSendData = async () => {
    if (!name) return;

    const res = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    const json = await res.json();
    setResponse(json.names[0]);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Send Your Name</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />

      <button
        onClick={handleSendData}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Send
      </button>

      {response && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
          {response}
        </div>
      )}
    </div>
  );
}
