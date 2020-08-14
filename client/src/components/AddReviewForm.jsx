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
  FormControl, FormControlLabel, Grid, FormLabel, Radio, RadioGroup as MuiRadioGroup,
} from '@material-ui/core';
import { useForm, Form } from './useForm.jsx';
import Controls from './controls/Controls.jsx';

const myRecommendationItems = [
  { id: 'yes', title: 'Yes' },
  { id: 'sdgdsgsdg', title: 'No' },
];
const myReviewStarRatingItems = [
  { id: 1, title: '1' },
  { id: 2, title: '2' },
  { id: 3, title: '3' },
  { id: 4, title: '4' },
  { id: 5, title: '5' },
];

const initialFormValues = {
  id: 0,
  myReviewNickName: '',
  myReviewEmail: '',
  myReviewRecommendation: 'yes',
  myReviewStarRating: '',
  myReviewSummary: '',
  myReviewBody: '',
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
          <Controls.Input
            label="Nickname"
            name="myReviewNickName"
            value={values.myReviewNickName}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Email"
            name="myReviewEmail"
            value={values.myReviewEmail}
            onChange={handleInputChange}
          />
          <Controls.RadioGroup
            label="Do you recommend this product?"
            name="myReviewRecommendation"
            value={values.myReviewRecommendation}
            onChange={handleInputChange}
            items={myRecommendationItems}
          />
        </Grid>

        {/* Right side of form */}
        <Grid item xs={6}>
          {/* overall rating */}
          <Controls.RadioGroup
            label="How do rate this product?"
            name="myReviewRecommendation"
            value={values.myReviewStarRating}
            onChange={handleInputChange}
            items={myReviewStarRatingItems}
          />
          {/* summary */}
          <Controls.Input
            label="Summary"
            name="myReviewSummary"
            value={values.myReviewSummary}
            onChange={handleInputChange}
          />
          {/* body */}
          <Controls.Input
            label="Body"
            name="myReviewBody"
            value={values.myReviewBody}
            onChange={handleInputChange}
          />
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
