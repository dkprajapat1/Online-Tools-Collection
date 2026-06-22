import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";

export default function Home() {
  const featuredTools = tools.filter((tool) => tool.featured);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Hero Copy */}
            <div className="space-y-6 lg:col-span-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-50 border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                100% Client-Side & Secure
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl leading-[1.1]">
                All Your Essential Tools <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 bg-clip-text text-transparent">
                  in One Place
                </span>
              </h1>
              <p className="mx-auto max-w-lg lg:mx-0 text-base text-zinc-500 leading-relaxed sm:text-lg">
                A collection of fast, reliable, and free utilities designed to simplify everyday tasks. Open source, privacy-focused, and instant.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/tools"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-50 shadow-md transition-all hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 active:scale-[0.98]"
                >
                  Explore Tools
                </Link>
                <Link
                  href="#collection"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition-all hover:bg-zinc-50 hover:text-zinc-900 active:scale-[0.98]"
                >
                  View Collection
                </Link>
              </div>
            </div>

            {/* Pure CSS/Tailwind Hero Illustration (Col Span 6) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg aspect-video sm:aspect-[4/3] rounded-2xl border border-zinc-200 bg-zinc-50/50 p-3 shadow-lg overflow-hidden">
                {/* Browser Shell Top Bar */}
                <div className="flex items-center justify-between border-b border-zinc-200/80 pb-2 mb-3">
                  <div className="flex space-x-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="rounded bg-zinc-200/60 px-6 py-0.5 text-[10px] font-medium text-zinc-500 font-mono">
                    utilityverse.dev/tools
                  </div>
                  <div className="w-9 h-1" /> {/* spacer */}
                </div>

                {/* Dashboard layout mock */}
                <div className="grid grid-cols-4 gap-3 h-full pb-8">
                  {/* Mock Sidebar */}
                  <div className="col-span-1 border-r border-zinc-250 border-zinc-250/60 pr-2 space-y-2 hidden sm:block">
                    <div className="h-5 rounded bg-zinc-200/70" />
                    <div className="h-4 rounded bg-zinc-100" />
                    <div className="h-4 rounded bg-zinc-100" />
                    <div className="h-4 rounded bg-zinc-100" />
                  </div>
                  {/* Mock Main Panel */}
                  <div className="col-span-4 sm:col-span-3 space-y-3 pl-1">
                    {/* Tool header mock */}
                    <div className="flex justify-between items-center">
                      <div className="w-24 h-4 rounded bg-zinc-300" />
                      <div className="w-16 h-3.5 rounded bg-emerald-100/50 border border-emerald-200" />
                    </div>
                    {/* Form Input fields mock */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-10 rounded-lg border border-zinc-200 bg-white p-2 space-y-1">
                        <div className="w-8 h-2 rounded bg-zinc-150 bg-zinc-200/80" />
                        <div className="w-12 h-3 rounded bg-zinc-200" />
                      </div>
                      <div className="h-10 rounded-lg border border-zinc-200 bg-white p-2 space-y-1">
                        <div className="w-10 h-2 rounded bg-zinc-150 bg-zinc-200/80" />
                        <div className="w-8 h-3 rounded bg-zinc-200" />
                      </div>
                    </div>
                    {/* Large output board mock */}
                    <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm space-y-2 flex-1">
                      <div className="w-28 h-3 rounded bg-zinc-200" />
                      <div className="flex items-end space-x-1">
                        <div className="w-16 h-7 rounded bg-zinc-900" />
                        <div className="w-4 h-4 rounded bg-zinc-300 mb-0.5" />
                      </div>
                      {/* Simulated Chart/Visual element */}
                      <div className="mt-3 flex space-x-1.5 items-end h-8 pt-2">
                        <div className="w-full h-3 rounded-sm bg-zinc-200/70" />
                        <div className="w-full h-5 rounded-sm bg-zinc-200/70" />
                        <div className="w-full h-7 rounded-sm bg-zinc-900" />
                        <div className="w-full h-4 rounded-sm bg-zinc-200/70" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED TOOLS SECTION */}
      <section className="bg-zinc-50/50 py-16 sm:py-24 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Popular Utilities
            </h2>
            <p className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Featured Tools
            </p>
            <p className="mt-4 text-base text-zinc-500">
              Try our most frequently used browser utilities, featuring full validation, security, and one-click actions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                name={tool.name}
                description={tool.description}
                href={tool.href}
                icon={tool.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. ALL TOOLS GRID SECTION */}
      <section id="collection" className="bg-white py-16 sm:py-24 border-b border-zinc-200 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Complete Catalog
            </h2>
            <p className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Explore the Suite
            </p>
            <p className="mt-4 text-base text-zinc-500">
              Access the entire collection of free client-side calculators, generators, and formatters in a clean card grid.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard
                key={tool.id}
                name={tool.name}
                description={tool.description}
                href={tool.href}
                icon={tool.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="bg-zinc-50/20 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                  Why UtilityVerse?
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl leading-[1.2]">
                  Simplicity, Productivity & Total Data Privacy
                </h3>
              </div>
              <div className="lg:col-span-7 space-y-6 text-sm text-zinc-500 leading-relaxed">
                <p>
                  Every day, we copy, calculate, format, and convert values online. Most existing web tools are cluttered with spammy banner ads, captcha checks, or slow server-side roundtrips that upload your sensitive data to unverified servers.
                </p>
                <p>
                  <strong className="text-zinc-900 font-semibold">UtilityVerse</strong> was built as a premium alternative. It provides the essential everyday utilities with a clean, Notion-like user interface.
                </p>
                <p>
                  Our guiding principles are:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-medium text-zinc-800">
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>100% Browser Local</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Ad-Free & Tracking-Free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Zero Server Overhead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Fully Responsive UI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
