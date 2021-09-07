const { createReview, getAllReviews } = require('../service/reviewService');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const getAll = catchAsync(async (req, res) => {
  const reviews = await getAllReviews();
  return res.status(200).json({ status: 'success', reviews });
});

const create = catchAsync(async (req, res) => {
  const review = await createReview(req.body);
  res.status(200).json({
    status: 'success',
    review,
  });
});

module.exports = {
  create,
  getAll,
};
