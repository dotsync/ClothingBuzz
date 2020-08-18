import React from 'react';
import { LinearProgress } from '@material-ui/core';

export default function RatingsLinearProgress(props) {
  let ratings;
  props.productsMetaData.ratings ? ratings = props.productsMetaData.ratings : console.log('waiting to assign ratings');

  const totalStars = Math.floor(Object.keys(ratings).reduce((sum, key) => sum + ratings[key], 0));
  const numbers = [5, 4, 3, 2, 1];
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number.toString()}>
          <u>
            {number}
            {' '}
            stars
          </u>
          <LinearProgress
            variant="determinate"
            value={(ratings[number] ? (ratings[number] / totalStars) * 100 : 0)}
          />
        </li>
      ))}
    </ul>
  );
}
