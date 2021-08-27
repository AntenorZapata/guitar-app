const express = require('express');
const cors = require('cors');
const guitarRoutes = require('./routes/guitarRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/guitars', guitarRoutes);

module.exports = app;
