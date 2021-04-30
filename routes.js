const express = require('express');
const Registration = require('./models/register')
const router = express.Router();


//renders the static page index when on home page "/"
router.get('/'), (req, res) => {
    res.render('index', { registration: new Registration() })
}

//post method to create a new record
router.post('/', async (req, res, next) => {
    req.registration = new Registration()
    next()
}, AddToList('/'))

//function fills the schema with the inserted information by the user
function AddToList(path) {
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


//delete method to delete a service from the list
router.delete('/:id', async (req, res) =>{
    await Registration.findByIdAndDelete(req.params.id)
    res.redirect('/pettable')
})

module.exports = router