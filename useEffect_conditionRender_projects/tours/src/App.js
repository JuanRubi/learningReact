/*----------------------------------------------------------------------------------------
    GOAL: To showcase how we can use our controlled inputs to add them to a list.
----------------------------------------------------------------------------------------*/

import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './App.css';

const url = "https://course-api.netlify.app/api/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // Function to remove a tour from list.
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    // Catching network errors.
    try {
      const response = await fetch(url);
      const tours = await response.json();

      setLoading(false);
      setTours(tours);
    }
    catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // Displayed if loading page.
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // Displayed if no tours are left.
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="show_tours" onClick={() => fetchTours()}>Show Tours</button>
        </div>
      </main>
    )
  }

  // Default component displayed.
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
