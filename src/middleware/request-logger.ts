import logger from '@/util/logger';

export default (req: any, res: any, next: any) => {
  logger.log('Received request with: ', req.body, req.query, req.params);
  return next();
};
