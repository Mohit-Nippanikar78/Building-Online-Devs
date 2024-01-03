import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextCard, prevCard } from "../../features/Homecards";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import RightplayButton from "./RightplayButton";
import LeftplayButton from "./LeftplayButton";

const HomepageJourney = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { data, activeId } = useSelector((state) => state.homecards);
  return (
    <div className="relative lg:-mt-8 grid grid-cols-1 md:grid-cols-2  md:max lg:w-2/3  text-white z-30  m-auto ">
      <img src={`/images/homepage/card${activeId}-person.png`} className="h-full w-full" alt="" />
      <div className="bg-neutral-800 w-full lg:w-auto  relative flex gap-8 lg:py-10 px-6 py-8  justify-center items-center flex-col">
        <div className="absolute top-0 right-0 w-20 h-20 bg-lime flex justify-center items-center text-neutral-900 font-semibold text-3xl">
          0{activeId}
        </div>
        <div className="bg-navy p-2.5 rounded-2xl" style={{ boxShadow: "0px 15px 30px -6px rgba(0, 0, 0, 0.55)" }}>
          <img
            className="w-14"
            src={`/images/homepage/card${activeId}-icon.png`}
            alt=""
          />
        </div>
        <div className="max-w-[432px]" >
          <div className="font-semibold text-[30px] text-center capitalize pb-4  mx-auto">
            {data[activeId - 1].title}
          </div>
          <div className="max-w-sm font-normal text-center text-xs">
            {data[activeId - 1].content}
          </div>
        </div>
        <CustomButton
          text={data[activeId - 1].buttonText}
          func={() => {navigate(data[activeId - 1].buttonLink) }}
        />
        <div className="flex justify-evenly items-center">
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
