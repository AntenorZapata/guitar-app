const User = require('../models/userModel');

const registerUser = async (body) => {
  const user = await User.create(body);
  return user;
};

const loginUser = () => {

};

module.exports = {
  registerUser,
  loginUser,
};
