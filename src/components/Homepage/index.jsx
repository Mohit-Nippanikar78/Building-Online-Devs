import React from "react";

import HomepageHero from "./Homepage-hero";
import HomepageJourney from "./Homepage-journey";
import HomepageAbout from "./Homepage-about";
import HomepageConsultation from "./Homepage-consultation";
import HomepageExploreProducts from "./Homepage-exploreProducsts";
import HomepageFooter from "./Homepage-footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Homepage = () => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: false,
  });
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };
  return (
    <div className="bg-homepageBg relative overflow-x-hidden mt-16 lg:mt-0">
      <HomepageHero />
      <div style={{ backgroundImage: "url('./images/homepage/main-bg.png')" }}>
        <HomepageJourney />
        <HomepageAbout />
        <HomepageConsultation />
        <HomepageExploreProducts />
        {/*  <HomepageFooter /> */}

      </div>
      {/* <motion.div
        className="absolute top-0  flex justify-center items-end w-screen h-screen"
        // style={{
        //   bottom: framerScroll.scrollY,
        // }}
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 2 }}
        ref={ref}
      >
        <img
          src="./images/scrolldownmouse.png"
          className="animate-bounce w-max h-max mb-4"
          alt=""
        />
      </motion.div> */}
    </div>
  );
};

export default Homepage;
