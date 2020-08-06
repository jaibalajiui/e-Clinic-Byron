import {personModel as Person} from './personModel';

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
  Person.findOne({name: req.params.value})
      .then((post)=>{
        if(!post) {
          const err = new Error('post not found');
          err.statusCode  = 404;
          throw err;
        }
        res.status(200).send({message: 'success', post: post});
      })
      .catch((err)=>{
        console.log('error while parsing the findOne method', err);
      });
};

export {getPerson, addPerson};
