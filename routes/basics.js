const express = require('express');
const router = express.Router();
const basicsCtrl = require('../controllers/basics');

router.post('/checklists/:id/basics', basicsCtrl.create);

module.exports= router