import React from 'react';
import { LinearProgress } from '@material-ui/core';

export default function RatingsCharacteristics(props) {
  let productCharacteristics;
  props.productsMetaData.characteristics
    ? productCharacteristics = props.productsMetaData.characteristics
    : console.log('characteristics is likely undefined... waiting to assign meta characteristics');

  // create an array of values to map over
  const arrayOfCharacteristics = ['Comfort', 'Quality', 'Size', 'Width'];
  // at each characteristic
  // display the value as a percentage
  return (
    <ul>
      {arrayOfCharacteristics.map((char, i) => (
        <li key={productCharacteristics[char].id}>
          <u>
            {char}
            {': '}
            {productCharacteristics[char].value}
          </u>
          <LinearProgress
            variant="determinate"
            value={(productCharacteristics[char].value / 5) * 100}
          />
        </li>
      ))}
    </ul>
  );
}
