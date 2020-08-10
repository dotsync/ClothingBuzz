/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';

function ReviewTile(props) {
  const thisProductsReviews = props.reviews;

  if (props.reviews.length === 0) {
    console.log('reviews is empty');
  } else {
    console.log(props.reviews[0].summary);
  }

  return (
    <div className="reviews">
      {console.log('Props were passed to child componenet', thisProductsReviews)}
      <div className="review-tile">
        <div className="review-top">
          <div className="review-stars" />
          <div>{console.log(props.reviews)}</div>
          <div className="review-date" />
        </div>
        <div className="review-main">
          <div className="review-summary" />
          <br />
          <div className="review-body" />
        </div>
        <div>
          <br />
          <div className="review-report">Helpful? yes (9) | report</div>
        </div>
      </div>
    </div>
  );
}

export default ReviewTile;
