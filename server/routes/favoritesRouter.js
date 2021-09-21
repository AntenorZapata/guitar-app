const express = require('express');
const { create, getAll, deleteFavorite } = require('../controllers/favoritesController');

const { validateToken } = require('../middlewares/auth');

const { validateId } = require('../middlewares/validateGuitar');

const router = express.Router({ mergeParams: true });

router.route('/').get(validateToken, getAll).post(create);

router.route('/:id').delete(validateToken, validateId, deleteFavorite);

module.exports = router;
