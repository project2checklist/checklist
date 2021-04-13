var express = require('express');
var router = express.Router();
const checklistsCtrl = require('../controllers/checklists');

/* GET users listing. */

//Show the main page with all items 
router.get('/', checklistsCtrl.index);
router.get("/new", checklistsCtrl.new);
router.get("/:id", checklistsCtrl.show);
// router.put('/:id', checklistsCtrl.update);


//Post all items 
router.post('/', checklistsCtrl.create)

router.delete("/:id",checklistsCtrl.delete);
//Add an item 

  module.exports = router;
