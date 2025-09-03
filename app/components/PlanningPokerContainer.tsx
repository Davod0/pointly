import React from "react";
import SmallPointCardContainer from "./SmallPointCardContainer";
import StartButton from "./StartButton";
import Badge from "./Badge";
import FeatureList from "./FeatureList";
import Footer from "./Footer";
import Header from "./Header";

export default function PlanningPokerContainer() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col lg:flex-row relative">
        <div className="mt-10 lg:mt-15 px-6 sm:px-10 lg:ml-27 flex flex-col items-center sm:items-start gap-y-3 text-center sm:text-left">
          <Badge />
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-gray-900 leading-tight mb-2 -mt-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="text-violet-800">Pointly</span> Makes <br className="hidden sm:block" />
            Easier Estimations
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-4 max-w-xl mx-auto sm:mx-0">
            Use Pointly for task estimation during development sprints
          </p>
          <div className="hidden lg:block">
            <FeatureList
              point3="Collaborate with your team remotely"
              point4="Keep sprints on track with clear estimates"
              point1="Improving estimation accuracy"
              point2="Boosting team collaboration"
            />
          </div>

            <div className="">
                <StartButton
                    title="Start Estimating"
                    route="/planning-poker/session-start"
                />
            </div>
        </div>
        <div className="hidden lg:block absolute right-0 xl:right-10 2xl:right-40 -bottom-4">
            <SmallPointCardContainer />
        </div>
        <div className="lg:hidden flex justify-center">
          <SmallPointCardContainer />
        </div>
      </div>
        <Footer />
    </div>
  );
}
