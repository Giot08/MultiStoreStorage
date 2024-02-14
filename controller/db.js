import { Sequelize } from 'sequelize';

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    // dialectOptions: {
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // },
    define: {
      timestamps: true,
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 15000,
      idle: 10000,
    },
    operatorsAliases: false,
  }
);

export default db;
