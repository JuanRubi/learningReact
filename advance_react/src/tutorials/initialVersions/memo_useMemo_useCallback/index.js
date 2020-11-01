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
    const [cart, setCart] = useState(0);

    const addToCart = () => {
        setCart(cart + 1);
    };

    return (
        <>
            <h1>Count:  {count}</h1>
            <button className="btn" onClick={() => setCount(count + 1)}>
                Click Me
            </button>

            <h1 style={{ marginTop: "3rem" }}> Cart: {cart}</h1>
            <BigList products={products} addToCart={addToCart} />
        </>
    );

};

// memo function checks (memoizing) the props value and doesn't trigger re-render if unchanged.
const BigList = React.memo(({ products, addToCart }) => {
    useEffect(() => {
        console.log("Big list called.");
    });

    return (
        <section className="products">
            {products.map((product) => {
                return (
                    <SingleProduct key={product.id} {...product}
                        addToCart={addToCart}></SingleProduct>
                );
            })}
        </section>
    );
});

const SingleProduct = ({ fields, addToCart }) => {
    let { name, price } = fields;
    price = price / 100;
    const image = fields.image[0].url;

    return (
        <article className="product">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={addToCart}>Add To Cart</button>
        </article>
    );
};

export default Index;