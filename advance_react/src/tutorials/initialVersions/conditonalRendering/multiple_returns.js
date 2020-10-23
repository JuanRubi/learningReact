/*----------------------------------------------------------------------------------------
    GOAL: To showcase conditional rendering. Displaying different components based
          on conditions.
----------------------------------------------------------------------------------------*/

import React, { useState, useEffect } from 'react';

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
    const [isloading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState("default user");

    useEffect(() => {
        fetch(url)
            .then((resp) => {
                // Checking if user exists 404 error.
                if (resp.status >= 200 && resp.status <= 299) {
                    return resp.json();     // Return if so.
                }
                else {
                    setIsLoading(false);    // Change values and throw error if not.
                    setIsError(true);
                    throw new Error(resp.statusText);
                }
            })
            .then((user) => {
                const { login } = user;
                setUser(login);
                setIsLoading(false);   // Loading is set to false once data is recieved.
            })
            .catch(error => console.log(error));    // Only catches network errors.
    }, []);

    // Displayed if isLoading is true.
    if (isloading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    }

    // Displayed if isError is true.
    if (isError) {
        return (
            <>
                <h1>Error...</h1>
            </>
        );
    }

    // Default component that is displayed.
    return (
        <>
            <h1>{user}</h1>
        </>
    );
};

export default MultipleReturns;