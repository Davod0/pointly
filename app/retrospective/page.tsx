'use client';

import { useState } from "react";
import Header from "../components/Header";
import Badge from "../components/Badge";
import Footer from "../components/Footer";
import PlaceHolder from "../components/PlaceHolder";

export default function RetrospectivePage() {
  const [showPlaceHolder, setShowPlaceHolder] = useState(true);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col relative">
        <Header />
        <div className="flex flex-1 flex-col lg:flex-row">
          <div className="mt-10 lg:mt-15 px-6 sm:px-10 lg:ml-27 flex flex-col items-center sm:items-start gap-y-3 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center -mb-3">
              <Badge />
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-gray-900 leading-tight mb-2"
              style={{ letterSpacing: "-0.02em" }}
            >
              Reflect &amp; Grow with <br className="hidden sm:block" />
              <span className="text-violet-800">Pointly</span> Retrospectives
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8 lg:mb-17 max-w-xl mx-auto sm:mx-0">
              Look back on your sprints, celebrate wins, and identify opportunities to improve. <br className="hidden sm:block" />
              Pointly makes retrospectives simple, insightful, and actionable for every team.
            </p>
            <ul className="hidden sm:block mb-10 lg:-mt-10 space-y-5">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-violet-800 rounded-full mr-3"></span>
                <span className="text-gray-700 text-lg lg:text-xl">Share wins and challenges openly</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-violet-800 rounded-full mr-3"></span>
                <span className="text-gray-700 text-lg lg:text-xl">Gather actionable feedback</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-violet-800 rounded-full mr-3"></span>
                <span className="text-gray-700 text-lg lg:text-xl">Track improvements over time</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-violet-800 rounded-full mr-3"></span>
                <span className="text-gray-700 text-lg lg:text-xl">Foster team trust and growth</span>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
        {showPlaceHolder && (
          <div>
            <PlaceHolder onClose={() => setShowPlaceHolder(false)} />
          </div>
        )}
      </div>
    </>
  );
}
