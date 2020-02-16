import 'tsconfig-paths/register';
import express from 'express';
import bodyParser from 'body-parser';

import auth from '@/auth';
import logger from '@/util/logger';
import controller from '@/controller';
import errorHandler from '@/middleware/error-handler';
import requestLogger from '@/middleware/request-logger';

const app = express();

logger.log('Running in', process.env.NODE_ENV);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

auth.jwtAuth(app);
app.use(auth.authorization);

app.use(requestLogger);

app.use(controller);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  logger.log(
    `[PORT:${process.env.PORT as string}] Server started successfully!`,
  );
});
