import React, { useState, useEffect } from 'react';
// import material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Grid';

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
          <Paper className={classes.paper}>BIG NUMBER</Paper>
        </Grid>
        <Grid item xs={4}>
          {/* <StarRating /> */}
        </Grid>
      </Grid>
      {/* Rows of five stars */}
      <Grid container>
        <Grid item>
          5 stars
        </Grid>
        <Grid item>
          bar representing amount of stars given
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          4 stars
        </Grid>
        <Grid item>
          bar representing amount of stars given
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          3 stars
        </Grid>
        <Grid item>
          bar representing amount of stars given
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          2 stars
        </Grid>
        <Grid item>
          bar representing amount of stars given
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          1 stars
        </Grid>
        <Grid item>
          bar representing amount of stars given
        </Grid>
      </Grid>
      {/* closing container, and item tags */}
    </div>
  );
}

export default RatingsBreakdown;
