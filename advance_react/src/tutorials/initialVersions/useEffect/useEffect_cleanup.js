/*----------------------------------------------------------------------------------------
    GOAL: To check for the width of the window using useEffect hook in react and to
          setup a clean up function to clear previous data before it executes again.
----------------------------------------------------------------------------------------*/

import React, { useState, useEffect } from 'react';

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    // Gets the size of window while resizing.
    useEffect(() => {
        window.addEventListener('resize', checkSize);

        // useEffect can return function
        // Return cleanup function to avoid memory issues.
        return (() => {
            window.removeEventListener('resize', checkSize);
        });
    });

    return (
        <>
            <h1>Window</h1>
            <h2>{size} px</h2>
        </>
    );
};

export default UseEffectCleanup;