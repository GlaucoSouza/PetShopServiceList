// const express = require('express');
// router = express.Router();
// const mongoose = require("mongoose")
// var app = express();

// // var registerCtrl = require('./register-controller').createRegister;
// require('./register');
// require('./index');

// // //create a new registration to the service list
// // router.post('/', registerCtrl.createRegister);

//     //creation of the registration schema
// const registrationSchema = mongoose.Schema( {
//     service: String,
//     petname: String,
//     animaltype: String,
//     ownername: String,
//     email: { type: String, unique: true, lowercase: true},
// })

// const Registration = mongoose.model("petshopservice", registrationSchema);
// // module.exports = mongoose.model('petshopservice', registrationSchema);

// //POST method sends the schema filled with the inserted information by the user
// app.post("/", (req, res)=>{
//     let newRegister = new Registration({
//         service: req.body.service,
//         petname: req.body.petname,
//         animaltype: req.body.animaltype,
//         gender: req.body.gender,
//         ownername: req.body.ownername,
//         email: req.body.email
//     })
//     newRegister.save()
//     res.redirect('/')
// })

// module.exports = router;
