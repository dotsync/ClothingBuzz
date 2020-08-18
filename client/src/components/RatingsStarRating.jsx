import React, { useState, useEffect } from 'react';

import { Grid, Box, Typography, CircularProgress } from '@material-ui/core/';
import CheckIcon from '@material-ui/icons/Check';
import Rating from '@material-ui/lab/Rating';

export default function RatingsStarRating(props) {
  const [stars, setStars] = React.useState();

  console.log('Meta data passed to RatingsStarRating: ', props.productsMetaData);

  let averageRating = 0

  return (
    <div className="overall-star-rating">
      <Box component="fieldset" mb={2} borderColor="transparent">
        <Typography variant="h3">
          {
            averageRating || <CircularProgress />
          }
        </Typography>
        <Rating
          name="overall-star-rating"
          value={averageRating}
          precision={0.25}
          onChange={(event, newValue) => {
            setStars(newValue);
          }}
        />
      </Box>
    </div>
  );
}
