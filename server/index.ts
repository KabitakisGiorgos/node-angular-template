import * as express from 'express';
import *as path from 'path';

const app: express.Application = express();
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.use(express.static(__dirname + '/../public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public', 'index.html'));
});

app.listen(3000, () => {
    console.log('Example app2  listening on port 3000!');
});

// "start": "ts-node-dev --respawn --transpileOnly ./index.ts"