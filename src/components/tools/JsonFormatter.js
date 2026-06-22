"use client";

import { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleFormat = () => {
    setError("");
    if (!input.trim()) {
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
    } catch (err) {
      setError(err.message);
      setOutput("");
    }
  };

  const handleValidate = () => {
    setError("");
    if (!input.trim()) {
      setError("Please enter some JSON to validate.");
      return;
    }
    try {
      JSON.parse(input);
      setOutput("");
      setError("");
      alert("Success! JSON is valid.");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text", err);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const handleLoadSample = () => {
    const sample = {
      name: "UtilityVerse",
      version: 1.0,
      description: "Local browser tools platform",
      features: ["JSON Formatter", "QR Generator", "Password Generator"],
      active: true,
      stats: {
        totalTools: 7,
        offlineCapable: true
      }
    };
    setInput(JSON.stringify(sample, null, 2));
    setOutput("");
    setError("");
  };

  return (
    <div className="space-y-6">
      {/* Action Buttons Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleFormat}
            className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 text-xs font-semibold text-zinc-50 hover:bg-zinc-800 transition-colors"
          >
            Format JSON
          </button>
          <button
            onClick={handleValidate}
            className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
          >
            Validate JSON
          </button>
          <button
            onClick={handleLoadSample}
            className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
          >
            Load Sample
          </button>
        </div>
        <div className="flex gap-2">
          {output && (
            <button
              onClick={handleCopy}
              className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
            >
              {copied ? "Copied!" : "Copy Formatted"}
            </button>
          )}
          <button
            onClick={handleClear}
            className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors text-red-600 hover:text-red-700"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Editor Layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Input */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Raw JSON Input
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Paste your JSON here (e.g. {"key": "value"})'
            className="h-96 w-full rounded-xl border border-zinc-200 bg-zinc-50/30 p-4 font-mono text-sm leading-relaxed text-zinc-800 placeholder-zinc-400 focus:border-zinc-400 focus:bg-white focus:outline-none transition-all resize-none shadow-inner"
          />
        </div>

        {/* Output */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Formatted JSON Output
          </label>
          {output ? (
            <pre className="h-96 w-full overflow-auto rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 font-mono text-sm leading-relaxed text-zinc-800 shadow-inner">
              <code>{output}</code>
            </pre>
          ) : (
            <div className="flex h-96 w-full items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-zinc-50/30 p-4 text-center text-sm text-zinc-400">
              Your formatted JSON will appear here.
            </div>
          )}
        </div>
      </div>

      {/* Validation Error Block */}
      {error && (
        <div className="rounded-xl border border-red-100 bg-red-50/50 p-4 text-sm text-red-800">
          <div className="flex items-start gap-2.5">
            <svg
              className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <div>
              <span className="font-bold block">Invalid JSON Syntax</span>
              <span className="font-mono mt-1 block text-xs">{error}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
