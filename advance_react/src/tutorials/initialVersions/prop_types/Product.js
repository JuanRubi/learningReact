/*---------------------------------------------------------------------------------------
    GOAL: To showcase how to use prop types to check for values to see if any values
          are missing and to set default values.
----------------------------------------------------------------------------------------*/

import React from 'react';
import PropTypes from 'prop-types';

// Importing an image.
import defaultImage from '../../../images/book.jpg'

const Product = ({ image, name, price }) => {
    // Use short circuit to allow to set default values in return.
    const url = image && image.url;

    return (
        <article className="product">
            <img src={url || defaultImage} alt={name || "default name"} />
            <h4>{name}</h4>
            <p>${price || 0.00}</p>
        </article>
    );
};

Product.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

/*-------------------------------------------------------------------
    Alternative Method for Setting Default Values (image access issue)
-------------------------------------------------------------------*/
// Product.defaultProps = {
//     image: defaultImage,
//     name: "Default name",
//     price: 0.00
// }

export default Product;