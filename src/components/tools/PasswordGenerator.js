"use client";

import { useEffect, useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:',./<>?";

  const generatePassword = () => {
    let charset = "";
    if (useUppercase) charset += uppercaseChars;
    if (useLowercase) charset += lowercaseChars;
    if (useNumbers) charset += numberChars;
    if (useSymbols) charset += symbolChars;

    if (!charset) {
      setPassword("");
      return;
    }

    let generated = "";
    // Ensure we get at least one character from each selected set
    const mandatoryChars = [];
    if (useUppercase) mandatoryChars.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);
    if (useLowercase) mandatoryChars.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]);
    if (useNumbers) mandatoryChars.push(numberChars[Math.floor(Math.random() * numberChars.length)]);
    if (useSymbols) mandatoryChars.push(symbolChars[Math.floor(Math.random() * symbolChars.length)]);

    for (let i = 0; i < length - mandatoryChars.length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generated += charset[randomIndex];
    }

    // Insert mandatory characters at random positions
    const finalPasswordArray = generated.split("");
    mandatoryChars.forEach((char) => {
      const pos = Math.floor(Math.random() * (finalPasswordArray.length + 1));
      finalPasswordArray.splice(pos, 0, char);
    });

    setPassword(finalPasswordArray.join(""));
  };

  // Re-generate password when settings change
  useEffect(() => {
    generatePassword();
  }, [length, useUppercase, useLowercase, useNumbers, useSymbols]);

  const getStrength = () => {
    if (!password) return { text: "Too Short", color: "bg-zinc-200", level: 0, textClass: "text-zinc-500" };

    const selectedSets = [useUppercase, useLowercase, useNumbers, useSymbols].filter(Boolean).length;
    
    if (length < 8 || selectedSets <= 1) {
      return { text: "Weak", color: "bg-red-500", level: 1, textClass: "text-red-600" };
    }
    if (length >= 16 && selectedSets === 4) {
      return { text: "Excellent", color: "bg-emerald-500", level: 4, textClass: "text-emerald-600" };
    }
    if (length >= 12 && selectedSets >= 3) {
      return { text: "Strong", color: "bg-blue-500", level: 3, textClass: "text-blue-600" };
    }
    return { text: "Fair", color: "bg-amber-500", level: 2, textClass: "text-amber-600" };
  };

  const handleCopy = async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy password", err);
    }
  };

  const strength = getStrength();

  return (
    <div className="space-y-6">
      {/* Password Output Container */}
      <div className="relative flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50/30 p-4 shadow-inner">
        <span className="font-mono text-lg font-medium text-zinc-800 break-all select-all pr-12">
          {password || <span className="text-zinc-400 font-sans text-sm">Select at least one character set...</span>}
        </span>
        {password && (
          <button
            onClick={handleCopy}
            className="absolute right-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-500 hover:text-zinc-900 shadow-sm transition-all active:scale-95"
            title="Copy Password"
          >
            {copied ? (
              <svg
                className="h-5 w-5 text-emerald-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Password Strength Meter */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-semibold">
          <span className="text-zinc-400 uppercase tracking-wider">Password Strength</span>
          <span className={strength.textClass}>{strength.text}</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index <= strength.level ? strength.color : "bg-zinc-150 bg-zinc-200/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-100">
        {/* Length Control */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Password Length
            </label>
            <span className="text-sm font-bold text-zinc-700 bg-zinc-100 px-2.5 py-0.5 rounded-full">
              {length}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-zinc-400 font-semibold">6</span>
            <input
              type="range"
              min="6"
              max="64"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-900"
            />
            <span className="text-xs text-zinc-400 font-semibold">64</span>
          </div>
        </div>

        {/* Character Set Options */}
        <div className="space-y-3">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">
            Include Characters
          </label>
          <div className="grid grid-cols-2 gap-3">
            {/* Uppercase */}
            <label className="flex items-center gap-3 rounded-lg border border-zinc-200 px-4 py-2.5 hover:bg-zinc-50 cursor-pointer select-none transition-colors">
              <input
                type="checkbox"
                checked={useUppercase}
                onChange={(e) => setUseUppercase(e.target.checked)}
                className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 accent-zinc-900"
              />
              <span className="text-sm font-medium text-zinc-700">Uppercase</span>
            </label>

            {/* Lowercase */}
            <label className="flex items-center gap-3 rounded-lg border border-zinc-200 px-4 py-2.5 hover:bg-zinc-50 cursor-pointer select-none transition-colors">
              <input
                type="checkbox"
                checked={useLowercase}
                onChange={(e) => setUseLowercase(e.target.checked)}
                className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 accent-zinc-900"
              />
              <span className="text-sm font-medium text-zinc-700">Lowercase</span>
            </label>

            {/* Numbers */}
            <label className="flex items-center gap-3 rounded-lg border border-zinc-200 px-4 py-2.5 hover:bg-zinc-50 cursor-pointer select-none transition-colors">
              <input
                type="checkbox"
                checked={useNumbers}
                onChange={(e) => setUseNumbers(e.target.checked)}
                className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 accent-zinc-900"
              />
              <span className="text-sm font-medium text-zinc-700">Numbers</span>
            </label>

            {/* Symbols */}
            <label className="flex items-center gap-3 rounded-lg border border-zinc-200 px-4 py-2.5 hover:bg-zinc-50 cursor-pointer select-none transition-colors">
              <input
                type="checkbox"
                checked={useSymbols}
                onChange={(e) => setUseSymbols(e.target.checked)}
                className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 accent-zinc-900"
              />
              <span className="text-sm font-medium text-zinc-700">Symbols</span>
            </label>
          </div>
        </div>
      </div>

      {/* Manual Regenerate Button */}
      {password && (
        <button
          onClick={generatePassword}
          className="w-full inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-all active:scale-[0.99]"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5"
            />
          </svg>
          Regenerate Password
        </button>
      )}
    </div>
  );
}
