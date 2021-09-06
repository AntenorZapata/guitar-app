const express = require('express');
const {

  create,

} = require('../controllers/reviewController');
// const { validateGuitar, validateId } = require('../middlewares/validateGuitar');
// const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.route('/').post(create);

// router.route('/:id')
//   .get(validateId, getById)
//   .patch(validateId, update)
//   .delete(validateId, remove);

module.exports = router;
