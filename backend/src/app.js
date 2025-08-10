const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

app.get('/', (req, res) => {
  res.send('<h1>Backend is running!</h1>');
});

module.exports = app;