import logger from '@/util/logger';

export default (error: any, req: any, res: any, next: any) => {
  logger.error(error);
  res.send('Error: ', error);
};
