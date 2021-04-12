const express = require('express');
const router = express.Router()
const itemsCtrl = require("../controllers/items");

router.post("/checklists/:id/new", itemsCtrl.create)

module.exports = router