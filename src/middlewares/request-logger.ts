import logger from '@/util/logger';

export const requestLogMiddleware = (req: any, res: any, next: any) => {
  logger.log('Got a request');
};
