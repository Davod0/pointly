"use client";
import React from "react";
import Header from "../components/Header";
import PlanningPokerContainer from "../components/PlanningPokerContainer";

export default function PlanningPokerPage() {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col"
    >
      <Header />
      <PlanningPokerContainer />
    </div>
  );
}
