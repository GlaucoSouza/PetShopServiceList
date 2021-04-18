var mongoose = require('mongoose');

const registrationSchema = {
    petname: String,
    animaltype: String
    // gender: { 
    //     type: String,
    //     enum: ['MALE', 'FEMALE']
    // },
    // ownername: String,
    // email: { type: String, unique: true, lowercase: true},
}

const Registration = mongoose.model("Register", registrationSchema)

// module.exports = mongoose.model('Register', registrationSchema);