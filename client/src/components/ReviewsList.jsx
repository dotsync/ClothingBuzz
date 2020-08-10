/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';
// need this line of code in order to run async funcs
const regeneratorRuntime = require("regenerator-runtime");

function ReviewsList(props) {
  // greenfield api
  const api = 'http://52.26.193.201:3000';
  const [productId, setProductId] = useState(2);
  const [reviews, setReviews] = useState([]);
  // state is not loaded at first
  const [loaded, setLoaded] = useState(false);

  // fetch product id
  // useEffect(() => {
  //   async function fetchProductId() {
  //     try {
  //       // setProductId
  //     } catch (err) {
  //       console.log(`fetchProductId ${err}`);
  //     }
  //   }
  //   fetchProductId();
  // }, []);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(`${api}/reviews/${productId}/list`);
        const product = await response.json();
        // console.log(response);
        // console.log('product.results', product.results);
        // update state of reviews
        setReviews(product.results);
        // setLoaded = true so now props can safely render
        setLoaded(true);
      } catch (err) {
        console.log(err);
      }
    }
    // call immediatly
    fetchReviews();
  }, []);

  return (
    <div className="ratings-and-reviews">
      <div className="col-left">
        {/* <StarRating /> */}
      </div>
      <div className="col-right">
        <div className="review-tiles">
          <ReviewTile
            reviews={reviews}
          />
        </div>
      </div>
    </div>
  );
}

export default ReviewsList;
