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
    // return res.status(400).json({ message: 'Invalid Data' });
    const err = new Error('Invalid Data');
    err.status = 400;
    err.message = 'Invalid Data';

    next(err);
  }

  return next();
};

module.exports = validateGuitar;
