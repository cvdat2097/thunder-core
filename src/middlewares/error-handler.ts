import logger from '@/util/logger';

export default (error: any, req: any, res: any, next: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Error', error);
  }
  logger.error(error);
  res.json({
    result: error.toString(),
  });
};
