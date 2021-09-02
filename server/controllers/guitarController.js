const rescue = require('express-rescue');
// const Guitar = require('../models/guitarModel');
const { getAllGuitars, createGuitar, getGuitarById } = require('../services/guitarService');

const getAll = rescue(async (req, res) => {
  const guitar = await getAllGuitars();
  res.status(200).json(guitar);
});

const create = rescue(async (req, res) => {
  const guitar = await createGuitar(req.body);
  res.status(201).json(guitar);
});

const getById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const guitar = await getGuitarById(id);
  if (!guitar) {
    const err = new Error('No guitar found with that ID');
    err.status = 404;
    return next(err);
  }
  return res.status(200).json(guitar);
});

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, _next) => res.status(err.status).json({ error: `${err.message}` });

module.exports = {
  getAll,
  create,
  getById,
  errorHandler,
};
