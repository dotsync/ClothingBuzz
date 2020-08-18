import React from 'react';

export default function RatingsCharacteristics(props) {
  let productCharacteristics;
  props.productsMetaData.characteristics
    ? productCharacteristics = props.productsMetaData.characteristics
    : console.log('characteristics is likely undefined... waiting to assign meta ratings');
  console.log('CHARACTERISTICS: ', productCharacteristics);
  const characteristicsArray = [];

  // characteristics: {
  //    Comfort: {id: 16, value: "3.0000"}
  //    Quality: {id: 17, value: "2.8571"}
  //    Size: {id: 14, value: "2.7143"}
  //    Width: {id: 15, value: "2.5714"}
  //  }


  // create an array of values to map over
    // at each characteristic
      // display the value as a percentage out of 100


  return (
    <div>
      hello from RatingsCharacteristics
    </div>
  );
}
