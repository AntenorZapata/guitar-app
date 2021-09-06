const express = require('express');
const {
  getAll,
  create,
  getById,
  update,
} = require('../controllers/guitarController');
const { validateGuitar, validateId } = require('../middlewares/validateGuitar');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.route('/').get(getAll).post(validateGuitar, create);

router.route('/:id').get(validateId, getById).patch(validateId, update);

module.exports = router;
