import React from 'react'
import { useParams } from 'react-router-dom'
import {  ExploreProducts, Footer, FooterAnchor } from '../elements'
import ProductpageFaq from './Productpage-Faq'
import ProductPageConsultation from './ProductPage-Consultation'

const ProductPage = () => {
    let { id } = useParams()
    return (
        <div className="bg-navy text-white overflow-x-hidden pt-24 lg:pt-32  " style={{ backgroundImage: "url('/images/main-bg.png')" }}>
            <ProductPageConsultation/>
            <ProductpageFaq />
            <ExploreProducts type="productPage" dark={false} />
            <FooterAnchor/>
            <Footer/>

        </div>
    )
}

export default ProductPage