import React from "react";
import HomepageHero from "./Homepage-hero";
import HomepageAbout from "./Homepage-about";
import HomepageConsultation from "./Homepage-consultation";
import { useInView } from "react-intersection-observer";
import { ExploreProducts, Footer, Journey } from "../elements";
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
    <div className="bg-navy relative overflow-x-hidden mt-16 lg:mt-0">
      <HomepageHero />
      <div style={{ backgroundImage: "url('/images/main-bg.png')" }}>
        <Journey />
        <HomepageAbout />
        <HomepageConsultation />
        <ExploreProducts type="homepage" dark={true} />
        <Footer />
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
          src="/images/scrolldownmouse.png"
          className="animate-bounce w-max h-max mb-4"
          alt=""
        />
      </motion.div> */}
    </div>
  );
};

export default Homepage;
