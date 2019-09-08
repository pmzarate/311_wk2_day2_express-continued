const {products} = require('../data/products');

exports.list = function list (req,res) {
    res.json(products)
}

exports.show = function show (req,res) {
    let product = products.find(function(item){
        return item._id == req.params.id
    })
    res.json(product)
}

exports.create = function create (req,res) {
    let newInfo = products.length - 1;
    let previousId = products[newInfo]._id;
    req.body._id = previousId + 1;
    products.push(req.body)
    res.json(products)
}



