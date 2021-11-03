const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;
app.get(express.static('client'));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname + './index.html'));
});

app.get('*', (req,res) => {
  return res.status(404).sendFile(path.resolve(__dirname + './client/404.html'));
});

app.listen(PORT); //listens on port 3000 -> http://localhost:3000/