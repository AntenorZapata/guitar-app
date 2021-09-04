const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const validateGuitar = catchAsync(async (req, res, next) => {
  const values = [
    'brand',
    'model',
    'year',
    'summary',
    'description',
    'player',
    'songs',
    'price',
    'imageCover',
    'images',
    'link',
    'likeCount',
  ];

  if (values.some((field) => !req.body[field])) {
    return next(new AppError('Invalid Data', 400));
  }
  return next();
});

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!id || id.length !== 24) {
    const err = new Error('Invalid Id');
    err.status = 400;
    return next(err);
  }
  return next();
};

module.exports = {
  validateGuitar,
  validateId,
};
