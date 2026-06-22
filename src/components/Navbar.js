import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              className="h-6 w-6 text-zinc-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v18m9-9H3m12-9l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <span className="text-xl font-bold tracking-tight text-zinc-900">
              UtilityVerse
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Home
            </Link>
            <Link
              href="/tools"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Tools
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/tools"
            className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow-sm transition-all hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 active:scale-[0.98]"
          >
            Explore Tools
          </Link>
        </div>
      </div>
    </header>
  );
}
