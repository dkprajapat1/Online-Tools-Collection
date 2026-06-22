import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";

export const metadata = {
  title: "All Online Productivity Utilities | UtilityVerse",
  description: "Explore our collection of fast, browser-local utilities. Including JSON Formatter, QR Generator, Password Generator, EMI & GST Calculators, Age Calculator, and Word Counter.",
  openGraph: {
    title: "All Productivity Tools | UtilityVerse",
    description: "Free, client-side developer and utility tools. 100% private and run inside your web browser."
  }
};

export default function ToolsListingPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="border-b border-zinc-200/60 pb-8 mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Online Tools Collection
        </h1>
        <p className="mt-3 text-base text-zinc-500 leading-relaxed max-w-2xl">
          A curated suite of clean, secure, and instant productivity tools. No tracking, no latency. Everything executes in your local browser sandbox.
        </p>
      </div>

      {/* Grid of Tools */}
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
  );
}
