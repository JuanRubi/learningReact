/*----------------------------------------------------------------------------------------
    GOAL: To display user review.
----------------------------------------------------------------------------------------*/

import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './App.css';

const Review = () => {
    const [index, setIndex] = useState(0);
    // Pass in index to display different person as index changes.
    const { name, job, image, text } = people[index];

    // Creating array loop around to solve out of bounds issues.
    const checkIndex = (index) => {
        if (index > people.length - 1) {
            return 0;
        }
        if (index < 0) {
            return people.length - 1;
        }

        return index;
    };

    // Accessing next review.
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        });
    };

    // Accessing previous review.
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        });
    };

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

            <div className="button_container">
                <button className="prev_btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next_btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
                <button className="random_btn">Random</button>
            </div>
        </article>
    );
};

export default Review;
