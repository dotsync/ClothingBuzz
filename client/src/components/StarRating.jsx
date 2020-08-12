import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function StarRating(props) {
  const [stars, setStars] = React.useState(2);

  return (
    <div className="star-rating">
      <Box component="fieldset" mb={2} borderColor="transparent">
        <Rating
          name="star-rating"
          value={stars}
          onChange={(event, newValue) => {
            setStars(newValue);
          }}
        />
      </Box>
    </div>
  );
}
export default StarRating;
