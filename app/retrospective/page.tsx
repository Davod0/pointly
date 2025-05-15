import Badge from "../components/Badge";
import Header from "../components/Header";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-100 flex flex-col items-center">
        <Header />
      <div className="mt-20 mb-20">
        <span className="inline-block bg-violet-100 text-violet-800 font-semibold px-6 py-2 rounded-full shadow-sm text-base border border-violet-200">
          Sprint 24: May 2025
        </span>
        {/* <Badge /> */}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl text-center">
        <span className="text-xl text-gray-700 font-medium">
          <h1 className="text-2xl font-bold mb-5">This is the retrospective page</h1>
          Reflect, learn, and grow with your team.
        </span>
      </div>
    </div>
  );
}
