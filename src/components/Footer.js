import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-zinc-100 pb-8 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <span className="text-lg font-bold tracking-tight text-zinc-900">
              UtilityVerse
            </span>
            <p className="text-center text-xs text-zinc-500 sm:text-left">
              Fast, secure, browser-local tools to simplify your digital workflow.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <span className="text-sm font-semibold text-zinc-900">
              Dinesh Kumar Prajapat
            </span>
            <a
              href="mailto:dineshkumarprajapat.dev@gmail.com"
              className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              dineshprajapat.cse28@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} UtilityVerse. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-300 bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 active:scale-[0.98]"
            >
              Built for Digital Heroes
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
