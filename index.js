const express = require("express");

const app = express();
let http = require('http').Server(app);
// let io = require('socket.io')(http);
const path = require('path');
//FIXME:here to different file
//FIXME: node modules not uses delete

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});
// io.on('connection', (socket) => {

//   console.log('user connected');


//   socket.on('disconnect', function () {
//     console.log('user disconnected');
//   });

//   socket.on('message', (message) => {
//     console.log("Message Received: " + message);
//     io.emit('message', {
//       type: 'new-message',
//       text: message
//     });
//   });
// });

app.use(express.static(__dirname + '/public'));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

http.listen(4000, () => {
  console.log('started on port 4000');
});
