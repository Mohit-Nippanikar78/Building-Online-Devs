import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ course, type }) => {
    const { name, desc, price, id } = course;
    let navigate = useNavigate()
    return (
        <div className={`snap-center flex  flex-col text-center text-black items-center  rounded-md bg-white  mx-4 min-w-[240px] ${["productCatalogue", "productPage"].includes(type) ? "w-64 bg-opacity-100" : " bg-opacity-70"} `} style={{ boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }}>
            <div className="text-sm font-bold text-[#212121]">Video</div>
            <img src="/images/course-1-thumbnail.png" className=' flex-1' alt="" />
            <div className="text-base py-4 text-left px-4">
                <div className="text-infoBlue text-xl font-bold">
                    {name}
                </div>
                <div className="font-normal py-4 text-sm break-word">
                    {desc}   </div>
                <div className="flex justify-between ">
                    <span className="text-2xl font-extrabold text-[#212121]">

                        ${id}
                    </span>
                    <button className="rounded-md border-[#3c3c3c] px-4 py-2 border-2 border-solid" onClick={() => { navigate(`/product/${id}`) }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.49201 1.63521L2.38268 3.04961C2.16296 3.32976 2.0531 3.46983 2.05564 3.58708C2.05786 3.68911 2.10789 3.78479 2.19192 3.84771C2.28848 3.92001 2.47159 3.92001 2.83779 3.92001H13.3622C13.7284 3.92001 13.9115 3.92001 14.0081 3.84771C14.0921 3.78479 14.1422 3.68911 14.1444 3.58708C14.1469 3.46983 14.0371 3.32976 13.8173 3.04961L12.708 1.63521M3.49201 1.63521C3.61717 1.47564 3.67974 1.39585 3.75905 1.33831C3.82929 1.28734 3.90884 1.24931 3.99362 1.22616C4.08935 1.20001 4.19364 1.20001 4.40223 1.20001H11.7978C12.0064 1.20001 12.1107 1.20001 12.2064 1.22616C12.2912 1.24931 12.3707 1.28734 12.441 1.33831C12.5203 1.39585 12.5829 1.47564 12.708 1.63521M3.49201 1.63521L2.15512 3.33974C1.98626 3.55504 1.90183 3.66269 1.84188 3.78124C1.78868 3.88643 1.74988 3.99774 1.72643 4.11242C1.70001 4.24166 1.70001 4.37622 1.70001 4.64534L1.70001 12.624C1.70001 13.3857 1.70001 13.7665 1.85503 14.0574C1.99138 14.3133 2.20895 14.5214 2.47656 14.6518C2.78079 14.8 3.17905 14.8 3.97557 14.8L12.2245 14.8C13.021 14.8 13.4192 14.8 13.7235 14.6518C13.9911 14.5214 14.2086 14.3133 14.345 14.0574C14.5 13.7665 14.5 13.3857 14.5 12.624V4.64535C14.5 4.37622 14.5 4.24166 14.4736 4.11242C14.4501 3.99775 14.4113 3.88643 14.3581 3.78124C14.2982 3.66269 14.2138 3.55504 14.0449 3.33975L12.708 1.63521M10.9445 6.64001C10.9445 7.3614 10.6448 8.05324 10.1113 8.56334C9.5779 9.07344 8.85441 9.36001 8.10001 9.36001C7.34562 9.36001 6.62212 9.07344 6.08869 8.56334C5.55525 8.05324 5.25557 7.3614 5.25557 6.64001" stroke="#3C3C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ProductCard