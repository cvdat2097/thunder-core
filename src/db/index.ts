// eslint-disable-next-line no-unused-vars
import logger from '@/util/logger';

import connection from './connection';
import { User } from './model/user';
import { Role } from './model/role';
import { UserRole } from './model/user-role';
import { Screen } from './model/screen';
import { ScreenRole } from './model/screen-role';

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

const initData = async () => {
  await connection.sync({ force: true });
  const admin = await User.create({
    username: 'admin',
    password: '123',
  });
  const user = await User.create({
    username: 'user',
    password: '123',
  });
  const adminRole = await Role.create({
    name: 'Admin',
  });
  const userRole = await Role.create({
    name: 'User',
  });
  await UserRole.create({
    userId: admin.id,
    roleId: adminRole.id,
  });
  await UserRole.create({
    userId: user.id,
    roleId: userRole.id,
  });

  const sumScreen = await Screen.create({
    path: '/sum',
  });
  await ScreenRole.create({
    screenId: sumScreen.id,
    roleId: adminRole.id,
  });
};
initData();

export const models = {
  User,
  Role,
  UserRole,
  Screen,
  ScreenRole,
};
