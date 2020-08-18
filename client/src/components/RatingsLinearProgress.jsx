import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function RatingsLinearProgress(props) {
  let totalPossibleStars = 0;
  let averageRating = 0;
  const { reviews } = props;
  // get average
  reviews.map((item) => totalPossibleStars += 5);
  averageRating = totalPossibleStars / reviews.length;

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
  const totalPossibleStarsmultiplier = Math.ceil(100 / totalPossibleStars);
  // current item times multiplier gives racalibrated amount
  // console.log('multiplier', Math.floor(multiplier));

  // console.log('amount of stars', totalPossibleStars);

  return (
    <div>
      <u>5 stars</u>
      <LinearProgress variant="determinate" value={starItems.five * totalPossibleStars} />
      <u>4 stars</u>
      <LinearProgress variant="determinate" value={starItems.four * totalPossibleStars} />
      <u>3 stars</u>
      <LinearProgress variant="determinate" value={starItems.three * totalPossibleStars} />
      <u>2 stars</u>
      <LinearProgress variant="determinate" value={starItems.two * totalPossibleStars} />
      <u>1 stars</u>
      <LinearProgress variant="determinate" value={starItems.one * totalPossibleStars} />
    {/* {console.log('added ratings up',

        (starItems.one * totalPossibleStars) +
        (starItems.two * totalPossibleStars) +
        (starItems.three * totalPossibleStars) +
        (starItems.four * totalPossibleStars) +
        (starItems.five * totalPossibleStars)

    )} */}
    </div>
  )
}
