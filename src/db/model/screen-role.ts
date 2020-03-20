import sequelize from 'sequelize';
import connection from '../connection';
import { Role } from './role';
import { Screen } from './screen';

export class ScreenRole extends sequelize.Model {}

ScreenRole.init(
  {
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    screenId: {
      type: sequelize.INTEGER,
      unique: 'screen_role',
    },
    roleId: {
      type: sequelize.INTEGER,
      unique: 'screen_role',
    },
  },
  {
    sequelize: connection,
    modelName: 'screen_role',
  },
);

Screen.belongsToMany(Role, {
  through: {
    model: ScreenRole,
  },
  foreignKey: 'screenId',
});

Role.belongsToMany(Screen, {
  through: {
    model: ScreenRole,
  },
  foreignKey: 'roleId',
});
