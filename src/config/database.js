const {db} = require('./index');

module.exports = {
    database1: {
        username: db.username,
        password: db.password,
        database: db.name,
        host: db.host,
        port: db.port,
        dialect: 'mysql',
        logging: false
    },
};
