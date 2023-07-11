import React, { useState } from 'react'
import { CustomButton } from '../../elements'
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    let navigate = useNavigate()
    return (
        <>
            <img className='w-20' src="/images/login/forgot-password.png" alt="" />
            <h1 className="text-2xl lg:text-4xl font-bold my-4">Reset Password</h1>
            <div className="mx-auto max-w-xs lg:max-w-md text-center text-xs lg:text-sm pb-6">Lorem ipsum dolor sit amet consectetur. Congue ornare amet nunc hendrerit feugiat quis. Feugiat pellentesque ac.</div>
            <div className="flex bg-[#F1F1F110] w-full lg:w-auto p-5   text-sm  gap-6  " style={{ boxShadow: "rgba(241, 241, 241,.7) 0px 0px 2px 0px" }}>
                <div className="flex flex-col gap-4 lg:min-w-[500px] w-full  text-black">
                    <div className='w-full relative'>
                        <input className="w-full outline-0 p-3 rounded border-2 border-neutral-700 border-opacity-40 focus:bg-white focus:border-opacity-70" type={show1 ? "text" : "password"} placeholder="New Password*" />
                        <svg className='absolute right-3 bottom-1/3 cursor-pointer' width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onMouseUp={() => setShow1(false)}
                            onMouseDown={() => setShow1(true)}
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
                    <CustomButton text="Confirm Password" dark={false} type="consultation" func={() => { navigate("/login") }} />
                </div>
            </div>
        </>
    )

}

export default ResetPassword