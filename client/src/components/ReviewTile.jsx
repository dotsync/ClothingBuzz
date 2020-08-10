/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';

function ReviewTile(props) {
  const thisProductsReviews = props.reviews;
  // how do i get rid of the line below
  const [productId, setProductId] = useState(2);

  // conditional render
  if (props.reviews.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="reviews">
      {console.log('Props were passed to child componenet', thisProductsReviews)}
      <div className="review-tile">
        <div className="review-top">
          <div className="review-stars" />
          <div>{thisProductsReviews[productId].rating}</div>
          <div className="review-date" />
        </div>
        <div className="review-main">
          <div className="review-summary" /> {thisProductsReviews[productId].summary}
          <br />
          <div className="review-body" /> {thisProductsReviews[productId].body}
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
