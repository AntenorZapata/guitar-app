const express = require('express');
const { getAll, create, getById } = require('../controllers/guitarController');
const { validateGuitar, validateId } = require('../middlewares/validateGuitar');

const router = express.Router();

router.route('/').get(getAll).post(validateGuitar, create);

router.route('/:id').get(validateId, getById);

module.exports = router;
