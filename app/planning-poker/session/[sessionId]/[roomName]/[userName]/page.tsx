interface SessionRoomPageProps {
  params: Promise<{
    sessionId: string;
    userName: string;
    roomName: string;
  }>;
}

export default async function SessionPage({ params }: SessionRoomPageProps) {
  const { sessionId, userName, roomName } = await params;

  return (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-violet-200 via-violet-100 to-white">
    <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl px-10 py-8 max-w-md w-full border border-violet-200">
      <h1 className="text-4xl font-bold text-violet-800 mb-4 text-center drop-shadow">
        Session Started
      </h1>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-violet-700">Session ID:</span>
          <span className="text-gray-700">{sessionId}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-violet-700">User Name:</span>
          <span className="text-gray-700">{userName}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-violet-700">Room Name:</span>
          <span className="text-gray-700">{roomName}</span>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <span className="inline-block px-4 py-2 bg-violet-100 text-violet-700 rounded-md text-sm font-medium shadow">
          Ready to collaborate!
        </span>
      </div>
    </div>
  </div>
 );
}
