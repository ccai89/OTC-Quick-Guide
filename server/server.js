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

app.get('/allergies', Controller.getAllergiesCI, (req,res) => {
  console.log("retrieved allergy contradictions",res.locals.allergyCI);
  return res.status(200).json(res.locals.allergyCI);
});

app.get('/pain', Controller.getPain , (req,res) => {
  console.log("retreived pain", res.locals.pain);
  return res.status(200).json(res.locals.pain);
});

app.get('/tummy', Controller.getTummy , (req,res) => {
  console.log("retreived tummy", res.locals.tummy);
  return res.status(200).json(res.locals.tummy);
});

app.get('/rash', Controller.getRash , (req,res) => {
  console.log("retreived rash", res.locals.rash);
  return res.status(200).json(res.locals.rash);
});

app.get('/allergy', Controller.getAllergy , (req,res) => {
  console.log("retreived allergy", res.locals.allergy);
  return res.status(200).json(res.locals.allery);
});

app.get('/cough', Controller.getCough , (req,res) => {
  console.log("retreived cough", res.locals.cough);
  return res.status(200).json(res.locals.cough);
});

app.get('/zzz', Controller.getZZZ , (req,res) => {
  console.log("retreived zzz", res.locals.zzz);
  return res.status(200).json(res.locals.zzz);
});

app.get('/eye', Controller.getEye, (req,res) => {
  console.log("retreived eye", res.locals.eye);
  return res.status(200).json(res.locals.eye);
});

app.get('/ouchie', Controller.getOuchie, (req,res) => {
  console.log("retreived ouchie", res.locals.ouchie);
  return res.status(200).json(res.locals.ouchie);
});

app.get('/', Controller.getOuchie , (req,res) => {
  console.log("retreived ouchie", res.locals.ouchie);
  return res.status(200).json(res.locals.ouchie);
});

app.use('*', (req,res) => {
  console.log("not found");
  return res.status(404).sendFile(path.resolve('./client/404.html'));
});

app.listen(PORT); //listens on port 3000 -> http://localhost:3000/