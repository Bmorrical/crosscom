"use strict";

var _require = require('./index'),
    db = _require.db;

module.exports = {
  database1: {
    username: db.username,
    password: db.password,
    database: db.name,
    host: db.host,
    port: db.port,
    dialect: 'mysql',
    logging: false
  }
};