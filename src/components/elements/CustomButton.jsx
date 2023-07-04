import React from "react";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ text, func, dark ,styles }) => {
  let navigate = useNavigate();
  return (
    <button
      className={`${dark ? "border-[#212121] text-[#212121]" : "border-[#FFFFFF80] text-white"} capitalize text-sm w-max  transition-all duration-700 hover:bg-lime  hover:text-black hover:shadow-lg hover:border-lime px-3 py-1.5 rounded-md   border-2 `}
      onClick={func}
      styles={styles}
    >
      {text}
    </button>
  );
};
CustomButton.defaultProps = {
  dark: false
}

export default CustomButton;
