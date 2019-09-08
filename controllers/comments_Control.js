const {comments} = require('../data/comments');

exports.list = function list (req,res) {
    res.json(comments)
}

exports.show = function show (req,res) {
    let comment = comments.find(function(item){
        return item._id == req.params.id
    })
    res.json(comment)
}

exports.create = function create (req,res) {
    let newInfo = comments.length - 1;
    let previousId = comments[newInfo]._id;
    req.body._id = previousId + 1;
    comments.push(req.body)
    res.json(comments)
}

