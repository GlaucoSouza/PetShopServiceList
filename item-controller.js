exports.getWorld = function(req, res){
    res.json({result: 'Hello World from Controller'})
}

exports.getWorldParams = function(req, res){
    res.json({message:'Hello BScBest!', data:[
        req.params.foo,
        req.params.bar
    ]});
};

//post request
exports.postWorld = function(req, res){
    res.json({result: 'Post was sent', data: req.body});
};