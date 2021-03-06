import sequelize from 'sequelize';
import connection from '../connection';

export class Role extends sequelize.Model {
  id: any;
}

Role.init(
  {
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'role',
  },
);
