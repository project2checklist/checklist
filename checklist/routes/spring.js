var express = require('express');
var router = express.Router();
const springCtrl = require('../controllers/spring');

/* GET users listing. */
router.get('/', springCtrl.index);
router.post('/', springCtrl.create);
router.put('/:id', springCtrl.update);
router.delete('/:id', springCtrl.delete);

  module.exports = router;
