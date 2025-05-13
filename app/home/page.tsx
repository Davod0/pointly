"use client";

import EstimationButton from "../components/EstimationButton";
import Badge from "../components/Badge";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
      <Header />

      <main className="flex flex-1 px-16 py-12">
        <section className="flex flex-col justify-center flex-1 max-w-xl space-y-8">
          <Badge />

          <h1
            className="text-6xl font-serif font-semibold text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Easier Estimation with <span className="text-violet-700">Pointly</span>
          </h1>

          <p className="text-lg text-gray-700">
            Use Pointly for task estimation during development sprints. Improve accuracy, boost collaboration, and start for free with no signup required.
          </p>

          <div className="flex space-x-6">
            <EstimationButton />
            <a
              href="#features"
              className="inline-flex items-center px-8 py-4 border-2 border-violet-600 text-violet-600 font-semibold rounded-xl hover:bg-violet-600 hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </section>

      </main>

      {/* Features Section */}
      <section
        id="features"
        className="bg-white py-16 px-16 flex justify-center"
      >
      </section>
    </div>
  );
}
