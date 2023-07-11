import React from "react";
import { CustomButton, Footer } from "../elements";

const Support = () => {
  return <div className="bg-navy text-white relative overflow-x-hidden lg:pt-0 pt-32 ">
    <div className="bg-cover " style={{ backgroundImage: "url('/images/support/lg-main-bg.png')" }}>
      <div className="flex flex-col lg:flex-row lg:h-screen gap-12 items-center justify-center">
        <div className=" capitalize ">
          <div className="lg:my-4 mb-2 text-3xl lg:text-4xl  font-semibold text-center lg:text-start ">
            Get in <span className="text-lime"> touch</span>
          </div>
          <div className="max-w-sm my-4 text-xs font-light text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur. Nec commodo odio mauris risus dignissim elementum commodo elementum dolor.
          </div>
          <div className="bg-[#F1F1F109] text-sm">
            <div className="flex items-center p-4">
              <div className="bg-neutral-900 rounded-md shadow-lg">
                <img className="w-6   m-3 " src="/images/support/contact-icon-1.png" alt="" />
              </div>
              <div className="pl-4">
                123 Street, London,<br />
                United Kingdom, 123 ABC
              </div>
            </div>
            <div className="flex items-center p-4">
              <div className="bg-neutral-900 rounded-md shadow-lg">
                <img className="w-6   m-3 " src="/images/support/contact-icon-2.png" alt="" />
              </div>
              <div className="pl-4">
                +44 (0)20 123 4567
              </div>
            </div>
            <div className="flex items-center p-4">
              <div className="bg-neutral-900 rounded-md shadow-lg">
                <img className="w-6   m-3 " src="/images/support/contact-icon-3.png" alt="" />
              </div>
              <div className="pl-4">
                Info@buildingonlinedevs.com
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#F1f1f109] p-8 rounded-md text-black text-sm '>
          <div className=" text-sm max-w-6xl gap-6 ">
            <div className="flex flex-col gap-6">
              <div className="flex lg:flex-row flex-col  gap-6 w-full" >
                <input className="w-full outline-0 p-3 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="First Name*" />
                <input className="w-full outline-0 p-3 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Last Name*" />
              </div>
              <input className="outline-0 p-3 rounded  border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Email address*" />
              <input className="outline-0 p-3 roundedborder-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Phone number*" />
              <textarea rows="4" className="outline-0 p-3 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" placeholder="Questions or Comments*"></textarea>
              <a href='' className='flex items-center text-white'>
                <span class="h-5">
                  <input className='mr-2 w-max' type="radio" value={true} />
                </span>
                <div className="m-auto">
                  I agree with the <span className="text-lime ">Terms and Conditions  </span>  and <span className=" text-lime">Privacy Policy</span>
                </div>
              </a>
            </div>
            <div className="lg:pt-6  flex lg:flex-row flex-col gap-6 lg:gap-0 items-center justify-between">
              <img className="py-3 lg:p-0" src="/images/consultation/captcha.png" alt="" />
              <div className="w-full h-max px-6">
                <CustomButton text="Submit form" dark={false} type="consultation" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
};

export default Support;
