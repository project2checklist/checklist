var express = require('express');
var router = express.Router();
const checklistsCtrl = require('../controllers/checklists');

router.get('/', checklistsCtrl.index);
router.get("/new", checklistsCtrl.new);
router.get("/:id", checklistsCtrl.show);
router.post('/', checklistsCtrl.create)
router.delete("/:id",checklistsCtrl.delete);
router.put("/:id", checklistsCtrl.update);

module.exports = router;
