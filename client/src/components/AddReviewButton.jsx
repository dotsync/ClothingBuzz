/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import material ui
import { makeStyles } from '@material-ui/core/styles';
import {
  Modal, Button, Grid, Paper,
} from '@material-ui/core/';
// import componenets
import ReviewTile from './ReviewTile.jsx';
import ReviewsList from './ReviewsList.jsx';
import AddReviewForm from './AddReviewForm.jsx';
// need this line of code in order to run async funcs
const regeneratorRuntime = require('regenerator-runtime');

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// material ui styles
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 800,
    length: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// Main component
function AddReview(props) {
  // greenfield api
  const api = 'http://52.26.193.201:3000';
  // use material ui styles
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add your review!</h2>
      <p>Please fill out all required * fields</p>
      <Paper>
        <AddReviewForm reviews={props.reviews} />
      </Paper>
    </div>
  );
  return (
    // Create an object and push that object to the results array
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add review
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default AddReview;
