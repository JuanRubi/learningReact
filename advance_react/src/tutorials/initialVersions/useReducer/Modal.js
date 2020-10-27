/*---------------------------------------------------------------------------------------
    GOAL: To create to modal content to be displayed once an item is submitted.
----------------------------------------------------------------------------------------*/

import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal();
        }, 3000);
    });

    return (
        <>
            <div className="modal">
                <p>{modalContent}</p>
            </div>
        </>
    );
};

export default Modal;
