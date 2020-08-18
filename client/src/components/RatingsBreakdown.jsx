import React, { useState, useEffect } from 'react';
// material ui
import RatingsLinearProgress from './RatingsLinearProgress.jsx';
import RatingsStarRating from './RatingsStarRating.jsx';
import RatingsSize from './RatingsSize.jsx';

function RatingsBreakdown(props) {
  const api = 'http://52.26.193.201:3000';
  const [productId, setProductId] = useState(5);
  const [productsMetaData, setProductsMetaData] = useState();
  // GET meta data
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

  // check to see if meta data has loaded
  if (!productsMetaData) { return (<div>loading meta ratings</div>); }
  console.log(`Product id:${productId} Meta Data:`, productsMetaData);
  return (
    <div>
      <div>
        <RatingsStarRating productsMetaData={productsMetaData} />
      </div>
    </div>
  );
}

export default RatingsBreakdown;
