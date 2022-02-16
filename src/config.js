const path = require('path');
const dotenv = require('dotenv');


const env = dotenv.config({
  path: path.resolve(__dirname, '../', '.env'),
}).parsed;

const config = {
  ...env,
  PORT: env.PORT || 3001,
  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = Object.freeze(config);
