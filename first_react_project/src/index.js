
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';   // Full address to CSS file.

// Importing other JS files
import { books } from './books';  // {name of what is being exported in other file}
import Book from './Book';  // default export format: can name how you'd like

// BookList Component. 
function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return (
          // key must be a unique value.
          // {...book} spreads all the book properties on props
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  );
}

// Display the book list.
ReactDOM.render(<BookList />, document.getElementById('root'));