import * as winston from 'winston';

import { convertArrayToString } from './datatype-helper';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

export default {
  log: (...messages: Array<any>) =>
    logger.log('info', convertArrayToString(messages)),
  warn: (...message: Array<any>) =>
    logger.log('warn', convertArrayToString(message)),
  error: (...message: Array<any>) =>
    logger.log('error', convertArrayToString(message)),
};
