import React, { useState, useEffect } from 'react';
// material ui
import RatingsLinearProgress from './RatingsLinearProgress.jsx';
import RatingsStarRating from './RatingsStarRating.jsx';
import RatingsSize from './RatingsSize.jsx';

function RatingsBreakdown(props) {
  // GET meta data
  const api = 'http://52.26.193.201:3000';
  const [productId, setProductId] = useState(5);
  const [productsMetaData, setProductsMetaData] = useState({});

  useEffect(() => {
    async function fetchProductsMetaData() {
      try {
        const response = await fetch(`${api}/reviews/${productId}/meta`);
        const product = await response.json();
        setProductsMetaData(product);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProductsMetaData();
  }, []);
  console.log('productsMetaData', productsMetaData);
  return (
    <div>
      <div>
        <RatingsStarRating reviews={props.reviews} />
      </div>

      <div>
        <RatingsLinearProgress reviews={props.reviews} />
      </div>
      <br />
      <br />
      <div>
        <RatingsSize reviews={props.reviews} />
      </div>
      <div>
        comfort
      </div>
    </div>
  );
}

export default RatingsBreakdown;
