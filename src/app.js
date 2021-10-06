import './db/models';
import express from 'express';
import http from 'http';
import routes from './routes';

class App {
    constructor() {
        this.server = express();
        this.app = http.createServer(this.server);
        this.init();
    }

    init() {
        console.log('ENV:', process.env.NODE_ENV);

        // main endpoint
        this.server.use('/api/', routes);
    }
}

module.exports = new App();
