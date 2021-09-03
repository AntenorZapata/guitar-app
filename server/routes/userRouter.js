const express = require('express');

const { getAll, register, login } = require('../controllers/userController');

const router = express.Router();

router.route('/signup').post(register);
router.route('/login').post(login);

router.route('/').get(getAll);

module.exports = router;
