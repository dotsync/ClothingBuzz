import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function RatingsLinearProgress(props) {
  let totalStars = 0;
  let averageRating = 0;
  const { reviews } = props;
  console.log('RatingsBreakdowns', props.reviews);
  // get average
  reviews.map((item) => totalStars += item.rating);
  averageRating = totalStars / reviews.length;

  // star values
  const starItems = {
    five: 0,
    four: 0,
    three: 0,
    two: 0,
    one: 0,
  };
  // fill starItems
  reviews.map((review) => (review.rating === 1 && starItems.one++));
  reviews.map((review) => (review.rating === 2 && starItems.two++));
  reviews.map((review) => (review.rating === 3 && starItems.three++));
  reviews.map((review) => (review.rating === 4 && starItems.four++));
  reviews.map((review) => (review.rating === 5 && starItems.five++));

  // totals stars = 100%
  // 100% divided by total stars give me my multiplyer.. floor it.
  const multiplier = Math.ceil(100 / totalStars);
  // current item times multiplier gives racalibrated amount
  // console.log('multiplier', Math.floor(multiplier));

  console.log('amount of stars', starItems);

  return (
    <div>
      <u>5 stars</u>
      <LinearProgress variant="determinate" value={starItems.five * multiplier} />
      <u>4 stars</u>
      <LinearProgress variant="determinate" value={starItems.four * multiplier} />
      <u>3 stars</u>
      <LinearProgress variant="determinate" value={starItems.three * multiplier} />
      <u>2 stars</u>
      <LinearProgress variant="determinate" value={starItems.two * multiplier} />
      <u>1 stars</u>
      <LinearProgress variant="determinate" value={starItems.one * multiplier} />
    </div>
  )
}
