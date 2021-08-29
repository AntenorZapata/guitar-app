const express = require('express');
const { getAll, create } = require('../controllers/guitarController');
const validateGuitar = require('../middlewares/validateGuitar');

const router = express.Router();

router.route('/').get(getAll).post(validateGuitar, create);


module.exports = router;
