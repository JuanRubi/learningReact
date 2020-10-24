/*----------------------------------------------------------------------------------------
    GOAL: To showcase how multiple inputs can be handled using one state value and
          function. Preventing the need for multiple state values and functions.

    NOTE: Example shows 3 inputs though benefit of this approach increases as the 
          number of inputs increases.
----------------------------------------------------------------------------------------*/

import React, { useState } from 'react';
// Dynamic object properties.

const ControlledInputs = () => {
    // BRUTE FORCE METHOD. Each would need its own function.
    // const [firstName, setFirstName] = useState("");
    // const [email, setEmail] = useState("");
    // const [age, setAge] = useState("");

    // SIMPLER METHOD.
    // Creating a state to manage the rest.
    const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
    const [people, setPeople] = useState([]);

    // One function to handle a change to any of the values.
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        // Dynamically update state value.
        setPerson({ ...person, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (person.firstName && person.email && person.age) {
            const newPerson = { ...person, id: new Date().getTime().toString() };

            // Adding new person to list.
            setPeople([...people, newPerson]);
            setPerson({ firstName: "", email: "", age: "" });
        }
    };

    return (
        <>
            <h2>Controlled inputs</h2>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name: </label>
                        <input type="text" id="firstName" name="firstName"
                            value={person.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email: </label>
                        <input type="text" id="email" name="email"
                            value={person.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="age">Age: </label>
                        <input type="text" id="age" name="age"
                            value={person.age}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit">Add Person</button>
                </form>

                {
                    people.map((person) => {
                        const { id, firstName, age, email } = person;

                        return (
                            <div className="item" key={id}>
                                <h4>{firstName}</h4>
                                <h4>{age}</h4>
                                <p>{email}</p>
                            </div>
                        );
                    })
                }
            </article>
        </>
    );
};

export default ControlledInputs;