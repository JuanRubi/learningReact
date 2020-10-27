/*---------------------------------------------------------------------------------------
    GOAL: To create the reducer function used in index.js file.
----------------------------------------------------------------------------------------*/

// reducer function, always want to return a state.
export const reducer = (state, action) => {
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

    if (action.type === "CLOSE_MODAL") {
        return { ...state, isModalOpen: false };
    }

    if (action.type === "REMOVE_ITEM") {
        const newPeople = state.people.filter((person) => person.id !== action.payload);

        return { ...state, people: newPeople };
    }

    throw new Error("No matching action type");
};
