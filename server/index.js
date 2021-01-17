const app = require('express')();
const path = require('path');
const bodyParser = require('body-parser');
const debug = require('debug')('wehorse');
const http = require('http').createServer(app);
const expressStaticGzip = require('express-static-gzip');
const { createTerminus } = require('@godaddy/terminus')
const winston = require('winston');
const expressWinston = require('express-winston');

// Logging
app.use(expressWinston.logger({
  transports: [
    new winston.transports.File({ 
      filename: 'logs/error.log',
      level: 'error',
      maxsize: 1024 * 100,
    }),
    new winston.transports.File({ 
      filename: 'logs/combined.log',
      maxsize: 1024 * 100,
    }),
  ],
  format: winston.format.json(),
  meta: true,
  expressFormat: false,
}));

// Static files
app.use('/static', expressStaticGzip(path.resolve(__dirname, '../static')));

// Bodyparser
app.use(bodyParser.json({ limit: '200mb' }));

// Parse JSON
app.use(bodyParser.json({ limit: '200mb' }));

// Router
app.use(require('./router'));

// Start server
http.listen(process.env.PORT || 9999, (err) => {
  if (err) return console.log(err);
  debug(`Starting server on port: ${process.env.PORT || 9999}`);
});

// =================================================================
// HEALTHCHECKS
// =================================================================

const onSignal = () => {
  debug('Starting cleanup');
  // Clean up and save everything
};

const onHealthCheck = async () => {
  // Implement proper healthcheck (Database connection, etc...)
  return true;
};

createTerminus(http, {
  signal: 'SIGINT',
  healthChecks: { '/healthcheck': onHealthCheck },
  onSignal
});
