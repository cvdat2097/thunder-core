// eslint-disable-next-line no-unused-vars
import { Sequelize, Dialect } from 'sequelize';
import logger from '@/util/logger';

const connect = () => {
  const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USERNAME as string,
    process.env.DB_PASSWORD as string,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT as Dialect,
      define: {
        paranoid: true,
      },
    },
  );
  return sequelize;
};

import User from './model/user';
const initModels = (sequelize: any) => {
  return {
    User: User(sequelize),
  };
};

const testConnection = async (sequelize: any) => {
  try {
    await sequelize.authenticate();
    logger.log('Connected to DB');
  } catch (exc) {
    logger.error('Can not connect to DB', exc);
  }
};

logger.log('Connecting to DB...');
const sequelize = connect();
const models = initModels(sequelize);
testConnection(sequelize);
sequelize.sync({ force: true });

export default models;
