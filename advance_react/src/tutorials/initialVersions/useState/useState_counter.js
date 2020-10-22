/*----------------------------------------------------------------------------------------
    GOAL: To create a counter using useState hook in react.
----------------------------------------------------------------------------------------*/

import React, { useState } from 'react';

const UseStateCounter = () => {
    const [value, setValue] = useState(0);

    const reset = () => {
        setValue(0);
    };

    const complexIncrease = () => {
        setTimeout(() => {
            //setValue(value + 1)

            /*---------------------------------------------------------------------------
                Functional Approach to State (Sometimes Necessary)
            ---------------------------------------------------------------------------*/
            // Passing in the function allows for current & previous value to be access.
            setValue((prevState) => {
                return prevState + 1;
            });
        }, 2000);  // milliseconds
    };

    return (
        <>
            <section style={{ margin: '4rem 0' }}>
                <h2>Regular Counter</h2>
                <h1>{value}</h1>

                <button className="btn" onClick={() => setValue(value - 1)}>
                    Decrease
                </button>
                <button className="btn" onClick={reset}>Reset</button>
                <button className="btn" onClick={() => setValue(value + 1)}>
                    Increase
                </button>
            </section>

            <section style={{ margin: '4rem 0' }}>
                <h2>More Complex Counter</h2>
                <h1>{value}</h1>

                <button className="btn" onClick={complexIncrease}>
                    Increase Later
                </button>
            </section>
        </>
    );
};

export default UseStateCounter;
