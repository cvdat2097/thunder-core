import express from 'express';
import logger from './logger';
const app = express();

logger.log('Running in', process.env.NODE_ENV);

app.use('/', (req, res) => {
  res.send('Hi, Im thunder-core!');
  const x = 3;
  switch (x) {
    case 3:
      return 2;
  }
});

app.listen(process.env.PORT, () => {
  logger.log(`[PORT:${process.env.PORT}] Server started successfully!`);
});
