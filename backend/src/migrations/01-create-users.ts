import { QueryInterface, DataTypes, Model } from 'sequelize';
import { IUser } from '../interfaces/IUser';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IUser>>('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(256),
        allowNull: false,
      }
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
};