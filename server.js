const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv/config');

const app = express();

mongoose.connect(process.env.DB_CONNECTION, { dbName: 'Pets' }, () => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});
