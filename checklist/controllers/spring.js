const Checklist = require('../models/checklist');

module.exports = {
    index,
    create,
    update,
    delete: deleteOne
};

function index(req, res) {
    Spring.find({}, function (err, flights) {
        res.render("spring/index", { title: 'Spring Checklist', checklists });
    });
}

function create(req, res) {
    Checklist.findById(req.params.id, function(err, checklist) {
        const newItem = new Spring(req.body);
        newItem.checklist = checklist._id;
        newItem.save(function(err) {
            res.redirect(`/`)
        })
    })
}