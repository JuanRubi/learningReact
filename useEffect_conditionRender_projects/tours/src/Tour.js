/*----------------------------------------------------------------------------------------
    GOAL: To create a component containing each tour.
----------------------------------------------------------------------------------------*/

import React, { useState } from 'react';
import './App.css';

const Tour = ({ id, image, info, price, name, removeTour }) => {
    const [readMore, setReadMore] = useState(false);

    // Displaying main structure of each tour.
    return (
        <article className="single_tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour_info">
                    <h4>{name}</h4>
                    <h4 className="tour_price">${price}</h4>
                </div>
                <p>{readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Show Less" : "Read More"}
                    </button>
                </p>
                <button className="delete_btn" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
            </footer>
        </article>
    );
};

export default Tour;
