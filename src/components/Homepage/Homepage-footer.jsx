import React from "react";

const HomepageFooter = () => {
    return (
        <div className="py-8">
            <div className=" justify-between flex mx-32 py-6   rounded-md text-white  bg-[#F1F1F110]   h-full ">
                <div className="font-normal  py-2 text-sm justify-around flex w-full ">

                    <div>
                        Company
                        <div className="pt-6 flex flex-col gap-2     ">
                            <a href="#">Products</a>
                            <a href="#">About Us</a>
                            <a href="#">Consoltations</a>
                            <a href="#">Support</a>
                        </div>
                    </div>
                    <div>
                        Resources
                        <div className="pt-6 flex flex-col gap-2    ">
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                    <div>
                        Our Details
                        <div className="pt-6 flex flex-col gap-2     ">
                            <a href="#">
                                123 Street Name <br />
                                City,
                                <br />
                                Country, <br />
                                PostCode
                            </a>
                            <a href="#">Pinfo@Buildingonlinedevs.com</a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="./images/logo.png" className="w-32" alt="" />
                    <div className="py-6 flex flex-col text-sm font-light   ">
                        Copyright © 2023 Building Online Devs. All Rights Reserved.
                    </div>
                    <img src="./images/footer-banks.png" className="w-48" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomepageFooter;
