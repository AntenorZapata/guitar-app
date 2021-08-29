const express = require('express');
const cors = require('cors');
const guitarRoutes = require('./routes/guitarRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/guitars', guitarRoutes);

app.use((err, req, res, _next) => {
  res.status(err.status).json({ error: `Erro: ${err.message}` });
});

module.exports = app;
