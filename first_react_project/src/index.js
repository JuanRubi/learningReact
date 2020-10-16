
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';   // Full address to CSS file.

// Array of book objects.
const books = [
  {
    id: 1,
    image: 'https://images-na.ssl-images-amazon.com/images/I/41iers+HLSL._SY344_BO1,204,203,200_.jpg',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },

  {
    id: 2,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51WSrYIgO3L._SX329_BO1,204,203,200_.jpg',
    title: 'Dead Men Do Tell Tales',
    author: 'William R. Maples'
  },

  {
    id: 3,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51NoqhM4r9L._SX407_BO1,204,203,200_.jpg',
    title: 'Data Structures and Algorithms',
    author: 'Robert Lafore'
  }
];

// BookList Component. 
function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return (
          // key must be a unique value.
          <Book key={book.id} bookProp={book}></Book>
        );
      })}
    </section>
  );
}

// Book Component.
const Book = (props) => {
  // Object destructuring. Can also do this in parameters section.
  const { image, title, author } = props.bookProp;

  return (
    <article className="book">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}

// Display the book list.
ReactDOM.render(<BookList />, document.getElementById('root'));