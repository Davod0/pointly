export default function LoadingIndicator({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm">
      <div className="w-20 h-20 border-6 border-violet-800 border-dashed rounded-full animate-spin"></div>
      <p className="mt-6 text-violet-800 font-bold text-xl">{text}</p>
    </div>
  );
}
