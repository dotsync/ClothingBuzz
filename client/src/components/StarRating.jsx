import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { decomposeColor } from '@material-ui/core';

function StarRating(props) {
  const [stars, setStars] = React.useState(2);
  const rating = props.reviews.rating;
  console.log(typeof rating)
  return (
    <div className="star-rating">
      <Box component="fieldset" mb={2} borderColor="transparent">
        <Rating
          name="star-rating"
          // Initial value to each star component when its made
          value={rating}
          onChange={(event, newValue) => {
            setStars(newValue);
          }}
        />
        {/* {console.log('from <StarRating/> reviews:', props.reviews)} */}
      </Box>
    </div>
  );
}
export default StarRating;
