const User = require('../models/userModel');
const AppError = require('../utils/appError');

const registerUser = async (body) => {
  const user = await User.create(body);
  return user;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select('+password');
  const correct = await user.correctPassword(password, user.password);

  return {
    user, correct,
  };
};

module.exports = {
  registerUser,
  loginUser,
};
