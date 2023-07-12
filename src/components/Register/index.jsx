import React, { useState } from 'react'
import { CustomButton, Footer } from '../elements'
const Register = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    return (
        <div className="bg-navy pt-32  ">
            <div className='h-full bg-cover flex flex-col items-center justify-center  text-white' style={{ backgroundImage: "url('/images/login/main-bg.png')" }}>
                <img className='w-20' src="/images/login/login-icon.png" alt="" />
                <h1 className="text-2xl lg:text-4xl font-bold mb-4">Register</h1>
                <div className="mx-auto max-w-xs lg:max-w-md text-center text-xs lg:text-sm pb-6">Sign up for an account today in order to gain access to your product and manage your account information.</div>
                <div className='bg-[#F1f1f109] p-8 rounded-md text-black text-sm '>
                    <div className=" text-sm max-w-6xl gap-6 ">
                        <div className="flex flex-col gap-6">
                            <div className="flex lg:flex-row flex-col  gap-6 w-full" >
                                <input className="w-full outline-0 p-3 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="First Name*" />
                                <input className="w-full outline-0 p-3 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Last Name*" />
                            </div>
                            <input className="outline-0 p-3 rounded  border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Email address*" />
                            <div className='w-full relative'>
                                <input className="w-full outline-0 p-3 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type={show1 ? "text" : "password"} placeholder="New Password*" />
                                <svg className='absolute right-3 bottom-1/3 cursor-pointer' width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"
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
                                <input className="w-full outline-0 p-3 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type={show2 ? "text" : "password"} placeholder="Confirm New Password*" />
                                <svg className='absolute right-3 bottom-1/3 cursor-pointer' width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    onMouseUp={() => setShow2(false)}
                                    onMouseDown={() => setShow2(true)}
                                >
                                    <ellipse cx="10.6295" cy="10.9289" rx="3.7037" ry="3.57143" fill="#212121" />
                                    <path d="M1 11.6429C1.74074 8.78571 5.88889 4.5 10.6296 4.5C16.5556 4.5 20.2593 9.5 21 11.6429" stroke="#212121" />
                                </svg>
                            </div>
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
                            <img className="py-3 lg:p-0" src="/images/captcha.png" alt="" />
                            <div className="w-full h-max pl-6">
                                <CustomButton text="Submit form" dark={false} type="consultation" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full pt-12">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Register;