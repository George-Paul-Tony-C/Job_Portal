const connectDB = require('./config/db');
const app = require('./app');
const logger = require('./utils/logger');
require('dotenv').config();


const PORT = process.env.PORT || 8000;

connectDB()``
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`🚀 Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error('MongoDB connection failed !!! ', err);
  });