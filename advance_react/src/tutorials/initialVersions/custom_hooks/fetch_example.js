/*---------------------------------------------------------------------------------------
    GOAL: To showcase how to create and use custom hooks in React.
----------------------------------------------------------------------------------------*/

import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';

const url = 'https://course-api.netlify.app/api/javascript-store-products';

const Example = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch(url);
        const products = await response.json();

        setProducts(products);
        setLoading(false);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <h2>{loading ? "Loading..." : "Data"}</h2>
        </div>
    );
};

export default Example;