import 'tsconfig-paths/register';
import express from 'express';
import bodyParser from 'body-parser';

import logger from '@/util/logger';
import controller from '@/controller';
import errorHandler from '@/middlewares/error-handler';
import requestLogger from '@/middlewares/request-logger';

const app = express();

logger.log('Running in', process.env.NODE_ENV);

app.use(bodyParser.json());

app.use(requestLogger);

app.use(controller);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  logger.log(`[PORT:${process.env.PORT}] Server started successfully!`);
});
