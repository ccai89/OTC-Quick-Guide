const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://ccai89:codesmith@codesmith.b6x9g.mongodb.net/medicatioDB?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'medicatioDB'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const medSchema = new Schema({
  generic: String,
  brand: String,
  strength_1: String,
  strength_2: String,
  strength_3: String,
  directions_s1: String,
  directions_s2: String,
  directions_s3: String,
  extra_info: String,
  max_dose: String,
  fun_fact: String,
  class: String,
  ailment: String
});

const Medication = mongoose.model('medications', medSchema);

module.exports = { Medication };