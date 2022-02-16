const createError = require('http-errors');
const DB = require('@root/db');

module.exports = async (req, res, next) => {
  await DB.connect((err, db) => {
    if (err) {
      return next(createError(503, 'Service Unavailable.'));
    }
    return next();
  });
};
