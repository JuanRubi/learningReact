/*---------------------------------------------------------------------------------------
    GOAL: To showcase memo function, useMemo, and useCallback hooks in react.
----------------------------------------------------------------------------------------*/

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../custom_hooks/useFetch';

const url = "https://course-api.netlify.app/api/javascript-store-products";
// Every time props or state changes, the component re-renders.

const calculateMostExpensive = (data) => {
    return data.reduce((total, item) => {
        const price = item.fields.price;

        if (price >= total) {
            total = price;
        }

        return total;
    }, 0) / 100;
};

const Index = () => {
    const { products } = useFetch(url);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(0);

    // addToCart function triggers re-render which can be fixed with useCallback.
    const addToCart = useCallback(() => {
        setCart(cart + 1);
    }, [cart]);

    const mostExpensive = useMemo(() => calculateMostExpensive(products, [products]));

    return (
        <>
            <h1>Count:  {count}</h1>
            <button className="btn" onClick={() => setCount(count + 1)}>
                Click Me
            </button>

            <h1 style={{ marginTop: "3rem" }}> Cart: {cart}</h1>
            <h1>Most Expensive: ${mostExpensive}</h1>
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
            <button onClick={addToCart}>Add To Ca rt</button>
        </article>
    );
};

export default Index;