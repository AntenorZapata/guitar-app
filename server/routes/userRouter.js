const express = require('express');

const favoritesRouter = require('./favoritesRouter');
const {
  getAll, register, login, forgotPassword,
  resetPassword,
} = require('../controllers/userController');

const {
  validateUser,
  validateUserData,
} = require('../middlewares/auth');

const router = express.Router();

router.route('/signup').post(
  validateUserData,
  validateUser,
  register,
);

router.use('/:email/favorites', favoritesRouter);

router.route('/login').post(login);

router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:token').post(resetPassword);

// router.post('/forgotPassword', authController.forgotPassword);
// router.patch('/resetPassword/:token', authController.resetPassword);

router.route('/').get(getAll);

module.exports = router;
