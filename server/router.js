const Router = require('express').Router();
const cors = require('cors');
const api = require('./api');
const root = require('./root');
const database = require('./database');

// API
Router.use('/api', cors({ origin: (o, cb) => cb(null, true), credentials: true }), api);

// Root
Router.use('/', root);

module.exports = Router;
