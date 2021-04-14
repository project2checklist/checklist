const Checklist = require("../models/checklist");

module.exports = {
  create,
};

function create(req, res) {
  Checklist.findById(req.params.id, function (err, checklist) {
    checklist.basics.push(req.body);
    checklist.save(function (err) {
      res.redirect(`/checklists/${checklist._id}`);
    });
  });
}
