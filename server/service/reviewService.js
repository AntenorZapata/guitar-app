const Review = require('../models/reviewModel');

const getAllReviews = async () => {
  const reviews = Review.find();
  return reviews;
};

const createReview = async (review) => {
  const newReview = await Review.create(review);
  return newReview;
};

module.exports = {
  createReview,
  getAllReviews,
};
