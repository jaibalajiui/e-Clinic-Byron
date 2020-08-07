import express from 'express';
import personRouter from './person/personRouter';
import rolesRouter from './roles/rolesRouter';
import problemsRouter from './problems/problemsRouter';
import orderRouter from './order/orderRouter';
import encounterRouter from './encounter/encounterRouter';
import userRouter from './user/userRouter';

// eslint-disable-next-line new-cap
const router = express.Router();

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

router.use('/user', userRouter);

export default router;
