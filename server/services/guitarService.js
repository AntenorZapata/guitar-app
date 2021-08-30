const { ObjectId } = require('mongodb');
const Guitar = require('../models/guitarModel');

const getAllGuitars = async () => {
  const guitar = await Guitar.find();
  return guitar;
};

const createGuitar = async (body) => {
  const res = await Guitar.create(body);
  return res;
};

const getGuitarById = async (id) => {
  const guitar = await Guitar.findById(id);
  return guitar;
};

module.exports = {
  getAllGuitars,
  createGuitar,
  getGuitarById,
};
