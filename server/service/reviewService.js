const Review = require('../models/reviewModel');

const getAllReviews = async (filter) => {
  const reviews = Review.find(filter);
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
