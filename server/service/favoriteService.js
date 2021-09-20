const Favorite = require('../models/favoritesModel');

const createFavorite = async (body) => {
  const newFavorite = await Favorite.create(body);
  return newFavorite;
};

const getAllFavorites = async (filter) => {
  const favorites = await Favorite.find(filter);
  return favorites;
};

const removeFavorite = async (id) => {
  const response = await Favorite.findByIdAndDelete(id);
  return response;
};
module.exports = {
  createFavorite,
  getAllFavorites,
  removeFavorite,
};
