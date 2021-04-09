var express = require('express');
var router = express.Router();
const checklistsCtrl = require('../controllers/checklists');

/* GET users listing. */
router.get('/', checklistsCtrl.index);

  module.exports = router;
