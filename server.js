// Imports
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');

require('dotenv').config();

// Connect to DateBase
connectDb();

// Instance of Express
const app = express();

// Connect to CORS
app.use(cors());

// BodyParsers
app.use(express.json());
app.use('/profile', express.static('upload/images'));

// Connecting Routes default way
app.use('/api/flower', require('./routes/flowerRoutes'));

app.listen(process.env.PORT || 3001, () => {
  console.log('Server running on port localhost:3001');
});
