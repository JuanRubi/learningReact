/*---------------------------------------------------------------------------------------
    GOAL: To gather the products data for Product.js file.
----------------------------------------------------------------------------------------*/

import React from 'react';
import Product from './Product';
import { useFetch } from '../custom_hooks/useFetch';

const url = "https://course-api.netlify.app/api/react-prop-types-example";

const Index = () => {
    const { products } = useFetch(url);

    return (
        <div>
            <h2>Products</h2>
            <section className="products">
                {products.map((product) => {
                    return (
                        <Product key={product.id} {...product} />
                    );
                })}
            </section>
        </div>
    );
};

export default Index;