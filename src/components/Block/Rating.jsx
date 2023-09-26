/* eslint-disable no-unused-vars */
import React from 'react';

const RatingStars = (rating) => {
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
        if (i <= rating.data) {
            stars.push(<i key={i} className="fas fa-star" style={{ color: "#ff8a00" }}></i>);
        } else {
            stars.push(<i key={i} className="fas fa-star" style={{ color: "#ced4da" }}></i>);
        }
    }

    return <div>{stars}</div>;
};

export default RatingStars;