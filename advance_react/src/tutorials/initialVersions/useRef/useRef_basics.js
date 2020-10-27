/*---------------------------------------------------------------------------------------
    GOAL: To show the basics of setting and using the useRef hook in React. 
----------------------------------------------------------------------------------------*/

import React, { useEffect, useRef } from 'react';

// Preserves value between renders.
// DOES NOT trigger re-render.
// Used to target DOM nodes/elements.

const UseRefBasics = () => {
    const refContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
    };

    // Don't need to worry about depency since re-render isn't triggered with useRef.
    useEffect(() => {
        console.log(refContainer.current);
        refContainer.current.focus();
    });

    return (
        <>
            <h2>useRef Basics</h2>

            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer} />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
};

export default UseRefBasics;

