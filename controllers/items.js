const Checklist = require("../models/checklist")
const Item = require("../models/checklist")

module.exports = {
    create,
    delete: deleteItem,
};

function create(req, res) {
    Checklist.findById(req.params.id, function(err, checklist) {
        checklist.items.push(req.body);
        checklist.save(function(err) {
            res.redirect(`/checklists/${checklist._id}`);
        });
    });
}

function deleteItem(req, res) {
    Checklist.findOne({ "items._id" : req.params.id }, function(err, checklist) {
        checklist.items.id(req.params.id).remove();
        checklist.save(function(err) {
            res.redirect(`/checklists/${checklist._id}`)
        })
    });
}
