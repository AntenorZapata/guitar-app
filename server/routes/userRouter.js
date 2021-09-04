const express = require('express');

const {
  getAll, register, login, forgotPassword,
} = require('../controllers/userController');

const router = express.Router();

router.route('/signup').post(register);
router.route('/login').post(login);

router.route('/forgotPassword').post(forgotPassword);
// router.route('/resetPassword/:token').post(forgotPassword);

// router.post('/forgotPassword', authController.forgotPassword);
// router.patch('/resetPassword/:token', authController.resetPassword);

router.route('/').get(getAll);

module.exports = router;
