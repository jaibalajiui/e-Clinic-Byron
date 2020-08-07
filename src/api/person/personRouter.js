import express from 'express';
import {createPersonValidator} from './personValidator';
import * as personController from './personController';
// eslint-disable-next-line new-cap
const router = express.Router();

// GET : /person/type/value ex: /person/name/jaibalaji
router.get('/:type/:value', personController.getPerson);

//  POST : /person/add-person
router.post('/add-person', createPersonValidator, personController.addPerson);

// PATCH : /person/update-salary
router.patch('/update-salary', personController.updatePersonSalary);


export default router;
