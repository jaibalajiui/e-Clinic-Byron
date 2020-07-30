const personList = ['jai', 'raj', 'ram', 'dabds'];

const getPerson = (req, res, next)=>{
  console.log('cakked');
  res.send(personList);
  console.log(req);
  next();
};

const postPerson = (req, res, next)=>{

};

export {getPerson, postPerson};
