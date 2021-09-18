const Review = require('../models/reviewModel');
const AppError = require('../utils/appError');

const getAllReviews = async (filter) => {
  const reviews = Review.find(filter);
  return reviews;
};

const createReview = async (review) => {
  const newReview = await Review.create(review);
  return newReview;
};

const deleteRewiewService = async (id) => {
  const review = await Review.findByIdAndDelete(id);
  if (!review) throw new AppError('The review belonging to this id no longer exist', 401);
  return review;
};

module.exports = {
  createReview,
  getAllReviews,
  deleteRewiewService,
};
