'use client';

import Header from "../components/Header";
import Badge from "../components/Badge";
import Footer from "../components/Footer";

export default function RetrospectivePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
        <Header />
        <div className="flex flex-1">
          <div className="mt-15 ml-27 flex flex-col items-start ">
            <Badge />
            <div>
              <h1
                className="text-5xl font-serif font-semibold text-gray-900 leading-snug mb-2 -mt-3"
                style={{ letterSpacing: "-0.02em" }}
              >
                Reflect &amp; Grow with <br />
                <span className="text-violet-800">Pointly</span> Retrospectives
              </h1>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Look back on your sprints, celebrate wins, and identify opportunities to improve. <br />
              Pointly makes retrospectives simple, insightful, and actionable for every team.
            </p>
            <ul className="mb-8 space-y-5">
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
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
