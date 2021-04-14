const checklist = require('../models/checklist');
const Checklist = require('../models/checklist');

module.exports = {
    index,
    new: newItem,
    show,
    create,
    delete: deleteTrip,
    update
  
   
}

function index(req, res) {
    Checklist.find({}, function (err, checklists) {
        res.render('checklists/index', { title: "Ultimate Travel Packing List", checklists});
    });
}


function show(req, res){
   
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
  
    if (err) return res.json({error: err });
    console.log("/checklists");
  
    res.redirect("/checklists");
  });
}


function deleteTrip(req, res){
        Checklist.findByIdAndRemove(req.params.id, function(err, checklist) {   
            res.redirect('/checklists');
        })
    }
       

function update(req, res) {
    
    console.log("re", req.body);
    
    Checklist.findByIdAndUpdate(req.params.id, req.body, function(err, checklist) {
        console.log("checklist", checklist); 
        res.redirect(`/checklists/${checklist.id}`)

    })
}