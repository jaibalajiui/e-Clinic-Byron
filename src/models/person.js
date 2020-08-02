import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: {type: String, required: true},
  gender: {type: String, required: true},
  dob: {type: Date, required: true},
  nationality: {type: String, required: false},
});

export const personModel = mongoose.model('Person', personSchema);
