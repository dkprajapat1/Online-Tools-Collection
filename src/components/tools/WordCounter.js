"use client";

import { useEffect, useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState({
    characters: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    spaces: 0,
    lettersOnly: 0,
    readingTime: { minutes: 0, seconds: 0 }
  });

  const analyzeText = () => {
    if (!text) {
      setStats({
        characters: 0,
        words: 0,
        sentences: 0,
        paragraphs: 0,
        spaces: 0,
        lettersOnly: 0,
        readingTime: { minutes: 0, seconds: 0 }
      });
      return;
    }

    const characters = text.length;

    // Word count (split by spaces/whitespace and filter out empty strings)
    const wordsArray = text.trim().split(/\s+/).filter((w) => w.length > 0);
    const words = wordsArray.length;

    // Sentence count (split by period, exclamation, question mark, filter out empty strings)
    const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;

    // Paragraph count (split by newlines, filter empty lines)
    const paragraphs = text.split(/\n+/).filter((p) => p.trim().length > 0).length;

    // Space count
    const spaces = (text.match(/ /g) || []).length;

    // Letters only (alphabetic & numeric characters without whitespace/punctuation)
    const lettersOnly = (text.match(/[a-zA-Z0-9]/g) || []).length;

    // Reading time calculation (average 200 WPM)
    const wpm = 200;
    const totalSeconds = Math.round((words / wpm) * 60);
    const readingTime = {
      minutes: Math.floor(totalSeconds / 60),
      seconds: totalSeconds % 60
    };

    setStats({
      characters,
      words,
      sentences,
      paragraphs,
      spaces,
      lettersOnly,
      readingTime
    });
  };

  useEffect(() => {
    analyzeText();
  }, [text]);

  const handleCopy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text", err);
    }
  };

  const handleClear = () => {
    setText("");
  };

  const handleLoadDemo = () => {
    setText(
      "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations. Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time setting up tooling. Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast web applications."
    );
  };

  return (
    <div className="space-y-6">
      {/* Controls header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
          Enter Your Text Below
        </span>
        <div className="flex gap-2">
          <button
            onClick={handleLoadDemo}
            className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
          >
            Load Demo Text
          </button>
          {text && (
            <>
              <button
                onClick={handleCopy}
                className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                {copied ? "Copied!" : "Copy Text"}
              </button>
              <button
                onClick={handleClear}
                className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors"
              >
                Clear
              </button>
            </>
          )}
        </div>
      </div>

      {/* Main Textarea */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here to analyze..."
        className="h-80 w-full rounded-xl border border-zinc-200 bg-zinc-50/30 p-4 font-sans text-sm leading-relaxed text-zinc-800 placeholder-zinc-400 focus:border-zinc-400 focus:bg-white focus:outline-none transition-all resize-none shadow-inner"
      />

      {/* Analysis Grid (Outputs) */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 pt-4 border-t border-zinc-100">
        {/* Words */}
        <div className="rounded-xl border border-zinc-100 bg-zinc-50/30 p-4 shadow-sm text-center">
          <span className="text-3xl font-black text-zinc-900 tracking-tight">
            {stats.words.toLocaleString()}
          </span>
          <span className="text-xs font-semibold text-zinc-500 block mt-1">Words</span>
        </div>

        {/* Characters */}
        <div className="rounded-xl border border-zinc-100 bg-zinc-50/30 p-4 shadow-sm text-center">
          <span className="text-3xl font-black text-zinc-900 tracking-tight">
            {stats.characters.toLocaleString()}
          </span>
          <span className="text-xs font-semibold text-zinc-500 block mt-1">Characters</span>
        </div>

        {/* Sentences */}
        <div className="rounded-xl border border-zinc-100 bg-zinc-50/30 p-4 shadow-sm text-center">
          <span className="text-3xl font-black text-zinc-900 tracking-tight">
            {stats.sentences.toLocaleString()}
          </span>
          <span className="text-xs font-semibold text-zinc-500 block mt-1">Sentences</span>
        </div>

        {/* Paragraphs */}
        <div className="rounded-xl border border-zinc-100 bg-zinc-50/30 p-4 shadow-sm text-center">
          <span className="text-3xl font-black text-zinc-900 tracking-tight">
            {stats.paragraphs.toLocaleString()}
          </span>
          <span className="text-xs font-semibold text-zinc-500 block mt-1">Paragraphs</span>
        </div>
      </div>

      {/* Extended Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {/* Reading Time */}
        <div className="rounded-xl border border-zinc-100 bg-zinc-50/10 p-4 flex items-center justify-between">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            Estimated Reading Time
          </span>
          <span className="text-sm font-bold text-zinc-800 bg-zinc-100 px-3 py-1 rounded-full">
            {stats.readingTime.minutes > 0 ? (
              <span>
                {stats.readingTime.minutes}m {stats.readingTime.seconds}s read
              </span>
            ) : stats.words > 0 ? (
              <span>{stats.readingTime.seconds}s read</span>
            ) : (
              <span>0s read</span>
            )}
          </span>
        </div>

        {/* Text Breakdown */}
        <div className="rounded-xl border border-zinc-100 bg-zinc-50/10 p-4 flex justify-between items-center text-xs text-zinc-500">
          <div>
            <span>Spaces: </span>
            <span className="font-bold text-zinc-700">{stats.spaces}</span>
          </div>
          <div className="border-l border-zinc-200 h-4" />
          <div>
            <span>Letters only: </span>
            <span className="font-bold text-zinc-700">{stats.lettersOnly}</span>
          </div>
          <div className="border-l border-zinc-200 h-4" />
          <div>
            <span>WPM Rate: </span>
            <span className="font-bold text-zinc-700">200 words/min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
