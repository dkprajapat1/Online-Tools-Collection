"use client";

import { useEffect, useState } from "react";

export default function EmiCalculator() {
  const [currency, setCurrency] = useState("USD");
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [tenure, setTenure] = useState(120); // in months

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  const currencySymbols = {
    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£"
  };

  const calculateEmi = () => {
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const N = parseInt(tenure);

    if (isNaN(P) || isNaN(annualRate) || isNaN(N) || P <= 0 || N <= 0) {
      setEmi(0);
      setTotalInterest(0);
      setTotalPayable(0);
      return;
    }

    // Monthly interest rate
    const R = annualRate / 12 / 100;

    let monthlyEmi = 0;
    if (R === 0) {
      monthlyEmi = P / N;
    } else {
      monthlyEmi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    }

    const payable = monthlyEmi * N;
    const interest = payable - P;

    setEmi(monthlyEmi);
    setTotalPayable(payable);
    setTotalInterest(interest);
  };

  useEffect(() => {
    calculateEmi();
  }, [loanAmount, interestRate, tenure]);

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
        {/* Currency Switcher */}
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Loan Parameter Settings
          </label>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-zinc-400 font-medium">Currency:</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="rounded border border-zinc-200 bg-white px-2 py-0.5 text-xs font-bold text-zinc-700 focus:border-zinc-400 focus:outline-none"
            >
              <option value="USD">USD ($)</option>
              <option value="INR">INR (₹)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
        </div>

        {/* Loan Amount */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-zinc-700">Loan Amount</span>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-zinc-500 text-xs font-bold">{currencySymbols[currency]}</span>
              </div>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                className="block w-36 rounded-lg border border-zinc-200 py-1.5 pl-8 pr-3 text-right text-sm font-bold text-zinc-800 focus:border-zinc-400 focus:outline-none"
              />
            </div>
          </div>
          <input
            type="range"
            min="1000"
            max="10000000"
            step="5000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-zinc-250 bg-zinc-200/50 rounded-lg appearance-none cursor-pointer accent-zinc-900"
          />
        </div>

        {/* Interest Rate */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-zinc-700">Interest Rate (p.a.)</span>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pr-3">
                <span className="text-zinc-500 text-xs font-bold">%</span>
              </div>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Math.max(0, Math.min(100, parseFloat(e.target.value) || 0)))}
                className="block w-24 rounded-lg border border-zinc-200 py-1.5 px-3 text-right text-sm font-bold text-zinc-800 focus:border-zinc-400 focus:outline-none"
              />
            </div>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-zinc-250 bg-zinc-200/50 rounded-lg appearance-none cursor-pointer accent-zinc-900"
          />
        </div>

        {/* Tenure */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-zinc-700">Tenure (Months)</span>
            <div className="relative rounded-md shadow-sm">
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Math.max(1, parseInt(e.target.value) || 0))}
                className="block w-24 rounded-lg border border-zinc-200 py-1.5 px-3 text-right text-sm font-bold text-zinc-800 focus:border-zinc-400 focus:outline-none"
              />
              <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pr-3">
                <span className="text-zinc-500 text-xs font-bold">mo</span>
              </div>
            </div>
          </div>
          <input
            type="range"
            min="3"
            max="360"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(parseInt(e.target.value))}
            className="w-full h-1.5 bg-zinc-250 bg-zinc-200/50 rounded-lg appearance-none cursor-pointer accent-zinc-900"
          />
        </div>
      </div>

      {/* Outputs (Col Span 2) */}
      <div className="md:col-span-2 flex flex-col justify-between border-t border-zinc-150 pt-8 md:border-t-0 md:border-l md:pl-8 md:pt-0">
        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-6">
          Repayment Summary
        </label>

        <div className="space-y-6">
          {/* Monthly EMI */}
          <div className="group rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 shadow-sm">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">
              Monthly Payment (EMI)
            </span>
            <span className="text-2xl font-black text-zinc-900 tracking-tight mt-1.5 block">
              {currencySymbols[currency]} {formatCurrencyValue(emi)}
            </span>
          </div>

          {/* Interest Component */}
          <div className="flex justify-between items-center py-1.5 border-b border-zinc-100">
            <span className="text-xs font-semibold text-zinc-500">Total Interest Payable</span>
            <span className="text-sm font-bold text-zinc-800">
              {currencySymbols[currency]} {formatCurrencyValue(totalInterest)}
            </span>
          </div>

          {/* Principal Amount */}
          <div className="flex justify-between items-center py-1.5 border-b border-zinc-100">
            <span className="text-xs font-semibold text-zinc-500">Principal Loan Amount</span>
            <span className="text-sm font-bold text-zinc-800">
              {currencySymbols[currency]} {formatCurrencyValue(loanAmount)}
            </span>
          </div>

          {/* Total Payable */}
          <div className="flex justify-between items-center py-2.5">
            <span className="text-xs font-extrabold text-zinc-900 uppercase tracking-wider">
              Total Amount Payable
            </span>
            <span className="text-base font-extrabold text-zinc-900">
              {currencySymbols[currency]} {formatCurrencyValue(totalPayable)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
