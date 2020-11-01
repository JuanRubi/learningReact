/*---------------------------------------------------------------------------------------
    GOAL: To create a custom hook called useFetch to gather the data needed.
----------------------------------------------------------------------------------------*/

import { useState, useEffect, useCallback } from 'react';

// Custom hook name must start with 'use'.
export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    // Need to add useCallback to prevent infinite loop.
    const getProducts = useCallback(async () => {
        const response = await fetch(url);
        const products = await response.json();

        setProducts(products);
        setLoading(false);
    }, [url]);

    useEffect(() => {
        getProducts();
    }, [url, getProducts]);
    // Without useCallback adding getProducts to dependencies causes infinite loop.

    return { loading, products };
};