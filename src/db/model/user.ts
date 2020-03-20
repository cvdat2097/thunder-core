import sequelize from 'sequelize';
import connection from '../connection';

export class User extends sequelize.Model {}

User.init(
  {
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'user',
  },
);
