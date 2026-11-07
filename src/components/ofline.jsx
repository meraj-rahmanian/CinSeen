export default function Offline() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-black px-4 text-center">
      <img className="h-[12vh] w-[12vh] opacity-90" src="/favicon.png" alt="CinSeen" />

      <svg
        className="h-20 w-20 text-[#088ae0]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.5 16.5a5 5 0 017 0M5 12.9a10 10 0 015.2-2.8M19 12.9a10 10 0 00-3.2-2.1M2 8.8a15 15 0 014.2-2.7M22 8.8a15 15 0 00-8-3.7"
        />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">
          You're <span className="text-[#088ae0]">offline</span>
        </h1>
        <p className="max-w-md text-gray-400">
          It looks like your internet connection is lost. Check your connection and try again.
        </p>
      </div>

      <button
        onClick={() => window.location.reload()}
        className="rounded-lg bg-[#088ae0] px-6 py-3 font-semibold text-white transition hover:bg-[#21a2f8]"
      >
        Try again
      </button>
    </div>
  );
}