import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function StarRating(props) {
  const [stars, setStars] = React.useState(2);

  return (
    <div className="star-rating">
      <Box component="fieldset" mb={2} borderColor="transparent">
        <Rating
          name="star-rating"
          value={stars}
          onChange={(event, reRegister) => {
            setStars(reRegister);
          }}
        />
      </Box>
    </div>
  );
}
export default StarRating;
