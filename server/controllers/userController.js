const { getAllUsers, createUser } = require('../services/userService');

const getAll = async (req, res) => {
  res.status(200).json({ message: 'tudo certo pra pegar todos os usuárioes' });
};

const create = async (req, res) => {};

module.exports = {
  getAll,
  create,
};
