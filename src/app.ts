import express from 'express';
import bodyParser from 'body-parser';

import logger from './util/logger';

const app = express();

logger.log('Running in', process.env.NODE_ENV);

app.use(bodyParser.json());

app.use('/', (req, res) => {
  const { a, b } = req.body;
  res.json({
    result: a + b,
  });
});

app.use((error: any, req: any, res: any, next: any) => {
  logger.error(error);
  res.send('Error: ', error);
});

app.listen(process.env.PORT, () => {
  logger.log(`[PORT:${process.env.PORT}] Server started successfully!`);
});
