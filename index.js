require('babel-register');

const express = require('express');
const requestLogger = require('./app/middlewares/request-logger');
const cors = require('./app/middlewares/cors');
const bodyParser = require('body-parser');
const errorHandler = require('./app/middlewares/error-handler');
const port = 3000;
const app = express();
const Routes = require('./app/routes');
const winston = require('winston');

app.use(bodyParser.json({ type: 'application/json' }));
app.use(requestLogger);
app.use(cors);
app.use(Routes);
app.use(errorHandler);

app.listen(3000, function () {
    winston.info('Server listening on port: ' + port, {});
});
