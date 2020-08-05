import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import indexRouter from './api/indexRouter';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;


// eslint-disable-next-line max-len
// app.use(bodyParser.urlencoded({extended: false})); // for x-www-form-urlencoded <form>
app.use(bodyParser.json());
app.use(cors());

// Routing
app.use(indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).end();
});


mongoose
    .connect('mongodb://localhost:27017/e-Clinic', {useNewUrlParser: true})
    .then((result) => {
      app.listen(port, () => {
        console.log('app started at port', port);
      });
    })
    .catch((err) => {
      console.log('unable to connect to database', err);
    });
