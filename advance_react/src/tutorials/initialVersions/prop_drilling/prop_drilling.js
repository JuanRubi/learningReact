/*---------------------------------------------------------------------------------------
    GOAL: To show how prop drilling occurs in React when there are multiple components
          and a function needs to be passed into one of the lower level components.
----------------------------------------------------------------------------------------*/

import React, { useState } from 'react';
import { data } from '../../../data';
// Arises when there are multiple components.
// Fixed with context api or redux (for more complex cases).

const PropDrilling = () => {
    const [people, setPeople] = useState(data);

    // Prop drilling - Need to pass function to List then pass it into SinglePerson.
    // Can't simply call it in SinglePerson.
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };

    return (
        <>
            <section>
                <h2>Prop Drilling</h2>
                <List people={people} removePerson={removePerson} />
            </section>
        </>
    );
};

const List = ({ people, removePerson }) => {
    return (
        <>
            {people.map((person) => {
                return (
                    <SinglePerson key={person.id} {...person} removePerson={removePerson} />
                )
            })}
        </>
    );
};

const SinglePerson = ({ id, name, removePerson }) => {
    return (
        <div className="item">
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>Remove</button>
        </div>
    );
};

export default PropDrilling;