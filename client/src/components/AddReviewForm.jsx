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
 * ****SIZE----a size too small--------1/2 size too small-------------Perfect-----------1/2 size too big------------a size too wide
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
import { Grid } from '@material-ui/core';

import { useForm, Form } from './useForm.jsx';
import Controls from './controls/Controls.jsx';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { decomposeColor } from '@material-ui/core';

const myRecommendationItems = [
  { id: 'yes', title: 'Yes' },
  { id: 'no', title: 'No' },
];
const myReviewStarRatingItems = [
  { id: 1, title: '1' },
  { id: '2', title: '2' },
  { id: '3', title: '3' },
  { id: '4', title: '4' },
  { id: '5', title: '5' },
];
// Characteristics
const myReviewSizeItems = [
  { id: 'a size too small', title: 'a size too small' },
  { id: '1/2 size too small', title: '1/2 size too small' },
  { id: 'Perfect', title: 'Perfect' },
  { id: '1/2 size too big', title: '1/2 size too big' },
  { id: 'a size too wide', title: 'a size too wide' },
];
const myReviewWidthItems = [
  { id: 'too narrow', title: 'too narrow' },
  { id: 'slightly narrow', title: 'slightly narrow' },
  { id: 'Perfect', title: 'Perfect' },
  { id: 'slightly wide', title: 'slightly wide' },
  { id: 'too wide', title: 'too wide' },
];
const myReviewComfortItems = [
  { id: 'uncomfortable', title: 'uncomfortable' },
  { id: 'slightly uncomfortable', title: 'slightly uncomfortable' },
  { id: 'Ok', title: 'Ok' },
  { id: 'comfortable', title: 'comfortable' },
  { id: 'Perfect', title: 'perfect' },
];
const myReviewQualityItems = [
  { id: 'Poor', title: 'poor' },
  { id: 'below average', title: 'below average' },
  { id: 'what i expected', title: 'what i expected' },
  { id: 'pretty great', title: 'pretty great' },
  { id: 'Perfect', title: 'Perfect' },
];
const myReviewLengthItems = [
  { id: 'runs short', title: 'runs short' },
  { id: 'runs slightly short', title: 'runs slightly short' },
  { id: 'perfect', title: 'Perfect' },
  { id: 'runs slightly long', title: 'runs slightly long' },
  { id: 'runs long', title: 'runs long' },
];
const myReviewFitItems = [
  { id: 'runs tight', title: 'runs tight' },
  { id: 'runs slightly tight', title: 'runs slightly tight' },
  { id: 'perfect', title: 'Perfect' },
  { id: 'runs slightly long', title: 'runs slightly long' },
  { id: 'runs long', title: 'runs long' },
];

const initialFormValues = {
  review_id: 0,
  reviewer_name: '',
  email: '',
  recommend: null,
  rating: null,
  summary: '',
  body: '',
  photos: [],
  myReviewSize: '',
  myReviewWidth: '',
  myReviewComfort: '',
  myReviewQuality: '',
  myReviewLength: '',
  myReviewFit: '',
};

function AddReviewForm(props) {
  // console.log('from AddReviewForm component: props.reviews = ', props.reviews);
  // console.log('from AddReviewForm component: initialFormValues = ', initialFormValues);

  const [stars, setStars] = React.useState();
  const {
    values,
    setValues,
    handleInputChange,
  } = useForm(initialFormValues);

  return (
    <Form disableScrollLock={false}>
      <Grid container>
        {/* Left side of form */}
        <Grid item xs={6}>
          <Controls.Input
            label="Nickname"
            name="reviewer_name"
            value={values.reviewer_name}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <Controls.RadioGroup
            label="Do you recommend this product?"
            name="recommend"
            value={values.recommend}
            onChange={handleInputChange}
            items={myRecommendationItems}
          />
        </Grid>

        {/* Right side of form */}
        <Grid item xs={6}>
          {/* overall rating */}
          <div className="my-star-rating">
            <Box component="fieldset" mb={2} borderColor="transparent">
              <Rating
                name="my-star-rating"
                // Initial value to each star component when its made
                value={values.rating}
                onChange={(event, newValue) => {
                  setStars(newValue);
                  values.rating = newValue;
                  console.log(values.rating);
                }}
              />
              {/* {console.log('from <StarRating/> reviews:', props.reviews)} */}
            </Box>
          </div>
          {/* summary */}
          <Controls.Input
            label="Summary"
            name="summary"
            value={values.summary}
            onChange={handleInputChange}
          />
          {/* body */}
          <Controls.Input
            multiline
            label="Body"
            name="body"
            value={values.body}
            onChange={handleInputChange}
          />
        </Grid>

      </Grid>
      {/* Bottom of form, where the characteristics radio buttons will be */}
      <Grid container>
        <Grid item xs={12}>
          {/* Characteristics --- size */}
          <Controls.RadioGroup
            label="Size"
            name="myReviewSize"
            value={values.myReviewSize}
            onChange={handleInputChange}
            items={myReviewSizeItems}
          />
          {/* Characteristics --- width */}
          <Controls.RadioGroup
            label="Width"
            name="myReviewWidth"
            value={values.myReviewWidth}
            onChange={handleInputChange}
            items={myReviewWidthItems}
          />
          {/* Characteristics --- comfort */}
          <Controls.RadioGroup
            label="Comfort"
            name="myReviewComfort"
            value={values.myReviewComfort}
            onChange={handleInputChange}
            items={myReviewComfortItems}
          />
          {/* Characteristics --- quality */}
          <Controls.RadioGroup
            label="quality"
            name="myReviewQuality"
            value={values.myReviewQuality}
            onChange={handleInputChange}
            items={myReviewQualityItems}
          />
          {/* Characteristics --- length */}
          <Controls.RadioGroup
            label="Length"
            name="myReviewLength"
            value={values.myReviewLength}
            onChange={handleInputChange}
            items={myReviewLengthItems}
          />
          {/* Characteristics --- fit */}
          <Controls.RadioGroup
            label="Fit"
            name="myReviewFit"
            value={values.myReviewFit}
            onChange={handleInputChange}
            items={myReviewFitItems}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
export default AddReviewForm;
