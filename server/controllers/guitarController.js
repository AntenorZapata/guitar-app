// const Guitar = require('../models/guitarModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const {
  getAllGuitars,
  createGuitar,
  getGuitarById,
  updateGuitar,
} = require('../services/guitarService');

const getAll = catchAsync(async (req, res) => {
  const guitar = await getAllGuitars();
  res.status(200).json(guitar);
});

const create = catchAsync(async (req, res) => {
  const guitar = await createGuitar(req.body);
  res.status(201).json(guitar);
});

const getById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const guitar = await getGuitarById(id);
  if (!guitar) {
    const err = new Error('No guitar found with that ID');
    err.status = 404;
    return next(err);
  }
  return res.status(200).json(guitar);
});

const update = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const guitar = await updateGuitar(id, req.body);

  if (!guitar) {
    return next(new AppError('No guitar found with that ID', 404));
  }

  return res.status(200).json({ status: 'success', guitar });
});

const errorHandler = (err, req, res, _next) => res.status(err.status).json({ error: `${err.message}` });

module.exports = {
  getAll,
  create,
  getById,
  errorHandler,
  update,
};
