const personList = ['jai','raj','ram','dabds'];

exports.getPerson = (req,res,next)=>{
    console.log('cakked')
    res.send(personList);
    console.log(req)
    next();
}

exports.postPerson = (req,res,next)=>{
    
}