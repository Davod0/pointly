"use client";

import EstimationButton from "../components/EstimationButton";
import Badge from "../components/Badge";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
      <Header />

      <main className="flex flex-1 px-16 ml-10">
        <section className="flex flex-col justify-center flex-1 max-w-xl space-y-4">
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
              and start making confident decisions-no sign-up required.
          </p>

          <div className="flex space-x-6">
            <EstimationButton />
            <a
              href="#features"
              className="inline-flex items-center px-8 py-4 border-2 border-violet-600
               text-violet-800 font-semibold rounded-xl hover:bg-violet-400 hover:text-white transition"
              >
              Learn More
            </a>
          </div>
        </section>

      </main>

      <section
      className="bg-white py-20 -mt-15 flex justify-center"
      >
      </section>
    </div>
  );
}
