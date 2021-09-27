const {
  getAllUsers, registerUser, loginUser, forgotPass, resetPass, updateUserService,
} = require('../service/userService');
const User = require('../models/userModel');

const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const sendEmail = require('../utils/email');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

const sendToken = async (user, statusCode, res) => {
  const token = await user.getSignedToken();
  return res.status(statusCode).json({
    success: 'success',
    token,
    name: user.name,
    email:
      user.email,
    _id: user._id,
    role: user.role,
  });
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

const forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const { user, resetToken } = await forgotPass(email);

  if (!user) {
    return next(new AppError('There is no user with email address.', 404));
  }

  const resetUrl = `http://localhost:3000/passwordReset/${resetToken}`;
  const message = `Update your password: ${resetUrl}`;

  try {
    await sendEmail({
      to: user.email,
      subject: 'Your password reset token (valid for 10 min)',
      message,
    });

    return res.status(200).json({
      status: 'success',
      message: 'Token sent to email',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        'There was an error sending the email. Trye again later!',
        500,
      ),
    );
  }
});

const resetPassword = catchAsync(async (req, res, next) => {
  const { token } = req.params;

  const user = await resetPass(token);

  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }
  user.password = req.body.password;

  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  return sendToken(user, 200, res);
});

const updateUser = catchAsync(async (req, res, next) => {
  const user = await updateUserService(req.user, req.body);

  if (!user) {
    return next(new AppError('Your current password is wrong', 401));
  }
  const filteredBody = filterObj(req.body, 'name', 'email');

  await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  req.user.password = req.body.newPassword;
  await req.user.save();
  sendToken(req.user, 200, res);
});

module.exports = {
  getAll,
  register,
  login,
  forgotPassword,
  resetPassword,
  updateUser,
};
