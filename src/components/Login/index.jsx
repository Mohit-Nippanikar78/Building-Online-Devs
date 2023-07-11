import React, { useState } from 'react'
import { CustomButton, Footer } from '../elements'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'
import { Outlet, useNavigate } from 'react-router-dom'
const Login = () => {
    return (
        <div className="bg-navy pt-32  ">
            <div className='h-full bg-cover flex flex-col items-center justify-center  text-white' style={{ backgroundImage: "url('/images/login/main-bg.png')" }}>
                <Outlet />
                <div className="w-full pt-12">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export const LoginPage = () => {
    const [show, setShow] = useState(false)
    let navigate = useNavigate()
    return (<>
        <img className='w-20' src="/images/login/login-icon.png" alt="" />
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">Login</h1>
        <div className="mx-auto max-w-xs lg:max-w-md text-center text-xs lg:text-sm pb-6">Log in to your account today in order to gain access to your product and manage your account information.</div>
        <div className="flex bg-[#F1F1F110] w-full lg:w-auto p-5   text-sm  gap-6  " style={{ boxShadow: "rgba(241, 241, 241,.7) 0px 0px 2px 0px" }}>
            <div className="flex flex-col gap-4 lg:min-w-[500px] w-full  text-black">
                <input className="outline-0 p-3 rounded  border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Email address*" />
                <div className='w-full relative'>
                    <input className="w-full outline-0 p-3 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type={show ? "text" : "password"} placeholder="Password*" />
                    <svg className='absolute right-3 bottom-1/3 cursor-pointer' width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"
                        onMouseUp={() => setShow(false)}
                        onMouseDown={() => setShow(true)}
                        onTouchStart={() => setShow(true)}
                        onTouchEnd={() => setShow(false)}
                    >
                        <ellipse cx="10.6295" cy="10.9289" rx="3.7037" ry="3.57143" fill="#212121" />
                        <path d="M1 11.6429C1.74074 8.78571 5.88889 4.5 10.6296 4.5C16.5556 4.5 20.2593 9.5 21 11.6429" stroke="#212121" />
                    </svg>
                </div>
                <div className='flex justify-between items-center text-white'>
                    <div>
                        <input className='mr-1 w-max' type="radio" value={true} /> Remember me
                    </div>
                    <span className="text-lime cursor-pointer" onClick={() => { navigate("forgot-password") }}>
                        Forgot Password?
                    </span>
                </div>
                <CustomButton text="Submit form" dark={false} type="consultation" />
            </div>
        </div></>)
}
export default Login;