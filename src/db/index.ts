// eslint-disable-next-line no-unused-vars
import logger from '@/util/logger';

import connection from './connection';
import { User } from './model/user';
import { Role } from './model/role';
import { UserRole } from './model/user-role';

const testConnection = async (sequelize: any) => {
  try {
    await sequelize.authenticate();
    logger.log('Connected to DB');
  } catch (exc) {
    logger.error('Can not connect to DB', exc);
  }
};

logger.log('Connecting to DB...');
testConnection(connection);
connection.sync({ force: true });

export const models = {
  User,
  Role,
  UserRole,
};
