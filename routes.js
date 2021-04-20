const express = require('express');
router = express.Router();

var registerCtrl = require('./register-controller').createRegister;

//create a new registration to the service list
router.post('/', registerCtrl.createRegister);

module.exports = router;