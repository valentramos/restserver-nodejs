const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        this.connectionDB();

        this.middlewares();
        this.routes();
    }

    async connectionDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/users'));
    }

    portListen() {
        this.app.listen( this.port, () => {
            console.info('Server running on port:', this.port);
        });
    }

}

module.exports = Server;