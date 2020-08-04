import express from 'express';
// eslint-disable-next-line new-cap
const router = express.Router();

const personRouter = require('./api/personRouter');
const rolesRouter = require('./api/rolesRouter');
const problemsRouter = require('./api/problemsRouter');
const orderRouter = require('./api/orderRouter');
const encounterRouter = require('./api/encounterRouter');

// Routing to all endpoints
router.get('/', function(req, res, next) {
  res.status(200).json({status: 'sucess'});
  res.end();
});

router.use('/person', personRouter);

router.use('/role', rolesRouter);

router.use('/problems', problemsRouter);

router.use('/order', orderRouter);

router.use('/encounter', encounterRouter);

export default router;
