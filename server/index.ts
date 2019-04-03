import * as express from 'express';
import * as http from 'http';
import * as mongoose from 'mongoose';
import { enviroment } from './config/enviroment';
import expressConfig from './config/express';
import Routes from './routes';
import * as  path from 'path'

mongoose.set('useCreateIndex', true);
if (enviroment.mongo.connect) {//If mongo is selected from the config
    mongoose.connect(enviroment.mongo.uri, enviroment.mongo.options).then((data) => {
        console.info('MongoDB is connected on ' + enviroment.mongo.uri);
    },
        (err) => {
            console.error(err);
        });
}


let app = express();
let server = http.createServer(app);

app.use(express.static(__dirname + '/../public'));
expressConfig(app);
Routes(app);

server.listen(enviroment.port, enviroment.ip, () => {
    console.info('Express server listening on ' + enviroment.port);
});
