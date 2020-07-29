const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/indexRouter.js')
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

// cors
app.use(cors());

//Routing
app.use('/api/v1', router);

app.get('/test',(req,res,next)=>{
    console.log('postTest',req.body);
    res.send('<h1>post received </h1>')
    next();
})

app.listen(port,()=>{
    console.log('app started at port',port);
})