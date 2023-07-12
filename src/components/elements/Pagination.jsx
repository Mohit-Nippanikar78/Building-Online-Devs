import React from 'react'
import LeftplayButton from './LeftplayButton'
import RightplayButton from './RightplayButton'
import { useSelector } from 'react-redux'

const Pagination = () => {
    const { pages } = useSelector(state => state.catalogue)
    return (
        <div className=" select-none flex justify-evenly items-center ">
            <LeftplayButton
                dark={true}
            />
            {pages.map((item, index) => {
                if (item.pageNo < (window.innerWidth / 100) + 1)
                    return (
                        <button key={index} className={`${item.pageNo == 1 ? " text-neutral-900 bg-white" : " text-white"} font-semibold border-white w-8 h-8 mx-1 capitalize text-sm   transition-all duration-700  rounded-md border-2 `}>
                            0{item.pageNo}
                        </button>)
            })}
            <RightplayButton
                dark={true}
            />
        </div>
    )
}

export default Pagination