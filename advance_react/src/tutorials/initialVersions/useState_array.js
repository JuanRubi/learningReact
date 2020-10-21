/*----------------------------------------------------------------------------------------
    GOAL: To give an array example of useState hook in react.
----------------------------------------------------------------------------------------*/

import React from 'react';
import { data } from '../../data';

const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);  // React.useState() for single use

    return ( // <> </> == <React.Fragment> </React.Fragment>
        <>
            {people.map((person) => {
                const { id, name } = person;

                return (
                    <div key={id} className="arrayItem">
                        <h3>{name}</h3>
                    </div>
                );
            })}
        </>
    );
};

export default UseStateArray;