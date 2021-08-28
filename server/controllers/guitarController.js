const Guitar = require('../models/guitarModel');

const getAll = async (req, res) => {
  const guitar = await Guitar.find();
  res.status(200).json(guitar);
};

const create = async (req, res) => {
  const guitar = await Guitar.create(req.body);
  res.status(201).json(guitar);
};

module.exports = {
  getAll,
  create,
};
