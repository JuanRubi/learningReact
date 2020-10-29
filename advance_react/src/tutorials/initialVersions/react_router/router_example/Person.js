/*---------------------------------------------------------------------------------------
    GOAL: To create component containing a specific person requested.
----------------------------------------------------------------------------------------*/

import React, { useState, useEffect } from 'react';
import { data } from '../../../../data';
import { Link, useParams } from 'react-router-dom';

const Person = () => {
    const [name, setName] = useState("default name");
    const { id } = useParams();     // NOTE: id is a string with this statement.

    // Displaying the person chosen .
    useEffect(() => {
        const newPerson = data.find((person) => person.id === parseInt(id));
        setName(newPerson.name);
    }, []);

    return (
        <div>
            <h2>{name}</h2>
            <Link to="/people" className="btn">
                Back to People
            </Link>
        </div>
    );
};

export default Person;