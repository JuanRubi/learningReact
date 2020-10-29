/*---------------------------------------------------------------------------------------
    GOAL: To gather the products data for Product.js file.
----------------------------------------------------------------------------------------*/

import React from 'react';

//React router.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Website Components/Pages.
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';

// Navigation bar.
import Navbar from './Navbar';

const ReactRouterSetup = () => {

    // Wrap all the return in <Router>. In actual project wrap the entire application.
    return (
        <Router>
            {/* exact - makes component/page display only when the url matches exactly
                        preventing multiple pages from displaying at once. */}
            <Route exact path="/" /* / - means domain (home page) */>
                <Home />
            </Route>

            <Route path="/about" /* /name - where name is arbitrary*/>
                <About />
            </Route>

            <Route path="/people" /* /name - where name is arbitrary*/>
                <People />
            </Route>
        </Router>
    );
};

export default ReactRouterSetup;