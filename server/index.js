const express = require("express");

const app = express();
let http = require('http').Server(app);
const path = require('path');

app.use(express.static(__dirname + '/../public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public', 'index.html'));
});

http.listen(4000, () => {
  console.log('started on port 4000');
});
