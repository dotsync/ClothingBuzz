/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import axios from 'axios';
// material ui
import {
  makeStyles, Grid, Typography, Divider, Paper, Button,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

// Family components
import StarRating from './StarRating.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation: 0,
  },
}));

function ReviewTile(props) {
  const thisProductsReviews = props.reviews;
  const api = 'http://52.26.193.201:3000';
  const [helpfull, setHelpfull] = useState(thisProductsReviews.helpfulness);
  // material ui classes
  const classes = useStyles();

  const handleYes = () => {
    console.log('clicked yes');
    // build result object to put
    const result = { helpfulness: helpfull + 1 };
    console.log('result', result);
    axios.put(`${api}/reviews/helpful/${thisProductsReviews.review_id}`, result, { headers: { 'Content-Type': 'application/json' } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setHelpfull(helpfull + 1);
  };

  const handleReport = () => {
    console.log('clicked report');
  };
  // conditional render
  if (props.reviews.length === 0) {
    return <div>Loading reviews...</div>;
  }
  console.log(props.reviews);
  return (
    <div className={classes.root}>
      <Paper>
        <Grid container>

          {/* Review rating and date grid */}
          {/* {console.log('starssss', thisProductsReviews.ratings)} */}
          {thisProductsReviews.rating < 1
            ? console.log('rating is greater than 1')
            : <Grid item xs={3}><StarRating reviews={props.reviews} /></Grid>}
          {thisProductsReviews.reviewer_name}
          ,
          {thisProductsReviews.date.slice(0, 10)}
        </Grid>

        {/* Review contents grid */}
        <Typography variant="h6" gutterBottom>{thisProductsReviews.summary}</Typography>
        {thisProductsReviews.recommend
          ? (
            <Grid>
              <Typography variant="caption" display="block" gutterBottom>
                <CheckIcon />
                I recommend this product
              </Typography>
            </Grid>
          )
          : <Grid><br /></Grid>}
        {thisProductsReviews.body}
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* Report helpfullness grid */}
        <Grid item xs={7}>
          Helpful?
          {' '}
          {/* TODO: When i click i yes do something */}
          <u>
            <Button onClick={handleYes}>
              yes
            </Button>
          </u>
          {' '}
          (
          {helpfull}
          ) |
          {' '}
          {/* TODO: When i click i report do something */}
          <u>
            <Button onClick={handleReport}>
              report
            </Button>
          </u>
          <Divider variant="middle" />
        </Grid>
      </Paper>
      {/* closing container, and item tags */}

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
export default ReviewTile;
