'use client';
import Header from "../components/Header";
import Badge from "../components/Badge";
import Footer from "../components/Footer";
import FeatureList from "../components/FeatureList";
import StartButton from "../components/StartButton";

export default function RetrospectivePage() {

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
              <>
                <p className="text-base sm:text-lg text-gray-600 mb-4 max-w-xl mx-auto sm:mx-0">
                  Look back on your sprints, celebrate wins and identify opportunities to improve.
                </p>
                     <div className="hidden lg:block">
                      <FeatureList
                        point3="Share wins and challenges openly"
                        point4="Gather actionable feedback"
                        point1="Track improvements over time"
                        point2="Foster team trust and growth"
                      />
                    </div>
                    <div className="">
                              <StartButton
                                  title="Start Reflecting"
                                  route="/retrospective/session-start"
                                  marginBottom="mb-0"
                              />
                    </div>
              </>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
