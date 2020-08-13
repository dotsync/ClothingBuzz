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
import {
  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Grid, TextField,
} from '@material-ui/core';
import { useForm, Form } from './useForm.jsx';
import Input from './controls/Input.jsx';

const initialFormValues = {
  id: 0,
  myReviewNickName: '',
  myReviewEmail: '',
  myReviewRecommendation: 'yes',
  myReviewStarRating: '',
  myReviewPhotos: '',
  myReviewSize: '',
  myReviewWidth: '',
  myReviewComfort: '',
  myReviewLength: '',
  myReviewFit: '',
};

function AddReviewForm(props) {
  // console.log('from AddReviewForm component: props.reviews = ', props.reviews);

  const {
    values,
    setValues,
    handleInputChange,
  } = useForm(initialFormValues);

  return (
    <Form>
      <Grid container>
        {/* Left side of form */}
        <Grid item xs={6}>
          <Input
            label="Nickname"
            name="myReviewNickName"
            value={values.myReviewNickName}
            onChange={handleInputChange}
          />
          <Input
            label="Email"
            name="myReviewEmail"
            value={values.myReviewEmail}
            onChange={handleInputChange}
          />
        </Grid>

        {/* Right side of form */}
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Do you recommend this product?</FormLabel>
            <RadioGroup
              row
              name="myReviewRecommendation"
              value={values.myReviewRecommendation}
              onChange={handleInputChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
              <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>
        </Grid>

      </Grid>
      {/* Bottom of form, where the characteristics radio buttons will be */}
      <Grid container>
        <Grid item xs={12}>
          <h3>this is where the Characterisitics go</h3>
        </Grid>
      </Grid>
    </Form>
  );
}
export default AddReviewForm;
