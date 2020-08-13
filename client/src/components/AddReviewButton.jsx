/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import material ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Grid';
// import componenets
import ReviewTile from './ReviewTile.jsx';
import ReviewsList from './ReviewsList.jsx';
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
    elevation: 1,
  },
}));

// Main component
function AddReview(props) {
  // greenfield api
  const api = 'http://52.26.193.201:3000';
  // use material ui styles
  const classes = useStyles();

  // initial form values for creating a new review

  // useEffect(() => {
  //   const [values, setValues] = useState();
  //   // INCOMPLETE
  //   async function addMyReview() {
  //     try {
  //       const response = await fetch(`${api}/reviews/${productId}`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json;charset=utf-8',
  //         },
  //         body: JSON.stringify(userReview),
  //       });
  //       const result = await response.json();
  //       // set state if necessary
  //     } catch (err) {
  //       console.log('Error adding review <AddReview />:', err);
  //     }
  //   }
  //   console.log('posted a review');
  // }, []);
  console.log('from <AddReview /> reviews:', props.reviews);

  return (
    // Create an object and push that object to the results array
    <Button variant="contained">Add Review</Button>
  );
}

export default AddReview;
