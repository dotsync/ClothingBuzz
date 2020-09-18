/* eslint-disable padded-blocks */
/* eslint-disable no-tabs */
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
import { Grid, Button, Box } from '@material-ui/core';

import Rating from '@material-ui/lab/Rating';
import Controls from './controls/Controls.jsx';
import { useForm, Form } from './useForm.jsx';

const querystring = require('querystring');

const regeneratorRuntime = require('regenerator-runtime');

const myRecommendationItems = [
  { id: 1, title: 'Yes' },
  { id: 0, title: 'No' },
];
// const myReviewStarRatingItems = [
//   { id: '1', title: '1' },
//   { id: '2', title: '2' },
//   { id: '3', title: '3' },
//   { id: '4', title: '4' },
//   { id: '5', title: '5' },
// ];
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
//     Parameter	 Type            	Description
// [x] rating	     int	     Integer (1-5) indicating the review rating
// [x] summary	   text	     Summary text of the review
// [x] body	       text	     Continued or full text of the review
// [x] recommend	 bool	     Value indicating if the reviewer recommends the product
// [x] name	       text	     Username for question asker
// [x] email	     text	     Email address for question asker
// [x] photos	  [text,...]   Array of text urls that link to images to be shown
const initialFormValues = {
  rating: 5,
  name: 'test',
  email: 'report',
  summary: 'something to report and remove',
  body: 'howdy hi how are u godbye',
  recommend: 1,
  photos: [],
  characteristics: {
    14: 5,
    15: 5,
    16: 5,
    17: 5,
  },
};

function AddReviewForm(props) {
  // console.log('from AddReviewForm component: props.reviews = ', props.reviews);
  // console.log('from AddReviewForm component: initialFormValues = ', initialFormValues);

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
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Name"
            name="name"
            value={values.name}
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
          <div className="my-star-rating-form">
            <Box component="fieldset" mb={2} borderColor="transparent">
              <Rating
                name="my-star-rating-form"
                // Initial value to each star component when its made
                value={values.stars}
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
            value={values.characteristics.myReviewSize}
            onChange={handleInputChange}
            items={myReviewSizeItems}
          />
          {/* Characteristics --- width */}
          <Controls.RadioGroup
            label="Width"
            name="myReviewWidth"
            value={values.characteristics.myReviewWidth}
            onChange={handleInputChange}
            items={myReviewWidthItems}
          />
          {/* Characteristics --- comfort */}
          <Controls.RadioGroup
            label="Comfort"
            name="myReviewComfort"
            value={values.characteristics.myReviewComfort}
            onChange={handleInputChange}
            items={myReviewComfortItems}
          />
          {/* Characteristics --- quality */}
          <Controls.RadioGroup
            label="quality"
            name="myReviewQuality"
            value={values.characteristics.myReviewQuality}
            onChange={handleInputChange}
            items={myReviewQualityItems}
          />
          {/* Characteristics --- length */}
          <Controls.RadioGroup
            label="Length"
            name="myReviewLength"
            value={values.characteristics.myReviewLength}
            onChange={handleInputChange}
            items={myReviewLengthItems}
          />
          {/* Characteristics --- fit */}
          <Controls.RadioGroup
            label="Fit"
            name="myReviewFit"
            value={values.characteristics.myReviewFit}
            onChange={handleInputChange}
            items={myReviewFitItems}
          />
          {console.log(values)}
          {' '}
          {/** **************************************** */}
          <Button
            variant="contained"
            onClick={() => {
              const example = {
                rating: 5,
                name: 'dashDASHzinc',
                email: 'testingvalues@startingFormValues.com',
                summary: 'ThisSampleTitleFrom.dotsync',
                body: 'This product was amazing. Axios is promise based ya heard?',
                recommend: 1,
                photos: ['photo'],
                characteristics: {
                  14: 5,
                  15: 5,
                  16: 5,
                  17: 5,
                },
              };
              console.log('ouch u clikc submit review. -- data --', values);
              const postReviewApi = 'http://52.26.193.201:3000/reviews';
              const tempId = 5;
              axios({
                method: 'post',
                url: `${postReviewApi}/${tempId}`,
                product_id: tempId,
                data: example,
              })
                .then((data) => {
                  console.log('data', data);
                  console.log('reviews from post', props.reviews);
                })
                .catch((error) => {
                  if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                  } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                  }
                  console.log(error.config);
                });
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

// const example = {
//   rating: 5,
//   name: 'dashDASHzinc',
//   email: 'testingvalues@startingFormValues.com',
//   summary: 'ThisSampleTitleFrom.dotsync',
//   body: 'This product was amazing. Axios is promise based ya heard?',
//   recommend: 1,
//   photos: ['photo'],
//   characteristics: {
//     14: 5,
//     15: 5,
//     16: 5,
//     17: 5,
//   },
// };
