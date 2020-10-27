/*---------------------------------------------------------------------------------------
    GOAL: To show the basics of setting and using the useRef hook in React.
----------------------------------------------------------------------------------------*/

import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
const reducer = (state, action) => {

};

// Initial state.
const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: "Hello World"
};

const Index = () => {
    /*-----------------------------------------------------
    useState Method good for smaller projects.
    -----------------------------------------------------*/
    // const [name, setName] = useState("");
    // const [people, setPeople] = useState(data);
    // const [showModal, setShowModal] = useState(false);

    /*-----------------------------------------------------
        useReducer Method better for larger projects.
    -----------------------------------------------------*/
    const [name, setName] = useState("");
    // Need to pass in reducer function and initial state.
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name) {

        }
        else {

        }
    };

    return (
        <>
            <h2>useReducer</h2>
            {state.isModalOpen && <Modal modalContent={state.modalContent} />}
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <input type="text" value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>

            {state.people.map((person) => {
                return (
                    <div key={person.id}>
                        <h4>{person.name}</h4>
                    </div>
                );
            })}
        </>
    );
};

export default Index;