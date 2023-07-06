import React from 'react'
import { useSelector } from 'react-redux';
import { CustomButton, LeftplayButton, ProductCard, RightplayButton } from '../elements';

const ProductCatalogueProducts = () => {
    let { courses } = useSelector(state => state.courses)
    let { pages } = useSelector(state => state.catalogue)
    return (
        <>
            <div
                className="grid px-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full mt-8 place-items-center"
            >
                {courses.map((course, index) => {
                    return <ProductCard key={index} course={course} type="productCatalogue" />;
                })}
            </div>
            <div className="p-6 flex items-center justify-center ">
                <div className=" select-none flex justify-evenly items-center  my-4 ">
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
            </div >
        </>
    )
}

export default ProductCatalogueProducts