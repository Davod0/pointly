'use client';

import Header from "../components/Header";
import Badge from "../components/Badge";

export default function RetrospectivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
      <Header />

      <main className="flex flex-1 px-16 ml-10 items-center justify-between">
        {/* Left: Text Content */}
        <section className="flex flex-col justify-center max-w-xl space-y-4">
          <Badge />

          <h1
            className="text-5xl font-serif font-semibold text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Reflect &amp; Grow with <span className="text-violet-800">Pointly Retrospectives</span>
          </h1>

          <p className="text-lg text-gray-700">
            Look back on your sprints, celebrate wins, and identify opportunities to improve.
            Pointly makes retrospectives simple, insightful, and actionable for every team.
          </p>

          <div className="mt-4">
            <span className="inline-block bg-violet-100 text-violet-800 font-semibold px-6 py-2 rounded-full shadow-sm text-base border border-violet-200">
              Sprint 24: May 2025
            </span>
          </div>
        </section>

        {/* Right: Retrospective Points */}
        <section className="flex-1 flex flex-col items-start justify-center ml-16">
          <ul className="mb-12 space-y-5">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700 text-xl">Share wins and challenges openly</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700 text-xl">Gather actionable feedback</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700 text-xl">Track improvements over time</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700 text-xl">Foster team trust and growth</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
