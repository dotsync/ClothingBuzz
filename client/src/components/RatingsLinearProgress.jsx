import React from 'react';
import { LinearProgress } from '@material-ui/core';

export default function RatingsLinearProgress(props) {
  let ratings;
  props.productsMetaData.ratings ? ratings = props.productsMetaData.ratings : console.log('waiting to assign ratings');

  const totalStars = Math.floor(Object.keys(ratings).reduce((sum, key) => sum + ratings[key], 0));
  return (
    <div>
      <u>5 stars</u>
      <LinearProgress variant="determinate" value={(ratings[5] ? (ratings[5] / totalStars) * 100 : 0)} />
      <u>4 stars</u>
      <LinearProgress variant="determinate" value={(ratings[4] ? (ratings[4] / totalStars) * 100 : 0)} />
      <u>3 stars</u>
      <LinearProgress variant="determinate" value={(ratings[3] ? (ratings[3] / totalStars) * 100 : 0)} />
      <u>2 stars</u>
      <LinearProgress variant="determinate" value={(ratings[2] ? (ratings[2] / totalStars) * 100 : 0)} />
      <u>1 stars</u>
      <LinearProgress variant="determinate" value={(ratings[1] ? (ratings[1] / totalStars) * 100 : 0)} />
    </div>
  );
}
