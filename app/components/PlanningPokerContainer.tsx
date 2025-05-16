import React from "react";
import SmallPointCardContainer from "./SmallPointCardContainer";
import StartButton from "./StartButton";
import Badge from "./Badge";
import FeatureList from "./FeatureList";

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
          <FeatureList
              point3="Collaborate with your team remotely"
              point4="Keep sprints on track with clear estimates"
              point1="Improving estimation accuracy"
              point2="Boosting team collaboration"
          />
          <StartButton title="Start Estimating" route="/planning-poker" />
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