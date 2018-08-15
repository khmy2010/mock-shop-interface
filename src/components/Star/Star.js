import React from 'react';

import './Star.css';

const star = ({ isFilled, processRating }) => {
    const classes = `rating-star ${isFilled ? 'rating-star-rated' : ''}`;
    return (
        <span className={classes} onClick={processRating}>
            &#9733;
        </span>
    );
};

export default star;
