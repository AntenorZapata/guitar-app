const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');

const verifyEmail = (email) => {
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return email.match(pattern);
};

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

const validateUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    return res.status(409).json({ message: 'Email already registered' });
  }
  next();
};

const validateUserData = (req, res, next) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({ message: 'Name, email and password are required.' });
  }

  if (!verifyEmail(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: 'Password must have at least 8 characters.' });
  }

  next();
};

const validateUserUpdate = (req, res, next) => {
  const {
    name, email, currPassword, newPassword,
  } = req.body;

  if (!name || !email || !currPassword || !newPassword) {
    return next(
      new AppError('Invalid data for user update', 422),
    );
  }

  if (!verifyEmail(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }

  if (currPassword.length < 8 || newPassword.length < 8) {
    return res.status(400).json({ message: 'Password must have at least 8 characters.' });
  }

  next();
};

module.exports = {
  restrictTo,
  validateToken,
  validateUser,
  validateUserData,
  validateUserUpdate,

};
