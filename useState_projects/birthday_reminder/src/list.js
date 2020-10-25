/*----------------------------------------------------------------------------------------
  Goal: To create the list component containing the people who's birthday it is.
----------------------------------------------------------------------------------------*/

import React from 'react';

const List = (list) => {
    const { people } = list;

    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;

                return (
                    <article key={id} className="person">
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default List;
