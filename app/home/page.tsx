"use client";

import StartButton from "../components/StartButton";
import Badge from "../components/Badge";
import Header from "../components/Header";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
      <Header />

      <main className="flex flex-1 px-16 ml-10 items-center justify-between">
        {/* Left: Text Content */}
        <section className="flex flex-col justify-center max-w-xl space-y-4">
          <Badge />

          <h1
            className="text-6xl font-serif font-semibold text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Smarter Sprint Planning with <span className="text-violet-800">Pointly</span>
          </h1>

          <p className="text-lg text-gray-700">
            Streamline your team’s estimation process with Pointly.
            Achieve greater clarity, foster collaboration,
            and start making confident decisions
          </p>

          <div className="flex space-x-6">
            <StartButton title="Start a Session" />
            <Link
              href="#features"
              className="inline-flex items-center px-8 py-4 border-2 border-violet-600
               text-violet-800 font-semibold rounded-xl hover:bg-violet-400 hover:text-white transition"
            >
              Learn More
            </Link>
          </div>
        </section>

        <div className="flex-1 justify-center ml-50 mb-25">
          <ul className="mb-12 space-y-5">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700 text-xl">Estimate collaboratively in real-time</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700 text-xl">Track progress effortlessly</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700 text-xl">Retrospective sessions made simple</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700 text-xl">Integrate with your favorite tools</span>
            </li>
          </ul>
        </div>
      </main>

      <section
        className="bg-white py-20 -mt-15 flex justify-center"
      >
      </section>
    </div>
  );
}
