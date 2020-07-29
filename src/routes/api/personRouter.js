const express = require("express");
const router = express.Router();
const personController = require('../../controllers/personController.js');


router.get('/:id',personController.getPerson)

module.exports = router;