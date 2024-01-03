import React, { useState } from 'react'
import { CustomButton, Footer } from '../elements'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
    let { paymentSuccess } = useSelector(state => state.cart)
    return (
        <div className="bg-navy pt-32   ">
            <div className='h-full bg-cover flex flex-col items-center justify-center  text-white' style={{ backgroundImage: "url('/images/account/lg-main-bg.png')" }}>
                <div className=" lg:pb-8 text-white text-center max-w-xl m-auto  flex flex-col justify-center items-center ">
                    <div className=" text-3xl lg:text-4xl capitalize font-bold tracking-[1.5px]">
                        <div className="lg:mb-4 mb-2">
                            {paymentSuccess ? (
                                <><span id="homepage-heading-gradient">Payment </span>Successful</>
                            ) : (<>Payment<span className='text-error'> Unsuccessful </span></>)}
                        </div>
                    </div>
                    <div className="font-xs   tracking-[0.001rem] text-xs my-4 px-4  ">
                        Lorem ipsum dolor sit amet consectetur. Facilisi nunc eu egestas at blandit. Quisque egestas quam nibh et semper. Dictum sit a mi tristique in.
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-12">
                    <OrderSummary />
                </div>
                <div className="w-full">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
const OrderSummary = () => {
    let { paymentSuccess } = useSelector(state => state.cart)
    let navigate = useNavigate()
    return (<>
        <div className="flex gap-6 items-center  flex-col bg-[#F1f1f109] p-6 lg:w-max mx-auto lg:rounded-md my-8">
            <div className="text-2xl font-semibold">
                Order {paymentSuccess ? <span className='text-infoBlue'>#1234</span> : "Summary"}
            </div>
            <div className={`flex flex-col text-black text-sm gap-4 font-light`}>
                <Cart />
                <Cart />
                <Cart />
                <div className="border-y py-2 border-solid border-white text-white">
                    <div className=" flex justify-between">
                        <div className="text-lg ">
                            Discount
                        </div>
                        <div className="text-lg ">
                            $10.00
                        </div>
                    </div>
                    <div className=" flex justify-between">
                        <div className="text-lg ">
                            Total
                        </div>
                        <div className="text-lg ">
                            $10.00
                        </div>
                    </div>
                </div>
                <CustomButton text={paymentSuccess ? "Back Home" : "Try Again"} dark={false} type="consultation" func={() => { navigate("/") }} />
            </div>
        </div></>)
}
const Cart = () => {
    return (<div className="flex lg:flex-row items-center bg-white  text-black rounded-md p-2 flex-wrap justify-center gap-4 ">
        <div className="w-full lg:w-auto">
            <img src="/images/course-1-thumbnail.png" className='w-16 h-16 mx-auto ' alt="" />
        </div>
        <div>
            <p className="text-sm font-semibold">Product</p>
            <p className="text-sm ">The Complete Web Developer Course 2.0</p>
        </div>
        <div>
            <p className="text-sm font-semibold">Type</p>
            <p className="text-sm ">Video</p>
        </div>
        <div>
            <p className="text-sm font-semibold">QTY</p>
            <p className="text-sm ">3</p>
        </div>
        <div>
            <p className="text-sm text-right font-semibold">Total</p>
            <p className="text-sm ">$10.00</p>
        </div>

    </div>)
}
export default Payment