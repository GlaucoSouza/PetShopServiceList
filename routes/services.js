const express = require('express');
const Registration = require('./../models/register')
const router = express.Router();


// //renders the static page index when on home page "/"
// router.get('/'), (req, res) => {
//     res.render('index', { registration: new Registration() })
// }

router.delete('/:id', async (req, res) =>{
    await Registration.findByIdAndDelete(req.params.id)
    res.redirect('/pettable')
})

router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.redirect('/')
})

// //POST method sends the schema filled with the inserted information by the user
// router.post("/", (req, res, next)=>{
//     let newRegister = new Registration({
//         service: req.body.service,
//         petname: req.body.petname,
//         animaltype: req.body.animaltype,
//         ownername: req.body.ownername,
//         email: req.body.email
//     })
//     newRegister.save((err, newRegister)=>{
//         if (err){
//             return next(err)
//         }
//     })
//     res.redirect('/')
// })


module.exports = router;