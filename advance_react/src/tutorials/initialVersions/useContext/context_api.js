/*---------------------------------------------------------------------------------------
    GOAL: To show the solution to the prop drilling issue that arises in react.
----------------------------------------------------------------------------------------*/

import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// Solution to prop drilling.

// Creating the context. Gives access to Provide, Consumer components.
const PersonContext = React.createContext();

const ContextAPI = () => {
    const [people, setPeople] = useState(data);

    // Prop drilling - Need to pass function to List then pass it into SinglePerson.
    // Can't simply call it in SinglePerson.
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };

    // Need to wrap content displayed in root(main) component inside context created.
    return (
        <>
            <PersonContext.Provider value={{ removePerson }}>
                <h2>Context API and useContext</h2>
                <List people={people} /* Could also pass people in context */ />
            </PersonContext.Provider>
        </>
    );
};

const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
                return (
                    <SinglePerson key={person.id} {...person} />
                )
            })}
        </>
    );
};

const SinglePerson = ({ id, name }) => {
    const { removePerson } = useContext(PersonContext);

    return (
        <div className="item">
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>Remove</button>
        </div>
    );
};

export default ContextAPI;