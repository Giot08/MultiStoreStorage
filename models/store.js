import db from '../controller/db.js';
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
  owner_email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  domain: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  main_email: {
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
    type: DataTypes.INTEGER(),
    allowNull: true,
  },
  province: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  province_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shop_owner: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  zip: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default Store;
