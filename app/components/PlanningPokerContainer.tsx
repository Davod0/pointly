import React from "react";
import SmallPointCardContainer from "./SmallPointCardContainer";
import StartButton from "./StartButton";
import Badge from "./Badge";

export default function PlanningPokerContainer() {

    return (
        <div className="flex flex-1">
        <div className="mt-20 ml-25 flex flex-col items-start">
          <Badge />
          <div>
            <h1
              className="text-5xl font-serif font-semibold text-gray-900 mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              Easier estimation by Pointly
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Use Pointly for task estimation during development sprints
          </p>
          <ul className="mb-12 space-y-3">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700">Improving estimation accuracy</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700">Boosting team collaboration</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700">Start for free</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              <span className="text-gray-700">No signup required</span>
            </li>
          </ul>
          <StartButton title="Start Estimating" />
        </div>
        <div>
          <SmallPointCardContainer />
        </div>
          <section
            id="features"
            className="bg-white py-25"
            >
          </section>
      </div>
    )
}