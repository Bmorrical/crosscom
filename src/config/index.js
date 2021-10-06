require('dotenv').config(); // this is important!

module.exports = {
    targetEnv: process.env.TARGET_ENV || process.env.NODE_ENV,
    maintenanceMode: process.env.MAINTENANCE_MODE || false,
    maintenanceModeMessage: process.env.MAINTENANCE_MODE_MESSAGE || '',
    port: process.env.PORT || 3000,

    // Database
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USER || 'admin',
        password: process.env.DB_PASS || '',
        name: process.env.DB_NAME || 'default',
        tablePrefix: process.env.DB_TABLE_PREFIX || 'ccom_'
    },
};
