const Checklist = require('../models/checklist');

module.exports = {
    index,
}

function index(req, res) {
    Checklist.find({}, function (err, checklists) {
        res.render('checklists/index', { title: "Ultimate Packing List", checklists});
    });
}