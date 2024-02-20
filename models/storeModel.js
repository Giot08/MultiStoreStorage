import db from '../controller/dbController.js';
import { DataTypes } from 'sequelize';

const Store = db.define('store', {
  id: {
    type: DataTypes.INTEGER(),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  country_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manager_email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  domain: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  store_email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  province: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  province_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zip: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

export default Store;
