/*---------------------------------------------------------------------------------------
    GOAL: To showcase how react router can be used to create multi-page sites.
----------------------------------------------------------------------------------------*/

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../custom_hooks/useFetch';

const url = "https://course-api.netlify.app/api/javascript-store-products";
// Every time props or state changes, the component re-renders.

const Index = () => {
    const { products } = useFetch(url);
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Count:  {count}</h1>
            <button className="btn" onClick={() => setCount(count + 1)}>
                Click Me
            </button>

            <BigList products={products} />
        </>
    );

};

const BigList = ({ products }) => {
    useEffect(() => {
        console.log("Big list called.");
    });

    return (
        <section className="products">
            {products.map((product) => {
                return (
                    <SingleProduct key={product.id} {...product}></SingleProduct>
                );
            })}
        </section>
    );
};

const SingleProduct = ({ fields }) => {
    let { name, price } = fields;
    price = price / 100;
    const image = fields.image[0].url;

    return (
        <article className="product">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>${price}</p>
        </article>
    );
};

export default Index;