import { Sequelize } from 'sequelize';
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "./tools/postgres:/var/lib/postgresql/data",
    port: 3306,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
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
