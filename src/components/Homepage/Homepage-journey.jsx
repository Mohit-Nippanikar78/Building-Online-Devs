import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextCard, prevCard } from "../../features/Homecards";
import { useNavigate } from "react-router-dom";
import CustomButton from "../elements/CustomButton";

const HomepageJourney = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [leftBtnHover, setLeftBtnHover] = useState(false);
  const [rightBtnHover, setRightBtnHover] = useState(false);
  const { data, activeId } = useSelector((state) => state.homecards);
  return (
    <div className="relative flex  text-white z-30 w-2/3 m-auto ">
      <img
        src={`./images/homepage/card${activeId}-person.png`}
        className="max-w-[500px]"
        alt=""
      />
      <div className="bg-homepageCard px-12 relative flex justify-center items-center flex-col">
        <div className="absolute top-0 right-0 w-12 h-12 bg-lime flex justify-center items-center text-black font-semibold text-lg">
          {activeId}
        </div>
        <img
          className="w-24"
          src={`./images/homepage/card${activeId}-icon.png`}
          alt=""
        />
        <div className="font-semibold text-2xl text-center uppercase">
          {data[activeId - 1].title}
        </div>
        <div className="max-w-sm font-normal text-center p-4 text-xs">
          {data[activeId - 1].content}
        </div>
        <CustomButton
          text={data[activeId - 1].buttonText}
          navLink={data[activeId - 1].buttonLink}
        />
        <div className="flex justify-evenly items-center  my-4 ">
          <div
            onMouseOver={() => {
              setLeftBtnHover(true);
            }}
            onMouseOut={() => {
              setLeftBtnHover(false);
            }}
            onClick={() => {
              dispatch(prevCard());
            }}
            className="mr-4 bg-homepageCardArrowBg rounded-sm cursor-pointer w-8 h-8 flex justify-center items-center hover:bg-lime transition-all duration-1000"
          >
            {leftBtnHover ? (
              <img src="./images/homepage-card-left-hover.png" alt="" />
            ) : (
              <img src="./images/homepage-card-left.png" alt="" />
            )}
          </div>
          <div
            onMouseOver={() => {
              setRightBtnHover(true);
            }}
            onMouseOut={() => {
              setRightBtnHover(false);
            }}
            className="ml-4 bg-homepageCardArrowBg rounded-sm cursor-pointer w-8 h-8 flex justify-center items-center hover:bg-lime transition-all duration-1000"
            onClick={() => {
              dispatch(nextCard());
            }}
          >
            {rightBtnHover ? (
              <img src="./images/homepage-card-right-hover.png" alt="" />
            ) : (
              <img src="./images/homepage-card-right.png" alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageJourney;
