const express = require('express');
const { getAll, create, getById } = require('../controllers/guitarController');
const { validateGuitar, validateId } = require('../middlewares/validateGuitar');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.route('/').get(getAll).post(validateToken, validateGuitar, create);

router.route('/:id').get(validateId, getById);

module.exports = router;
