import React from "react";
import CustomButton from "../elements/CustomButton";
import { useNavigate } from "react-router-dom";
const HomepageAbout = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="flex max-h-[320px]  justify-evenly items-scretch my-32 h-full ">
        <div
          className="flex  justify-center px-4 rounded-md  flex-col text-white max-w-lg  bg-[#F1F1F110] px-6 py-8  h-full "
          style={{
            boxShadow: "rgba(241, 241, 241,.7) 0px 0px 2px 0px",
          }}
        >
          <div className="text-3xl font-bold capitalize ">
            We are
            <span className="text-lime"> more than </span>
            developers
          </div>
          <div className="font-normal  py-6 text-sm">
            <div>
              Lorem ipsum dolor sit amet consectetur. Elit potenti urna ac
              vulputate. Enim purus sit nibh sed quis dignissim mattis congue
              et. Massa cursus morbi viverra tellus augue arcu.
            </div>
            <div className="mt-4">
              sed in turpis pretium eu maecenas. Lobortis sit nec nisl ornare
              mus eget. Egestas odio aliquam tempor dictum lorem id mauris sit
              ultrices. Ullamcorper eu cursus a elit. Quam urna.
            </div>
          </div>
          <CustomButton text="React more about us" func={() => { navigate("/") }} />
        </div>

        <img
          src="./images/homepage/about-1.png"
          className="object-none"
          alt=""
        />
      </div>

    </>
  );
};

export default HomepageAbout;
