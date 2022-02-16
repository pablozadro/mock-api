const users = require('./data/users');

const getUsers = (req, res, next) => {
  return res.json({
    message: 'users fetched succesfully',
    payload: { users },
    error: null,
  });
};

const getUserByID = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.filter(_user => _user.id === id)[0];
  return res.json({
    message: 'user fetched succesfully',
    payload: { user },
    error: null,
  });
};

module.exports = {
  getUsers,
  getUserByID,
};
