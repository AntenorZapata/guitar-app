const express = require('express');
const cors = require('cors');
const guitarRouter = require('./routes/guitarRoutes');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/guitars', guitarRouter);
app.use('/api/v1/users', userRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  res.status(err.status).json({ error: `${err.message}` });
});

module.exports = app;
