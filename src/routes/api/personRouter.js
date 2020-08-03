import express from 'express';
// eslint-disable-next-line new-cap
const router = express.Router();
const personController = require('../../controllers/personController.js');


router.get('/:id', personController.getPerson);

module.exports = router;
