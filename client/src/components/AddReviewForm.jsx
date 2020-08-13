/* eslint-disable no-console */
/* eslint-disable max-len */
/** Justification: Creates a form with these **required** specification fields below.
 * **Specifications**
        * Nickname: input field
        * Email: input field
        * Do you recomend this product?: (yes/no radio buttons)
        * Over all rating: (5 star radio buttons)
        * Add photos(low priority)
        * Characterisitics(an array of 5 radio buttons representing a 1-5 score for the below catagories)
 * Characteristics
 * ****************---1---*****************---2---********************---3---***************---4---*****************---5**************
 * ****SIZE----a size too small--------1/2 size too small-------------Perfect
 *
 * ****WIDTH------Too narrow-----------Slightly Narrow----------------Perfect--------------Slightly wide-------------Too wide
 *
 * ****COMFORT---Uncomfortable------Slightly uncomfortable--------------Ok-----------------Comfortable---------------Perfect
 *
 * ****QUALITY------Poor---------------Below average---------------What i expected---------Pretty great--------------Perfect
 *
 * ****LENGTH----Runs Short---------Runs slightly short---------------Perfect-----------Runs slightly long-----------Runs long
 *
 * ****FIT-------Runs tight----------Runs slightly tight--------------Perfect-----------Runs slightly long-----------Runs long
 * ***********************************************************************************************************************************
 */

import React, { useState, UseEffect } from 'react';
// Mui imports
import { Grid, TextField, makeStyles } from '@material-ui/core';
import { useForm, Form } from './useForm.jsx';

// custom styles
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

const initialFormValues = {
  id: 0,
  myReviewNickName: '',
  myReviewEmail: '',
  myReviewRecommendation: '',
  myReviewStarRating: '',
  myReviewPhotos: '',
  myReviewSize: '',
  myReviewWidth: '',
  myReviewComfort: '',
  myReviewLength: '',
  myReviewFit: '',
};

function AddReviewForm(props) {
  console.log('from AddReviewForm component: props.reviews = ', props.reviews);

  const classes = useStyles();

  const {
    values,
    setValues,
    handleInputChange,
  } = useForm(initialFormValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Nickname"
            name="myReviewNickName"
            value={values.myReviewNickName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            label="Email"
            name="myReviewEmail"
            value={values.myReviewEmail}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
export default AddReviewForm;
