/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
// material ui
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

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
  // how do i get rid of the line below
  const [productId, setProductId] = useState();
  // material ui classes
  const classes = useStyles();

  // conditional render
  if (props.reviews.length === 0) {
    return <div>Loading reviews...</div>;
  }
  return (
    <div className={classes.root}>
      <Paper>
        <Grid container>

          {/* Review rating and date grid */}
          {/* {console.log('starssss', thisProductsReviews.ratings)} */}
          {thisProductsReviews.rating < 1
            ? console.log('rating is greater than 1')
            : <Grid item xs={3}><StarRating reviews={props.reviews}/></Grid>}
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
          <u>yes</u>
          {' '}
          (
          {thisProductsReviews.helpfulness}
          ) |
          {' '}
          {/* TODO: When i click i report do something */}
          <u>report</u>
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
