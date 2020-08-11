/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
// import material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Grid';

import ReviewTile from './ReviewTile.jsx';
import StarRating from './StarRating.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import Footer from './Footer.jsx';
// need this line of code in order to run async funcs
const regeneratorRuntime = require('regenerator-runtime');

// material ui styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

// Main component
function ReviewsList(props) {
  // greenfield api
  const api = 'http://52.26.193.201:3000';
  const [productId, setProductId] = useState(2);
  const [reviews, setReviews] = useState([]);
  // state is not loaded at first
  const [loaded, setLoaded] = useState(false);
  // use material ui styles
  const classes = useStyles();

  // fetch product id
  // useEffect(() => {
  //   async function fetchProductId() {
  //     try {
  //       // setProductId
  //     } catch (err) {
  //       console.log(`fetchProductId ${err}`);
  //     }
  //   }
  //   fetchProductId();
  // }, []);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(`${api}/reviews/${productId}/list`);
        const product = await response.json();
        // console.log(response);
        // console.log('product.results', product.results);
        // update state of reviews
        setReviews(product.results);
        // setLoaded = true so now props can safely render
        setLoaded(true);
      } catch (err) {
        console.log(err);
      }
    }
    // call immediatly
    fetchReviews();
  }, []);
  // should be an array of review objects
  // [{},{},{},{},{}]
  const thisProductsReviews = reviews;
  console.log('thisProductsReviews', thisProductsReviews);
  return (
    <div className={classes.root}>
      <Grid container>
        <h4>RATINGS AND REVIEWS</h4>
      </Grid>

      {/* Left column grid */}
      <Grid container spaceing={10}>
        <Grid item xs={3}>
          <RatingsBreakdown />
        </Grid>

        {/* add a product breakdown component here */}

        {/* Right column grid */}
        <Grid item xs={9}>
          {/* If reviews are ready */}
          {/* DEVELOPER CONSOLE LOGS PRE-MAP*/}
          {console.log(' For development, Refer to these props at thisProductsReviews', thisProductsReviews)}
          {reviews.length > 0
            // eslint-disable-next-line max-len
            ? reviews.map((review) => (
              <Grid
                // Create unique key for each review
                key={review.review_id}
              >
                <ReviewTile
                  // set
                  reviews={review}
                />
                {/* DEVELOPER CONSOLE LOGS IN-MAP*/}
                {console.log(
                  '     review.review_id', review.review_id,
                  '     review.summary', review.summary,
                  '     review.rating', review.rating,
                )}
              </Grid>
            ))
            // else still loading
            : <Paper>Hang tight...</Paper>}
        </Grid>

        {/* Footer grid */}

        {/* closing container, and item tags */}
      </Grid>
    </div>
  );
}

export default ReviewsList;
