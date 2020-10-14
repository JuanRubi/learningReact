
import React from 'react';
import ReactDom from 'react-dom';

/*---------------------------
    First React Component       
---------------------------*/

// Need to start with capital to tell React this is a component.
function Greeting() {
  return <h4>My first component. This is HTML that is displayed called JSX here.</h4>;
}

// Displaying our component. root is located in our index.html file 
ReactDom.render(<Greeting />, document.getElementById('root'));  // (<component/>, locationToDisplay)

