import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextCard, prevCard } from "../../features/Homecards";
import { useNavigate } from "react-router-dom";
import CustomButton from "../elements/CustomButton";
import RightplayButton from "../elements/RightplayButton";
import LeftplayButton from "../elements/LeftplayButton";

const HomepageJourney = () => {
  let dispatch = useDispatch();
  const { data, activeId } = useSelector((state) => state.homecards);
  return (
    <div className="relative flex flex-col md:flex-row  md:max lg:w-2/3  text-white z-30  m-auto ">
      <img
        src={`/images/homepage/card${activeId}-person.png`}
        className="max-w-[500px] "
        alt=""
      />
      <div className="bg-neutral-800 px-12 py-6 lg:py-0 w-full lg:w-auto  relative flex justify-center items-center flex-col">
        <div className="absolute top-0 right-0 w-12 h-12 bg-lime flex justify-center items-center text-black font-semibold text-lg">
          0{activeId}
        </div>
        <img
          className="w-24"
          src={`/images/homepage/card${activeId}-icon.png`}
          alt=""
        />
        <div className="font-semibold lg:text-2xl text-xl text-center uppercase">
          {data[activeId - 1].title}
        </div>
        <div className="max-w-sm font-normal text-center p-4 text-xs">
          {data[activeId - 1].content}
        </div>
        <CustomButton
          text={data[activeId - 1].buttonText}
          navLink={data[activeId - 1].buttonLink}
        />
        <div className="flex justify-evenly items-center  my-4">
          <LeftplayButton func={() => {
            dispatch(prevCard());
          }} />
          <RightplayButton func={() => {
            dispatch(nextCard());
          }} />
        </div>
      </div>
    </div>
  );
};

export default HomepageJourney;
