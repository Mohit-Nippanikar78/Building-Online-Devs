import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const GBP = () => {
    let { data } = useSelector(state => state.navbar)
    let GBPref = useRef()

    return (
        <div ref={GBPref} className={` max-w-max z-50 fixed flex flex-col items-center w-full h-full`}
            style={{ left: data[4].dropdown.left, top: data[4].dropdown.top + 40 }}>
            <div className='py-2 px-4 bg-white hover:bg-lime cursor-pointer '>GBP $</div>
            <div className='py-2 px-4 bg-white hover:bg-lime cursor-pointer'>GBP $</div>
            <div className='py-2 px-4 bg-white hover:bg-lime cursor-pointer'>GBP $</div>
            <div className='py-2 px-4 bg-white hover:bg-lime cursor-pointer'>GBP $</div>
        </div>
    )
}

export default GBP