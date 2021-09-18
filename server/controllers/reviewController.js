const { createReview, getAllReviews, deleteRewiewService } = require('../service/reviewService');
// const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const getAll = catchAsync(async (req, res) => {
  let filter = {};
  if (req.params.id) filter = { guitar: req.params.id };
  const reviews = await getAllReviews(filter);
  return res.status(200).json({ status: 'success', reviews });
});

const create = catchAsync(async (req, res) => {
  if (!req.body.guitar) req.body.guitar = req.params.id;
  if (!req.body.user) req.body.user = req.user._id;
  const {
    rating, review, guitar, user,
  } = req.body;

  const body = {
    rating, review, guitar, user,
  };

  const rev = await createReview(body);
  res.status(200).json({
    status: 'success',
    rev,
  });
});

const deleteReview = catchAsync(async (req, res) => {
  const { id } = req.params;
  const review = await deleteRewiewService(id);
  res.status(200).json({
    status: 'success',
    review,
  });
});

module.exports = {
  create,
  getAll,
  deleteReview,
};
