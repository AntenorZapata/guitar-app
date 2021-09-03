const { getAllUsers, createUser } = require('../services/userService');

const getAll = async (req, res) => {
  res.status(200).json({ message: 'tudo certo pra pegar todos os usuárioes' });
};

const create = async (req, res) => {
  const user = await createUser(req.body);
  res.status(200).json(user);
};

// const res = await Guitar.create(body);
// return res;

module.exports = {
  getAll,
  create,
};
