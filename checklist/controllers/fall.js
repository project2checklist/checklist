const Checklist = require('../models/checklist');

module.exports = {
    index,
    create,
    update,
    delete: deleteOne
};

function index(req, res) {
    Fall.find({}, function(err, flights) {
        res.render("fall/index", {title: 'Fall Checklist', checklists });
    });
}

function create(req, res) {
    Checklist.findById(req.params.id, function(err, flight) {
        const newItem = new Fall(req.body);
        newItem.checklist = checklist._id;
        newItem.save(function(err) {
            res.redirect('/',);
        });
    });
}