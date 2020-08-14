/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
// material ui
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

import StarRating from './StarRating.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

function RatingsBreakdown(props) {
  const [stars, setStars] = React.useState();
  const classes = useStyles();
  let totalStars = 0;
  let averageRating = 0;
  const { reviews } = props;
  console.log('RatingsBreakdowns', props.reviews);
  // get average
  props.reviews.map((item) => totalStars += item.rating);
  averageRating = totalStars / reviews.length;

  console.log('averageRating', totalStars);
  return (
    <div className={classes.root}>
      <div className="my-star-rating">
        <Box component="fieldset" mb={2} borderColor="transparent">
          <Typography variant="h3">
            {
            averageRating ? averageRating : <CircularProgress />
          }
          </Typography>
          <Rating
            name="my-star-rating"
            // Initial value to each star component when its made
            value={averageRating}
            precision={.25}
            onChange={(event, newValue) => {
              setStars(newValue);
            }}
          />
        </Box>
      </div>
      <LinearProgress value={progress} />
    </div>
  );
}

export default RatingsBreakdown;
