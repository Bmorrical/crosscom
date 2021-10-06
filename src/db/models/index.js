/* eslint no-use-before-define: 2 */

'use strict';

import {DATABASES} from '../../constants';
import config from '../../config/database';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);

const db = {};
const databases = Object.keys(config);

// Add Databases - Make connections
(function () {
    for (let i = 0; i < databases.length; ++i) {
        const dbName = databases[i];
        const dbPath = config[dbName];

        db[dbName] = new Sequelize(dbPath.database, dbPath.username, dbPath.password, dbPath);
        db[dbName].authenticate().then(() => {
            console.log(`✅ Database ${dbName} connection has been established successfully.`);
        }).catch((err) => {
            console.error(`Unable to connect to the database ${dbName}:`, err);
        });
    }

    fs
        .readdirSync(__dirname)
        .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
        .forEach((file) => {
            const model = require(path.join(__dirname, file));
            if (model && model.dbName) {
                model.initModel(db[model.dbName]);
                db[model.name] = model;
            }
        });

    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
}());

db.Sequelize = Sequelize; // Sequelize pkg
db.sequelize = db[DATABASES.db1]; // default selected database
module.exports = db;
