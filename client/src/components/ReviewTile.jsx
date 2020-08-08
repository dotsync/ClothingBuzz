/* eslint-disable react/prefer-stateless-function */
import React from 'react';

function ReviewTile() {
  return (
    <div className="reviews">
      <div className="review-tile">
        <div className="review-top">
          {/* {console.log('tile log')} */}
          <div className="review-stars">5</div>
          <div className="review-date">2019-01-01</div>
        </div>
        <div className="review-main">
          <div className="review-summary">This product was great!</div>
          <br />
          <div className="review-body">I really did or did not like this product based on whether it was sustainably sourced.  Then I found out that its made from nothing at all.</div>
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
