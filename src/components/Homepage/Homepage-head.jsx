import React, { useState } from "react";
import "./styles.css";
const HomepageHead = () => {
  const [btnHover, setBtnHover] = useState(false);
  return (
    <div className="h-full relative">
      <video
        className="absolute top-0 right-0 w-full "
        src="./images/homepage-video.mp4"
        autoPlay={true}
        muted={true}
        loop={true}
      ></video>
      <div className="absolute bottom-0 flex justify-center items-end w-full h-screen">
        <img
          src="./images/scrolldownmouse.png"
          className="w-max h-max mb-4"
          alt=""
        />
      </div>
      <div className="relative w-1/2 h-screen flex flex-col justify-center items-start  text-white max-w-lg ml-40">
        <div className="text-5xl capitalize font-extrabold tracking-[2px]">
          <div className="mb-4">
            <span id="homepage-heading-gradient">building </span>
            future
          </div>
          <div>online developers</div>
        </div>
        <div className="font-xs   tracking-[0.001rem] text-xs my-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur. Facilisi nunc eu egestas at
          blandit. Quisque egestas quam nibh et semper. Dictum sit a mi
          tristique in tincidunt porta tincidunt fringilla. Scelerisque magna
          ipsum vitae pharetra bibendum. Morbi pretium ullamcorper penatibus.
        </div>
        <div
          className="relative cursor-pointer"
          onMouseOver={() => {
            setBtnHover(true);
          }}
          onMouseOut={() => {
            setBtnHover(false);
          }}
        >
          <div
            className={`relative z-20 px-4 py-2 ${
              btnHover ? "text-black" : "text-[#D4F229]"
            }`}
          >
            Start Your Journey Today &#8594;
          </div>
          {/* {!btnHover ? (
            <div className="overflow-visible z-10 absolute top-0 left-0  h-full border px-4 py-2 rounded-md w-1/2 border-[#FFFFFF80] border-2 border-r-0"></div>
            ) : (
              <div className="overflow-visible z-10 absolute top-0 left-0  h-full w-full bg-lime  px-4 py-2 rounded-md"></div>
            )} */}

          <div
            className={`overflow-visible z-10 absolute top-0 left-0  h-full transition-all duration-700 ${
              btnHover
                ? "w-full bg-lime  px-4 py-2 rounded-md"
                : "border px-4 py-2 rounded-md w-1/2 border-[#FFFFFF80] border-2 border-r-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomepageHead;
