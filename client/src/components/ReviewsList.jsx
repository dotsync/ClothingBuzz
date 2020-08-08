/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';
// need this line of code in order to run async funcs
const regeneratorRuntime = require("regenerator-runtime");

function ReviewsList() {
  const api = 'http://52.26.193.201:3000';

  const [productId, setProductId] = useState(2);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${api}/reviews/${productId}/list`);
      const reviews = await response.json();
      // console.log(response);
      // console.log('reviews', reviews);
    }
    // call immediatly
    fetchData();
  }, []);

  return (
    <div className="reviews">
      <div className="col-left">
        {/* <StarRating /> */}
      </div>
      <div className="col-right">
        <div className="review-tiles">
          <ReviewTile />
          <ReviewTile />
        </div>
      </div>
    </div>
  );
}

export default ReviewsList;
