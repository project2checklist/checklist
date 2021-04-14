const express = require('express');
const router = express.Router()
const itemsCtrl = require("../controllers/items");

router.post("/checklists/:id/items", itemsCtrl.create);
router.delete("/items/:id", itemsCtrl.delete);

module.exports = router