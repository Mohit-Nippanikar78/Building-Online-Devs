import React, { useState } from 'react'
import { CustomButton, Footer, LeftplayButton, Pagination, RightplayButton } from '../elements'
import { useSelector } from 'react-redux'
const Account = () => {
    return (
        <div className="bg-navy pt-36 text-white text-center">
            <div className="lg:text-5xl text-2xl font-semibold pb-4 capitalize">Welcome back username!</div>
            <div className="text-xs max-w-lg mx-auto  font-light">Lorem ipsum dolor sit amet consectetur. Felis ut sapien pulvinar auctor. Auctor amet eget euismod ut faucibus. Laoreet imperdiet malesuada fermentum ullamcorper erat.</div>
            <PersonalDetails />
            <div className='bg-cover' style={{ backgroundImage: "url('/images/account/lg-main-bg.png')" }}>
                <BillingAddress />
                <OrderHistory />
                <Footer />
            </div>
        </div>
    )
}
const PersonalDetails = () => {
    const [toggle, setToggle] = useState(false)
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    return (
        <div className="flex gap-6 lg:flex-row flex-col bg-[#F1f1f109] p-6 lg:w-max mx-auto lg:rounded-md my-8">
            <div className="flex flex-col gap-6 max-w-md text-start">
                <img className='w-16 pt-4' src="/images/account/personal-details-icon.png" alt="" />
                <div className="text-2xl font-semibold">
                    Personal Details
                </div>
                <div className="text-xs">
                    Lorem ipsum dolor sit amet consectetur. Felis ut sapien pulvinar auctor. Auctor amet eget euismod ut faucibus. Laoreet imperdiet malesuada fermentum ullamcorper erat.
                </div>
            </div>
            <div className={`${toggle ? "flex   " : "hidden"}  lg:flex flex-col text-black text-sm gap-6 font-light}`}>
                <div className="w-full lg:flex-row flex-col flex gap-6">
                    <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="First Name" />
                    <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Last Name" />
                </div>
                <div className="w-full lg:flex-row flex-col flex gap-6">
                    <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Email Address" />
                    <input className="w-full outline-0 p-2   rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Phone Number" />
                </div>
                <div className="flex gap-6 lg:flex-row flex-col lg:min-w-[500px] w-full  text-black">
                    <div className='w-full relative'>
                        <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type={show1 ? "text" : "password"} placeholder="New Password*" />
                        <svg className='absolute right-3 w-4 bottom-[30%] cursor-pointer' width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onMouseUp={() => setShow1(false)}
                            onMouseDown={() => setShow1(true)}
                            onTouchStart={() => setShow1(true)}
                            onTouchEnd={() => setShow1(false)}
                        >
                            <ellipse cx="10.6295" cy="10.9289" rx="3.7037" ry="3.57143" fill="#212121" />
                            <path d="M1 11.6429C1.74074 8.78571 5.88889 4.5 10.6296 4.5C16.5556 4.5 20.2593 9.5 21 11.6429" stroke="#212121" />
                        </svg>
                    </div>
                    <div className='w-full relative'>
                        <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type={show2 ? "text" : "password"} placeholder="Confirm New Password*" />
                        <svg className='absolute right-3 w-4 bottom-[30%] cursor-pointer' width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onMouseUp={() => setShow2(false)}
                            onMouseDown={() => setShow2(true)}
                            onTouchStart={() => setShow2(true)}
                            onTouchEnd={() => setShow2(false)}
                        >
                            <ellipse cx="10.6295" cy="10.9289" rx="3.7037" ry="3.57143" fill="#212121" />
                            <path d="M1 11.6429C1.74074 8.78571 5.88889 4.5 10.6296 4.5C16.5556 4.5 20.2593 9.5 21 11.6429" stroke="#212121" />
                        </svg>
                    </div>
                </div>
                <CustomButton text="Save Changes" dark={false} type="consultation" />
            </div>
            <div className={`lg:hidden`}>
                <CustomButton text={toggle ? "Close" : "View Details"} dark={false} type="consultation" func={() => { setToggle(v => !v) }} />
            </div>
        </div>
    )
}
const BillingAddress = () => {
    const [toggle, setToggle] = useState(false)
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    return (<div className="flex gap-6 lg:flex-row flex-col bg-[#F1f1f109] p-6 lg:w-max mx-auto lg:rounded-md my-8">
        <div className="flex flex-col gap-6 max-w-md text-start">
            <img className='w-16 pt-4' src="/images/account/billing-address.png" alt="" />
            <div className="text-2xl font-semibold">
                Billing Address
            </div>
            <div className="text-xs">
                Lorem ipsum dolor sit amet consectetur. Felis ut sapien pulvinar auctor. Auctor amet eget euismod ut faucibus. Laoreet imperdiet malesuada fermentum ullamcorper erat.
            </div>
        </div>
        <div className={`${toggle ? "flex   " : "hidden"}  lg:flex flex-col text-black text-sm gap-6 font-light}`}>
            <div className="w-full lg:flex-row flex-col flex gap-6">
                <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Address Line 1" />
                <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Address Line 2" />
            </div>
            <div className="w-full lg:flex-row flex-col flex gap-6">
                <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="City" />
                <input className="w-full outline-0 p-2   rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Country" />
            </div>
            <div className="flex gap-6 lg:flex-row flex-col lg:min-w-[500px] w-full  text-black">
                <div className='w-full relative'>
                    <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type={show1 ? "text" : "password"} placeholder="United Kingdom" />
                    <svg className='absolute right-3 w-2.5 bottom-1/3 cursor-pointer' width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.66727 9.13301C6.37579 9.92376 7.62489 9.92376 8.33341 9.133L13.2452 3.65113C14.2623 2.51593 13.4466 0.726074 11.9121 0.726074H2.08856C0.554053 0.726074 -0.261662 2.51593 0.755482 3.65113L5.66727 9.13301Z" fill="#212121" />
                    </svg>
                </div>
                <div className='w-full relative'>
                    <input className="w-full outline-0 p-2 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Postal Code" />
                </div>
            </div>
            <CustomButton text="Save Changes" dark={false} type="consultation" />
        </div>
        <div className={`lg:hidden`}>
            <CustomButton text={toggle ? "Close" : "View Details"} dark={false} type="consultation" func={() => { setToggle(v => !v) }} />
        </div>
    </div>
    )
}
const OrderHistory = () => {
    const [toggle, setToggle] = useState(false)
    return (<div className="flex lg:flex-row flex-col bg-[#F1f1f109]  lg:w-max mx-auto lg:rounded-md my-8">
        <div className="flex flex-col gap-4 max-w-md text-start p-6">
            <img className='w-16 pt-4' src="/images/account/order-history.png" alt="" />
            <div className="text-2xl font-semibold">
                Order History
            </div>
            <div className="text-xs max-w-md">
                Lorem ipsum dolor sit amet consectetur. Felis ut sapien pulvinar auctor. Auctor amet eget euismod ut faucibus. Laoreet imperdiet malesuada fermentum ullamcorper erat.
            </div>
        </div>
        <div className={`${toggle ? "flex" : "hidden"} lg:p-6 lg:flex flex-col text-black text-sm lg:min-w-[500px] gap-6 font-light text-start`}>
            <div className="flex flex-col gap-6 items-center   text-black w-screen lg:w-max pb-6 lg:pb-0">
                <div className="flex flex-wrap  justify-around gap-8 mx-4  lg:px-4 py-2 lg:w-full rounded-md bg-white">
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">Product</p>
                        <p className="text-sm font-semibold max-w-[200px]">The Complete Web Developer Course 2.0</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">Type</p>
                        <p className="text-sm font-semibold flex-1 flex items-center"> Video</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">Order No</p>
                        <p className="text-sm font-semibold flex-1 flex items-center text-infoBlue">#1234</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">QTY</p>
                        <p className="text-sm font-semibold flex-1 flex items-center">3</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">Total</p>
                        <p className="text-sm font-semibold flex-1 flex items-center">$10.00</p>
                    </div>
                </div>
                <div className="flex flex-wrap  justify-around gap-8 mx-4  lg:px-4 py-2 lg:w-full rounded-md bg-white">
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">Product</p>
                        <p className="text-sm font-semibold max-w-[200px]">The Complete Web Developer Course 2.0</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">Type</p>
                        <p className="text-sm font-semibold flex-1 flex items-center"> Video</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">Order No</p>
                        <p className="text-sm font-semibold flex-1 flex items-center text-infoBlue">#1234</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">QTY</p>
                        <p className="text-sm font-semibold flex-1 flex items-center">3</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">Total</p>
                        <p className="text-sm font-semibold flex-1 flex items-center">$10.00</p>
                    </div>
                </div>
                <div className="flex flex-wrap  justify-around gap-8 mx-4  lg:px-4 py-2 lg:w-full rounded-md bg-white">
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">Product</p>
                        <p className="text-sm font-semibold max-w-[200px]">The Complete Web Developer Course 2.0</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">Type</p>
                        <p className="text-sm font-semibold flex-1 flex items-center"> Video</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">Order No</p>
                        <p className="text-sm font-semibold flex-1 flex items-center text-infoBlue">#1234</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">QTY</p>
                        <p className="text-sm font-semibold flex-1 flex items-center">3</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="text-sm font-medium">Total</p>
                        <p className="text-sm font-semibold flex-1 flex items-center">$10.00</p>
                    </div>
                </div>
                <Pagination />
            </div>
        </div>
        <div className={`lg:hidden p-6`}>
            <CustomButton text={toggle ? "Close" : "View Details"} dark={false} type="consultation" func={() => { setToggle(v => !v) }} />
        </div>
    </div>
    )
}

export default Account