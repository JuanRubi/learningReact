/*----------------------------------------------------------------------------------------
  Goal: To create a birthday reminder app with the use of useState hook in React.
----------------------------------------------------------------------------------------*/

import React, { useState } from 'react';
import './App.css';
import data from './data';
import List from './list';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <section className="birthdayList">
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>Clear All</button>
    </section>
  );
}

export default App;
