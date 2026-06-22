"use client";

import { useEffect, useState } from "react";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);
  const [nextBirthday, setNextBirthday] = useState(null);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = () => {
    setError("");
    if (!dob) {
      setAge(null);
      setNextBirthday(null);
      setStats(null);
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    // Reset time to compare dates only
    today.setHours(0, 0, 0, 0);
    birthDate.setHours(0, 0, 0, 0);

    if (isNaN(birthDate.getTime())) {
      setError("Please select a valid date.");
      setAge(null);
      return;
    }

    if (birthDate > today) {
      setError("Date of birth cannot be in the future.");
      setAge(null);
      setNextBirthday(null);
      setStats(null);
      return;
    }

    // Age Calculation
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      // Days in previous month
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });

    // Next Birthday Countdown
    const currentYear = today.getFullYear();
    let nextBday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());

    if (nextBday < today) {
      nextBday.setFullYear(currentYear + 1);
    }

    const diffTime = nextBday - today;
    const diffDaysTotal = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let nextBdayMonths = nextBday.getMonth() - today.getMonth();
    let nextBdayDays = nextBday.getDate() - today.getDate();

    if (nextBdayDays < 0) {
      nextBdayMonths--;
      const prevMonth = new Date(nextBday.getFullYear(), nextBday.getMonth(), 0);
      nextBdayDays += prevMonth.getDate();
    }

    if (nextBdayMonths < 0) {
      nextBdayMonths += 12;
    }

    setNextBirthday({
      totalDays: diffDaysTotal,
      months: nextBdayMonths,
      days: nextBdayDays
    });

    // Fun Life Statistics
    const msDiff = today - birthDate;
    const totalDaysLived = Math.floor(msDiff / (1000 * 60 * 60 * 24));
    const totalWeeksLived = Math.floor(totalDaysLived / 7);
    const totalMonthsLived = (years * 12) + months;
    const totalHoursLived = totalDaysLived * 24;

    setStats({
      days: totalDaysLived,
      weeks: totalWeeksLived,
      months: totalMonthsLived,
      hours: totalHoursLived
    });
  };

  useEffect(() => {
    calculateAge();
  }, [dob]);

  return (
    <div className="space-y-6">
      {/* Date Picker Input */}
      <div className="flex flex-col space-y-2 max-w-md mx-auto">
        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 text-center">
          Select Your Date of Birth
        </label>
        <input
          type="date"
          value={dob}
          max={new Date().toISOString().split("T")[0]}
          onChange={(e) => setDob(e.target.value)}
          className="block w-full rounded-xl border border-zinc-200 bg-zinc-50/30 py-2.5 px-4 text-center text-sm font-bold text-zinc-800 focus:border-zinc-400 focus:bg-white focus:outline-none transition-all shadow-sm"
        />
        {error && <span className="text-xs text-red-500 text-center font-medium mt-1">{error}</span>}
      </div>

      {age ? (
        <div className="space-y-8 pt-4 border-t border-zinc-100">
          {/* Main Age Result */}
          <div>
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block text-center mb-4">
              Your Current Age
            </span>
            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
              <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 text-center shadow-sm">
                <span className="text-3xl font-black text-zinc-900 tracking-tight">{age.years}</span>
                <span className="text-xs font-semibold text-zinc-500 block mt-1">Years</span>
              </div>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 text-center shadow-sm">
                <span className="text-3xl font-black text-zinc-900 tracking-tight">{age.months}</span>
                <span className="text-xs font-semibold text-zinc-500 block mt-1">Months</span>
              </div>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 text-center shadow-sm">
                <span className="text-3xl font-black text-zinc-900 tracking-tight">{age.days}</span>
                <span className="text-xs font-semibold text-zinc-500 block mt-1">Days</span>
              </div>
            </div>
          </div>

          {/* Next Birthday & Statistics (Grid Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-zinc-100">
            {/* Next Birthday Countdown */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                Next Birthday Countdown
              </span>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50/30 p-5 space-y-4">
                {nextBirthday.totalDays === 365 || nextBirthday.totalDays === 0 ? (
                  <p className="text-sm font-bold text-emerald-600 flex items-center gap-2">
                    🎉 Happy Birthday! Today is your special day!
                  </p>
                ) : (
                  <>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      Your next birthday is in{" "}
                      <span className="font-bold text-zinc-950">
                        {nextBirthday.months} months
                      </span>{" "}
                      and{" "}
                      <span className="font-bold text-zinc-950">
                        {nextBirthday.days} days
                      </span>
                      .
                    </p>
                    <div className="flex items-center justify-between border-t border-zinc-200/50 pt-3">
                      <span className="text-xs text-zinc-500">Total days remaining:</span>
                      <span className="text-xs font-bold text-zinc-800 bg-zinc-100 px-2.5 py-0.5 rounded-full">
                        {nextBirthday.totalDays} Days
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Life Statistics */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                Life Statistics
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="border border-zinc-100 rounded-lg p-3 bg-zinc-50/20">
                  <span className="text-zinc-500 block">Total Months</span>
                  <span className="text-sm font-bold text-zinc-800 mt-1 block">
                    {stats.months.toLocaleString()}
                  </span>
                </div>
                <div className="border border-zinc-100 rounded-lg p-3 bg-zinc-50/20">
                  <span className="text-zinc-500 block">Total Weeks</span>
                  <span className="text-sm font-bold text-zinc-800 mt-1 block">
                    {stats.weeks.toLocaleString()}
                  </span>
                </div>
                <div className="border border-zinc-100 rounded-lg p-3 bg-zinc-50/20">
                  <span className="text-zinc-500 block">Total Days</span>
                  <span className="text-sm font-bold text-zinc-800 mt-1 block">
                    {stats.days.toLocaleString()}
                  </span>
                </div>
                <div className="border border-zinc-100 rounded-lg p-3 bg-zinc-50/20">
                  <span className="text-zinc-500 block">Total Hours</span>
                  <span className="text-sm font-bold text-zinc-800 mt-1 block">
                    {stats.hours.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-48 w-full items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-zinc-50/30 text-center text-sm text-zinc-400 p-4">
          Select your date of birth above to view your exact age and statistics.
        </div>
      )}
    </div>
  );
}
