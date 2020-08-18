import React, { useState, useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { decomposeColor } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function RatingsStarRating(props) {
  const [stars, setStars] = React.useState();

  let totalStars = 0;
  let averageRating = 0;
  const { reviews } = props;
  // get average
  reviews.map((item) => totalStars += item.rating);
  averageRating = totalStars / reviews.length;

  return (
    <div className="my-star-rating">
      <Box component="fieldset" mb={2} borderColor="transparent">
        <Typography variant="h3">
          {
            averageRating || <CircularProgress />
          }
        </Typography>
        <Rating
          name="my-star-rating"
          // Initial value to each star component when its made
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
