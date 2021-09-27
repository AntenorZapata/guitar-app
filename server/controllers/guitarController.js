const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const Guitar = require('../models/guitarModel');
const catchAsync = require('../utils/catchAsync');
const {
  getAllGuitars,
  createGuitar,
  getGuitarById,
  updateGuitar,
  removeGuitar,
} = require('../service/guitarService');

const aliasTopGuitars = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage, price';
  // req.query.fields = 'model, price, ratingsAverage, summary';
  next();
};

const aliasTopRare = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'year';
  // req.query.fields = 'model, price, ratingsAverage, summary';
  next();
};

const aliasTopFender = (req, res, next) => {
  // req.query.limit = '5';
  // req.query.brand = 'fender';
  req.query.limit = '5';
  req.query.sort = 'likeCount';
  // req.query.fields = 'brand, price';
  next();
};

const getAll = catchAsync(async (req, res) => {
  // const guitar = await getAllGuitars();
  const features = new APIFeatures(Guitar.find(), req.query)
    .filter()
    .sort()
    .paginate();

  const allGuitars = await features.query;

  // const guitars = await getAllGuitars();
  return res.status(200).json({ status: 'success', result: allGuitars });
});

const create = catchAsync(async (req, res) => {
  const guitar = await createGuitar(req.body);
  return res.status(201).json({ status: 'success', guitar });
});

const getById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const guitar = await getGuitarById(id);
  if (!guitar) {
    return next(new AppError('No guitar found with that ID', 404));
  }
  return res.status(200).json({ status: 'success', guitar });
});

const update = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const guitar = await updateGuitar(id, req.body);

  if (!guitar) {
    return next(new AppError('No guitar found with that ID', 404));
  }

  return res.status(200).json({ status: 'success', guitar });
});

const remove = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const guitar = await removeGuitar(id);

  if (!guitar) {
    return next(new AppError('No guitar found with that ID', 404));
  }

  return res.status(204).json({
    status: 'success',
    data: null,
  });
});

const errorHandler = (err, req, res, _next) => res.status(err.status).json({ error: `${err.message}` });

module.exports = {
  getAll,
  create,
  getById,
  errorHandler,
  update,
  remove,
  aliasTopGuitars,
  aliasTopFender,
  aliasTopRare,
};
