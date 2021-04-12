var express = require('express');
var router = express.Router();
const fallCtrl = require('../controllers/fall');

/* GET users listing. */
router.get('/', fallCtrl.index);
router.post('/', fallCtrl.create);
router.put('/:id', fallCtrl.update);
router.delete('/:id', fallCtrl.delete);

  module.exports = router;
