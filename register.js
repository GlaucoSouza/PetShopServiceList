var mongoose = require('mongoose');

    //creation of the registration schema
const registrationSchema = new mongoose.Schema({
    service: String,
    petname: String,
    animaltype: String,
    ownername: String,
    email: { type: String, unique: true, lowercase: true},
})

module.exports = mongoose.model('Register', registrationSchema);
// const Register = mongoose.model("Register", registrationSchema)