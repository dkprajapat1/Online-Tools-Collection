import Link from "next/link";

const IconHelper = ({ type }) => {
  switch (type) {
    case "json":
      return (
        <svg
          className="h-6 w-6 text-zinc-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    case "qr":
      return (
        <svg
          className="h-6 w-6 text-zinc-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v1m6 11h2m-6 0h-2v4m0-16v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
          />
        </svg>
      );
    case "password":
      return (
        <svg
          className="h-6 w-6 text-zinc-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 7a2 2 0 012 2m-9 5a3 3 0 11-6 0 3 3 0 016 0zm6.343-3.243L16 10l3.9-3.9a6 6 0 111.06 1.06L18 10.243V12a1 1 0 01-1 1h-2v2a1 1 0 01-1 1h-2v2a1 1 0 01-1 1H8.243"
          />
        </svg>
      );
    case "emi":
      return (
        <svg
          className="h-6 w-6 text-zinc-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "gst":
      return (
        <svg
          className="h-6 w-6 text-zinc-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    case "age":
      return (
        <svg
          className="h-6 w-6 text-zinc-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    case "word-counter":
      return (
        <svg
          className="h-6 w-6 text-zinc-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className="h-6 w-6 text-zinc-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      );
  }
};

export default function ToolCard({ name, description, href, icon }) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
      <div>
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-50 border border-zinc-100 transition-colors group-hover:bg-zinc-100/80">
          <IconHelper type={icon} />
        </div>
        <h3 className="text-lg font-bold tracking-tight text-zinc-900">
          {name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-zinc-50">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 group-hover:text-zinc-950"
        >
          <span>Open Tool</span>
          <svg
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
