const {vehicles} = require('../data/vehicles');

exports.list = function list (req,res) {
    res.json(vehicles)
}

exports.show = function show (req,res) {
    let vehicle = vehicles.find(function(item){
        return item._id == req.params.id
    })
    res.json(vehicle)
}

exports.create = function create (req,res) {
    let newInfo = vehicles.length - 1;
    let previousId = vehicles[newInfo]._id;
    req.body._id = previousId + 1;
    vehicles.push(req.body)
    res.json(contacts)
}


