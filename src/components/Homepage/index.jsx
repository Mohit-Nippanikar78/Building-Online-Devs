import React from "react";

import HomepageHero from "./Homepage-hero";
import HomepageJourney from "./Homepage-journey";
import HomepageAbout from "./Homepage-about";
import HomepageConsultation from "./Homepage-consultation";
import HomepageExploreProducts from "./Homepage-exploreProducsts";
import HomepageFooter from "./Homepage-footer";

const Homepage = () => {
  return (
    <div className="bg-homepageBg">
      <HomepageHero />
      <div style={{ backgroundImage: "url('./images/homepage/main-bg.png')" }}>
        <HomepageJourney />
        <HomepageAbout />
        <HomepageConsultation />
        <HomepageExploreProducts />
        <HomepageFooter />

      </div>
    </div>
  );
};

export default Homepage;
