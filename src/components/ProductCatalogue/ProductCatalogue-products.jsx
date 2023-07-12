import React from 'react'
import { useSelector } from 'react-redux';
import { Pagination, ProductCard } from '../elements';

const ProductCatalogueProducts = () => {
    let { courses } = useSelector(state => state.courses)
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
                <Pagination />
            </div>
        </>
    )
}

export default ProductCatalogueProducts