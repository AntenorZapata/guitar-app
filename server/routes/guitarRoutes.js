const express = require('express');
const {
  getAll,
  create,
  getById,
  update,
  remove,
} = require('../controllers/guitarController');
const { validateGuitar, validateId } = require('../middlewares/validateGuitar');
const { validateToken, restrictTo } = require('../middlewares/auth');

const router = express.Router();

router.route('/').get(getAll).post(validateToken, restrictTo('admin'), validateGuitar, create);

router.route('/:id')
  .get(validateId, getById)
  .patch(validateId, update)
  .delete(restrictTo('admin'), validateId, remove);

module.exports = router;
