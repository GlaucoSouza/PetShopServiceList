var Register = require('./register');

exports.createRegister("/", (req, res)=>{
    let newRegister = new Register({
        service: req.body.service,
        petname: req.body.petname,
        animaltype: req.body.animaltype,
        ownername: req.body.ownername,
        email: req.body.email
    })
    newRegister.save()
    res.redirect('/')
     .catch(err => {
      res.status(400).send("unable to save to database");
    });
})