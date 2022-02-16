const landing = (req, res, next) => res.json({
  message: 'Welcome to Core-API',
  payload: {},
  error: null,
});


module.exports = {
  landing,
};
