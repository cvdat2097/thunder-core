import sequelize from 'sequelize';
import connection from '../connection';

export class Screen extends sequelize.Model {
  id: any;
}

Screen.init(
  {
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    path: {
      type: sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: sequelize.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'screen',
  },
);
