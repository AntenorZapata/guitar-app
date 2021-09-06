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
  next();
});

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!id || id.length !== 24) {
    return next(new AppError('Invalid Id', 400));
  }
  next();
};

module.exports = {
  validateGuitar,
  validateId,
};
