var config = require('../../config/config.json');

let enviroment = {
    port: config.express.port,
    ip: config.express.ip,
    mongo: {
        host: config.mongodb.host,
        port: config.mongodb.port,
        options: config.mongodb.options,
        uri: 'mongodb://' + config.mongodb.host + ':' + config.mongodb.port + '/' + config.mongodb.name
    }
};

export {
    enviroment
};