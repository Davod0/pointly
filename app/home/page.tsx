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
      <div className="flex flex-1">
        <div className="mt-15 ml-27 flex flex-col items-start">
          <div className="flex items-center -mb-3">
            <Badge />
          </div>
          <h1
            className="text-6xl font-serif font-semibold text-gray-900 leading-tight mb-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            Smarter <br />Sprint Planning <br /> with
            <span className="text-violet-800"> Pointly</span>
          </h1>

          <p className="text-lg text-gray-700 mb-10">
            Streamline your team’s estimation process with Pointly.<br />
            Achieve greater clarity, foster collaboration,
            and start making confident decisions
          </p>
          <div className="flex space-x-6">
            <StartButton title="Start a Session" route="/home" />
            <Link
              href="/home"
              className="inline-flex items-center px-8 py-4 border-2 border-violet-600
               text-violet-800 font-semibold rounded-xl hover:bg-violet-200 hover:text-white transition"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex-1 justify-center ml-30 mt-30">
          <ul className="mb-12 space-y-5">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700 text-xl">Estimate collaboratively in real-time</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700 text-xl">Retrospective sessions made simple</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700 text-xl">Start for free</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700 text-xl">No signup required</span>
            </li>
          </ul>
        </div>
      </div>
        <Footer />
    </div>
  );
}
