import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Footer } from '../elements'
import ProductCatalogueFilters from './ProductCatalogue-filters';
import ProductCatalogueHero from './ProductCatalogue-Hero';
import ProductCatalogueProducts from './ProductCatalogue-products';
import ProductCatalogueAnchor from './ProductCatalogue-Anchor';

const ProductCatalogue = () => {
    const [btnHover, setBtnHover] = useState(false)
    return (
        <div className="bg-navy overflow-x-hidden pt-24 lg:pt-32  ">
            <ProductCatalogueHero />
            <div
                style={{
                    background: "url('./images/productCatalogue/bg.png')",
                }}
            >
                <ProductCatalogueFilters />
                <ProductCatalogueProducts />
                <ProductCatalogueAnchor/>
                <Footer />
            </div>
        </div>
    )
}

export default ProductCatalogue