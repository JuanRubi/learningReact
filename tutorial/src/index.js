
import React from 'react';
import ReactDom from 'react-dom';

/*---------------------------
    First React Component       
---------------------------*/

// Need to start with capital to tell React this is a component.
function Greeting() {

  // Always return JSX.
  return (
    <div>
      <InitialGreeting />
      <h2>My first component. This is HTML that is displayed called JSX here.</h2>
    </div>
  );
}

/*---------------------------------------------------------------------------------------
    return RULES:
      - JSX Rules
      - Can only return a single element. Ex: one <div></div>. No limit on what is inside
        the div.
      - Use div / section / article or Fragment. Don't just stick to div.
      - Use camelCase for html attribute. Ex: onClick instead of onclick
      - Use className instead of class.
      - Close every element. Even the ones that don't have a closing tag in HTML.
      - Use parentheses in return statement to avoid possible issues.
---------------------------------------------------------------------------------------*/

// Creating component to nest inside Greeting component. 
const InitialGreeting = () => {
  return (
    <h1>Juan Rosales</h1>
  );
};

/*---------  Can also create component using arrow functions. -------
const Greeting2 = () => {

  // Alternative return format, but gets much more messy.
  return React.createElement('h2', {}, 'Hello World!');
}

ReactDom.render(<Greeting2 />, document.getElementById('root'));
-------------------------------------------------------------------*/


/*-------------------------------------------
          Displaying React Component
-------------------------------------------*/

// Root is located in our index.html file 
ReactDom.render(<Greeting />, document.getElementById('root'));  // (<component/>, locationToDisplay)

