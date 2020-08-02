import {personModel as Person} from '../models/person';

const getPerson = (req, res, next)=>{
  new Person({
    name: 'jai',
    gender: 'male',
    dob: new Date(),
    nationality: 'indian'})
      .save().then((result)=>{
        res.status(200);
        res.send();
      }).catch((err)=>{
        console.log('err in inserting data ', err);
      });
};

const postPerson = (req, res, next)=>{

};

export {getPerson, postPerson};
