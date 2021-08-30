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

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const guitar = await getGuitarById(id);
  return res.status(200).json(guitar);
});

module.exports = {
  getAll,
  create,
  getById,
};
