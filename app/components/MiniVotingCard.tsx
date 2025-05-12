
export default function PointingCard() {
  return (
    <div className="flex flex-col items-start bg-white shadow-lg rounded-lg p-6 max-w-sm">
      <h2 className="text-xl font-semibold mb-4">Pointing Card</h2>
      <p className="text-gray-700 mb-4">
        Use this card to estimate the effort required for a task.
      </p>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Estimate
        </button>
        <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg">
          Cancel
        </button>
      </div>
    </div>
  );
}