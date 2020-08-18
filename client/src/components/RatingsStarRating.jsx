import React, { useState, useEffect } from 'react';

import {
  Box, Typography, CircularProgress,
} from '@material-ui/core/';
import CheckIcon from '@material-ui/icons/Check';
import Rating from '@material-ui/lab/Rating';

export default function RatingsStarRating(props) {
  const [averageStars, setAverageStars] = React.useState(0);
  console.log('Meta data passed to RatingsStarRating: .ratings: ', props.productsMetaData.ratings);

  const myAverageRating = (ratingsObject) => {
    /** Justification: Adds all ratings for a given product up and returns an average
     * Input: an object
     * Output: a number, which is the average of all the other numbers added together
     * Visualization: {ratings: {1: 7, 3: 1, 4: 2, 5: 7}}
     * Explanation: Takes in an object and adds all the values
           together and divides them by the length of the keys
     * Approximation: below */
    // psuedocode
    // create a result
    const summed = Object.keys(ratingsObject).reduce((sum, key) => sum + ratingsObject[key], 0);
    // divide the sum by the length
    const avged = summed / Object.keys(ratingsObject).length;
    return avged;
  };

  return (
    <div className="overall-star-rating">
      <Box component="fieldset" mb={2} borderColor="transparent">
        <Typography variant="h3">
          {
            myAverageRating(props.productsMetaData.ratings) || <CircularProgress />
          }
        </Typography>
        <Rating
          name="overall-star-rating"
          value={myAverageRating(props.productsMetaData.ratings)}
          precision={0.25}
          onChange={(event, newValue) => {
            setAverageStars(myAverageRating(props.productsMetaData.ratings));
          }}
        />
      </Box>
    </div>
  );
}
