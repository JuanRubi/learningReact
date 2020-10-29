/*---------------------------------------------------------------------------------------
    GOAL: To showcase how react router can be used to create multi-page sites.
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
            <Navbar />

            <Switch /* Only the first path that matches get displayed. */>
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

                {/* /name/:urlParameters - the beginning is up to you '/name/' portion */}
                <Route path="/person/:id" children={<Person />} ></Route>

                <Route path="*" /* * - means it always matches */>
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
};

export default ReactRouterSetup;