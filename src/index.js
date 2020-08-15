import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
import indexRouter from './routes/indexRouter.js';
import createError from 'http-errors';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Routing
app.use(indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
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
