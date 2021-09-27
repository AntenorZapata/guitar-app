const express = require('express');

const favoritesRouter = require('./favoritesRouter');
const reviewRouter = require('./reviewRouter');
const {
  getAll, register, login, forgotPassword,
  resetPassword, updateUser,
} = require('../controllers/userController');

const {
  validateUser,
  validateUserData,
  validateToken,
  validateUserUpdate,
} = require('../middlewares/auth');

const router = express.Router();

router.route('/signup').post(
  validateUserData,
  validateUser,
  register,
);

router.use('/:email/favorites', favoritesRouter);
router.use('/:email/reviews', reviewRouter);

router.route('/login').post(login);

router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:token').post(resetPassword);

router.patch('/updateUser', validateToken, validateUserUpdate, updateUser);

// router.post('/forgotPassword', authController.forgotPassword);
// router.patch('/resetPassword/:token', authController.resetPassword);

router.route('/').get(getAll);

module.exports = router;
