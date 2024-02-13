import { Sequelize } from 'sequelize';

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
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
