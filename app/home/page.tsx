"use client";

import StartButton from "../components/StartButton";
import Badge from "../components/Badge";
import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
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
            Smarter <br className="hidden sm:block" />
            Sprint Planning <br className="hidden sm:block" />
            with <span className="text-violet-800">Pointly</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-8 lg:mb-17 max-w-xl mx-auto sm:mx-0">
            Streamline your team’s estimation process with Pointly.
            <br className="hidden sm:block" />
            Achieve greater clarity, foster collaboration,
            and start making confident decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-6 w-full sm:w-auto justify-center sm:justify-start">
            <StartButton title="Start a Session" route="/planning-poker/session-start" />
            <Link
              href="/learn-more"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-violet-800
               text-violet-800 font-semibold rounded-xl hover:bg-violet-50
                transition bg-white text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="mt-12 lg:mt-30 lg:ml-20 hidden xl:flex">
          <ul className="mb-12 space-y-5">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-800 rounded-full mr-3"></span>
              <span className="text-gray-700 text-lg lg:text-xl">
                Estimate collaboratively in real-time
              </span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-800 rounded-full mr-3"></span>
              <span className="text-gray-700 text-lg lg:text-xl">
                Retrospective sessions made simple
              </span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-800 rounded-full mr-3"></span>
              <span className="text-gray-700 text-lg lg:text-xl">Start for free</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-800 rounded-full mr-3"></span>
              <span className="text-gray-700 text-lg lg:text-xl">No signup required</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
