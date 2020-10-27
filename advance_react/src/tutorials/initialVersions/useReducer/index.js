/*---------------------------------------------------------------------------------------
    GOAL: To show the basics of setting and using the useReducer hook in React.
----------------------------------------------------------------------------------------*/

import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function, always want to return a state.
const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const newPeople = [...state.people, action.payload];

        return {
            // Copy all previous values and change the ones you want.
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: "Item Added"
        };
    }

    if (action.type === "NO_VALUE") {
        return { ...state, isModalOpen: true, modalContent: "Please enter a value." };
    }

    throw new Error("No matching action type");
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