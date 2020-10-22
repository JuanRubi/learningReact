/*----------------------------------------------------------------------------------------
    GOAL: To give an object example of useState hook in react.
----------------------------------------------------------------------------------------*/

import React, { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'Juan',
        age: 24,
        message: 'Getting there!',
    });

    const changeMessage = () => {
        // Use spread operator to prevent other data from being overwritten.
        setPerson({ ...person, message: 'Almost there!' });

        // NOTE: Could set multiple useState for each of the data items as an alternative.
        //       This prevents overwriting other data and no need for spread operator. 
    };

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={changeMessage}>
                Change Message
            </button>
        </>
    );
};

export default UseStateObject;