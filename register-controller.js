var Register = require('./register');

exports.createRegister = function(req, res) { 
    var newregister = new Register(req.body);
    newregister.save(function (err, register) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(register); 
});
};

exports.getRegisters = function(req, res) {
  Register.find({}, function (err, registers) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(registers);
  }); 
};

exports.getRegister = function(req, res) {
  Register.findOne({_id: req.params.id}, function (err, registers) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(registers);
  }); 
};

exports.updateRegister = function(req, res) {
  Register.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, registers) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(registers);
  }); 
};

exports.deleteRegister = function(req, res) {
  Register.findByIdAndRemove({_id: req.params.id}, function (err, registers) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(registers);
  }); 
};