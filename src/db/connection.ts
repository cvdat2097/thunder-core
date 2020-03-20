// eslint-disable-next-line no-unused-vars
import { Sequelize, Dialect } from 'sequelize';

const connection = new Sequelize(
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

export default connection;
