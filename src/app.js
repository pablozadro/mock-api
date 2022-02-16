const express = require('express');
const logger = require('morgan');

const corsMiddleware = require('@middlewares/cors');
const errorsMiddleware = require('@middlewares/errors');
const delayMiddleware = require('@middlewares/delay');
const landingRouter = require('@apps/landing/router');
const usersRouter = require('@apps/users/router');


/**
 * App
 */

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


/**
 * Middlewares & Routers
 */

app.use('/api/v1', corsMiddleware);
app.use('/api/v1', delayMiddleware);
app.use('/api/v1', landingRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1', errorsMiddleware);


module.exports = app;
