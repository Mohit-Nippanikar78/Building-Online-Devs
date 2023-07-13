import React, { useRef, useState } from 'react'
import { CustomButton, Footer } from '../elements'
import { Outlet, useNavigate } from 'react-router-dom'
import { removeUser, setUser } from '../../features/User'
import { useDispatch } from 'react-redux'
const Logout = () => {
    return (
        <div className="bg-navy pt-32  ">
            <div className='h-full bg-cover flex flex-col items-center justify-center  text-white' style={{ backgroundImage: "url('/images/login/main-bg.png')" }}>
                <LogoutPage />
                <div className="w-full pt-12">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
const LogoutPage = () => {
    let dispatch = useDispatch()
    let passwordRef = useRef();
    return (<>
        <img className='w-20' src="/images/login/login-icon.png" alt="" />
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">Logout</h1>
        <div className="mx-auto max-w-xs lg:max-w-md text-center text-xs lg:text-sm pb-6">You can login anytime you want with all of your data secured </div>
        <div className="flex bg-[#F1F1F110] w-full lg:w-auto p-5   text-sm  gap-6  " style={{ boxShadow: "rgba(241, 241, 241,.7) 0px 0px 2px 0px" }}>
            <div className="flex flex-col gap-4 lg:min-w-[500px] w-full  text-black">
                <div className=" text-white  max-w-xs lg:max-w-md  text-xs lg:text-base ">Type <span className="font-bold">Confirm</span> to Logout </div>
                <input ref={passwordRef} className="outline-0 p-3 rounded  border-2 G border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Confirm" />
                <CustomButton text="Logout" dark={false} type="consultation" func={() => { passwordRef.current.value == "Confirm" && dispatch(removeUser()); }} />
            </div>
        </div>
    </>)
}
export default Logout;