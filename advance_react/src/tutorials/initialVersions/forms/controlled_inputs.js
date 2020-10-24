/*----------------------------------------------------------------------------------------
    GOAL: To showcase how we can use our controlled inputs to add them to a list. 
----------------------------------------------------------------------------------------*/

import React, { useState } from 'react';

/*
JS:
 const input = document.getElementById("myText");
 const inputValue = input.value;

React:
 value, onChange
*/

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();     // Prevents page refreshing once form is submitted.

        if (firstName && email) {
            // {key: variable,... }  if key matches variable, then {key1, key2,...}
            const person = { id: new Date().getTime().toString(), firstName: firstName, email: email };

            // Add person to our list.
            setPeople((people) => {
                return [...people, person];
            });

            // Clear values once submitted.
            setFirstName("");
            setEmail("");
        }
        else {
            console.log("Empty values");
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
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email: </label>
                        <input type="text" id="email" name="email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button type="submit">Add Person</button>
                </form>

                {
                    people.map((person) => {
                        const { id, firstName, email } = person;

                        return (
                            <div className="item" key={id}>
                                <h4>{firstName}</h4>
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
