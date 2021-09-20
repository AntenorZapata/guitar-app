const Favorite = require('../models/favoritesModel');
const catchAsync = require('../utils/catchAsync');

const create = catchAsync(async (req, res) => {
  // if (!req.body.guitar) req.body.guitar = req.params.id;
  // if (!req.body.user) req.body.user = req.user._id;
  const {
    guitar, user,
  } = req.body;

  const newFavorite = await Favorite.create(req.body);

  // const fav = await createFavorite(body);
  res.status(200).json({
    status: 'success',
    newFavorite,
  });
});

const getAll = async (req, res) => {
  const resp = await Favorite.find();
  return res.status(200).json(resp);
};

module.exports = {
  create,
  getAll,
};
