/*---------------------------------------------------------------------------------------
    GOAL: To show the basics of setting and using the useRef hook in React.
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
