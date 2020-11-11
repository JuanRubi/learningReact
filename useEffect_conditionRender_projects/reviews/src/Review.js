/*----------------------------------------------------------------------------------------
    GOAL: To display user review.
----------------------------------------------------------------------------------------*/

import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    // Pass in index to display different person as index changes.
    const { name, job, image, text } = people[index];

    return (
        <article className="review">
            <div className="img_container">
                <img src={image} alt={name} className="person_img" />
                <span className="quote_icon">
                    <FaQuoteRight />
                </span>
            </div>

            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>

            <div className="button_contatiner">
                <button className="prev_btn">
                    <FaChevronLeft />
                </button>
                <button className="next_btn">
                    <FaChevronRight />
                </button>
                <button className="random_btn">Random</button>
            </div>
        </article>
    );
};

export default Review;
