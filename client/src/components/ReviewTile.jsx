/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
// material ui
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// Family components
import StarRating from './StarRating.jsx';

function ReviewTile(props) {
  const thisProductsReviews = props.reviews;
  // how do i get rid of the line below
  const [productId, setProductId] = useState(2);
  // msterial ui classes

  // conditional render
  if (props.reviews.length === 0) {
    return <div>Loading reviews...</div>;
  }
  return (
    <Grid container>
      {/* console.log('Props were passed to child componenet', thisProductsReviews) */}
      {console.log(' For development, Refer to these props at thisProductsReviews[productId]', thisProductsReviews[productId])}
      <Grid item>

        {/* Review rating and date grid */}
        <Grid container>
          <Grid item>
            {/* {thisProductsReviews[productId].rating} */}
            <StarRating stars={props.stars}/>
            {thisProductsReviews[productId].date}
          </Grid>
        </Grid>

        {/* Review contents grid */}
        <Grid container>
          <Grid item>
            {thisProductsReviews[productId].summary}
          </Grid>
        </Grid>
        <Grid container>
          {thisProductsReviews[productId].recommend
            ? <Grid>I recommend this product</Grid>
            : <Grid>{console.log('product has not been recomended', thisProductsReviews[productId].recommend)}</Grid>}
        </Grid>
        <Grid container>
          <Grid item>
            {thisProductsReviews[productId].body}
          </Grid>
        </Grid>

        {/* Report helpfullness grid */}
        <Grid container>
          <Grid item>
            Helpful? yes (
            {thisProductsReviews[productId].helpfulness}
            ) | report
          </Grid>
        </Grid>
        {/* closing container, and item tags */}
      </Grid>
    </Grid>
  );
}
export default ReviewTile;
