import sequelize from 'sequelize';
import connection from '../connection';
import { Role } from './role';
import { User } from './user';

export class UserRole extends sequelize.Model {}

UserRole.init(
  {
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: sequelize.INTEGER,
      unique: 'user_role',
    },
    roleId: {
      type: sequelize.INTEGER,
      unique: 'user_role',
    },
  },
  {
    sequelize: connection,
    modelName: 'user_role',
  },
);

User.belongsToMany(Role, {
  through: {
    model: UserRole,
  },
  foreignKey: 'userId',
});

Role.belongsToMany(User, {
  through: {
    model: UserRole,
  },
  foreignKey: 'roleId',
});
