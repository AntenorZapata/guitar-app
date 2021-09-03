const { getAllUsers, registerUser, loginUser } = require('../services/userService');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};

const getAll = async (req, res) => {
  res.status(200).json({ message: 'tudo certo pra pegar todos os usuários' });
};

const register = catchAsync(async (req, res) => {
  const user = await registerUser(req.body);
  return sendToken(user, 201, res);
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const { user, correct } = await loginUser(email, password);

  if (!user || !correct) {
    return next(new AppError('Incorrect email or password', 401));
  }
  return sendToken(user, 200, res);
});

module.exports = {
  getAll,
  register,
  login,
};
