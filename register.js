var mongoose = require('mongoose');

// var registerSchema = new mongoose.Schema({ 
//     email: { type: String, unique: true, lowercase: true},
//     password: String,
//     username: String,
//     gender: { 
//         type: String,
//         enum: ['MALE', 'FEMALE']
//     },
//     phone: Number 
// },
// {timestamps: true}
// );


const registrationSchema = {
    petname: String,
    animaltype: String,
    gender: { 
        type: String,
        enum: ['MALE', 'FEMALE']
    },
    ownername: String,
    email: { type: String, unique: true, lowercase: true},
}

const Registration = mongoose.model("Registration", registrationSchema)

// module.exports = mongoose.model('Register', registerSchema);