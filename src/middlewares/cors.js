const debug = require('debug')('mock-api:middlewares:cors');

module.exports = (req, res, next) => {
  debug('CORS headers enabled.');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  return next();
};
