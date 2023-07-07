import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
    let { id } = useParams()
    return (
        <div className="bg-navy text-white overflow-x-hidden pt-24 lg:pt-32  ">
            {id}
        </div>
    )
}

export default ProductPage