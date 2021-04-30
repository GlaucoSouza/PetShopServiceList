var mongoose = require('mongoose');

    //creation of the registration schema 
const registrationSchema = new mongoose.Schema({
    service: {type: String, required: true},
    petname: {type: String, required: true},
    animaltype: {type: String, required: true},
    ownername: {type: String, required: true},
    email: {type: String, unique: true, lowercase: true}
})


//modelling the schema to be passed to the collection called pet_shop_service_list
module.exports = mongoose.model('pet_shop_service_list', registrationSchema);