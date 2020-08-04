import {personModel as Person} from '../models/person';

const addPerson = (req, res, next)=>{
  new Person({
    name: req.body.name,
    gender: req.body.gender,
    dob: req.body.dob,
    nationality: req.body.nationality,
  }).save().then((result)=>{
    res.status(201);
    res.json({message: 'Person creted', status: 'success'});
    res.end();
  }).catch((err)=>{
    console.log('err in inserting data ', err);
  });
};

const getPerson = (req, res, next)=>{

};

export {getPerson, addPerson};
