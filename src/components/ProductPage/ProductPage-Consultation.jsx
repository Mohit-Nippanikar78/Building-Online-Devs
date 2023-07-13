import React, { useEffect, useState } from 'react'
import { CustomButton } from '../elements'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProductPageConsultation = () => {
    let navigate = useNavigate()
    const [course, setCourse] = useState({});
    let { id } = useParams();
    let { courses } = useSelector(state => state.courses);
    useEffect(() => {

        setCourse(courses.find(course => course.id === Number(id)))
    }, [])

    return (
        <div className="flex flex-col lg:flex-row lg:gap-12 justify-center">
            <img src="/images/course-1-thumbnail.png" className='max-w-sm h-max my-auto' alt="" />
            <div className="flex flex-col justify-center gap-3 bg-[#F1F1F110] p-8 lg:rounded-lg">
                <div>
                    <div className="text-infoBlue text-xs font-semibold ">Video</div>
                    <div className="max-w-xs font-semibold tracking-[0.1rem] text-xl text-wrap">
                        The Complete Web Developer Course 2.0
                    </div>
                </div>
                <div className="flex items-center">
                    <div className='flex items-center'>
                        <div className="text-sm pr-4">
                            QTY
                        </div>
                        <div className="relative flex bg-transparent py-2 pl-3 pr-6 border-white border-2 rounded">
                            <input type="number" className='bg-transparent outline-0 w-4 text-xs' value="0" />
                            <div className="absolute right-0 top-0 p-1 pr-2 flex h-full flex-col justify-around">
                                <svg className={`rotate-180 w-2.5`} width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M11.627 1.31372L6.31324 6.62743L0.999536 1.31372" stroke="white" stroke-width="2" />
                                </svg>
                                <svg className={`w-2.5`} width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M11.627 1.31372L6.31324 6.62743L0.999536 1.31372" stroke="white" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <span className=" ml-2 lg:ml-4 text-lg font-semibold tracking-[0.1rem]  ">
                        ${course?.price}
                    </span>
                </div>
                <div className='flex gap-4'>
                    <CustomButton text='Go Back' func={() => { navigate(-1) }} />
                    <CustomButton text='Add to Cart' type="AddToCart" />
                </div>
                <div className="text-xs max-w-sm mt-4">
                    Lorem ipsum dolor sit amet consectetur. Quisque mattis pretium amet magna ac nunc odio id ac. Sed velit ullamcorper sed duis rhoncus est. Dignissim eu dolor arcu pulvinar mus.
                </div>
                <div className="text-xs max-w-sm">
                    Lorem ipsum dolor sit amet consectetur. Quisque mattis pretium amet magna ac nunc odio id ac. Sed velit ullamcorper sed duis rhoncus est.
                </div>
                <button className="text-lime text-xs flex items-center">
                    Read more
                    <svg className={`ml-2 rotate-180 w-2`} width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 5L5 0L10 5H0Z" fill="currentColor" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ProductPageConsultation