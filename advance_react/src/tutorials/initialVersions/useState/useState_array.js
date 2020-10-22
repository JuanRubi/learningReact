/*----------------------------------------------------------------------------------------
    GOAL: To give an array example of useState hook in react.
----------------------------------------------------------------------------------------*/

import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);  // React.useState() for single use

    // Removing items from list.
    const removeItem = (id) => {

        // Look for given id in array.
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };

    return ( // <> </> == <React.Fragment> </React.Fragment>
        <>
            {people.map((person) => {
                const { id, name } = person;

                return (
                    <div key={id} className="arrayItem">
                        <h3>{name}</h3>
                        <button onClick={() => removeItem(id)}>Remove</button>
                    </div>
                );
            })}

            <button className="btn" onClick={() => setPeople([])}>
                Clear items
            </button>
        </>
    );
};

export default UseStateArray;