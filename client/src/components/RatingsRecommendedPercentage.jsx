import React from 'react';

export default function RatingsRecommendedPercentage(props) {
  let productCharacteristics;
  props.productsMetaData.characteristics
    ? productCharacteristics = props.productsMetaData.characteristics
    : console.log('characteristics is likely undefined... waiting to assign meta ratings');
  console.log('CHARACTERISTICS: ', productCharacteristics);
  return (
    <div>
      hello from RatingsRecommendedPercentage component
    </div>
  );
}
