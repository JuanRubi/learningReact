/*---------------------------------------------------------------------------------------
    GOAL: To showcase how to use a custom hook we created  (useFetch) in React.
----------------------------------------------------------------------------------------*/

import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';

const url = 'https://course-api.netlify.app/api/javascript-store-products';

const Example = () => {
    // Using our custom hook.
    const { loading, products } = useFetch(url);

    return (
        <div>
            <h2>{loading ? "Loading..." : "Data"}</h2>
        </div>
    );
};

export default Example;