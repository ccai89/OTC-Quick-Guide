const express = require('express');
const app = express();
const path = require('path');
const Controller = require('./Controller');

const PORT = 3000;

app.use(express.json());

// allowing pages to show statically
// app.get(express.static('client'));

app.get('/', (req, res) => {
  console.log("server - root");
  return res.status(200).sendFile(path.resolve(__dirname + './index.html'));
});

app.get('/allergies', Controller.getAllMeds, (req,res) => {
  console.log("retrieved medications",res.locals.medications);
  return res.status(200).json(res.locals.medications);
});

app.use('*', (req,res) => {
  console.log("not found");
  return res.status(404).sendFile(path.resolve('./client/404.html'));
});

app.listen(PORT); //listens on port 3000 -> http://localhost:3000/