
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
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

// Book Component.
const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
}

// Book Image Component.
const Image = () => {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/41iers+HLSL._SY344_BO1,204,203,200_.jpg" alt="" />
  );
}

// Book Title Component.
const Title = () => {
  return (
    <h2>The Great Gatsby</h2>
  );
}

// Book Author Component.
const Author = () => {
  return (
    <h4>F. Scott Fitzgerald</h4>
  );
}


ReactDOM.render(<BookList />, document.getElementById('root'));