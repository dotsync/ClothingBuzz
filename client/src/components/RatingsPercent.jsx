import React from 'react';

export default function RatingsPercent(props) {
  let productRecommended;
  props.productsMetaData.recommended
    ? productRecommended = props.productsMetaData.recommended
    : console.log('recommended is likely undefined... waiting to assign meta recommended');

  const getRecommendationPercent = (recommendations) => {
  // create a total
    let totalVotes = 0;
    // add keys to total if they exist else set value to null
    recommendations[0] ? totalVotes += recommendations[0] : recommendations[0] = null;
    recommendations[1] ? totalVotes += recommendations[1] : recommendations[1] = null;
    // divide the ydoickes votes by the total then times it by 100 if yes votes exist
    // then return the string -> `${percentage}% of people recommend this product.`
    if (recommendations[1] !== null) {
      const avg = Math.floor((recommendations[1] / totalVotes) * 100);
      return `${avg}% of people recommend this product`;
    }
    // else return 0 percent of people recommend because yes votes dont exist
    return '0% of people recommend this product';
  };

  return (
    <div>
      {getRecommendationPercent(productRecommended)}
    </div>
  );
}
