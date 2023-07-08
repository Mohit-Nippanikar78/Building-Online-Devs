import React from 'react'
import { Footer, FooterAnchor } from '../elements'
import ProductCatalogueFilters from './ProductCatalogue-filters';
import ProductCatalogueHero from './ProductCatalogue-Hero';
import ProductCatalogueProducts from './ProductCatalogue-products';

const ProductCatalogue = () => {
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
                <FooterAnchor/>
                <Footer />
            </div>
        </div>
    )
}

export default ProductCatalogue