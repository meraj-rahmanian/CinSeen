import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-4 pt-5 text-center">
      <img className="h-[12vh] w-[12vh] opacity-90" src="/favicon.png" alt="CinSeen" />

      <h1 className="text-8xl font-bold text-white md:text-9xl">
        4<span className="text-[#088ae0]">0</span>4
      </h1>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-white">Page not found</h2>
        <p className="max-w-md text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          to="/HOME"
          className="rounded-lg bg-[#088ae0] px-6 py-3 font-semibold text-white transition hover:bg-[#21a2f8] "
        >
          Back to Home
        </Link>
        <Link
          to="/MOVIES"
          className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition hover:border-[#088ae0] hover:text-[#088ae0]"
        >
          Browse Movies
        </Link>
      </div>
    </div>
  );
}