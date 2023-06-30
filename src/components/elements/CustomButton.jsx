import React from "react";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ text, navLink }) => {
  let navigate = useNavigate();
  return (
    <button
      className="text-sm w-max text-white transition-all duration-700 hover:bg-lime  hover:text-black hover:shadow-lg hover:border-lime px-3 py-1.5 rounded-md  border-[#FFFFFF80] border-2 "
      onClick={() => {
        navigate(navLink);
      }}
    >
      {text}
    </button>
  );
};

export default CustomButton;
