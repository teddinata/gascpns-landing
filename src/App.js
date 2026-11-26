import React from "react";
import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import ScoreCalculatorComp from "./components/ScoreCalculatorComp";
import ContentComp from "./components/ContentComp";
import TryoutComp from "./components/TryoutComp";
import RoadmapLeadComp from "./components/RoadmapLeadComp";
import TestimoniComp from "./components/TestimoniComp";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <>
      <NavbarComp />
      <main id="main-content" tabIndex={-1}>
        <HeroComp />
        <ScoreCalculatorComp />
        <RoadmapLeadComp />
        <ContentComp />
        <TryoutComp />
        <TestimoniComp />
      </main>
      <FooterComp />
    </>
  );
}

export default App;
