
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';   // Full address to CSS file.

const firstBook = {
  image: "https://images-na.ssl-images-amazon.com/images/I/41iers+HLSL._SY344_BO1,204,203,200_.jpg",
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald'
};

const secondBook = {
  image: "https://images-na.ssl-images-amazon.com/images/I/51WSrYIgO3L._SX329_BO1,204,203,200_.jpg",
  title: 'Dead Men Do Tell Tales',
  author: 'William R. Maples'
};

const thirdBook = {
  image: "https://images-na.ssl-images-amazon.com/images/I/51NoqhM4r9L._SX407_BO1,204,203,200_.jpg",
  title: 'Data Structures and Algorithms',
  author: 'Robert Lafore'
};

// BookList Component. 
function BookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.image}    // Properties that will be passed.
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.image}
        title={secondBook.title}
        author={secondBook.author}
      />

      <Book
        img={thirdBook.image}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  );
}

// Book Component.
const Book = (props) => {
  // Object destructuring. Can also do this in parameters section.
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}

// Display the book list.
ReactDOM.render(<BookList />, document.getElementById('root'));