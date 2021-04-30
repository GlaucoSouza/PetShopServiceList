const express = require('express');
const Registration = require('./models/register')
const router = express.Router();


//renders the static page index when on home page "/"
router.get('/'), (req, res) => {
    res.render('index', { registration: new Registration() })
}

//post method to create a new record
router.post('/',  (req, res) => {
    req.registration = new Registration()
}, AddToList('pettable'))

//function fills the schema with the inserted information by the user
function AddToList(parameter) {
    return async (req, res) => {
        let registration = req.list;
        registration.service = req.body.service,
            registration.petname = req.body.petname,
            registration.animaltype = req.body.animaltype,
            registration.gender = req.body.gender,
            registration.ownername = req.body.ownername,
            registration.email = req.body.email
        try {
            //save the information to the database
            registration = await registration.save()
            res.redirect('/')
        } catch (err) {
            return res.status(400).json({ message: "Bad request" })
        }
    }
}

// method to update a record in the collection
router.put('/:id', async (req, res) => { 
  req.registration = await Registration.findById(req.params.id)
 
}, AddToList('edit')) // calling the function to edit the document


// //POST method sends the schema filled with the inserted information by the user
// router.post("/", (req, res, next)=>{
//     let newRegister = new Registration({
//         service: req.body.service,
//         petname: req.body.petname,
//         animaltype: req.body.animaltype,
//         gender: req.body.gender,
//         ownername: req.body.ownername,
//         email: req.body.email
//     })
//     newRegister.save((err, newRegister)=>{
//         if (err){
//             return next(err)
//         }
//         // res.json(201,newRegister)
//     })
//     res.redirect('/')
// })


//delete method to delete a service from the list
router.delete('/:id', async (req, res) =>{
    await Registration.findByIdAndDelete(req.params.id)
    res.redirect('/pettable')
})

module.exports = router