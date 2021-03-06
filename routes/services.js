const express = require('express');
const Registration = require('./../models/register')
const router = express.Router();


//the delete method
router.delete('/:id', async (req, res) =>{
    await Registration.findByIdAndDelete(req.params.id)
    res.redirect('/pettable')
})

module.exports = router;