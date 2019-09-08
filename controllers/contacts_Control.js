const {contacts} = require('../data/contacts');

exports.list = function list (req,res) {
    res.json(contacts)
}

exports.show = function show (req,res) {
    let contact = contacts.find(function(item){
        return item._id == req.params.id
    })
    res.json(contact)
}

exports.create = function create (req,res) {
    let newInfo = contacts.length - 1;
    let previousId = contacts[newInfo]._id;
    req.body._id = previousId + 1;
    contacts.push(req.body)
    res.json(contacts)
}

