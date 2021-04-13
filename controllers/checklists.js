const checklist = require('../models/checklist');
const Checklist = require('../models/checklist');

module.exports = {
    index,
    new: newItem,
    show,
    create,
    delete: deleteTrip,
  
    //update
}

function index(req, res) {
    Checklist.find({}, function (err, checklists) {
        res.render('checklists/index', { title: "Ultimate Packing List", checklists});
    });
}


function show(req, res){
    // const checklist = req.params.id;
    Checklist.findById(req.params.id, function(err, checklist) {
        res.render('checklists/show', { title: "Trip Details", checklist })
    });    
}

function newItem(req, res){
    console.log('checklist/new');
    res.render("checklists/new", { title: "Add Trip" });
}

function create(req,res){
    const checklist = new Checklist(req.body);
  console.log(req.body);
  checklist.save(function (err) {
    // one way to handle errors
    if (err) return res.json({error: err });
    console.log("/checklists");
    // for now, redirect right back to new.ejs
    res.redirect("/checklists");
  });
}


function deleteTrip(req, res){
        Checklist.findByIdAndRemove(req.params.id, function(err, checklist) {   
            res.redirect('/checklists');
        })
    }
        // Checklist.deleteTrip(req.params.id);
        // res.redirect("/checklists");


// function update(req, res) {
// 	req.body.done = req.body.done === 'on';
// 	Todo.update(req.params.id, req.body);
// 	res.redirect('/todos');
// }