const express = require("express");
const router = express.Router();

const personRouter = require('./api/personRouter');
const rolesRouter = require('./api/rolesRouter');
const problemsRouter = require('./api/problemsRouter');
const orderRouter = require('./api/orderRouter');
const encounterRouter = require('./api/encounterRouter');

// Routing to all endpoints
router.get('/', function(req, res, next) {
    res.render('index', { title: 'e-Clinic REST' });
});

router.use('/person',personRouter);

router.use('/role',rolesRouter);

router.use('/problems',problemsRouter);

router.use('/order',orderRouter);

router.use('/encounter',encounterRouter);

module.exports = router;