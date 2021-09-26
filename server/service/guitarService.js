const Guitar = require('../models/guitarModel');
const catchAsync = require('../utils/catchAsync');

const getAllGuitars = async () => Guitar;

// return guitar;

const createGuitar = async (body) => {
  const res = await Guitar.create(body);
  return res;
};

const getGuitarById = async (id) => {
  const guitar = await Guitar.findById(id);
  return guitar;
};

const updateGuitar = async (id, body) => {
  const guitar = await Guitar.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  return guitar;
};

const removeGuitar = async (id) => {
  const guitar = await Guitar.findByIdAndDelete(id);
  return guitar;
};

module.exports = {
  getAllGuitars,
  createGuitar,
  getGuitarById,
  updateGuitar,
  removeGuitar,
};
