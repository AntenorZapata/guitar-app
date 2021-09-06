const { createReview } = require('../service/reviewService');

const create = async (req, res) => {
  const review = await createReview(req.body);
  res.status(200).json({
    status: 'success',
    review,
  });
};

module.exports = {
  create,
};
