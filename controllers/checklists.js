const Checklist = require('../models/checklist');

module.exports = {
    index,
    new: newItem,
    create
}

function index(req, res) {
    Checklist.find({}, function (err, checklists) {
        res.render('checklists/index', { title: "Ultimate Packing List", checklists});
    });
}

function newItem(req, res){
    res.render("checklists/new", { title: "Add Packing Item" });
}

function create(req,res){
    const checklist = new Checklist(req.body);
  console.log(req.body);
  checklist.save(function (err) {
    // one way to handle errors
    if (err) return res.json({error: err });
    console.log(checklist);
    // for now, redirect right back to new.ejs
    res.redirect("/checklists");
  });
}

