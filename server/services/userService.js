const User = require('../models/userModel');

const createUser = async (body) => {
  const user = await User.create(body);
  return user;
};

module.exports = {
  createUser,
};
