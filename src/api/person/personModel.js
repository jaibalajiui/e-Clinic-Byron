import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: {type: String, required: true, trim: true},
  gender: {type: String, required: true},
  dob: {type: Date, required: true},
  salary: {type: Number, required: false},
  nationality: {type: String, required: false},
});


// authentication section starts here

export const personModel = mongoose.model('Person', personSchema);
