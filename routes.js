const express = require('express'),
router = express.Router();

var registerCtrl = require('./register-controller');

//create a new registration to the service list
router.post('/', registerCtrl.createRegister);

//retrieve all registration
router.get('/pettable', registerCtrl.getRegisters);

// get a specific registration
router.get('/pettable/:id', registerCtrl.getRegister);

// update a registration
router.put('/pettable/:id', registerCtrl.updateRegister);

// delete a registration
router.delete('/pettable/:id', registerCtrl.deleteRegister);



module.exports.UPLOAD_PATH = "uploads";
var multer = require("multer");
var upload = multer({dest: module.exports.UPLOAD_PATH});
var imageCtrl = require('./image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage)
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;