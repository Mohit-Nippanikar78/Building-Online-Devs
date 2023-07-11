import React from 'react'
import { CustomButton } from '../../elements'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    let navigate = useNavigate()
    return (
        <>
            <img className='w-20' src="/images/login/forgot-password.png" alt="" />
            <h1 className="text-2xl lg:text-4xl font-bold my-4">Forgot Password</h1>
            <div className="mx-auto max-w-xs lg:max-w-md text-center text-xs lg:text-sm pb-6">Lorem ipsum dolor sit amet consectetur. Congue ornare amet nunc hendrerit feugiat quis. Feugiat pellentesque ac.</div>
            <div className="flex bg-[#F1F1F110] w-full lg:w-auto p-5   text-sm  gap-6  " style={{ boxShadow: "rgba(241, 241, 241,.7) 0px 0px 2px 0px" }}>
                <div className="flex flex-col gap-4 lg:min-w-[500px] w-full  text-black">
                    <input className="outline-0 p-3 rounded  border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type="text" placeholder="Email address*" />
                    <CustomButton text="Submit" dark={false} type="consultation" func={() => { navigate("/login/reset-password") }} />
                    <CustomButton text="Back To Login" dark={false} type="consultation" func={() => { navigate(-1) }} />
                </div>
            </div>
        </>
    )
}

export default ForgotPassword