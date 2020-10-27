/*---------------------------------------------------------------------------------------
    GOAL: To show the basics of setting and using the useReducer hook in React.
----------------------------------------------------------------------------------------*/

import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer funciton.
import { reducer } from './reducer';

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
            const newItem = { id: new Date().getTime().toString(), name };
            // Dispatching our action. 
            dispatch({ type: "ADD_ITEM", payload: newItem });   // Pass in object with property 'type'.

            // Set value back to empty.
            setName("");
        }
        else {
            dispatch({ type: "NO_VALUE" });
        }
    };

    const closeModal = () => {
        dispatch({ type: "CLOSE_MODAL" });
    };

    return (
        <>
            <h2>useReducer</h2>
            {state.isModalOpen &&
                <Modal closeModal={closeModal} modalContent={state.modalContent} />}
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
                    <div key={person.id} className="item">
                        <h4>{person.name}</h4>
                        <button
                            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: person.id })}>Remove
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default Index;