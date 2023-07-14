import React, { useCallback } from 'react'
import { Cart, CustomButton, Footer } from '../elements'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    return (
        <div className="bg-navy pt-32   ">
            <div className='h-full bg-cover flex flex-col items-center justify-center  text-white' style={{ backgroundImage: "url('/images/account/lg-main-bg.png')" }}>
                <div className=" lg:pb-8 text-white text-center max-w-xl m-auto  flex flex-col justify-center items-center ">
                    <div className=" text-3xl lg:text-4xl capitalize font-bold tracking-[1.5px]">
                        <div className="lg:mb-4 mb-2">
                            <span id="homepage-heading-gradient">Secure </span>
                            Checkout
                        </div>
                    </div>
                    <div className="font-xs   tracking-[0.001rem] text-xs my-4 px-4  ">
                        Lorem ipsum dolor sit amet consectetur. Facilisi nunc eu egestas at blandit. Quisque egestas quam nibh et semper. Dictum sit a mi tristique in.
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-12">
                    <BillingAddress />
                    <OrderSummary />
                </div>
                <div className="w-full">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
const BillingAddress = () => {
    return (<>
        <div className="flex gap-6 items-center  flex-col bg-[#F1f1f109] p-6 lg:w-max mx-auto lg:rounded-md my-8">
            <div className="text-2xl font-semibold">
                Personal Details
            </div>
            <div className={`flex flex-col text-black text-sm gap-4 font-light`}>
                <div className="w-full lg:flex-row flex-col flex gap-4">
                    <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="First Name" />
                    <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Last Name" />
                </div>
                <div className="w-full lg:flex-row flex-col flex gap-4">
                    <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Phone Number" />
                    <input className="w-full outline-0 p-2   rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Date Of Birth" />
                </div>
                <input className="w-full outline-0 p-2   rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Email Address" />
                <input className="w-full outline-0 p-2   rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Address Line 1" />
                <input className="w-full outline-0 p-2   rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Address Line 2" />
                <div className="w-full lg:flex-row flex-col flex gap-6">
                    <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="City" />
                    <input className="w-full outline-0 p-2   rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Country" />
                </div>
                <div className="flex gap-6 lg:flex-row flex-col lg:min-w-[500px] w-full  text-black">
                    <div className='w-full relative'>
                        <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" placeholder="United Kingdom" />
                        <svg className='absolute right-3 w-2.5 bottom-1/3 cursor-pointer' width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.66727 9.13301C6.37579 9.92376 7.62489 9.92376 8.33341 9.133L13.2452 3.65113C14.2623 2.51593 13.4466 0.726074 11.9121 0.726074H2.08856C0.554053 0.726074 -0.261662 2.51593 0.755482 3.65113L5.66727 9.13301Z" fill="#212121" />
                        </svg>
                    </div>
                    <div className='w-full relative'>
                        <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Postal Code" />
                    </div>
                </div>
                <a href='' className='flex text-white'>
                    <span class="h-5">
                        <input className='mr-2 w-max' type="radio" value={true} />
                    </span>
                    <div className="my-auto">
                        I agree with the <span className="text-lime ">Terms and Conditions  </span>  and <span className=" text-lime">Privacy Policy</span>
                    </div>
                </a>
                <div className='flex flex-col lg:flex-row gap-6 lg:w-full w-2/3 mx-auto'>
                    <img className='h-max my-auto' src="/images/captcha.png" alt="" />
                    <img className='h-max my-auto' src="/images/footer-banks.png" alt="" />
                </div>
            </div>
        </div></>)
}
const OrderSummary = () => {
    let navigate = useNavigate()
    return (<>
        <div className="flex gap-6 items-center  flex-col bg-[#F1f1f109] p-6 lg:w-max mx-auto lg:rounded-md my-8">
            <div className="text-2xl font-semibold">
                Order Summary
            </div>
            <div className={`flex flex-col text-black text-sm gap-4 font-light`}>
                <Cart />
                <Cart />
                <Cart />
                <div className="border-y py-2 border-solid border-white text-white flex justify-between">
                    <div className="text-lg ">
                        Subtotal
                    </div>
                    <div className="text-lg ">
                        $10.00
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <input className="w-full  outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Enter Discount Code" />
                    <div className="w-2/3">
                        <CustomButton text="Apply" dark={false} type="consultation" />
                    </div>
                </div>
                <div className="text-lime text-xs border-l-2 pl-2 border-lime">
                    Coupon code ExampleCoupon (£5.00) Applied Successfully
                </div>
                <div className="border-y py-2 border-solid border-white text-white flex justify-between">
                    <div className="text-lg ">
                        Amount To Pay
                    </div>
                    <div className="text-lg ">
                        $10.00
                    </div>
                </div>
                <div className="bg-neutral-800">
                    <CustomButton text="Secure Payment" dark={false} type="consultation" func={useCallback(()=>{navigate("/payment")})} />
                </div>
            </div>
        </div></>)
}
export default Checkout