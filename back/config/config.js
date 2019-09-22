module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "react-sns",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "react-sns",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "react-sns",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  }
};
