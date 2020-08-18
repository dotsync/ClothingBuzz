import React from 'react';

export default function RatingsPercent(props) {
  let productRecommended;
  props.productsMetaData.recommended
    ? productRecommended = props.productsMetaData.recommended
    : console.log('recommended is likely undefined... waiting to assign meta recommended');

    // recommended:
    // 0: 8
    // 1: 9

    // create a total
    // add keys to total if they exist else set value to null
    // divide the yes votes by the total then times it by 100 if yes votes exist
    // then return the string -> `${percentage}% of people recommend this product.`
    // else return 0 percent of people recommend because yes votes dont exist

  return (
    <div>
{console.log('rec', productRecommended)}
    </div>
  );
}
