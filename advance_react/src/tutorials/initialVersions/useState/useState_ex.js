/*----------------------------------------------------------------------------------------
    GOAL: To give a simple example of useState hook in react.
----------------------------------------------------------------------------------------*/

// importing useState
import React, { useState } from 'react';


const UseStateBasics = () => {

    /*------------------------------
        Manual Method.
    ------------------------------*/
    // console.log(useState("Hello World!"));  // useState( whatever JS thing you want to pass in)

    // const value = useState(1)[0]; // [0] - accesses first item in array
    // const handler = useState(1)[1];

    // console.log(value, handler);


    /*------------------------------
        Destructuring Method.
    ------------------------------*/
    //[variableName, functionName]  Convention: functionName == setvariableName
    const [nameGiven, setnameGiven] = useState("Random Title");

    // useState allows to change the title, changing the state value.
    const handleClick = () => {
        if (nameGiven === "Random Title") {
            setnameGiven("Success!");
        }
        else {
            setnameGiven("Random Title");
        }
    };

    return (
        <React.Fragment>
            <h1>{nameGiven}</h1>
            <button className="btn" onClick={handleClick}>
                Change Title
            </button>
        </React.Fragment>
    );
};

export default UseStateBasics;
