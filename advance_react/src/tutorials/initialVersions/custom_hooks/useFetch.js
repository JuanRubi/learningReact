/*---------------------------------------------------------------------------------------
    GOAL: To create a custom hook called useFetch to gather the data needed.
----------------------------------------------------------------------------------------*/

import { useState, useEffect } from 'react';

// Custom hook name must start with 'use'.
export const useFetch = (url) => {
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
    }, [url]);

    return { loading, products };
};