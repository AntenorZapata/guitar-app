const { getAllUsers, registerUser, loginUser } = require('../services/userService');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const getAll = async (req, res) => {
  res.status(200).json({ message: 'tudo certo pra pegar todos os usuárioes' });
};

const register = async (req, res) => {
  const user = await registerUser(req.body);
  res.status(200).json(user);
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }
};

module.exports = {
  getAll,
  register,
  login,
};
