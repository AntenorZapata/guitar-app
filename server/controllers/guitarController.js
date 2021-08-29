const rescue = require('express-rescue');
const Guitar = require('../models/guitarModel');

const getAll = rescue(async (req, res, next) => {
  const guitar = await Guitar.find();
  res.status(200).json(guitar);
});

const create = rescue(async (req, res) => {
  const guitar = await Guitar.create(req.body);
  res.status(201).json(guitar);
});

module.exports = {
  getAll,
  create,
};
