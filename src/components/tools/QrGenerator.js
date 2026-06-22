"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

export default function QrGenerator() {
  const [text, setText] = useState("https://digitalheroesco.com");
  const [error, setError] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!text.trim()) {
      // Clear canvas if empty
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      return;
    }

    QRCode.toCanvas(
      canvasRef.current,
      text,
      {
        width: 260,
        margin: 2,
        color: {
          dark: "#09090b", // zinc-950
          light: "#ffffff"
        },
        errorCorrectionLevel: "H"
      },
      (err) => {
        if (err) {
          setError(err.message);
        } else {
          setError("");
        }
      }
    );
  }, [text]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas || !text.trim()) return;

    try {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "utilityverse-qrcode.png";
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Failed to download QR code", err);
    }
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
      {/* Configuration Controls */}
      <div className="md:col-span-3 space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Text or URL
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter URL or text to encode into the QR code..."
            className="h-40 w-full rounded-xl border border-zinc-200 bg-zinc-50/30 p-4 font-sans text-sm leading-relaxed text-zinc-800 placeholder-zinc-400 focus:border-zinc-400 focus:bg-white focus:outline-none transition-all resize-none shadow-inner"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleClear}
            disabled={!text}
            className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
          >
            Clear Text
          </button>
        </div>

        {error && (
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-4 text-sm text-red-800">
            <span className="font-bold block">QR Generation Error</span>
            <span className="font-mono mt-1 block text-xs">{error}</span>
          </div>
        )}
      </div>

      {/* QR Output Preview */}
      <div className="md:col-span-2 flex flex-col items-center justify-center border-t border-zinc-100 pt-8 md:border-t-0 md:border-l md:pl-8 md:pt-0">
        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4 self-center md:self-start">
          Live Preview
        </label>
        
        <div className="relative flex flex-col items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-50/50 p-6 shadow-inner">
          {text.trim() ? (
            <canvas
              ref={canvasRef}
              className="rounded-lg shadow-sm border border-zinc-200 bg-white max-w-full"
            />
          ) : (
            <div className="flex h-[260px] w-[260px] items-center justify-center rounded-lg border border-dashed border-zinc-200 bg-white text-center text-xs text-zinc-400 p-4">
              Enter text on the left to generate a live QR Code.
            </div>
          )}
        </div>

        {text.trim() && !error && (
          <button
            onClick={handleDownload}
            className="mt-6 inline-flex w-full max-w-[260px] h-10 items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 text-sm font-semibold text-zinc-50 hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-sm"
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download PNG
          </button>
        )}
      </div>
    </div>
  );
}
