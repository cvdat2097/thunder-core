import sequelize from 'sequelize';
import connection from '../connection';
import * as securityUtil from '@/util/security';

export class User extends sequelize.Model {
  id: any;
  username: any;
  password: any;
}

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

User.beforeCreate(async user => {
  const hashedPassword = securityUtil.getHashedPassword(user.password);
  user.password = hashedPassword;
});
