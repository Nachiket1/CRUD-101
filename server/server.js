require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const api = require('./routes/mongoApi');

// serves the index.html
app.use(express.static(path.join(__dirname, '../')));
app.use('/task', api);

// Default Error Handler
const defaultErr = {
  log: 'oops... something weird happened.',
  status: 400,
  message: { err: 'An unhandled error occurred' },
};

app.use((req, res, next) => {
  res.status(404).send('Nothing to see here.');
});

// global error handler
app.use((err, req, res, next) => {
  const errorObj = Object.assign(defaultErr, err);
  res.status(errorObj.status).json(errorObj.message);
});

// Setup port and listen...
const { PORT } = process.env;
const localhost = 3000;
app.listen(PORT || localhost, () => {
  console.log('connected');
});
