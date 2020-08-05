import express from 'express';
import {createPersonValidator} from './personValidator';
import * as personController from './personController';
// eslint-disable-next-line new-cap
const router = express.Router();

// GET : /person/:id
router.get('/:id', personController.getPerson);

// // POST : /person/add-person
router.post('/add-person', createPersonValidator, personController.addPerson);

module.exports = router;
