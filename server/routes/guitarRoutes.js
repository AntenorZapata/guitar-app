const express = require('express');
const {
  getAll,
  create,
  getById,
  update,
  remove,
  aliasTopGuitars,
  aliasTopFender,

} = require('../controllers/guitarController');
const reviewRouter = require('./reviewRouter');
const favoritesRouter = require('./favoritesRouter');
const { validateGuitar, validateId } = require('../middlewares/validateGuitar');
const { validateToken, restrictTo } = require('../middlewares/auth');

const router = express.Router();

router.use('/:id/reviews', reviewRouter);
router.use('/:id/favorites', favoritesRouter);

router
  .route('/top-5-cheap')
  .get(aliasTopGuitars, getAll);

router
  .route('/top-5-fender')
  .get(aliasTopFender, getAll);

router.route('/').get(getAll).post(validateToken, restrictTo('admin'), validateGuitar, create);

router.route('/:id')
  .get(validateId, getById)
  .put(validateToken, restrictTo('admin'), validateId, update)
  .delete(validateToken, restrictTo('admin'), validateId, remove);

module.exports = router;
