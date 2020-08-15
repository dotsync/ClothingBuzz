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
import RatingsLinearProgress from './RatingsLinearProgress.jsx';
import RatingsStarRating from './RatingsStarRating.jsx';
import RatingsSize from './RatingsSize.jsx'

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
  return (
    <div>
      <div>
        <RatingsStarRating reviews={props.reviews}/>
      </div>

      <div>
        <RatingsLinearProgress reviews={props.reviews} />
      </div>
      <br />
      <br />
      <div>
        <RatingsSize reviews={props.reviews}/>
      </div>
      <div>
        comfort
      </div>
    </div>
  );
}

export default RatingsBreakdown;
