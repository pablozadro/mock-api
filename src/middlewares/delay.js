const debug = require('debug')('mock-api:middlewares:delay');
const config = require('@root/config');

module.exports = (req, res, next) => {
  if (config.NODE_ENV !== 'development') {
    debug('Delay enabled only on development');
    return next();
  }

  if (!req.query.delay) {
    debug('There is no delay parameter.');
    return next();
  }

  const delay = parseInt(req.query.delay);
  debug(`Delay ${delay}ms`);

  return setTimeout(() => next(), delay);
};
