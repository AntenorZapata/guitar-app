const validateGuitar = (req, res, next) => {
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
    const err = new Error('Invalid Data');
    err.status = 400;
    err.message = 'Invalid Data';

    next(err);
  }
  return next();
};

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
