import React from 'react';
import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import FooterComp from "./components/FooterComp";
import ContentComp from "./components/ContentComp";
import TryoutComp from "./components/TryoutComp";
import TestimoniComp from "./components/TestimoniComp";




function App() {
  return <div>
    <HeroComp/>
    
    <ContentComp/>

    <TryoutComp/>

    <TestimoniComp/>

    <NavbarComp/>

    <FooterComp/>
  </div>;
}

export default App;
