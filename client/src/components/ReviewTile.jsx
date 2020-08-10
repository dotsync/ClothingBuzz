/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';

// material ui
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 300,
    width: 500,
  },
  control: {
    padding: theme.spacing(2)
  }
}));


function ReviewTile(props) {
  const thisProductsReviews = props.reviews;
  // how do i get rid of the line below
  const [productId, setProductId] = useState(2);
  // msterial ui classes
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  // conditional render
  if (props.reviews.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <Grid className="reviews">
      {/* console.log('Props were passed to child componenet', thisProductsReviews) */}
      <div className="review-tile">
        <Grid className="review-top">
          <div className="review-stars" />
          <div>{thisProductsReviews[productId].rating}</div>
          <div className="review-date" />
        </Grid>
        <Grid className="review-main">
          <div className="review-summary" />
          {thisProductsReviews[productId].summary}
          <br />
          <div className="review-body" />
          {thisProductsReviews[productId].body}
        </Grid>
        <div>
          <br />
          <div className="review-report">Helpful? yes (9) | report</div>
        </div>
      </div>
    </Grid>
  );
}
export default ReviewTile;
