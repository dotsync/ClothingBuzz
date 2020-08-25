/* eslint-disable camelcase */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist`));

// GET /reviews/:product_id/list -- returns a list of reviews for a particular product.
// The above list does not get any reported reviews.

// GET /reviews/:product_id/meta -- returns a list of meta data for a particular products review.

// POST /reviews/:product_id -- adds a review for a given product.

// PUT /reviews/helpful/:product_id -- updates a review to show it was helpful.

// PUT /reviews/report/:review_id -- updates a review to show it was reported. This action does not
// delete the review but the review will not be returned in the GET list request.

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
