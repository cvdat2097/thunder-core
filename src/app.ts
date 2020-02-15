import 'tsconfig-paths/register';
import express from 'express';
import bodyParser from 'body-parser';

import logger from '@/util/logger';
import controller from '@/controller';
import errorHandler from '@/middlewares/error-handler';

const app = express();

logger.log('Running in', process.env.NODE_ENV);

app.use(bodyParser.json());

app.use(controller);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  logger.log(`[PORT:${process.env.PORT}] Server started successfully!`);
});
