/*----------------------------------------------------------------------------------------
    GOAL: To display user review.
----------------------------------------------------------------------------------------*/

import React from 'react';
import Review from './Review';
import './App.css';

// Importing an icon from react-icons library. 
import { FaGithubSquare } from 'react-icons/fa';

function App() {
  return (

    <main>
      <section className="contatiner">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>

        <Review />
      </section>
    </main>

  );
}

export default App;
