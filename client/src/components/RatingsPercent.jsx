import React from 'react';

export default function RatingsPercent(props) {
  let productRecommended;
  props.productsMetaData.recommended
    ? productRecommended = props.productsMetaData.recommended
    : console.log('recommended is likely undefined... waiting to assign meta recommended');

    // recommended:
    // 0: 8
    // 1: 9

  return (
    <div>
{console.log('rec', productRecommended)}
    </div>
  );
}
