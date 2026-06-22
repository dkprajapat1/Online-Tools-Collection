import Link from "next/link";

export default function ToolLayout({ title, description, children }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Navigation & Breadcrumbs */}
      <nav className="flex items-center justify-between border-b border-zinc-200/60 pb-4 mb-8">
        <ol className="flex items-center space-x-2 text-xs font-medium text-zinc-500">
          <li>
            <Link href="/" className="hover:text-zinc-900 transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              className="h-3 w-3 text-zinc-300"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
            <Link href="/tools" className="hover:text-zinc-900 transition-colors">
              Tools
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              className="h-3 w-3 text-zinc-300"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
            <span className="text-zinc-900 font-semibold">{title}</span>
          </li>
        </ol>

        <Link
          href="/tools"
          className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span>Back to Tools</span>
        </Link>
      </nav>

      {/* Tool Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-base text-zinc-500 leading-relaxed max-w-3xl">
          {description}
        </p>

        {/* Local Processing Privacy Note */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50/50 px-3 py-1.5 text-xs text-emerald-800">
          <svg
            className="h-4 w-4 text-emerald-600 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span className="font-medium">
            All processing happens locally in your browser. No data is stored or transmitted.
          </span>
        </div>
      </div>

      {/* Tool Application Container */}
      <main className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        {children}
      </main>
    </div>
  );
}
