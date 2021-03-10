require('dotenv').config();

module.exports = {
  "development": {
    "username": '',
    "password": '',
    "database": "compitrueno_bd",
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "compitrueno_bd",
    "host": "localhost",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": "compitrueno_bd",
    "host": "localhost",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
