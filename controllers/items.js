const Checklist = require("../models/checklist")
//const Item = require("../models/checklist")

module.exports = {
    create,
};

// function create (req, res){
//     Item.find({}, function (err, items) {
//         res.redirect('/checklists/show', {
//           title: "Items",
//          items,
    // Checklist.findById(req.params.id, function(err, checklist){
    //     checklist.items.push(req.body);
    //     checklist.save(function(err){
    //         res.redirect("/checklists")

    // const item = new Item(req.body);
    // checklist.save(function (err){ 
    //     if (err) return res.json({error: err });
    //     console.log(checklist);
    //     res.redirect("/checklists");
    // Checklist.findById(req.params.id, function(err, checklist){
        // checklist.items.push(req.body);
        // console.log(item);
        // checklist.save(function(err){
            // res.redirect("/checklists")
    // req.body.checklist = req.params.id
    // Item.create(req.body, function(err, items) {
    //   res.redirect("/checklists")
    // })
    
//         })

//     }

// )}

function create(req, res) {
    Checklist.findById(req.params.id, function(err, checklist) {
        checklist.items.push(req.body);
        checklist.save(function(err) {
            res.redirect(`/checklists/${checklist._id}`);
        });
    });
}