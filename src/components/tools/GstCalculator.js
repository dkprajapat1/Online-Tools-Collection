"use client";

import { useEffect, useState } from "react";

export default function GstCalculator() {
  const [mode, setMode] = useState("add"); // "add" or "remove"
  const [amount, setAmount] = useState(10000);
  const [gstPercentage, setGstPercentage] = useState(18);

  const [gstAmount, setGstAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [currency, setCurrency] = useState("USD");

  const gstRates = [5, 12, 18, 28];

  const currencySymbols = {
    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£"
  };

  const calculateGst = () => {
    const P = parseFloat(amount);
    const R = parseFloat(gstPercentage);

    if (isNaN(P) || isNaN(R) || P <= 0 || R < 0) {
      setGstAmount(0);
      setFinalAmount(0);
      return;
    }

    if (mode === "add") {
      // Add GST: Amount is Base Price
      const gst = P * (R / 100);
      const total = P + gst;
      setGstAmount(gst);
      setFinalAmount(total);
    } else {
      // Remove GST: Amount is GST Inclusive Price
      const basePrice = P / (1 + R / 100);
      const gst = P - basePrice;
      setGstAmount(gst);
      setFinalAmount(basePrice);
    }
  };

  useEffect(() => {
    calculateGst();
  }, [mode, amount, gstPercentage]);

  const formatCurrencyValue = (val) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(val);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
      {/* Inputs (Col Span 3) */}
      <div className="md:col-span-3 space-y-6">
        {/* Toggle Mode */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            GST Calculation Mode
          </label>
          <div className="grid grid-cols-2 gap-2 p-1 rounded-xl border border-zinc-200 bg-zinc-50">
            <button
              onClick={() => setMode("add")}
              className={`py-2 rounded-lg text-sm font-semibold transition-all ${
                mode === "add"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-950"
              }`}
            >
              Add GST (+ GST)
            </button>
            <button
              onClick={() => setMode("remove")}
              className={`py-2 rounded-lg text-sm font-semibold transition-all ${
                mode === "remove"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-950"
              }`}
            >
              Remove GST (- GST)
            </button>
          </div>
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-zinc-700">
              {mode === "add" ? "Base Amount (Exclusive)" : "Total Amount (Inclusive)"}
            </span>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-zinc-500 text-xs font-bold">{currencySymbols[currency]}</span>
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                className="block w-36 rounded-lg border border-zinc-200 py-1.5 pl-8 pr-3 text-right text-sm font-bold text-zinc-800 focus:border-zinc-400 focus:outline-none"
              />
            </div>
          </div>
          <input
            type="range"
            min="100"
            max="1000000"
            step="500"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-zinc-250 bg-zinc-200/50 rounded-lg appearance-none cursor-pointer accent-zinc-900"
          />
        </div>

        {/* GST Rate */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-zinc-700">GST Rate</span>
            <div className="relative rounded-md shadow-sm">
              <input
                type="number"
                step="0.1"
                value={gstPercentage}
                onChange={(e) => setGstPercentage(Math.max(0, Math.min(100, parseFloat(e.target.value) || 0)))}
                className="block w-24 rounded-lg border border-zinc-200 py-1.5 px-3 text-right text-sm font-bold text-zinc-800 focus:border-zinc-400 focus:outline-none"
              />
              <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center pr-3">
                <span className="text-zinc-500 text-xs font-bold">%</span>
              </div>
            </div>
          </div>
          {/* Quick Click Rates */}
          <div className="grid grid-cols-4 gap-2">
            {gstRates.map((rate) => (
              <button
                key={rate}
                onClick={() => setGstPercentage(rate)}
                className={`py-1.5 px-3 text-xs font-semibold rounded-lg border transition-all ${
                  gstPercentage === rate
                    ? "bg-zinc-900 text-zinc-50 border-zinc-900 shadow-sm"
                    : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50"
                }`}
              >
                {rate}%
              </button>
            ))}
          </div>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center gap-2 pt-2 text-xs text-zinc-500">
          <span>Display Currency:</span>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="rounded border border-zinc-200 bg-white px-2 py-0.5 font-bold text-zinc-700 focus:border-zinc-400 focus:outline-none"
          >
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
          </select>
        </div>
      </div>

      {/* Outputs (Col Span 2) */}
      <div className="md:col-span-2 flex flex-col justify-between border-t border-zinc-150 pt-8 md:border-t-0 md:border-l md:pl-8 md:pt-0">
        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-6">
          Calculation Output
        </label>

        <div className="space-y-6">
          {/* Main Output Box */}
          <div className="group rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 shadow-sm">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">
              {mode === "add" ? "Total Price (Inclusive of GST)" : "Net Price (Exclusive of GST)"}
            </span>
            <span className="text-2xl font-black text-zinc-900 tracking-tight mt-1.5 block">
              {currencySymbols[currency]} {formatCurrencyValue(finalAmount)}
            </span>
          </div>

          {/* Base Amount */}
          <div className="flex justify-between items-center py-1.5 border-b border-zinc-100">
            <span className="text-xs font-semibold text-zinc-500">
              {mode === "add" ? "Initial Net Amount" : "Final Net Amount"}
            </span>
            <span className="text-sm font-bold text-zinc-800">
              {currencySymbols[currency]} {formatCurrencyValue(mode === "add" ? amount : finalAmount)}
            </span>
          </div>

          {/* GST Tax Component */}
          <div className="flex justify-between items-center py-1.5 border-b border-zinc-100">
            <span className="text-xs font-semibold text-zinc-500">GST Amount ({gstPercentage}%)</span>
            <span className="text-sm font-bold text-zinc-800">
              {currencySymbols[currency]} {formatCurrencyValue(gstAmount)}
            </span>
          </div>

          {/* Calculation Equation */}
          <div className="pt-4 text-center text-[10px] text-zinc-400 font-mono italic">
            {mode === "add" ? (
              <span>
                {formatCurrencyValue(amount)} + {formatCurrencyValue(gstAmount)} = {formatCurrencyValue(finalAmount)}
              </span>
            ) : (
              <span>
                {formatCurrencyValue(amount)} - {formatCurrencyValue(gstAmount)} = {formatCurrencyValue(finalAmount)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
