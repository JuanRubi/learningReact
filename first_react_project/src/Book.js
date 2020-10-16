import React from 'react';

// Book Component.
const Book = (props) => {
    // Object destructuring. Can also do this in parameters section.
    const { image, title, author } = props;

    // EVENTS: attribute, eventHandler.
    const clickHandler = (e) => {
        console.log(e);         // e is the event object which can be accessed from anywhere.
        console.log(e.target);  // Most useful. Tells you what you are clicking on.
        alert('Hello World!');
    };

    // Events can be done by reference or inline.
    return (
        <article className="book" onMouseOver={() => { console.log(title) }}>
            <img src={image} alt="" />
            <h2 onClick={() => console.log(title)}>{title}</h2>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>Reference Ex</button>
        </article>
    );
}

export default Book;
