/*--------------------------------------------------------------------------------------- 
    GOAL: To showcase how once the title is changed, it can't be changed back. A
          problem that useState can fix.
----------------------------------------------------------------------------------------*/

import React from 'react'

const ErrorExample = () => {
    let title = "random title";

    const handleClick = () => {
        title = "New Title";
    };

    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={handleClick}> Change Title </button>
        </React.Fragment>
    )
};

export default ErrorExample;
