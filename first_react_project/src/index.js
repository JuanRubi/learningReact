
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';   // Full address to CSS file.

// BookList Component. 
function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

// Book Component.
const Book = () => {

  // NOTE: Works even if variable are declared outside the component.
  const title = 'The Great Gatsby';
  const author = 'F. Scott Fitzgerald';
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/41iers+HLSL._SY344_BO1,204,203,200_.jpg" alt=""
      />
      <h2>{/* Item passed in must return a value. */ title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
}

// Display the book list.
ReactDOM.render(<BookList />, document.getElementById('root'));