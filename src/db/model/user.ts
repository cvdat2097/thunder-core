import sequelize from 'sequelize';

class User extends sequelize.Model {}

export default (db: sequelize.Sequelize) => {
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
      sequelize: db,
      modelName: 'user',
    },
  );
};
