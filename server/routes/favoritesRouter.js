const express = require('express');
const { create, getAll, deleteReview } = require('../controllers/favoritesController');

const { validateToken } = require('../middlewares/auth');

const { validateId } = require('../middlewares/validateGuitar');

const router = express.Router({ mergeParams: true });

router.route('/').get(getAll).post(validateToken, create);

// router.route('/:id').delete(validateToken, validateId, deleteReview);

module.exports = router;
