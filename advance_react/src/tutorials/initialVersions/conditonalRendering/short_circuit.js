/*----------------------------------------------------------------------------------------
    GOAL: To showcase short circuit evaluation and the ternary operator in react 
    for displaying JSX items conditionally. Since if conditional can't be put in 
    return statement.
----------------------------------------------------------------------------------------*/

import React, { useState } from 'react';

const ShortCircuit = () => {
    const [text, setText] = useState("");
    const [isError, setIsError] = useState(false);

    // OR example:
    const firstValue = text || "hello world";   // Chooses first true value.

    // AND example:
    const secondValue = text && "hello world";
    // If first is true, then returns second value. If false, then it returns the first value.

    return (
        <>
            <h1>Short Circuit</h1>

            <br />
            <h2>Basic Example</h2>
            {!text && <h3>Hello!</h3>}
            <h4>Value: {text || "Second value was false."}</h4>

            <br /><br />
            <h2>Error Example</h2>
            {isError && <h3>Error...</h3>}
            <button className="btn" onClick={() => setIsError(!isError)}>
                Toggle Error
            </button>
            {isError ? <p>There is an error...</p> : <p>No error.</p>}
        </>
    );
};

export default ShortCircuit;
