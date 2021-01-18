const express = require('express');
const app = express.Router();
const path = require('path');
const cors = require('cors');
const api = require('./api');
const root = require('./root');
const database = require('./database');

// API
app.use('/api', cors({ origin: (o, cb) => cb(null, true), credentials: true }), api);

// // Root
// Router.use('/', root);

// Serving frontend
app.use(express.static(path.join(__dirname, '..', 'build', 'static')));
app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'build', 'index.html')))

module.exports = app;
