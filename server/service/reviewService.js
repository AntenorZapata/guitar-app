const Review = require('../models/reviewModel');

const createReview = async (review) => {
  const newReview = await Review.create(review);
  return newReview;
};

module.exports = {
  createReview,
};
