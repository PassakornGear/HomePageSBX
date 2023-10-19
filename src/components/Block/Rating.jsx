/* eslint-disable no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const RatingStars = (rating) => {
    return (
        <>
            <Rating  style={{ color: "#ff8a00" }} precision={0.5} size="small" name="read-only" max={5} value={rating.data} readOnly />
        </>
    )
};

export default RatingStars;

// const stars = [];
//     const maxRating = 5;

//     for (let i = 1; i <= maxRating; i++) {
//         if (i <= rating.data) {
//             stars.push(<i key={i} className="fas fa-star" style={{ color: "#ff8a00" }}></i>);
//         } else {
//             stars.push(<i key={i} className="fas fa-star" style={{ color: "#ced4da" }}></i>);
//         }
//     }

//     return <div>{stars}</div>;