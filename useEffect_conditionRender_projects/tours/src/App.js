/*----------------------------------------------------------------------------------------
    GOAL: To showcase how we can use our controlled inputs to add them to a list.
----------------------------------------------------------------------------------------*/

import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = "https://course-api.netlify.app/api/react-tours-project";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <h2>Tours Project</h2>
  );
}

export default App;
