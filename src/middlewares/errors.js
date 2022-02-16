const createError = require('http-errors');
const config = require('@root/config');


/**
 * 404 Page Not Found Handler
 */
const pageNotFound = (req, res, next) => next(createError(404, 'Resource not found.'));


/**
 * Main Error Handler
 */
const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Unknown error.';

  const error = {
    status,
    message,
  };

  if (config.NODE_ENV === 'development') {
    error.originalError = err.error || null;
  }

  return res.status(status).json({
    message: 'Core API Error',
    payload: null,
    error,
  });
};


module.exports = [
  pageNotFound,
  errorHandler,
];
