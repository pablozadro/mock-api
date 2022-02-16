#!/usr/bin/env node
require('module-alias/register');
const debug = require('debug')('mock-api:server');
const http = require('http');
const config = require('@root/config');
const app = require('@root/app');


function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) return val;
  if (port >= 0) return port;

  return false;
}


/**
 * App
 */
const port = normalizePort(config.PORT);
app.set('port', port);


/**
 * Server
 */
const server = http.createServer(app);
server.listen(port);

server.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      debug(`Error: ${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      debug(`Error: ${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`listening on ${bind}`);
});
