/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
// material ui
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
  },
}));

function ReviewTile(props) {
  const thisProductsReviews = props.reviews;
  // how do i get rid of the line below
  const [productId, setProductId] = useState(2);
  const [stars, setStars] = React.useState(2);
  // material ui classes
  const classes = useStyles();

  // conditional render
  if (props.reviews.length === 0) {
    return <div>Loading reviews...</div>;
  }
  return (
    <div className={classes.root}>
      <Grid container>

        {/* Review rating and date grid */}
        <Grid container spacing={3}>
          <Grid item xs={3}>
            {/* {thisProductsReviews[productId].rating} */}
            <StarRating stars={stars} />
          </Grid>
          <Grid item>
            {thisProductsReviews.date
              ? <Grid>{thisProductsReviews.date}</Grid>
              : <Grid>{console.log('thisProductsReviews[productId].date', thisProductsReviews.date)}</Grid>}
          </Grid>
        </Grid>

        {/* Review contents grid */}
        <Grid container spaceing={3}>
          <Grid item xs={7}>
            {thisProductsReviews.summary
              ? <Grid>{thisProductsReviews.summary}</Grid>
              : <Grid>{console.log('thisProductsReviews[productId].summary', thisProductsReviews.summary)}</Grid>}
          </Grid>
          <Grid item xs={7}>
            {thisProductsReviews.recommend == 1
              ? <Grid>I recommend this product</Grid>
              : <Grid>{console.log('product has not been recomended', thisProductsReviews.recommend)}</Grid>}
          </Grid>

          <Grid item xs={7}>
            {thisProductsReviews.body}
          </Grid>

          {/* Report helpfullness grid */}
          <Grid item xs={7}>
            Helpful? yes (
            {thisProductsReviews.helpfulness}
            ) | report
          </Grid>
          {/* closing container, and item tags */}
        </Grid>
      </Grid>
    </div>
  );
}
export default ReviewTile;
