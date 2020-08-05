import express from 'express';
// eslint-disable-next-line new-cap
const router = express.Router();

const personRouter = require('./person/personRouter');
const rolesRouter = require('./roles/rolesRouter');
const problemsRouter = require('./problems/problemsRouter');
const orderRouter = require('./order/orderRouter');
const encounterRouter = require('./encounter/encounterRouter');

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
