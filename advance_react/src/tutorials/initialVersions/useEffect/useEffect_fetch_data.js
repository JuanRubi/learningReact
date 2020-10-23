/*----------------------------------------------------------------------------------------
    GOAL: To create a simple project showcasing the useEffect hook in react. The
          project will display GitHub users.
----------------------------------------------------------------------------------------*/

import React, { useState, useEffect } from 'react';

const url = "https://api.github.com/users";



const UseEffectSecondArgument = () => {
    const [users, setUsers] = useState([]);

    // Getting the users using async.
    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);   // Make sure useEffect has [] as dependency else infinite loop.
    };

    useEffect(() => {       // useEffect can't be set to async
        getUsers();
    }, []);

    return (
        <>
            <h3>GitHub Users</h3>

            <ul className="users">
                {users.map((user) => {
                    const { id, login, avatar_url, html_url } = user;

                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>Profile</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default UseEffectSecondArgument;