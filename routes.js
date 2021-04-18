const express = require('express'),
router = express.Router();

var registerCtrl = require('./register-controller');

//create a new registration to the service list
router.post('/', registerCtrl.createRegister);

//retrieve all registration
router.get('/', registerCtrl.getRegisters);

// get a specific registration
router.get('/pettable/:id', registerCtrl.getRegister);

// update a registration
router.put('/pettable/:id', registerCtrl.updateRegister);

// delete a registration
router.delete('/pettable/:id', registerCtrl.deleteRegister);

module.exports = router;