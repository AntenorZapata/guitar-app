const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// process.on('uncaughException', (err) => {
//   console.log('UNCAUGHT EXCEPTION: Shuting down');
//   console.log(err.name, err.message);
//   process.exit(1);
// });

dotenv.config({ path: './config.env' });

const db = process.env.DATABASE;
const { PORT } = process.env;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('db connection success');
  });

app.listen(PORT, () => {
  console.log('app rodando na porta 3001');
});

// process.on('unhandledRejection', (err) => {
//   console.log(err.name, err.message);
//   console.log('unhandler rejection Shuting down');
//   server.close(() => {
//     process.exit(1);
//   });
// });
