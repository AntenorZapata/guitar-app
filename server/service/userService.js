const crypto = require('crypto');
const User = require('../models/userModel');
const AppError = require('../utils/appError');

const registerUser = async (body) => {
  const user = await User.create(body);
  return user;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select('+password');
  if (!user) return false;
  const correct = await user.correctPassword(password, user.password);

  return {
    user,
    correct,
  };
};

const forgotPass = async (email) => {
  const user = await User.findOne({ email });

  if (user) {
    const resetToken = user.getResetPasswordToken();
    await user.save();
    return { user, resetToken };
  }
  return false;
};

const resetPass = async (token) => {
  const hashedToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  return user;
};

const updateUserService = async (user, body) => {
  const { currPassword } = body;
  const userCurr = await User.findById(user.id).select('+password');
  const checkPass = await user.correctPassword(currPassword, userCurr.password);
  return checkPass;
};

module.exports = {
  registerUser,
  loginUser,
  forgotPass,
  resetPass,
  updateUserService,
};
