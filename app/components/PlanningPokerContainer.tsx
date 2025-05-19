import React from "react";
import SmallPointCardContainer from "./SmallPointCardContainer";
import StartButton from "./StartButton";
import Badge from "./Badge";
import FeatureList from "./FeatureList";
import Footer from "./Footer";

export default function PlanningPokerContainer() {

    return (
        <>
            <div className="flex flex-1">
                <div className="mt-15 ml-27 flex flex-col items-start gap-y-3">
                    <Badge />
                    <div>
                        <h1
                            className="text-5xl font-serif font-semibold text-gray-900 leading-tight mb-2 -mt-2"
                            style={{ letterSpacing: "-0.02em" }}
                        >
                            <span className="text-violet-800">Pointly</span> Makes <br />Easier Estimations
                        </h1>
                    </div>
                    <p className="text-lg text-gray-600 mb-4">
                        Use Pointly for task estimation during development sprints
                    </p>
                    <FeatureList
                        point3="Collaborate with your team remotely"
                        point4="Keep sprints on track with clear estimates"
                        point1="Improving estimation accuracy"
                        point2="Boosting team collaboration"
                    />
                    <StartButton title="Start Estimating" route="/planning-poker/new-session" />
                </div>
                <div>
                    <SmallPointCardContainer />
                </div>
            </div>
            <Footer />
        </>
    )
}
