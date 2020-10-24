/*----------------------------------------------------------------------------------------
    GOAL: To showcase how short circuit can be used to toggle items that are
          displayed and the importance of clean up function in useEffect.
----------------------------------------------------------------------------------------*/

import React, { useState, useEffect } from 'react';

const ShowHide = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <h2>Show/Hide</h2>
            <button className="btn" onClick={() => setShow(!show)}>
                Show/Hide
            </button>

            {show && <Item />}
        </>
    )
};

// Toggle item to display.
const Item = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', checkSize);

        // Since toggling we need a cleanup function to erase previous values.
        return () => {
            window.removeEventListener('resize', checkSize);
        }

    }, []);  // [] can't save us this case with memory usuage. NEED cleanup function!!!

    return (
        <div style={{ marginTop: '2rem' }}>
            <h2>Window</h2>
            <h3>Size: {size}px</h3>
        </div>
    )
}

export default ShowHide;
