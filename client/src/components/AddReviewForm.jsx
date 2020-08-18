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
import axios from 'axios';
import React, { useState, UseEffect } from 'react';
// Mui imports
import { Grid, Button } from '@material-ui/core';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { decomposeColor } from '@material-ui/core';
import Controls from './controls/Controls.jsx';
import { useForm, Form } from './useForm.jsx';

const regeneratorRuntime = require('regenerator-runtime');

const myRecommendationItems = [
  { id: 'yes', title: 'Yes' },
  { id: 'no', title: 'No' },
];
const myReviewStarRatingItems = [
  { id: '1', title: '1' },
  { id: '2', title: '2' },
  { id: '3', title: '3' },
  { id: '4', title: '4' },
  { id: '5', title: '5' },
];
// Characteristics
const myReviewSizeItems = [
  { id: '1', title: 'a size too small' },
  { id: '2', title: '1/2 size too small' },
  { id: '3', title: 'Perfect' },
  { id: '4', title: '1/2 size too big' },
  { id: '5', title: 'a size too wide' },
];
const myReviewWidthItems = [
  { id: '1', title: 'too narrow' },
  { id: '2', title: 'slightly narrow' },
  { id: '3', title: 'Perfect' },
  { id: '4', title: 'slightly wide' },
  { id: '5', title: 'too wide' },
];
const myReviewComfortItems = [
  { id: '1', title: 'uncomfortable' },
  { id: '2', title: 'slightly uncomfortable' },
  { id: '3', title: 'Ok' },
  { id: '4', title: 'comfortable' },
  { id: '5', title: 'perfect' },
];
const myReviewQualityItems = [
  { id: '1', title: 'poor' },
  { id: '2', title: 'below average' },
  { id: '3', title: 'what i expected' },
  { id: '4', title: 'pretty great' },
  { id: '5', title: 'Perfect' },
];
const myReviewLengthItems = [
  { id: '1', title: 'runs short' },
  { id: '2', title: 'runs slightly short' },
  { id: '3', title: 'Perfect' },
  { id: '4', title: 'runs slightly long' },
  { id: '5', title: 'runs long' },
];
const myReviewFitItems = [
  { id: '1', title: 'runs tight' },
  { id: '2', title: 'runs slightly tight' },
  { id: '3', title: 'Perfect' },
  { id: '4', title: 'runs slightly long' },
  { id: '5', title: 'runs long' },
];

const initialFormValues = {
  body: 'asdgdshfdhhrsesdfgdfkjashfjkdsklgjerigrlkgjsdjgklsdajgkdsjhjkgdsjkgjsdjfkasfjklasjfkasfjdklasfjsaklgf',
  date: '2019-10-25T00:00:00.000Z',
  helpfulness: 1,
  photos: [],
  rating: null,
  recommend: 1,
  response: null,
  review_id: 94567,
  reviewer_name: 'adsaf',
  summary: 'sfsdfhfdgjfg',
  // characteristics: {
  //   myReviewSize: '',
  //   myReviewWidth: '',
  //   myReviewComfort: '',
  //   myReviewQuality: '',
  //   myReviewLength: '',
  //   myReviewFit: '',
  // },
};

function AddReviewForm(props) {
  // console.log('from AddReviewForm component: props.reviews = ', props.reviews);
  // console.log('from AddReviewForm component: initialFormValues = ', initialFormValues);
  const api = 'http://52.26.193.201:3000';

  const [stars, setStars] = React.useState(null);
  const {
    values,
    setValues,
    handleInputChange,
  } = useForm(initialFormValues);
  values.rating = stars;
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
          {/* <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          /> */}
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
          <div className="my-star-rating-form">
            <Box component="fieldset" mb={2} borderColor="transparent">
              <Rating
                name="my-star-rating-form"
                // Initial value to each star component when its made
                value={values.rating}
                onChange={(event, newValue) => {
                  setStars(newValue);
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
          <Button
            variant="contained"
            onClick={() => {
              console.log('ouch u clikc submit review');
              // greenfield api
              const results = [];
              results.push(values);
              axios.post(`${api}/reviews/5`, values);
              // // initial form values for creating a new review
              // // INCOMPLETE
              // async function addMyReview() {
              //   try {
              //     const response = await fetch(`${api}/reviews/5`, {
              //       method: 'POST',
              //       headers: {
              //         'Content-Type': 'application/json;charset=utf-8',
              //       },
              //       body: JSON.stringify(values),
              //     });
              //     const result = await response.json();
              //     // set state if necessary
              //   } catch (err) {
              //     console.log('Error adding review <AddReview />:', err);
              //   }
              // }
              // addMyReview()
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
}
export default AddReviewForm;

// my example post
// {
//   "body" : "and amazing product and this is what i have to say about it when im saying these things i reflect on how awesome the product wasand amazing product and this is what i have to say about it when im saying these things i reflect on how awesome the product wasand amazing product and this is what i have to say about it when im saying these things i reflect on how awesome the product was",
//   "email": "testers@email@notreal",
//   "photos": [],
//   "rating": "5",
//   "recommend": "1",
//   "review_id": "5",
//   "reviewer_name": "HardCoded",
//   "summary": "Was really good",
//   "characteristics": {
//           "Size": {
//               "id": 14,
//               "value": "2.7143"
//           },
//           "Width": {
//               "id": 15,
//               "value": "2.5714"
//           },
//           "Comfort": {
//               "id": 16,
//               "value": "3.0000"
//           },
//           "Quality": {
//               "id": 17,
//               "value": "2.8571"
//           }
//       }
//   };
