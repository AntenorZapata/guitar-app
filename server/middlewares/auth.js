const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');

const validateToken = catchAsync(async (req, res, next) => {
  const { authorization } = req.headers;

  // if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
  //   token = req.headers.authorization.split(' ')[1];
  // }

  if (!authorization) {
    return next(
      new AppError('Your are not logged in! Please log in to get access!', 401),
    );
  }

  const decoded = await jwt.verify(authorization, process.env.JWT_SECRET);

  const freshUser = await User.findById(decoded.id);

  if (!freshUser) {
    return next(
      new AppError('The user belonging to this token no longer exist', 401),
    );
  }

  req.user = freshUser;
  return next();
});

const restrictTo = (...args) => (req, res, next) => {
  if (!args.includes(req.user.role)) {
    return next(
      new AppError('You do not have permission to perform this action', 403),
    );
  }

  next();
};

module.exports = {
  restrictTo,
  validateToken,
};
