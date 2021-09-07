const express = require('express');
const { create, getAll } = require('../controllers/reviewController');
// const { validateGuitar, validateId } = require('../middlewares/validateGuitar');
// const { validateToken } = require('../middlewares/auth');

const router = express.Router();
// Adicionar validateToken, restrictTo user = criar esse middleware
router.route('/').get(getAll).post(create);

// router.route('/:id')
//   .get(validateId, getById)
//   .patch(validateId, update)
//   .delete(validateId, remove);

module.exports = router;
