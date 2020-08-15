import React from 'react';

export default function RatingsSize(props) {
  let totalSize = 0;
  let averageSize = 0;
  const { reviews } = props;
  // get average
  reviews.map((item) => totalSize += item.rating);
  averageSize = totalSize / reviews.length;

  // star values
  const sizeItems = {
    five: 0,
    four: 0,
    three: 0,
    two: 0,
    one: 0,
  };
  // fill starItems
  reviews.map((review) => (review.rating === 1 && sizeItems.one++));

  // totals stars = 100%
  // 100% divided by total stars give me my multiplyer.. floor it.
  const multiplier = Math.ceil(100 / totalSize);
  // current item times multiplier gives racalibrated amount
  // console.log('multiplier', Math.floor(multiplier));

  //   return (
  //     <div>
  //       <u>5 stars</u>
  //       <LinearProgress variant="determinate" value={starItems.five * multiplier} />
  //       <u>4 stars</u>
  //       <LinearProgress variant="determinate" value={starItems.four * multiplier} />
  //       <u>3 stars</u>
  //       <LinearProgress variant="determinate" value={starItems.three * multiplier} />
  //       <u>2 stars</u>
  //       <LinearProgress variant="determinate" value={starItems.two * multiplier} />
  //       <u>1 stars</u>
  //       <LinearProgress variant="determinate" value={starItems.one * multiplier} />
  //     </div>
  //   )
  // }


  return (
    <div>

    </div>
  );
}
