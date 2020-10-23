/*----------------------------------------------------------------------------------------
    GOAL: To show the basics of useEffect hook in react.
----------------------------------------------------------------------------------------*/

// useEffect handles work (side effect) outside of the component.
// Runs by default after every render.
// Second parameter contains the dependencies.
import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
    // useState triggers re-render which triggers useEffect.
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("call useEffect");

        // Can't put hooks inside conditionals so put conditional inside hook.
        if (value >= 1) {
            document.title = `New Messages(${value})`;
        }
    }, [value]);    // [] contains the dependencies.
    // [] left empty makes useEffect only run on initial render.

    console.log("render component");

    return (
        <>
            <h1>{value}</h1>
            <button className="btn" onClick={() => setValue(value + 1)}>
                Click Me
            </button>
        </>
    );
};

export default UseEffectBasics;