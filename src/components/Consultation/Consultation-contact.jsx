import React from 'react'
import { CustomButton } from '../elements'
const ConsultationContact = () => {
  return (
    <div className='bg-white my-8'>
      <div className="pt-8 capitalize text-xl font-semibold max-w-xs lg:max-w-sm text-center mx-auto">
        get a personal consultation based on your needs
        <span className="text-neutral-700"> from £25* an hour</span>
      </div>
      <div className="text-xs max-w-xs first-letter:lg:max-w-3xl text-center mx-auto py-4">
        Lorem ipsum dolor sit amet consectetur. Blandit faucibus facilisi tincidunt mattis ut vivamus sed euismod malesuada. Fermentum maecenas nulla est eget. Lectus netus leo enim ac proin fermentum ac eleifend quis. Purus neque facilisi eget tincidunt dapibus massa quis et duis. Tellus dolor vitae ut lacinia lectus. Tortor in non at.
      </div>
      <div className="lg:mx-64 mx-4 font-extralight text-sm max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 py-8">
        <div className="flex flex-col gap-6">
          <div className="flex lg:flex-row flex-col  gap-6 w-full" >
            <input className="w-full outline-0 p-3 rounded hover:bg-neutral-700 hover:bg-opacity-5 border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="First Name*" />
            <input className="w-full outline-0 p-3 rounded hover:bg-neutral-700 hover:bg-opacity-5 border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Last Name*" />
          </div>
          <input className="outline-0 p-3 rounded hover:bg-neutral-700 hover:bg-opacity-5 border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Email address*" />
          <input className="outline-0 p-3 rounded hover:bg-neutral-700 hover:bg-opacity-5 border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Phone number*" />
        </div>
        <textarea rows="4" className="outline-0 p-3 rounded hover:bg-neutral-700 hover:bg-opacity-5 border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" placeholder="Questions or Comments*"></textarea>
        <div className="py-6 flex flex-col justify-between gap-4">
          <a href='' className='flex items-center '>
            <span class=" h-5">
              <input className='mr-2' type="radio" value={true} />
            </span>By requesting a call you are agreeing to our consultancy rates*
          </a>
          <a href='' className=' flex items-center'>
            <span class="h-5">
              <input className='mr-2 w-max' type="radio" value={true} />
            </span>
            <div>
              I agree with the <span className="text-infoBlue ">Terms and Conditions  </span>  and <span className=" text-infoBlue">Privacy Policy</span>
            </div>
          </a>
        </div>
        <div className="lg:py-6 flex lg:flex-row flex-col gap-6 lg:gap-0 items-center justify-between">
          <img src="/images/captcha.png" alt="" />
          <div className="w-full h-max px-6">
            <CustomButton text="Submit form" dark={true} type="consultation" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsultationContact;