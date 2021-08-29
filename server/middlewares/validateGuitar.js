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
    return res.status(400).json({ message: 'Invalid Data' });
  }

  return next();
};

module.exports = validateGuitar;
